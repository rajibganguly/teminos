/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Static Export
  // output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
};

export default nextConfig;
