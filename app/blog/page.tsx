import { Suspense } from 'react'
import BlogHero from '@/components/blog/BlogHero'
import BlogGrid from '@/components/blog/BlogGrid'
import BlogCategories from '@/components/blog/BlogCategories'
import BlogNewsletter from '@/components/blog/BlogNewsletter'

export const metadata = {
  title: 'Blog - EmailVerse | Email Marketing Insights & Tips',
  description: 'Stay updated with the latest email marketing trends, tips, and strategies. Expert insights to help you grow your business.',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <BlogHero />
      <Suspense fallback={<div className="py-8 bg-white border-b border-gray-100 max-w-7xl mx-auto px-4 h-24" />}>
        <BlogCategories />
      </Suspense>
      <Suspense fallback={<div className="section-padding bg-white max-w-7xl mx-auto px-4 py-12 text-center text-gray-500">Loading…</div>}>
        <BlogGrid />
      </Suspense>
      <BlogNewsletter />
    </div>
  )
}