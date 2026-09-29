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
  // Automatically sanitize spaces to underscores for all asset paths
  const sanitizedPath = path.replace(/ /g, "_");
  const cleanPath = sanitizedPath.startsWith("/") ? sanitizedPath : `/${sanitizedPath}`;

  // Local assets under /assets/ or /PrecastIndustry_Links/ are served directly
  if (
    cleanPath.startsWith("/assets/") || 
    cleanPath.startsWith("/PrecastIndustry_Links/") ||
    cleanPath.startsWith("/uploads/")
  ) {
    return cleanPath;
  }

  // Cloudflare R2 Public CDN domain for images
  const cdnUrl = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_URL 
    || process.env.NEXT_PUBLIC_PUBLIC_BUCKET_URL 
    || "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev";

  return `${cdnUrl.replace(/\/$/, "")}${cleanPath}`;
}
