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
      <BlogCategories />
      <BlogGrid />
      <BlogNewsletter />
    </div>
  )
}