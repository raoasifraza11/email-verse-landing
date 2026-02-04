import { Metadata } from 'next'
import { 
  Mail, 
  Target, 
  TrendingUp, 
  Users, 
  Zap, 
  BarChart3,
  MessageSquare,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Brain,
  Database,
  Settings,
  Globe,
  Rocket,
  Star,
  ExternalLink
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Email Marketing Tools & Integrations | EmailVerse',
  description: 'Discover the best AI-powered email marketing tools and integrations. From lead generation to campaign optimization, find everything you need to scale your email marketing.',
}

export default function IntegrationsPage() {
  const dataProspectingTools = [
    {
      name: 'ZoomInfo',
      description: 'Large North American dataset with deep firmographics and intent signals for email prospecting.',
      category: 'Data & Prospecting',
      icon: '🔍',
      url: 'https://www.zoominfo.com',
      pros: ['Comprehensive B2B database', 'Intent data integration', 'Advanced filtering'],
      cons: ['Higher price point', 'North America focused'],
      bestFor: 'Enterprise email campaigns targeting specific industries and roles'
    },
    {
      name: 'Apollo.io',
      description: 'All-in-one prospecting platform with contact data and built-in email sequences.',
      category: 'Data & Prospecting',
      icon: '🚀',
      url: 'https://www.apollo.io',
      pros: ['Integrated outreach platform', 'Large contact database', 'Affordable pricing'],
      cons: ['Data quality varies', 'Limited advanced features'],
      bestFor: 'Small to medium teams wanting data and email automation in one platform'
    },
    {
      name: 'Clay',
      description: 'Flexible data enrichment platform that pulls from multiple sources for custom email targeting.',
      category: 'Data & Prospecting',
      icon: '🧱',
      url: 'https://www.clay.com',
      pros: ['Multi-source enrichment', 'Custom workflows', 'Advanced scoring'],
      cons: ['Steep learning curve', 'Requires technical setup'],
      bestFor: 'Growth teams building sophisticated email targeting workflows'
    },
    {
      name: 'Seamless.AI',
      description: 'Real-time contact discovery with Chrome extension for quick email prospecting.',
      category: 'Data & Prospecting',
      icon: '⚡',
      url: 'https://seamless.ai',
      pros: ['Real-time discovery', 'Easy Chrome integration', 'Quick setup'],
      cons: ['Limited bulk operations', 'Accuracy varies'],
      bestFor: 'Sales reps doing manual prospecting who need quick email discovery'
    }
  ]

  const emailAutomationTools = [
    {
      name: 'Instantly.ai',
      description: 'Cold email automation with advanced deliverability features and inbox management.',
      category: 'Email Automation',
      icon: '📧',
      url: 'https://instantly.ai',
      pros: ['Strong deliverability focus', 'Multi-inbox management', 'Affordable pricing'],
      cons: ['Limited advanced features', 'Basic analytics'],
      bestFor: 'Teams focused on cold email outreach at scale with deliverability concerns'
    },
    {
      name: 'Smartlead',
      description: 'Email automation platform built for high-volume campaigns with infrastructure focus.',
      category: 'Email Automation',
      icon: '🎯',
      url: 'https://smartlead.ai',
      pros: ['High volume capacity', 'Infrastructure management', 'Deliverability tools'],
      cons: ['Complex setup', 'Learning curve'],
      bestFor: 'Agencies and teams running large-scale email campaigns'
    },
    {
      name: 'Lemlist',
      description: 'Multi-channel outreach platform combining email, LinkedIn, and personalization.',
      category: 'Email Automation',
      icon: '💌',
      url: 'https://lemlist.com',
      pros: ['Multi-channel sequences', 'Advanced personalization', 'Video integration'],
      cons: ['Higher pricing', 'Complex for beginners'],
      bestFor: 'Teams wanting personalized multi-channel email campaigns'
    },
    {
      name: 'Reply.io',
      description: 'Email automation with multi-channel support and unified inbox management.',
      category: 'Email Automation',
      icon: '↩️',
      url: 'https://reply.io',
      pros: ['Multi-channel support', 'Unified inbox', 'Good integrations'],
      cons: ['Pricing can add up', 'Learning curve'],
      bestFor: 'SMB teams wanting email automation with social media integration'
    }
  ]

  const contentAITools = [
    {
      name: 'Lavender',
      description: 'Real-time email coach that scores drafts and suggests improvements for better replies.',
      category: 'Content & AI',
      icon: '💜',
      url: 'https://www.lavender.ai',
      pros: ['Real-time feedback', 'Easy integration', 'Improves reply rates'],
      cons: ['Subscription required', 'Limited customization'],
      bestFor: 'Sales reps wanting to improve email writing and response rates'
    },
    {
      name: 'Copy.ai',
      description: 'AI-powered content generation for email campaigns, subject lines, and sequences.',
      category: 'Content & AI',
      icon: '✍️',
      url: 'https://www.copy.ai',
      pros: ['Versatile content creation', 'Multiple templates', 'Easy to use'],
      cons: ['Generic output sometimes', 'Requires editing'],
      bestFor: 'Marketing teams needing quick email content generation'
    },
    {
      name: 'Jasper',
      description: 'Advanced AI writing assistant with brand voice training for consistent email content.',
      category: 'Content & AI',
      icon: '🤖',
      url: 'https://www.jasper.ai',
      pros: ['Brand voice consistency', 'Advanced AI', 'Multiple formats'],
      cons: ['Higher cost', 'Learning curve'],
      bestFor: 'Enterprise teams maintaining consistent brand voice across email campaigns'
    },
    {
      name: 'Crystal',
      description: 'Personality insights platform for tailoring email tone and approach to recipients.',
      category: 'Content & AI',
      icon: '💎',
      url: 'https://www.crystalknows.com',
      pros: ['Personality insights', 'Tone recommendations', 'Integration friendly'],
      cons: ['Limited data coverage', 'Niche use case'],
      bestFor: 'Sales teams doing high-touch, personalized email outreach'
    }
  ]

  const analyticsTools = [
    {
      name: 'Mixpanel',
      description: 'Advanced analytics platform for tracking email campaign performance and user behavior.',
      category: 'Analytics & Optimization',
      icon: '📊',
      url: 'https://mixpanel.com',
      pros: ['Deep behavioral analytics', 'Custom events', 'Cohort analysis'],
      cons: ['Complex setup', 'Higher pricing'],
      bestFor: 'Growth teams needing detailed email campaign and user journey analytics'
    },
    {
      name: 'Amplitude',
      description: 'Product analytics platform with email campaign tracking and conversion analysis.',
      category: 'Analytics & Optimization',
      icon: '📈',
      url: 'https://amplitude.com',
      pros: ['User journey tracking', 'Conversion funnels', 'Retention analysis'],
      cons: ['Learning curve', 'Expensive for small teams'],
      bestFor: 'Product-led growth teams tracking email impact on user activation'
    },
    {
      name: 'Google Analytics 4',
      description: 'Free analytics platform with email campaign tracking and attribution modeling.',
      category: 'Analytics & Optimization',
      icon: '🔍',
      url: 'https://analytics.google.com',
      pros: ['Free to use', 'Comprehensive tracking', 'Integration ecosystem'],
      cons: ['Complex interface', 'Privacy limitations'],
      bestFor: 'All teams wanting basic to advanced email campaign performance tracking'
    },
    {
      name: 'Hotjar',
      description: 'User behavior analytics with heatmaps and session recordings for email landing pages.',
      category: 'Analytics & Optimization',
      icon: '🔥',
      url: 'https://www.hotjar.com',
      pros: ['Visual insights', 'Easy setup', 'Affordable'],
      cons: ['Limited to website behavior', 'Basic analytics'],
      bestFor: 'Teams optimizing email landing pages and conversion flows'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>50+ AI Email Marketing Tools</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The Complete Guide to
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> AI Email Marketing Tools</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              AI email marketing tools aren't just helpers anymore—they're the engine. They find the right prospects, 
              craft personalized messages, and tell you which campaigns deserve attention today. Stop guessing and start converting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#tools-guide"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200"
              >
                Explore Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/roi-calculator"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                Calculate ROI
                <BarChart3 className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Tools Matter */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why AI Email Marketing Tools Matter in 2026
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The email marketing landscape has evolved. Manual processes and generic campaigns no longer cut it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Shifting Buyer Expectations</h3>
              <p className="text-gray-600">
                Modern buyers expect personalized, relevant communication. AI tools analyze prospect behavior, 
                recent activities, and company changes to craft messages that feel earned, not generic.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data-Driven Email Marketing</h3>
              <p className="text-gray-600">
                Your email campaigns become a living system. Signals flow in, targeting rules update, 
                messaging adapts. Finally own email marketing at scale with feedback loops that show what works.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Competitive Advantage</h3>
              <p className="text-gray-600">
                Small teams with smart AI infrastructure can outpace large teams running manual processes. 
                When your email marketing runs as an automated system, you generate more leads and clearer ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Categories with Actual Tools */}
      <section id="tools-guide" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Best AI Email Marketing Tools by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed breakdown of the top tools in each category to help you build the perfect email marketing stack.
            </p>
          </div>

          {/* Data & Prospecting Tools */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Database className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Data & Prospecting Platforms</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {dataProspectingTools.map((tool, index) => (
                <a
                  key={index}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-200 block"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{tool.icon}</div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h4>
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {tool.category}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="h-5 w-5 text-gray-400 hover:text-blue-600 transition-colors" />
                  </div>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className="text-sm font-semibold text-green-700 mb-2">Pros</h5>
                      <ul className="space-y-1">
                        {tool.pros.map((pro, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-red-700 mb-2">Cons</h5>
                      <ul className="space-y-1">
                        {tool.cons.map((con, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center">
                            <span className="h-3 w-3 bg-red-500 rounded-full mr-2 flex-shrink-0"></span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h5 className="text-sm font-semibold text-gray-900 mb-1">Best For:</h5>
                    <p className="text-sm text-gray-600">{tool.bestFor}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Email Automation Tools */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Mail className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Email Automation Platforms</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {emailAutomationTools.map((tool, index) => (
                <a
                  key={index}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-200 block"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{tool.icon}</div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h4>
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          {tool.category}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="h-5 w-5 text-gray-400 hover:text-green-600 transition-colors" />
                  </div>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className="text-sm font-semibold text-green-700 mb-2">Pros</h5>
                      <ul className="space-y-1">
                        {tool.pros.map((pro, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-red-700 mb-2">Cons</h5>
                      <ul className="space-y-1">
                        {tool.cons.map((con, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center">
                            <span className="h-3 w-3 bg-red-500 rounded-full mr-2 flex-shrink-0"></span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h5 className="text-sm font-semibold text-gray-900 mb-1">Best For:</h5>
                    <p className="text-sm text-gray-600">{tool.bestFor}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Content & AI Tools */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Brain className="h-8 w-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Content & AI Writing Tools</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {contentAITools.map((tool, index) => (
                <a
                  key={index}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-200 block"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{tool.icon}</div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h4>
                        <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                          {tool.category}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="h-5 w-5 text-gray-400 hover:text-purple-600 transition-colors" />
                  </div>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className="text-sm font-semibold text-green-700 mb-2">Pros</h5>
                      <ul className="space-y-1">
                        {tool.pros.map((pro, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-red-700 mb-2">Cons</h5>
                      <ul className="space-y-1">
                        {tool.cons.map((con, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center">
                            <span className="h-3 w-3 bg-red-500 rounded-full mr-2 flex-shrink-0"></span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h5 className="text-sm font-semibold text-gray-900 mb-1">Best For:</h5>
                    <p className="text-sm text-gray-600">{tool.bestFor}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Analytics Tools */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Settings className="h-8 w-8 text-orange-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Analytics & Optimization Tools</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {analyticsTools.map((tool, index) => (
                <a
                  key={index}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all duration-200 block"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{tool.icon}</div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h4>
                        <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                          {tool.category}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="h-5 w-5 text-gray-400 hover:text-orange-600 transition-colors" />
                  </div>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className="text-sm font-semibold text-green-700 mb-2">Pros</h5>
                      <ul className="space-y-1">
                        {tool.pros.map((pro, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-red-700 mb-2">Cons</h5>
                      <ul className="space-y-1">
                        {tool.cons.map((con, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center">
                            <span className="h-3 w-3 bg-red-500 rounded-full mr-2 flex-shrink-0"></span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h5 className="text-sm font-semibold text-gray-900 mb-1">Best For:</h5>
                    <p className="text-sm text-gray-600">{tool.bestFor}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of AI for Email Marketing Teams
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <Clock className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Faster Prospect Discovery</h3>
              <p className="text-gray-600">
                AI pulls signals together so you find ready buyers faster. Import lists, enrich with data, 
                filter for intent, and focus on prospects showing buying signals.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <TrendingUp className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Higher Conversion Rates</h3>
              <p className="text-gray-600">
                Relevance beats volume every time. AI matches the right message to the right person 
                at the perfect moment, dramatically improving response rates.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl">
              <Users className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Better Customer Relationships</h3>
              <p className="text-gray-600">
                AI helps you stay relevant and timely. It remembers important details, suggests helpful content, 
                and ensures follow-ups feel personal and valuable.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <BarChart3 className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Improved Forecast Accuracy</h3>
              <p className="text-gray-600">
                AI weighs real signals like engagement depth, response patterns, and campaign performance 
                to provide accurate pipeline predictions you can trust.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-xl">
              <Zap className="h-8 w-8 text-red-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Reduced Manual Work</h3>
              <p className="text-gray-600">
                AI handles the grunt work—list building, content creation, send optimization, 
                and performance tracking—so teams focus on strategy and relationships.
              </p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl">
              <Globe className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Scalable Operations</h3>
              <p className="text-gray-600">
                Small teams with AI infrastructure can outpace large manual operations. 
                Scale your email marketing without proportionally scaling your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Email Marketing with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Stop guessing and start converting. Let EmailVerse handle your entire email marketing infrastructure 
            with AI-powered tools and proven strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/roi-calculator"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200"
            >
              Calculate Your ROI
              <BarChart3 className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}