import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import crypto from "crypto";
import { uploadToCloudflareR2 } from "@/lib/r2";

// Allowed MIME types and max size configurations
const MAX_IMAGE_SIZE = 15 * 1024 * 1024; // 15MB
const MAX_VIDEO_SIZE = 100 * 1024 * 1024; // 100MB

const ALLOWED_IMAGE_MIMES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
]);

const ALLOWED_VIDEO_MIMES = new Set([
  "video/mp4",
  "video/webm",
  "video/quicktime",
  "video/x-matroska",
]);

// Helper: inspect magic bytes for file integrity
function validateMagicBytes(buffer: Buffer, mime: string): boolean {
  if (buffer.length < 4) return false;

  // SVG is XML/plain text
  if (mime === "image/svg+xml") {
    const head = buffer.subarray(0, 100).toString("utf-8").toLowerCase();
    return head.includes("<svg") || head.includes("<?xml");
  }

  // PNG: 89 50 4E 47
  if (mime === "image/png") {
    return buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4e && buffer[3] === 0x47;
  }

  // JPEG: FF D8 FF
  if (mime === "image/jpeg") {
    return buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff;
  }

  // GIF: 47 49 46 38
  if (mime === "image/gif") {
    return buffer[0] === 0x47 && buffer[1] === 0x49 && buffer[2] === 0x46 && buffer[3] === 0x38;
  }

  // WebP: RIFF ... WEBP
  if (mime === "image/webp") {
    if (buffer.length < 12) return false;
    const riff = buffer.subarray(0, 4).toString("ascii");
    const webp = buffer.subarray(8, 12).toString("ascii");
    return riff === "RIFF" && webp === "WEBP";
  }

  // MP4 / MOV: check for ftyp or moov box
  if (mime === "video/mp4" || mime === "video/quicktime") {
    if (buffer.length < 12) return false;
    const boxType = buffer.subarray(4, 8).toString("ascii");
    return boxType === "ftyp" || boxType === "moov" || boxType === "wide" || boxType === "mdat";
  }

  // WebM / MKV: 1A 45 DF A3 (EBML header)
  if (mime === "video/webm" || mime === "video/x-matroska") {
    return buffer[0] === 0x1a && buffer[1] === 0x45 && buffer[2] === 0xdf && buffer[3] === 0xa3;
  }

  return true;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, error: "No file was provided in request payload." },
        { status: 400 }
      );
    }

    const mimeType = file.type || "application/octet-stream";
    const isImage = ALLOWED_IMAGE_MIMES.has(mimeType);
    const isVideo = ALLOWED_VIDEO_MIMES.has(mimeType);

    if (!isImage && !isVideo) {
      return NextResponse.json(
        {
          success: false,
          error: `Unsupported file type: "${mimeType}". Allowed formats: JPEG, PNG, WebP, GIF, SVG, MP4, WebM, QuickTime.`,
        },
        { status: 415 }
      );
    }

    // Size verification
    const maxSize = isVideo ? MAX_VIDEO_SIZE : MAX_IMAGE_SIZE;
    if (file.size > maxSize) {
      const maxMb = isVideo ? "100MB" : "15MB";
      return NextResponse.json(
        {
          success: false,
          error: `File size exceeds allowable limit (${(file.size / 1024 / 1024).toFixed(1)}MB). Max size is ${maxMb}.`,
        },
        { status: 413 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Deep magic-bytes inspection
    if (!validateMagicBytes(buffer, mimeType)) {
      return NextResponse.json(
        {
          success: false,
          error: "File integrity check failed: Content does not match reported MIME type.",
        },
        { status: 400 }
      );
    }

    // Parse blog title / slug for hierarchical repository structure
    const rawBlogTitle =
      (formData.get("blogTitle") as string) ||
      (formData.get("blogSlug") as string) ||
      "general-article";

    const sanitizedBlogTitle = rawBlogTitle
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || "general-article";

    // Current date format: YYYY-MM-DD
    const currentDate = new Date().toISOString().split("T")[0];

    // Media subfolder: "videos" or "images"
    const mediaFolder = isVideo ? "videos" : "images";

    // Safe extension determination
    const originalExt = path.extname(file.name).toLowerCase().replace(/[^a-z0-9]/g, "");
    const safeExt = originalExt || (isVideo ? "mp4" : "jpeg");

    // Clean, unique filename
    const cleanBaseName = path
      .basename(file.name, path.extname(file.name))
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/(^_|_$)/g, "")
      .slice(0, 30);
    const uniqueId = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
    const filename = `${cleanBaseName || (isVideo ? "video" : "image")}_${Date.now()}_${uniqueId}.${safeExt}`;

    // Target bucket key structure: blog/title_of_blog/current_date/media/filename
    const bucketKey = `blog/${sanitizedBlogTitle}/${currentDate}/${mediaFolder}/${filename}`;

    // 1. Push directly to Cloudflare R2 Cloud Storage Bucket
    const r2Result = await uploadToCloudflareR2({
      buffer,
      key: bucketKey,
      contentType: mimeType,
      isVideo,
    });

    // 2. Save local backup copy under public/assets/
    try {
      const uploadDir = path.join(
        process.cwd(),
        "public",
        "assets",
        "blog",
        sanitizedBlogTitle,
        currentDate,
        mediaFolder
      );
      await mkdir(uploadDir, { recursive: true });
      const filePath = path.join(uploadDir, filename);
      await writeFile(filePath, buffer);
    } catch (fsErr) {
      console.warn("Local filesystem write skipped/warning:", fsErr);
    }

    const relativeUrl = `/assets/${bucketKey}`;
    const cloudflareUrl = r2Result.url;

    return NextResponse.json(
      {
        success: true,
        url: relativeUrl,
        cloudflareUrl: cloudflareUrl,
        bucketKey: bucketKey,
        uploadedToCloud: r2Result.uploadedToCloud,
        filename: filename,
        size: file.size,
        mimeType: mimeType,
        cloudStatus: r2Result.uploadedToCloud
          ? "Directly Pushed to Cloudflare R2 Bucket"
          : "Mapped with Cloudflare CDN URL (Add R2 API keys to .env to push live)",
      },
      {
        status: 201,
        headers: {
          "Cache-Control": "no-store, max-age=0",
          "X-Content-Type-Options": "nosniff",
        },
      }
    );
  } catch (error: any) {
    console.error("Secure Upload Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to securely process asset upload." },
      { status: 500 }
    );
  }
}
