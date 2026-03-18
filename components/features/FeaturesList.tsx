import { 
  Zap, 
  BarChart3, 
  Users, 
  Shield, 
  Smartphone, 
  Globe,
  Mail,
  Target,
  Clock,
  Palette,
  Code,
  HeadphonesIcon
} from 'lucide-react'

const FeaturesList = () => {
  const featureCategories = [
    {
      title: 'Campaign Creation',
      description: 'Build beautiful, effective email campaigns with ease',
      features: [
        {
          icon: Mail,
          name: 'Drag & Drop Builder',
          description: 'Create stunning emails without coding knowledge',
          benefits: ['Visual editor', 'Pre-built blocks', 'Custom HTML support']
        },
        {
          icon: Palette,
          name: 'Professional Templates',
          description: '500+ responsive templates for every industry',
          benefits: ['Mobile optimized', 'Brand customization', 'A/B test ready']
        },
        {
          icon: Code,
          name: 'Advanced Editor',
          description: 'Full HTML/CSS control for developers',
          benefits: ['Code editor', 'Custom CSS', 'Dynamic content']
        }
      ]
    },
    {
      title: 'Automation & AI',
      description: 'Smart automation that works while you sleep',
      features: [
        {
          icon: Zap,
          name: 'AI-Powered Workflows',
          description: 'Intelligent automation based on user behavior',
          benefits: ['Behavioral triggers', 'Smart timing', 'Predictive sending']
        },
        {
          icon: Target,
          name: 'Advanced Segmentation',
          description: 'Precise audience targeting for better results',
          benefits: ['Dynamic segments', 'Behavioral data', 'Custom attributes']
        },
        {
          icon: Clock,
          name: 'Send Time Optimization',
          description: 'AI determines the best time to send each email',
          benefits: ['Individual optimization', 'Timezone handling', 'Performance tracking']
        }
      ]
    },
    {
      title: 'Analytics & Insights',
      description: 'Deep insights to optimize your campaigns',
      features: [
        {
          icon: BarChart3,
          name: 'Real-time Analytics',
          description: 'Track performance as it happens',
          benefits: ['Live dashboards', 'Custom reports', 'Export data']
        },
        {
          icon: Users,
          name: 'Audience Insights',
          description: 'Understand your subscribers better',
          benefits: ['Engagement scoring', 'Lifecycle tracking', 'Preference center']
        },
        {
          icon: Target,
          name: 'A/B Testing',
          description: 'Test and optimize every element',
          benefits: ['Subject lines', 'Content variants', 'Send times']
        }
      ]
    },
    {
      title: 'Deliverability & Compliance',
      description: 'Ensure your emails reach the inbox',
      features: [
        {
          icon: Shield,
          name: 'Deliverability Tools',
          description: 'Maximize inbox placement rates',
          benefits: ['Spam testing', 'Domain authentication', 'Reputation monitoring']
        },
        {
          icon: Globe,
          name: 'Global Compliance',
          description: 'Stay compliant worldwide',
          benefits: ['GDPR ready', 'CAN-SPAM compliant', 'Privacy controls']
        },
        {
          icon: HeadphonesIcon,
          name: '24/7 Support',
          description: 'Expert help when you need it',
          benefits: ['Live chat', 'Email support', 'Phone support']
        }
      ]
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {featureCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20 last:mb-0">
            {/* Category Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="card p-8 group hover:shadow-xl transition-all duration-300">
                  <div className="bg-primary-100 p-4 rounded-lg inline-block mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Experience All These Features?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Get your custom quote today and see how EmailVerse can transform your email marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/info-51729/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block text-center"
            >
              Start Growing Your Leads Now
            </a>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesList