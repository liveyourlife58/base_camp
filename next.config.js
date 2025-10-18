/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '',
        pathname: '/s/files/**',
      },
      {
        protocol: 'https',
        hostname: '*.myshopify.com',
        port: '',
        pathname: '/cdn/shop/**',
      },
    ],
  },
}

module.exports = nextConfig
