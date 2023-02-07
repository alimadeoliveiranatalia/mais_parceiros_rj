/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/",
  assetPrefix: "/",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
