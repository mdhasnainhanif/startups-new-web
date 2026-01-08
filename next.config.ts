import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Explicitly use webpack instead of Turbopack (Next.js 16 default)
  turbopack: {},
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      "@fancyapps/ui",
      "swiper",
      "react-phone-number-input",
      "recharts",
      "gsap",
      "react-icons",
      "lucide-react",
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Webpack optimizations for code splitting
  webpack: (config, { isServer, dev }) => {
    if (!isServer && !dev) {
      // Code splitting for heavy libraries
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // GSAP bundle
            gsap: {
              name: 'gsap',
              test: /[\\/]node_modules[\\/](gsap)[\\/]/,
              priority: 40,
              reuseExistingChunk: true,
            },
            // Swiper bundle
            swiper: {
              name: 'swiper',
              test: /[\\/]node_modules[\\/](swiper)[\\/]/,
              priority: 40,
              reuseExistingChunk: true,
            },
            // Fancyapps bundle
            fancyapps: {
              name: 'fancyapps',
              test: /[\\/]node_modules[\\/](@fancyapps)[\\/]/,
              priority: 40,
              reuseExistingChunk: true,
            },
            // React libraries
            react: {
              name: 'react',
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              priority: 50,
              reuseExistingChunk: true,
            },
            // Recharts bundle
            recharts: {
              name: 'recharts',
              test: /[\\/]node_modules[\\/](recharts)[\\/]/,
              priority: 30,
              reuseExistingChunk: true,
            },
            // Common vendor bundle
            vendor: {
              name: 'vendor',
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
              reuseExistingChunk: true,
            },
          },
        },
        usedExports: true,
        sideEffects: false,
      };
    }
    return config;
  },
  // Modern JavaScript target
  transpilePackages: [],
};

export default nextConfig;
