import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img1.wsimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "toppng.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ww1.prweb.com",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ["img1.wsimg.com"],
  },
};

export default nextConfig;
