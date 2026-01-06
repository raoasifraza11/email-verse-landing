'use client'

import ContactForm from '@/components/ContactForm'
import { ArrowRight, CheckCircle, Zap, Users, Shield, Star, TrendingUp, Clock } from 'lucide-react'

const CTASection = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in under 5 minutes',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 customer success team',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 certified & GDPR compliant',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const features = [
    'Unlimited email sends',
    'AI-powered automation',
    'Real-time analytics',
    'A/B testing tools',
    'Mobile-responsive templates',
    'API access & integrations',
    'Advanced segmentation',
    'Deliverability optimization'
  ]

  const testimonialStats = [
    { value: '50K+', label: 'Active Users', icon: Users },
    { value: '2.5B+', label: 'Emails Sent', icon: TrendingUp },
    { value: '98.5%', label: 'Delivery Rate', icon: Shield },
    { value: '4.9/5', label: 'Customer Rating', icon: Star }
  ]

  const companyLogos = [
    'Microsoft', 'Shopify', 'Airbnb', 'Uber', 'Netflix', 'Spotify'
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16 animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-white rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                <Zap className="h-4 w-4 mr-2 animate-pulse" />
                Join 50,000+ Businesses Growing with EmailVerse
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Ready to Transform Your Email Marketing?
              </h2>
              
              <p className="text-xl opacity-90 leading-relaxed">
                Join thousands of businesses that trust EmailVerse to deliver 
                exceptional email campaigns and drive real results. Start your free trial today.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className={`bg-gradient-to-r ${benefit.color} p-4 rounded-2xl inline-block mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm opacity-80">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Everything you need to succeed:</h3>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Proof */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-4">Trusted by industry leaders:</h4>
                <div className="flex flex-wrap items-center gap-6 opacity-80">
                  {companyLogos.map((company, index) => (
                    <div key={index} className="text-sm font-semibold tracking-wider">
                      {company}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {testimonialStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <stat.icon className="h-5 w-5 text-white/80" />
                      <div className="text-2xl font-bold">{stat.value}</div>
                    </div>
                    <div className="text-sm opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:sticky lg:top-8">
            <ContactForm 
              title="Start Your Free Trial"
              subtitle="No credit card required • 14-day free trial • Cancel anytime"
            />
          </div>
        </div>

        {/* Bottom Section - Additional Trust Signals */}
        <div className="mt-16 pt-16 border-t border-white/20">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">Why businesses choose EmailVerse</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full inline-block mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">5x Better Results</h4>
                <p className="text-sm opacity-90">Our AI optimization delivers 5x better open rates and conversions compared to traditional platforms.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full inline-block mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Save 10+ Hours/Week</h4>
                <p className="text-sm opacity-90">Automated workflows and AI-powered features save you time while improving performance.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full inline-block mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Enterprise Security</h4>
                <p className="text-sm opacity-90">SOC 2 certified with 99.9% uptime SLA and GDPR compliance built-in.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection