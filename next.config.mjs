/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/sites/voice",
  assetPrefix: "/sites/voice",
  outputFileTracingRoot: process.cwd(),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
