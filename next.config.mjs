/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...other configuration
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.igdb.com",
        port: "",
        pathname: "/igdb/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
