'use client'

import { useEffect, useState } from 'react'
import { TrendingUp, Users, Mail, DollarSign, Globe, Zap } from 'lucide-react'

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('stats-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const stats = [
    {
      icon: Users,
      value: '2K+',
      label: 'Projects Delivered',
      description: 'Successful campaigns completed',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Mail,
      value: '1B+',
      label: 'Emails Sent Successfully',
      description: 'Messages delivered with high success rate',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: TrendingUp,
      value: '99%',
      label: 'Delivery Rate',
      description: 'Industry-leading deliverability',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: DollarSign,
      value: '$125M+',
      label: 'Revenue Generated',
      description: 'For our customers',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: Globe,
      value: 'Worldwide',
      label: 'Deliverability',
      description: 'Global reach and compliance',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    },
    {
      icon: Zap,
      value: '5x',
      label: 'Better ROI',
      description: 'Compared to traditional methods',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    }
  ]

  const achievements = [
    {
      title: 'Industry Recognition',
      items: [
        'Best Email Marketing Platform 2024',
        'Top rated on all freelancing platforms',
        'SOC 2 Type II Certified',
        'GDPR & CAN-SPAM Compliant'
      ]
    },
    {
      title: 'Customer Success',
      items: [
        '4.8/5 Average Rating',
        '95% Customer Retention',
        '24/7 Expert Support',
        '99.9% Uptime SLA'
      ]
    }
  ]

  return (
    <section id="stats-section" className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
      {/* Curved Top Design */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white">
        <svg className="absolute bottom-0 w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>

      {/* Curved Bottom Design */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-white">
        <svg className="absolute top-0 w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent-300/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-accent-400/15 rounded-full blur-xl animate-pulse delay-1500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          {/* Enhanced Badge with Animation */}
          <div className="relative inline-block mb-8">
            {/* Animated Background Rings */}
            <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
            <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse delay-500"></div>
            
            {/* Main Badge */}
            <div className="relative inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-lg text-white rounded-full text-lg font-semibold shadow-2xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-full"></div>
              <TrendingUp className="h-6 w-6 mr-3 animate-bounce group-hover:animate-pulse" />
              <span className="relative z-10">Trusted by Businesses Worldwide</span>
              
              {/* Floating Sparkles */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-white/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-white/40 rounded-full animate-ping delay-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Enhanced Title with Gradient Text */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">Join </span>
            <span className="bg-gradient-to-r from-white via-accent-200 to-white bg-clip-text text-transparent animate-pulse">
              hundreds of businesses
            </span>
            <span className="text-white block mt-2">already using EmailVerse to grow their revenue</span>
          </h2>
          
          {/* Enhanced Subtitle */}
          <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
            See the impact we're making across industries and around the globe with 
            <span className="text-white font-semibold"> AI-powered email marketing solutions</span>.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-white font-medium">SOC 2 Certified</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse delay-300"></div>
              <span className="text-sm text-white font-medium">99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse delay-600"></div>
              <span className="text-sm text-white font-medium">GDPR Compliant</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 relative z-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center transform transition-all duration-500 hover:scale-105 hover:bg-white/15 border border-white/20 shadow-xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`${stat.bgColor} p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              
              <div className="text-4xl font-bold mb-2 text-white group-hover:text-accent-200 transition-colors duration-300">{stat.value}</div>
              <div className="text-xl font-semibold text-primary-100 mb-2 group-hover:text-white transition-colors duration-300">{stat.label}</div>
              <div className="text-primary-200 group-hover:text-primary-100 transition-colors duration-300">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">{achievement.title}</h3>
              <div className="space-y-4">
                {achievement.items.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 group">
                    <div className="w-3 h-3 bg-accent-400 rounded-full group-hover:bg-accent-300 transition-colors duration-200 animate-pulse"></div>
                    <span className="text-primary-100 group-hover:text-white transition-colors duration-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 relative z-10">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-xl mb-8 text-primary-100">
              Get powerful email tools plus expert services to maximize your success.
            </p>
            <a 
              href="https://calendly.com/emailverse/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-primary-50 text-primary-700 hover:text-primary-800 font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-lg transform hover:-translate-y-1 inline-block text-center"
            >
              Start Growing Your Leads Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection