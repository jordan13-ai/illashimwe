import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  // Note: headers() is not supported with output: "export".
  // All security headers are applied via public/.htaccess (Apache/LiteSpeed)
  // and the nginx.conf provided in the deployment guide.
};

export default nextConfig;
