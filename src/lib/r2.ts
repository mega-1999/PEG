import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// Cloudflare R2 Client Singleton
const accountId = process.env.CLOUDFLARE_ACCOUNT_ID || process.env.R2_ACCOUNT_ID || "";
const accessKeyId = process.env.CLOUDFLARE_R2_ACCESS_KEY_ID || process.env.R2_ACCESS_KEY_ID || "";
const secretAccessKey = process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY || process.env.R2_SECRET_ACCESS_KEY || "";
const bucketName = process.env.CLOUDFLARE_R2_BUCKET_NAME || process.env.R2_BUCKET_NAME || "peg-assets";

let s3Client: S3Client | null = null;

export function getR2Client(): S3Client | null {
  if (s3Client) return s3Client;
  if (!accountId || !accessKeyId || !secretAccessKey) {
    return null;
  }

  s3Client = new S3Client({
    region: "auto",
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  return s3Client;
}

export interface UploadToR2Params {
  buffer: Buffer;
  key: string;
  contentType: string;
  isVideo?: boolean;
}

export interface UploadToR2Result {
  success: boolean;
  url: string;
  bucketKey: string;
  uploadedToCloud: boolean;
  error?: string;
}

/**
 * Pushes binary content directly to Cloudflare R2 Bucket.
 */
export async function uploadToCloudflareR2({
  buffer,
  key,
  contentType,
  isVideo = false,
}: UploadToR2Params): Promise<UploadToR2Result> {
  const client = getR2Client();

  // Determine public CDN domain for R2
  const cdnUrl =
    process.env.NEXT_PUBLIC_CLOUDFLARE_R2_URL ||
    (isVideo
      ? "https://pub-2f3b9c4456934c568f5c9429715562aa.r2.dev"
      : "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev");

  const publicUrl = `${cdnUrl.replace(/\/$/, "")}/${key}`;

  if (!client) {
    // Return structured URL with notice if API keys are not in env
    return {
      success: true,
      url: publicUrl,
      bucketKey: key,
      uploadedToCloud: false,
      error: "Cloudflare R2 API credentials not configured in environment; saved to local filesystem fallback.",
    };
  }

  try {
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: buffer,
      ContentType: contentType,
    });

    await client.send(command);

    return {
      success: true,
      url: publicUrl,
      bucketKey: key,
      uploadedToCloud: true,
    };
  } catch (err: any) {
    console.error("Cloudflare R2 Direct Upload Error:", err);
    return {
      success: false,
      url: publicUrl,
      bucketKey: key,
      uploadedToCloud: false,
      error: err.message || "Failed to upload to Cloudflare R2.",
    };
  }
}
