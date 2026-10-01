import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Precast Engineering Group (PEG)",
    short_name: "PEG",
    description: "Leading Precast Concrete Engineers, Certified Drawings, Testing & Specifications Vault",
    start_url: "/",
    display: "standalone",
    background_color: "#023380",
    theme_color: "#023380",
    icons: [
      {
        src: "/favicon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
