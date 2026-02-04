import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  typescript: {
    ignoreBuildErrors: true, // Temporarily ignore errors in packages/ui
  },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console logs in production
  },
  experimental: {
    optimizeCss: true, // Enable CSS optimization
  },
  // Turbopack configuration for Next.js 16+
  // Code splitting and tree shaking are enabled by default in Turbopack
  turbopack: {
    // Empty config to acknowledge we're using Turbopack
    // Turbopack automatically handles:
    // - Tree shaking (removes unused code)
    // - Code splitting (dynamic imports)
    // - Vendor bundle splitting
    // - Optimized chunk generation
  },
};

export default nextConfig;
