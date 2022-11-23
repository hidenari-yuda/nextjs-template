/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    LIFF_ID: process.env.LIFF_ID,
  },
}

module.exports = nextConfig
