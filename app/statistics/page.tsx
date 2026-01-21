import StatsHero from '@/components/statistics/StatsHero'
import IndustryBenchmarks from '@/components/statistics/IndustryBenchmarks'
import PerformanceMetrics from '@/components/statistics/PerformanceMetrics'
import GlobalInsights from '@/components/statistics/GlobalInsights'

export const metadata = {
  title: 'Statistics - EmailVerse | Email Marketing Analytics & Insights',
  description: 'Explore comprehensive email marketing statistics, industry benchmarks, and performance insights with interactive charts and real-time data.',
}

export default function StatisticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <StatsHero />
      <IndustryBenchmarks />
      <PerformanceMetrics />
      <GlobalInsights />
    </div>
  )
}