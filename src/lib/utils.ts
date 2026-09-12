import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetUrl(path?: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const cdnUrl = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_URL || process.env.NEXT_PUBLIC_PUBLIC_BUCKET_URL || "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return cdnUrl ? `${cdnUrl}${cleanPath}` : cleanPath;
}
