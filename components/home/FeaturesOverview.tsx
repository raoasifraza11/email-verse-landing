import { 
  Zap, 
  BarChart3, 
  Users, 
  Shield, 
  Smartphone, 
  Globe,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react'

const FeaturesOverview = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Automation',
      description: 'Smart workflows that adapt to your audience behavior and optimize send times automatically.',
      benefits: ['Smart Send Times', 'Behavioral Triggers', 'Auto-Optimization']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep insights into campaign performance with real-time tracking and predictive analytics.',
      benefits: ['Real-time Tracking', 'Predictive Insights', 'ROI Analysis']
    },
    {
      icon: Users,
      title: 'Audience Segmentation',
      description: 'Create precise audience segments based on behavior, demographics, and engagement.',
      benefits: ['Smart Segmentation', 'Dynamic Lists', 'Behavioral Targeting']
    },
    {
      icon: Shield,
      title: 'Deliverability Optimization',
      description: 'Ensure your emails reach the inbox with our advanced deliverability tools.',
      benefits: ['Spam Testing', 'Domain Authentication', 'Reputation Monitoring']
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Beautiful, responsive templates that look perfect on any device.',
      benefits: ['Responsive Templates', 'Mobile Preview', 'Touch-Friendly']
    },
    {
      icon: Globe,
      title: 'Global Compliance',
      description: 'Stay compliant with GDPR, CAN-SPAM, and other international regulations.',
      benefits: ['GDPR Compliant', 'Global Standards', 'Privacy Protection']
    }
  ]

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6 shadow-lg border border-primary-200">
            <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
            Everything You Need to Succeed
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Platform for <span className="text-gradient">Email Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and features you need 
            to create, send, and optimize email campaigns that drive results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group card-hover p-8 bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-primary-200 transition-all duration-500">
              
              {/* Animated Icon Container with Heading */}
              <div className="relative mb-6">
                {/* Animated Background Ring */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl animate-pulse group-hover:animate-none transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200/50 to-accent-200/50 rounded-3xl animate-ping group-hover:animate-pulse transition-all duration-300"></div>
                
                {/* Main Icon Container */}
                <div className="relative bg-gradient-to-br from-primary-50 to-accent-50 p-6 rounded-3xl group-hover:rounded-2xl transition-all duration-500 shadow-lg group-hover:shadow-xl border border-primary-100 group-hover:border-primary-200">
                  {/* Floating Particles */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-accent-400 rounded-full animate-bounce delay-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon with Enhanced Animation */}
                  <div className="flex flex-col items-center text-center">
                    <feature.icon className="h-8 w-8 text-primary-600 group-hover:text-primary-700 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-pulse group-hover:animate-none mb-3" />
                    
                    {/* Heading inside the icon block */}
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-3xl group-hover:rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <div className="absolute top-2 right-2 w-1 h-1 bg-primary-500 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '0s' }}></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-accent-500 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/2 right-0 w-0.5 h-0.5 bg-primary-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center space-x-2 group/item">
                    <CheckCircle className="h-4 w-4 text-primary-500 group-hover:text-accent-500 transition-colors duration-300 animate-pulse group/item-hover:animate-bounce" />
                    <span className="text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1 group-hover:translate-x-1 transition-all duration-300">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl border border-primary-500">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Email Marketing?
          </h3>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of businesses already using EmailVerse to grow their revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-primary-50 hover:text-primary-700 font-semibold py-3 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5">
              View All Features
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesOverview