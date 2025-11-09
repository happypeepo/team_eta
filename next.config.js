/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode
  reactStrictMode: true,
  
  // Image optimization
  images: {
    // Add your image domains here
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    // For Vercel deployments, you can use the remotePatterns for better security
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Enable AVIF image format
    formats: ['image/avif', 'image/webp'],
    // Configure image sizes for different viewports
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Configure image sizes for different device pixel ratios
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Enable static exports for static site generation
  output: 'standalone',
  
  // Configure webpack
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Configure client-side only modules
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  
  // Configure headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  
  // Configure environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
  
  // Enable production browser source maps
  productionBrowserSourceMaps: false,
};

// Only enable bundle analyzer in development
if (process.env.ANALYZE === 'true') {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
  });
  module.exports = withBundleAnalyzer(nextConfig);
} else {
  module.exports = nextConfig;
}

