/** @type {import('next').NextConfig} */

const nextConfig = {
  async headers(){
    return [
      {
        source: "/mais_parceiros_rj",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY"
          }
        ]
      }
    ]
  },
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  basePath: "/mais_parceiros_rj",
  assetPrefix: "/mais_parceiros_rj/"
}

module.exports = nextConfig;