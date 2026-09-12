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
  
  const cdnUrl = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_URL || process.env.NEXT_PUBLIC_PUBLIC_BUCKET_URL;
  if (cdnUrl && cdnUrl.trim() !== "") {
    return `${cdnUrl.replace(/\/$/, "")}${cleanPath}`;
  }
  
  return cleanPath;
}
