import FeaturesHero from '@/components/features/FeaturesHero'
import FeaturesList from '@/components/features/FeaturesList'
import IntegrationsSection from '@/components/features/IntegrationsSection'

export const metadata = {
  title: 'Features - EmailVerse | Advanced Email Marketing Tools',
  description: 'Discover all the powerful features that make EmailVerse the leading email marketing platform. Advanced analytics, templates, integrations, and more.',
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <FeaturesHero />
      <FeaturesList />
      <IntegrationsSection />
    </div>
  )
}