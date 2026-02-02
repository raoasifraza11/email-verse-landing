import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, Mail, Target } from 'lucide-react'

export const metadata = {
  title: 'Case Studies - EmailVerse | Real Client Success Stories',
  description: 'Discover how businesses achieved remarkable results with EmailVerse email marketing solutions. Real case studies with proven ROI and lead generation success.',
}

const caseStudies = [
  {
    id: 'techflow-solutions',
    company: 'Pitch-Capital',
    industry: 'SaaS',
    challenge: 'Low lead conversion from cold outreach',
    results: {
      leads: '1,018',
      timeframe: '7 months',
      roi: '580%',
      openRate: '47.2%'
    },
    description: 'B2B SaaS company struggling with manual outreach processes and low conversion rates.',
    image: '/case-studies/techflow.jpg',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'realty-masters',
    company: 'Generational',
    industry: 'Real Estate',
    challenge: 'Inconsistent lead generation',
    results: {
      leads: '750',
      timeframe: '3 months',
      roi: '420%',
      openRate: '52.8%'
    },
    description: 'Real estate agency needed automated lead nurturing and consistent client acquisition.',
    image: '/case-studies/realty.jpg',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'digital-dynamics',
    company: 'Content Dog',
    industry: 'Marketing Agency',
    challenge: 'Scaling client acquisition',
    results: {
      leads: '655',
      timeframe: '4 months',
      roi: '650%',
      openRate: '44.9%'
    },
    description: 'Marketing agency needed to scale their own lead generation while serving clients.',
    image: '/case-studies/digital.jpg',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'healthtech-innovations',
    company: 'HealthTech Innovations',
    industry: 'Healthcare Technology',
    challenge: 'Complex B2B sales cycle',
    results: {
      leads: '823',
      timeframe: '5 months',
      roi: '380%',
      openRate: '41.3%'
    },
    description: 'Healthcare technology startup needed to reach decision makers in hospitals and clinics.',
    image: '/case-studies/healthtech.jpg',
    color: 'from-red-500 to-red-600'
  },
  {
    id: 'fintech-pro',
    company: 'FinTech Pro',
    industry: 'Financial Technology',
    challenge: 'Regulatory compliance in outreach',
    results: {
      leads: '941',
      timeframe: '7 months',
      roi: '490%',
      openRate: '39.7%'
    },
    description: 'Financial technology company needed compliant email marketing for enterprise clients.',
    image: '/case-studies/fintech.jpg',
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 'ecommerce-plus',
    company: 'ECommerce Plus',
    industry: 'E-commerce',
    challenge: 'Customer retention and upselling',
    results: {
      leads: '887',
      timeframe: '6 months',
      roi: '720%',
      openRate: '48.6%'
    },
    description: 'E-commerce platform needed automated customer lifecycle marketing and retention campaigns.',
    image: '/case-studies/ecommerce.jpg',
    color: 'from-indigo-500 to-indigo-600'
  }
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="h-4 w-4 mr-2" />
            Real Success Stories
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Case Studies
            <span className="text-primary-600 block">That Prove Results</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Discover how businesses across industries achieved remarkable growth with EmailVerse. 
            Real companies, real results, real ROI.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">5,074</div>
              <div className="text-gray-600">Total Leads Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">540%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">45.8%</div>
              <div className="text-gray-600">Average Open Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Link key={study.id} href={`/case-studies/${study.id}`}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-r ${study.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium opacity-90">{study.industry}</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{study.company}</h3>
                    <p className="text-sm opacity-90">{study.description}</p>
                  </div>

                  {/* Results */}
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 mb-1">{study.results.leads}</div>
                        <div className="text-sm text-gray-600">Leads Generated</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">{study.results.roi}</div>
                        <div className="text-sm text-gray-600">ROI</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Timeframe: {study.results.timeframe}</span>
                      <span>Open Rate: {study.results.openRate}</span>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center text-primary-600 font-medium">
                        <span>Read Full Case Study</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of businesses already using EmailVerse to grow their revenue.
          </p>
          <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
            Start Growing Your Leads Now
          </button>
        </div>
      </section>
    </div>
  )
}