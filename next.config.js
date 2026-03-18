/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker deployment
  output: 'standalone',

  async redirects() {
    return [
      {
        source: '/integrations',
        destination: '/best-ai-lead-gen-tools',
        permanent: true, // 308 for SEO
      },
    ]
  },

  images: {
    domains: [
      'images.unsplash.com', 
      'via.placeholder.com',
      'storage.googleapis.com',
    ],
    // Optimize images for production
    unoptimized: process.env.NODE_ENV === 'development' ? false : false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig