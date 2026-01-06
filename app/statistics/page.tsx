import StatsHero from '@/components/statistics/StatsHero'
import LiveStats from '@/components/statistics/LiveStats'
import IndustryBenchmarks from '@/components/statistics/IndustryBenchmarks'
import PerformanceMetrics from '@/components/statistics/PerformanceMetrics'
import GlobalInsights from '@/components/statistics/GlobalInsights'

export const metadata = {
  title: 'Statistics - EmailVerse | Email Marketing Analytics & Insights',
  description: 'Explore comprehensive email marketing statistics, industry benchmarks, and performance insights to optimize your campaigns.',
}

export default function StatisticsPage() {
  return (
    <div className="min-h-screen">
      <StatsHero />
      <LiveStats />
      <IndustryBenchmarks />
      <PerformanceMetrics />
      <GlobalInsights />
    </div>
  )
}