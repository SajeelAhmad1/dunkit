import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove output: 'export' as we're using server components
  images: {
    domains: [], // Add any image domains you're using
    unoptimized: false // Set to false for optimization
  },
  // Add any other config options you need
};

export default nextConfig;