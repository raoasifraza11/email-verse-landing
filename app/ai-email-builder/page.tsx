import AIEmailBuilder from '@/components/tools/AIEmailBuilder'

export const metadata = {
  title: 'AI Email Builder - EmailVerse | Create Professional Emails with AI',
  description: 'Build professional email campaigns in seconds with our AI-powered email builder. Generate compelling subject lines, content, and CTAs automatically.',
}

export default function AIEmailBuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <AIEmailBuilder />
    </div>
  )
}