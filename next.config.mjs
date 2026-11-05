/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export: `npm run build` writes everything to /out for cPanel upload.
  output: "export",
  // Each route becomes folder/index.html, which Apache serves without rewrite rules.
  trailingSlash: true,
  // The export has no image server. Photos are pre-optimised WebP files in /public/images.
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
