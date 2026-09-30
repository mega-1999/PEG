import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import crypto from "crypto";

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

    // Safe extension determination
    const originalExt = path.extname(file.name).toLowerCase().replace(/[^a-z0-9]/g, "");
    const safeExt = originalExt || (isVideo ? "mp4" : "jpeg");
    
    // Cryptographically secure UUID filename (prevents collision & directory traversal)
    const uniqueId = crypto.randomUUID().replace(/-/g, "");
    const filename = `${Date.now()}_${uniqueId}.${safeExt}`;

    // Target upload subfolder
    const subFolder = isVideo ? "video" : "images";
    const uploadDir = path.join(process.cwd(), "public", "assets", subFolder);
    await mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, filename);
    await writeFile(filePath, buffer);

    // Cloudflare R2 Bucket Domain for images & videos
    const cdnUrl =
      process.env.NEXT_PUBLIC_CLOUDFLARE_R2_URL ||
      (isVideo
        ? "https://pub-2f3b9c4456934c568f5c9429715562aa.r2.dev"
        : "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev");

    const relativeUrl = `/assets/${subFolder}/${filename}`;
    const cloudflareUrl = `${cdnUrl.replace(/\/$/, "")}/${filename}`;

    return NextResponse.json(
      {
        success: true,
        url: relativeUrl,
        cloudflareUrl: cloudflareUrl,
        filename: filename,
        size: file.size,
        mimeType: mimeType,
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
