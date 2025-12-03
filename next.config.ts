import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Removed 'output: export' to enable API routes for email functionality
  // If you need static export, you'll need to use a different email solution (e.g., EmailJS, Formspree)
  trailingSlash: true,
};

export default nextConfig;
