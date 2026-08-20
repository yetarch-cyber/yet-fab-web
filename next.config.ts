import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/yet.contact", destination: "/contact", permanent: true },
      { source: "/12/", destination: "/", permanent: true },
      { source: "/10/", destination: "/", permanent: true },
      {
        source: "/alherdfloorlampscuturallightingbyyetfab/",
        destination: "/shop/alherd-floor",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Cache all static images and assets for 1 year — immutable means CDN never re-fetches
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Cache other static assets (fonts, icons, og image) for 1 year
        source: "/(.*\\.(?:ico|png|jpg|jpeg|svg|woff2|woff))",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;

