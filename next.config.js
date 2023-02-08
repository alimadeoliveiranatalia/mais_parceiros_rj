/** @type {import('next').NextConfig} */

const isProd = (process.env.NODE_ENV || "production") === "production";

const assertPrefix = isProd ? "/mais_parceiros_rj" : "";

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  /*basePath: "/mais_parceiros_rj",
  assetPrefix: "/mais_parceiros_rj"*/
  exportPathMap: () => ({
    "/": { page: "/"}
  }),
  assertPrefix: assertPrefix,
}

module.exports = nextConfig;