/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/gh-pages-test",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
