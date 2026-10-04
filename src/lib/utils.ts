import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetUrl(path?: string): string {
  if (!path) return "";

  let cleanPath = path.trim();

  // If path is a Cloudflare R2 URL, strip domain and map to local repository asset
  if (cleanPath.includes(".r2.dev/")) {
    const afterDomain = cleanPath.split(".r2.dev/")[1];
    if (afterDomain.startsWith("blog/")) {
      cleanPath = `/assets/${afterDomain}`;
    } else {
      cleanPath = `/${afterDomain}`;
    }
  }

  // If external non-R2 URL, return as is
  if (cleanPath.startsWith("http://") || cleanPath.startsWith("https://")) {
    return cleanPath;
  }

  // Automatically sanitize spaces to underscores for all asset paths
  cleanPath = cleanPath.replace(/ /g, "_");
  if (!cleanPath.startsWith("/")) {
    cleanPath = `/${cleanPath}`;
  }

  return cleanPath;
}
