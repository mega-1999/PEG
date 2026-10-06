import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetUrl(path?: string): string {
  if (!path) return "";

  let cleanPath = path.trim();

  // Heavy video files not tracked in Git (>100MB) are served from Cloudflare R2 CDN
  if (cleanPath.includes("Precast_Engineering_Group_Desktop_Live_Mockup_1.mp4")) {
    return "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Mockup/Precast_Engineering_Group_Desktop_Live_Mockup_1.mp4";
  }
  if (cleanPath.includes("Precast_Engineering_Group_I-pad_Live_Mockup_1.mp4")) {
    return "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Mockup/Precast_Engineering_Group_I-pad_Live_Mockup_1.mp4";
  }
  if (cleanPath.includes("Precast_Engineering_Group_Mobile_Live_Mockup_1.mp4")) {
    return "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Mockup/Precast_Engineering_Group_Mobile_Live_Mockup_1.mp4";
  }
  if (cleanPath.includes("Shop_Drawings_CAD.mp4")) {
    return "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/video/Shop_Drawings_CAD.mp4";
  }

  // Preserve full R2 CDN URLs for all video files
  if (cleanPath.startsWith("http://") || cleanPath.startsWith("https://")) {
    if (cleanPath.includes(".r2.dev/") && cleanPath.endsWith(".mp4")) {
      return cleanPath;
    }
    if (cleanPath.includes("u_drain_mold_animation")) {
      return "/assets/images/PAIPING.2_-_Copy.png";
    }
    if (cleanPath.includes(".r2.dev/")) {
      const afterDomain = cleanPath.split(".r2.dev/")[1];
      if (afterDomain.startsWith("blog/")) {
        return `/assets/${afterDomain}`;
      }
      return `/${afterDomain}`;
    }
    return cleanPath;
  }

  if (cleanPath.includes("u_drain_mold_animation")) {
    return "/assets/images/PAIPING.2_-_Copy.png";
  }

  // Automatically sanitize spaces to underscores for all local asset paths
  cleanPath = cleanPath.replace(/ /g, "_");
  if (!cleanPath.startsWith("/")) {
    cleanPath = `/${cleanPath}`;
  }

  return cleanPath;
}
