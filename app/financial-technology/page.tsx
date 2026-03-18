import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, Mail, Target, CheckCircle, DollarSign, Shield, Building, FileCheck } from 'lucide-react'

export const metadata = {
  title: 'Financial Technology Email Marketing - EmailVerse | FinTech Lead Generation',
  description: 'Compliant email marketing for financial technology companies. Navigate regulatory requirements while scaling your FinTech business.',
}

export default function FinancialTechnologyPage() {
  const fintechStats = [
    { label: 'Average Lead Generation Increase', value: '312%', icon: TrendingUp },
    { label: 'Typical ROI for FinTech Clients', value: '490%', icon: DollarSign },
    { label: 'Average Open Rate', value: '39.7%', icon: Mail },
    { label: 'Regulatory Compliance Rate', value: '100%', icon: Shield }
  ]

  const fintechFeatures = [
    {
      icon: Shield,
      title: 'Financial Regulatory Compliance',
      description: 'Built-in compliance features for financial services regulations including SOX, PCI DSS, and industry standards.',
      benefits: ['Regulatory adherence', 'Audit trail maintenance', 'Risk mitigation']
    },
    {
      icon: Building,
      title: 'Enterprise-Grade Security',
      description: 'Bank-level security measures to protect sensitive financial data and communications.',
      benefits: ['Data encryption', 'Secure transmission', 'Access controls']
    },
    {
      icon: Users,
      title: 'Multi-Stakeholder Campaigns',
      description: 'Target complex financial decision-making units including CFOs, CTOs, and compliance officers.',
      benefits: ['Executive engagement', 'Technical validation', 'Compliance approval']
    },
    {
      icon: FileCheck,
      title: 'Compliance Documentation',
      description: 'Automated documentation and reporting for regulatory compliance and audit requirements.',
      benefits: ['Audit readiness', 'Compliance reporting', 'Risk documentation']
    }
  ]

  const fintechUseCases = [
    {
      title: 'Enterprise Banking Solutions',
      description: 'Target large financial institutions with complex procurement and compliance requirements',
      metrics: 'Average 75% increase in enterprise banking leads'
    },
    {
      title: 'Credit Union Outreach',
      description: 'Reach credit unions and community banks with tailored solutions and competitive pricing',
      metrics: 'Up to 90% improvement in credit union engagement'
    },
    {
      title: 'Regulatory Update Campaigns',
      description: 'Keep prospects informed about regulatory changes and compliance solutions',
      metrics: 'Typical 50% increase in thought leadership positioning'
    },
    {
      title: 'ROI & Compliance Case Studies',
      description: 'Share success stories and compliance achievements to support purchasing decisions',
      metrics: 'Average 25% reduction in sales cycle length'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
                <DollarSign className="h-4 w-4 mr-2" />
                FinTech Specialists
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Financial Technology
                <span className="text-primary-600 block">Email Marketing</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Compliant email marketing for financial technology companies. Navigate complex regulatory 
                requirements while scaling your FinTech business with enterprise-grade security and compliance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="https://calendly.com/info-51729/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block text-center"
                >
                  Start Growing Your Leads Now
                </a>
                <Link href="#case-study" className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200">
                  View FinTech Case Study
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">FinTech Success Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                {fintechStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-orange-100 p-3 rounded-lg inline-block mb-3">
                      <stat.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FinTech-Specific Features */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Financial Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform meets the stringent security and compliance requirements of the financial 
              services industry while delivering exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fintechFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="bg-orange-100 p-4 rounded-lg inline-block mb-6">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FinTech Use Cases */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Financial Technology Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From enterprise banks to credit unions, we help FinTech companies reach financial 
              decision makers while maintaining full regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fintechUseCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <p className="text-green-700 font-medium">{useCase.metrics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Study */}
      <section id="case-study" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              FinTech Success Story: FinTech Pro
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How a financial technology company achieved compliant growth and 490% ROI
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">FinTech Pro</h3>
                <p className="text-lg opacity-90 mb-6">
                  A financial technology company providing payment processing solutions to enterprise clients, 
                  needing to navigate complex regulatory requirements while scaling their business.
                </p>
                <div className="flex items-center space-x-6">
                  <div>
                    <div className="text-2xl font-bold">7 Months</div>
                    <div className="text-sm opacity-90">Campaign Duration</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Financial Technology</div>
                    <div className="text-sm opacity-90">Industry</div>
                  </div>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">1,567</div>
                    <div className="text-sm opacity-90">Qualified Leads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">490%</div>
                    <div className="text-sm opacity-90">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">39.7%</div>
                    <div className="text-sm opacity-90">Open Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">11.2%</div>
                    <div className="text-sm opacity-90">Reply Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Key Results Achieved</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-orange-100 p-4 rounded-lg inline-block mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">312%</div>
                <div className="text-gray-600">Increase in Qualified Leads</div>
                <div className="text-sm text-gray-500 mt-1">From 380 to 1,567 leads</div>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-lg inline-block mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-gray-600">Regulatory Compliance</div>
                <div className="text-sm text-gray-500 mt-1">Zero compliance issues</div>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-lg inline-block mb-4">
                  <DollarSign className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">$5.8M</div>
                <div className="text-gray-600">Pipeline Generated</div>
                <div className="text-sm text-gray-500 mt-1">Strong enterprise pipeline</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Key Achievements</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">65% improvement in lead quality scores</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">25% faster sales cycle for enterprise deals</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Established relationships with 25 major banks</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Compliance & Security</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Full regulatory compliance maintained</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Enterprise-grade security implementation</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Scalable compliance framework established</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies/fintech-pro" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold">
              Read Complete Case Study
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Scale Your FinTech Compliantly?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let EmailVerse help you navigate financial regulations while scaling your lead generation, 
            just like we did for FinTech Pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/info-51729/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block text-center"
            >
              Start Growing Your Leads Now
            </a>
            <Link href="/case-studies" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}