/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker deployment
  output: 'standalone',
  
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    // Optimize images for production
    unoptimized: process.env.NODE_ENV === 'development' ? false : false,
  },
}

module.exports = nextConfig