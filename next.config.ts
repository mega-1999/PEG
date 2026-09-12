import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
