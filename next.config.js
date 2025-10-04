/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vapbrasil.s3.sa-east-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
