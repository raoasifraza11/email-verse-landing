import ROICalculator from '@/components/tools/ROICalculator'

export const metadata = {
  title: 'Email Marketing ROI Calculator - EmailVerse | Calculate Your Return on Investment',
  description: 'Calculate your email marketing ROI with our comprehensive AI-powered calculator. Get detailed cost analysis, revenue projections, and infrastructure breakdown for your email campaigns.',
  keywords: 'email marketing ROI, ROI calculator, email marketing calculator, return on investment, email campaign ROI, marketing ROI tool',
}

export default function ROICalculatorPage() {
  return (
    <div className="min-h-screen">
      <ROICalculator />
    </div>
  )
}