import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static HTML export: `npm run build` writes the site to /out for cPanel (public_html)
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
