import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline' fonts.googleapis.com;
              style-src 'self' 'unsafe-inline' fonts.googleapis.com;
              img-src 'self' data: https:;
              font-src 'self' fonts.gstatic.com;
              connect-src 'self';
            `
              .replace(/\s{2,}/g, " ")
              .trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
