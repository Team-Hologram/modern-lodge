/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image Configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // ESLint Configuration
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false, // Set to true if you want to ignore ESLint errors during build
    dirs: ['src'], // Only run ESLint on the 'src' directory during production builds
  },

  // TypeScript Configuration
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: false, // Set to true to ignore TypeScript errors during build
  },

  // Experimental Features
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@react-three/fiber', '@react-three/drei'],
  },

  // Performance & Optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // React Configuration
  reactStrictMode: true,

  // Power by Next.js header
  poweredByHeader: false,

  // Compression
  compress: true,

  // Production Source Maps (optional)
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig