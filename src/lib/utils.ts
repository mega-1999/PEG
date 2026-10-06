import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetUrl(path?: string): string {
  if (!path) return "";

  let cleanPath = path.trim();

  // Heavy video files not tracked in Git (>100MB) are served from R2 CDN
  if (cleanPath.includes("Shop_Drawings_CAD.mp4")) {
    return "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Shop_Drawings_CAD.mp4";
  }

  // If path is a Cloudflare R2 URL, strip domain and map to latest local repository asset
  if (cleanPath.includes(".r2.dev/")) {
    if (cleanPath.includes("u_drain_mold_animation")) {
      return "/assets/images/PAIPING.2_-_Copy.png";
    }
    const afterDomain = cleanPath.split(".r2.dev/")[1];
    if (afterDomain.startsWith("blog/")) {
      cleanPath = `/assets/${afterDomain}`;
    } else {
      cleanPath = `/${afterDomain}`;
    }
  }

  if (cleanPath.includes("u_drain_mold_animation")) {
    return "/assets/images/PAIPING.2_-_Copy.png";
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
