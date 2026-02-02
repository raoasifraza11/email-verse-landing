import SubjectLineOptimizer from '@/components/tools/SubjectLineOptimizer'

export const metadata = {
  title: 'Subject Line Optimizer - EmailVerse | AI-Powered Email Subject Analysis',
  description: 'Optimize your email subject lines with AI analysis. Get spam scores, performance predictions, and improvement suggestions to boost open rates.',
}

export default function SubjectLineOptimizerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SubjectLineOptimizer />
    </div>
  )
}