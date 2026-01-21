import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, Mail, Target, CheckCircle, Heart, Shield, Clock, FileText } from 'lucide-react'

export const metadata = {
  title: 'Healthcare Technology Email Marketing - EmailVerse | HIPAA Compliant Lead Generation',
  description: 'HIPAA-compliant email marketing for healthcare technology companies. Navigate complex B2B healthcare sales with specialized outreach strategies.',
}

export default function HealthcareTechnologyPage() {
  const healthtechStats = [
    { label: 'Average Lead Generation Increase', value: '245%', icon: TrendingUp },
    { label: 'Typical ROI for HealthTech Clients', value: '380%', icon: Target },
    { label: 'Average Open Rate', value: '41.3%', icon: Mail },
    { label: 'Compliance Success Rate', value: '100%', icon: Shield }
  ]

  const healthtechFeatures = [
    {
      icon: Shield,
      title: 'HIPAA Compliance Framework',
      description: 'Built-in HIPAA compliance features ensuring all communications meet healthcare industry standards.',
      benefits: ['Zero compliance violations', 'Audit-ready documentation', 'Secure data handling']
    },
    {
      icon: Users,
      title: 'Multi-Stakeholder Targeting',
      description: 'Navigate complex healthcare decision-making with campaigns targeting multiple stakeholders.',
      benefits: ['C-suite engagement', 'IT decision maker outreach', 'Clinical champion identification']
    },
    {
      icon: Clock,
      title: 'Long Sales Cycle Management',
      description: 'Specialized nurturing sequences designed for 6-18 month healthcare technology sales cycles.',
      benefits: ['Sustained engagement', 'Relationship building', 'Pipeline visibility']
    },
    {
      icon: FileText,
      title: 'Clinical Evidence Integration',
      description: 'Incorporate clinical studies, ROI data, and compliance documentation into your campaigns.',
      benefits: ['Evidence-based messaging', 'Credibility building', 'Decision support']
    }
  ]

  const healthtechUseCases = [
    {
      title: 'Hospital System Outreach',
      description: 'Target large hospital systems with complex procurement processes and multiple decision makers',
      metrics: 'Average 60% increase in qualified hospital leads'
    },
    {
      title: 'Clinic & Practice Targeting',
      description: 'Reach smaller practices and specialty clinics with tailored solutions and pricing',
      metrics: 'Up to 85% improvement in practice engagement'
    },
    {
      title: 'Regulatory Update Campaigns',
      description: 'Keep prospects informed about regulatory changes and compliance requirements',
      metrics: 'Typical 40% increase in thought leadership positioning'
    },
    {
      title: 'Clinical Evidence Sharing',
      description: 'Distribute clinical studies and ROI data to support purchasing decisions',
      metrics: 'Average 30% reduction in sales cycle length'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6">
                <Heart className="h-4 w-4 mr-2" />
                Healthcare Technology Specialists
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Healthcare Technology
                <span className="text-primary-600 block">Email Marketing</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                HIPAA-compliant email marketing for healthcare technology companies. Navigate complex 
                B2B healthcare sales cycles with specialized outreach strategies and compliance expertise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="https://calendly.com/emailverse/consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block text-center"
                >
                  Start Growing Your Leads Now
                </a>
                <Link href="#case-study" className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200">
                  View HealthTech Case Study
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">HealthTech Success Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                {healthtechStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-red-100 p-3 rounded-lg inline-block mb-3">
                      <stat.icon className="h-6 w-6 text-red-600" />
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

      {/* HealthTech-Specific Features */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Healthcare Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is specifically designed to meet the unique compliance and communication 
              requirements of healthcare technology companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthtechFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="bg-red-100 p-4 rounded-lg inline-block mb-6">
                  <feature.icon className="h-8 w-8 text-red-600" />
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

      {/* HealthTech Use Cases */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Healthcare Technology Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From hospital systems to private practices, we help healthcare technology companies 
              reach decision makers at every level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthtechUseCases.map((useCase, index) => (
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
              HealthTech Success Story: HealthTech Innovations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How a healthcare technology startup navigated compliance requirements and achieved 380% ROI
            </p>
          </div>

          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">HealthTech Innovations</h3>
                <p className="text-lg opacity-90 mb-6">
                  A healthcare technology startup developing AI-powered diagnostic tools, 
                  struggling to reach decision makers in hospitals and clinics while maintaining HIPAA compliance.
                </p>
                <div className="flex items-center space-x-6">
                  <div>
                    <div className="text-2xl font-bold">5 Months</div>
                    <div className="text-sm opacity-90">Campaign Duration</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Healthcare Tech</div>
                    <div className="text-sm opacity-90">Industry</div>
                  </div>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">892</div>
                    <div className="text-sm opacity-90">Qualified Leads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">380%</div>
                    <div className="text-sm opacity-90">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">41.3%</div>
                    <div className="text-sm opacity-90">Open Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">8.7%</div>
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
                <div className="bg-red-100 p-4 rounded-lg inline-block mb-4">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">245%</div>
                <div className="text-gray-600">Increase in Qualified Leads</div>
                <div className="text-sm text-gray-500 mt-1">From 258 to 892 leads</div>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-lg inline-block mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-gray-600">HIPAA Compliance</div>
                <div className="text-sm text-gray-500 mt-1">Zero violations or issues</div>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-lg inline-block mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">$3.2M</div>
                <div className="text-gray-600">Pipeline Generated</div>
                <div className="text-sm text-gray-500 mt-1">Strong future revenue</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Key Achievements</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">30% shorter sales cycle through better qualification</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">85% improvement in lead quality scores</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Established relationships with 15 major hospital systems</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Compliance & Security</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Full HIPAA compliance maintained throughout</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Audit-ready documentation and processes</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Scalable compliance framework for growth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies/healthtech-innovations" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold">
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
            Ready to Navigate Healthcare Compliance?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let EmailVerse help you reach healthcare decision makers while maintaining full HIPAA compliance, 
            just like we did for HealthTech Innovations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/emailverse/consultation"
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