'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Play, CheckCircle, ArrowRight, Zap, Users, TrendingUp, Star, Shield, Clock, Sparkles } from 'lucide-react'
import EmailVerseLogo from '../EmailVerseLogo'

const HeroSection = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    
    setIsSubmitting(true)
    
    try {
      // Simulate API call - in a real app, you'd call your API here
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setIsSubmitting(false)
      setShowSuccess(true)
      setEmail('')
      
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000)
    } catch (error) {
      console.error('Email signup error:', error)
      setIsSubmitting(false)
    }
  }

  const features = [
    { icon: Zap, text: 'AI-Powered Automation', color: 'text-primary-500' },
    { icon: TrendingUp, text: 'Advanced Analytics', color: 'text-primary-600' },
    { icon: Shield, text: 'Enterprise Security', color: 'text-primary-700' },
    { icon: Clock, text: 'Real-time Delivery', color: 'text-accent-600' }
  ]

  const stats = [
    { icon: Users, value: '50K+', label: 'Active Users', color: 'from-primary-500 to-primary-600' },
    { icon: TrendingUp, value: '98.5%', label: 'Delivery Rate', color: 'from-accent-500 to-accent-600' },
    { icon: Zap, value: '5x', label: 'Better ROI', color: 'from-primary-600 to-primary-700' },
  ]

  const trustBadges = [
    { text: 'SOC 2 Certified', icon: Shield },
    { text: '99.9% Uptime', icon: Clock },
    { text: '4.9★ Rating', icon: Star }
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-white overflow-hidden">
      {/* Animated Side Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left Side Animations */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-primary-100/30 to-transparent">
          <div className="absolute top-20 left-4 w-4 h-4 bg-primary-500 rounded-full animate-bounce delay-100"></div>
          <div className="absolute top-40 left-8 w-3 h-3 bg-accent-500 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-60 left-2 w-5 h-5 bg-primary-400 rounded-full animate-bounce delay-500"></div>
          <div className="absolute top-80 left-6 w-2 h-2 bg-accent-600 rounded-full animate-bounce delay-700"></div>
          
          {/* Floating Icons */}
          <div className="absolute top-32 left-6 animate-pulse delay-200">
            <EmailVerseLogo className="h-6 w-6 opacity-60" showText={false} />
          </div>
          <div className="absolute top-72 left-4 animate-pulse delay-600">
            <Sparkles className="h-5 w-5 text-accent-500 opacity-60" />
          </div>
        </div>

        {/* Right Side Animations */}
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-primary-100/30 to-transparent">
          <div className="absolute top-32 right-4 w-4 h-4 bg-accent-500 rounded-full animate-bounce delay-200"></div>
          <div className="absolute top-52 right-8 w-3 h-3 bg-primary-500 rounded-full animate-bounce delay-400"></div>
          <div className="absolute top-72 right-2 w-5 h-5 bg-accent-400 rounded-full animate-bounce delay-600"></div>
          <div className="absolute top-96 right-6 w-2 h-2 bg-primary-600 rounded-full animate-bounce delay-800"></div>
          
          {/* Floating Icons */}
          <div className="absolute top-44 right-6 animate-pulse delay-300">
            <TrendingUp className="h-6 w-6 text-primary-500 opacity-60" />
          </div>
          <div className="absolute top-84 right-4 animate-pulse delay-700">
            <Shield className="h-5 w-5 text-accent-500 opacity-60" />
          </div>
        </div>

        {/* Central Background Elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200/20 to-accent-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent-200/20 to-primary-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary-100/10 to-accent-100/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8 z-10 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-800 rounded-full text-sm font-medium shadow-lg border border-primary-200">
                <Zap className="h-4 w-4 mr-2 animate-pulse" />
                #1 Email Marketing Platform - Trusted by 50K+ Businesses
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Scale Your Email Marketing with
                <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-800 bg-clip-text text-transparent block mt-2">
                  AI-Powered Precision
                </span>
              </h1>
              
              <p className="text-xl text-secondary-700 leading-relaxed max-w-2xl">
                Send personalized campaigns that convert 5x better. Automate your workflows, 
                analyze performance in real-time, and grow your business with our advanced email marketing platform.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-primary-100 hover:shadow-md transition-all duration-300 min-h-[64px]">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200">
                    <feature.icon className={`h-5 w-5 ${feature.color}`} />
                  </div>
                  <span className="text-secondary-800 font-medium text-sm leading-tight flex-1">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Form */}
            <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="flex-1 px-4 py-4 border-2 border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 shadow-sm text-secondary-900 placeholder-secondary-500"
                  required
                  disabled={isSubmitting}
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-gradient-primary hover:shadow-lg hover:shadow-primary-500/25 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 min-w-[160px]"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <span>Start Free Trial</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
              
              {showSuccess && (
                <div className="flex items-center space-x-2 text-primary-700 bg-primary-50 p-4 rounded-xl border border-primary-200">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">Success! Check your email for next steps.</span>
                </div>
              )}
            </form>

            <div className="flex flex-wrap items-center gap-4 text-sm text-secondary-600 max-w-2xl">
              <span className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-primary-500" />
                <span>Free 14-day trial</span>
              </span>
              <span className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-primary-500" />
                <span>No credit card required</span>
              </span>
              <span className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-primary-500" />
                <span>Cancel anytime</span>
              </span>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-4 max-w-2xl">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-primary-200 shadow-sm">
                  <badge.icon className="h-4 w-4 text-primary-600" />
                  <span className="text-sm font-medium text-secondary-700">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-primary-200 max-w-2xl">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-xl shadow-lg`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary-900">{stat.value}</div>
                    <div className="text-sm text-secondary-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Interactive Visual */}
          <div className="relative z-10 flex items-center justify-center">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500 border-2 border-primary-100 max-w-md w-full">
              <div className="space-y-6">
                {/* Mock Email Campaign Dashboard */}
                <div className="border-b border-primary-200 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-secondary-900">Live Campaign Dashboard</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-secondary-500">LIVE</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border border-primary-200">
                      <div className="text-2xl font-bold text-primary-700">24.5%</div>
                      <div className="text-xs text-primary-600">Open Rate</div>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl border border-accent-200">
                      <div className="text-2xl font-bold text-accent-700">8.2%</div>
                      <div className="text-xs text-accent-600">Click Rate</div>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl border border-secondary-200">
                      <div className="text-2xl font-bold text-secondary-700">$12.4K</div>
                      <div className="text-xs text-secondary-600">Revenue</div>
                    </div>
                  </div>
                </div>

                {/* Mock Email Preview */}
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-4 border border-primary-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <EmailVerseLogo className="w-8 h-8" showText={false} />
                      <div>
                        <div className="text-sm font-medium text-secondary-900">EmailVerse</div>
                        <div className="text-xs text-secondary-500">Holiday Campaign</div>
                      </div>
                    </div>
                    <div className="text-xs text-secondary-500">2 min ago</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gradient-to-r from-secondary-300 to-secondary-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gradient-to-r from-secondary-300 to-secondary-200 rounded w-1/2"></div>
                    <div className="h-20 bg-gradient-to-r from-primary-100 via-primary-200 to-primary-100 rounded-lg flex items-center justify-center border border-primary-200">
                      <span className="text-primary-700 font-semibold">🎉 50% OFF</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/95 hover:bg-white p-6 rounded-full shadow-2xl transition-all duration-300 group border-4 border-primary-100 hover:border-primary-200">
                    <Play className="h-10 w-10 text-primary-600 group-hover:scale-110 transition-transform ml-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Success Indicators */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white p-3 rounded-full shadow-lg animate-bounce">
              <CheckCircle className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white p-3 rounded-full shadow-lg animate-pulse">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-primary-600 to-primary-700 text-white p-2 rounded-full shadow-lg animate-ping">
              <Zap className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection