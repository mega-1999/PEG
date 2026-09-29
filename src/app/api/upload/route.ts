import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitize filename
    const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const filename = `${Date.now()}_${safeName}`;

    // Determine target upload directory (images or videos)
    const isVideo = file.type.startsWith("video/") || safeName.match(/\.(mp4|webm|mov|mkv)$/i);
    const subFolder = isVideo ? "video" : "images";

    const uploadDir = path.join(process.cwd(), "public", "assets", subFolder);
    await mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, filename);
    await writeFile(filePath, buffer);

    // Default Cloudflare R2 Bucket Domain for images & videos
    const cdnUrl = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_URL 
      || (isVideo ? "https://pub-2f3b9c4456934c568f5c9429715562aa.r2.dev" : "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev");

    // Return both local relative path and Cloudflare R2 CDN URL
    const relativeUrl = `/assets/${subFolder}/${filename}`;
    const cloudflareUrl = `${cdnUrl.replace(/\/$/, "")}/${filename}`;

    return NextResponse.json({
      success: true,
      url: relativeUrl,
      cloudflareUrl: cloudflareUrl,
      filename: filename,
    });
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: error.message || "Failed to upload file" }, { status: 500 });
  }
}
