/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  devServer: {
    cache: false,
    hot: false
  },
  images: false,
}

module.exports = nextConfig
