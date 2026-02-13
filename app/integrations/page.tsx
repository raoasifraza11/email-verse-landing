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
  const cdnBase = 'https://cdn.prod.website-files.com/641db47beed260831278bd61'

  const toolCategories = [
    {
      name: 'Data and Prospecting',
      icon: Database,
      color: 'blue',
      tools: [
        { name: 'Clay', url: 'https://clay.com/?via=salescaptain', image: `${cdnBase}/668dadba3028c60b5ccf0df0_Group%207755.svg` },
        { name: 'Seamless.ai', url: 'https://seamless.ai/', image: `${cdnBase}/69069453ff3e72eab54853a0_seamless.png` },
        { name: 'Cognism', url: 'https://www.cognism.com/', image: `${cdnBase}/6906925e4283f4085fb2554d_CTA-14%20copy.png` },
        { name: 'Prospeo', url: 'https://prospeo.io/?via=salescaptain', image: `${cdnBase}/668dad2a30aab64b6bcd8357_Group%207749.svg` },
        { name: 'Apollo', url: 'https://get.apollo.io/salescaptain', image: `${cdnBase}/66ec1b7814874f162d9f83ff_salescaptain-website-tools_0002_apple-icon.png` },
        { name: 'Crunchbase', url: 'https://www.crunchbase.com/?ref=salescaptain.io', image: `${cdnBase}/671b4f2b21fc3999e3ecb18b_salescaptain-website-tools_0024_crunchbase.png` },
        { name: 'Bombora', url: 'https://bombora.com/?ref=salescaptain.io', image: `${cdnBase}/671b4ed5a6f59db2299f3d47_salescaptain-website-tools_0023_bombora.png` },
        { name: 'Pitchbook', url: 'https://pitchbook.com/?ref=salescaptain.io', image: `${cdnBase}/671b4f3eb344465d2282bf6b_salescaptain-website-tools_0022_pitchbook.png` },
        { name: 'FullEnrich', url: 'https://fullenrich.com/?ref=salescaptain.io', image: `${cdnBase}/66ec1b78d515d1bb788ab48c_salescaptain-website-tools_0001_download.png` },
        { name: 'Zoominfo', url: 'https://www.zoominfo.com/?ref=salescaptain.io', image: `${cdnBase}/671939322e4d4c997df10b71_salescaptain-website-tools_0021_zoominfo.png` }
      ]
    },
    {
      name: 'Outreach and Sequencing',
      icon: Mail,
      color: 'green',
      tools: [
        { name: 'Reply.io', url: 'https://www.reply.io/', image: `${cdnBase}/66ec1b7671e310437f3503f0_salescaptain-website-tools_0000_replyio.png` },
        { name: 'Instantly', url: 'https://instantly.ai/?via=salescaptain', image: `${cdnBase}/66ec1b76b47be7de8fd710ec_salescaptain-website-tools_0009_instantlyapp_logo.png` },
        { name: 'HeyReach', url: 'https://www.heyreach.io/?ref=salescaptain.io', image: `${cdnBase}/66ec1b76bac9a15cd2d9fa88_salescaptain-website-tools_0005_heyreachlogo.png` },
        { name: 'Salesloft', url: 'https://salesloft.com/', image: `${cdnBase}/69069868634217da7e9991b8_salesloft.png` },
        { name: 'Overloop', url: 'https://overloop.com/', image: `${cdnBase}/6906993e3d343eacde6eab6b_overloop.png` },
        { name: 'Expandi', url: 'https://expandi.io/?ref=salescaptain.io', image: `${cdnBase}/6708f1ae42c3baa180f8d7d3_salescaptain-website-tools_0017_expandi.png` },
        { name: 'Lemlist', url: 'https://get.lemlist.com/salescaptain', image: `${cdnBase}/66965f6907e73f8c26e60ed6_images.png` },
        { name: 'Salesrobot', url: 'https://www.salesrobot.co/?ref=salescaptain.io', image: `${cdnBase}/67193932f0ca84d5fe931c2a_salescaptain-website-tools_0020_salesrobot.png` },
        { name: 'Smartlead', url: 'https://smartlead.ai/?via=salescaptain', image: `${cdnBase}/668dadf76921563a5abc2b0c_Group%207750.svg` },
        { name: 'Outreach.io', url: 'https://www.outreach.io/?ref=salescaptain.io', image: `${cdnBase}/671939321014426256086180_salescaptain-website-tools_0019_outreach.png` }
      ]
    },
    {
      name: 'Scheduling & Automation',
      icon: Clock,
      color: 'purple',
      tools: [
        { name: 'LaGrowthMachine', url: 'https://lagrowthmachine.com/?ref=salescaptain.io', image: `${cdnBase}/6708f1bb42c3baa180f8ddcd_salescaptain-website-tools_0016_lagrowthmachine.png` },
        { name: 'Chili Piper', url: 'https://chilipiper.com/', image: `${cdnBase}/6906b23456f332c74ee4a693_chili%20piper.png` },
        { name: 'Calendly with AI Routing', url: 'https://calendly.com/', image: `${cdnBase}/6906b133e1097d94d375bff0_62c6f51b7a58a4aa1fb770b0.png` },
        { name: 'Zapier AI Agents for Sales', url: 'https://zapier.com/', image: `${cdnBase}/6906b0959a041e5a9cb9ac49_zapier_800.png` },
        { name: 'My AI Front Desk', url: 'https://www.myaifrontdesk.com/', image: `${cdnBase}/6906afa601a6337ed3ae4917_frontdesk.png` },
        { name: 'Common Room', url: 'https://commonroom.io/?ref=salescaptain.io', image: `${cdnBase}/66ec1b7893263b1e9f2301c8_salescaptain-website-tools_0004_common-room-logo.png` },
        { name: 'Postaga', url: 'https://postaga.com/', image: `${cdnBase}/6906a39d5709897033124379_postaga.png` },
        { name: 'RB2B', url: 'https://www.rb2b.com/?ref=salescaptain', image: `${cdnBase}/66918d1e5473aa09b1f024f4_Group%207737.svg` },
        { name: 'Unify', url: 'https://www.unifygtm.com/?ref=salescaptain.io&utm_source=partner&utm_medium=website&utm_campaign=salescaptain', image: `${cdnBase}/66ec1b7685cd5d237de3357e_salescaptain-website-tools_0008_unify-logo.png` },
        { name: 'Factors', url: 'https://www.factors.ai/?ref=salescaptain.io', image: `${cdnBase}/6708f07432228d01dc1665fb_salescaptain-website-tools_0015_factors.png` }
      ]
    },
    {
      name: 'Conversation Intelligence',
      icon: MessageSquare,
      color: 'orange',
      tools: [
        { name: 'Gong.io', url: 'https://gong.io/', image: `${cdnBase}/69069d4940644487cf7964d0_gong.io.png` },
        { name: 'Chorus.ai', url: 'https://chorus.ai/', image: `${cdnBase}/69069e32f75dbfb08f2217ba_chorus.png` },
        { name: 'Avoma', url: 'https://www.avoma.com/', image: `${cdnBase}/69069f07db3e610fc45f7068_avoma.png` },
        { name: 'Fireflies.ai', url: 'https://fireflies.ai/', image: `${cdnBase}/6906a084b47331a4d72708f8_fireflies.png` },
        { name: 'Dialpad AI', url: 'https://www.dialpad.com/', image: `${cdnBase}/6906a09b24e5d6c80e68f8bc_dialpad.png` }
      ]
    },
    {
      name: 'CRM and Pipeline Management',
      icon: Settings,
      color: 'indigo',
      tools: [
        { name: 'Salesforce Einstein', url: 'https://help.salesforce.com/s/products/einstein?language=en_US', image: `${cdnBase}/6906b368570989703313360c_salesforce.png` },
        { name: 'HubSpot Sales Hub', url: 'https://www.hubspot.com/products/sales', image: `${cdnBase}/6906b42769261d0557c987b7_hubspot%20saleshub.png` },
        { name: 'Microsoft Dynamics 365', url: 'https://www.microsoft.com/en-us/dynamics-365', image: `${cdnBase}/6906b4d8310df2b561094aa4_Dynamics-365-logo-500x281.png` },
        { name: 'Pipedrive AI', url: 'https://www.pipedrive.com/en/products/ai-crm', image: `${cdnBase}/6906b59a7e0f8dd43bd3bc94_pipedrive%20ai.png` },
        { name: 'Clari', url: 'https://www.clari.com/', image: `${cdnBase}/6906b626b9b9022ffec386d4_clari.png` }
      ]
    },
    {
      name: 'Content & Messaging Assistants',
      icon: Brain,
      color: 'pink',
      tools: [
        { name: 'Lavender', url: 'https://www.lavender.ai/', image: `${cdnBase}/6906b8346ea665d3cb84b0f5_lavender.png` },
        { name: 'Regie.ai', url: 'https://www.regie.ai/', image: `${cdnBase}/6906b89944f231d45ff5f8c9_regie.png` },
        { name: 'Crystal', url: 'https://www.crystalknows.com/?utm_source=hubspot&utm_content=nav', image: `${cdnBase}/6906ba6f3d343eacde7168c3_Icon%20Full%20Color.png` },
        { name: 'jasper', url: 'https://www.jasper.ai/', image: `${cdnBase}/6906bb6256aaa88568348f80_Jasper%2520Logo%2520(2025).webp` },
        { name: 'Copy.ai', url: 'https://copy.ai/', image: `${cdnBase}/6906bc1a9b42ba9bb51926b8_idhj7Th-aL_logos.png` }
      ]
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
              Comprehensive collection of the top tools in each category to help you build the perfect email marketing stack.
            </p>
          </div>

          {toolCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            const colorClasses = {
              blue: 'text-blue-600 border-blue-200 hover:border-blue-400 hover:bg-blue-50',
              green: 'text-green-600 border-green-200 hover:border-green-400 hover:bg-green-50',
              purple: 'text-purple-600 border-purple-200 hover:border-purple-400 hover:bg-purple-50',
              orange: 'text-orange-600 border-orange-200 hover:border-orange-400 hover:bg-orange-50',
              indigo: 'text-indigo-600 border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50',
              pink: 'text-pink-600 border-pink-200 hover:border-pink-400 hover:bg-pink-50'
            }
            const colorClass = colorClasses[category.color as keyof typeof colorClasses] || colorClasses.blue

            return (
              <div key={categoryIndex} className="mb-16">
                <div className="flex items-center mb-6">
                  <IconComponent className={`h-7 w-7 ${colorClass.split(' ')[0]} mr-3`} />
                  <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                  <span className="ml-4 text-sm text-gray-500">({category.tools.length} tools)</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.tools.map((tool, toolIndex) => (
                    <a
                      key={toolIndex}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group bg-white p-4 rounded-lg border-2 ${colorClass} transition-all duration-200 flex flex-col items-center text-center hover:shadow-lg`}
                    >
                      <div className="w-16 h-16 mb-3 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                        <img
                          src={tool.image}
                          alt={tool.name}
                          className="w-full h-full object-contain p-2"
                          loading="lazy"
                        />
                      </div>
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2">
                        {tool.name}
                      </h4>
                      <ExternalLink className="h-3 w-3 text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
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