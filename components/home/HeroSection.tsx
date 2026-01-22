'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Play, CheckCircle, ArrowRight, Zap, Users, TrendingUp, Star, Shield, Clock, Sparkles } from 'lucide-react'
import EmailVerseLogo from '../EmailVerseLogo'
import ROICalculator from './ROICalculator'

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
    { icon: TrendingUp, text: 'Lead Nurturing Workflows', color: 'text-primary-600' },
    { icon: Shield, text: 'Personalized Outreach', color: 'text-primary-700' },
    { icon: Clock, text: 'ROI Maximization', color: 'text-accent-600' }
  ]

  const stats = [
    { icon: Users, value: '2K+', label: 'Projects Delivered', color: 'from-primary-500 to-primary-600' },
    { icon: TrendingUp, value: '99%', label: 'Delivery Rate', color: 'from-accent-500 to-accent-600' },
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
            <EmailVerseLogo className="h-6 w-auto opacity-60" showText={false} />
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[75vh]">
          {/* Left Column - Content */}
          <div className="space-y-10 z-10 flex flex-col justify-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-800 rounded-full text-sm font-medium shadow-lg border border-primary-200 animate-bounce">
                <Zap className="h-4 w-4 mr-3 animate-pulse" />
                Tailored for B2B, B2C, SaaS, Real Estate & many more...
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="inline-block text-gray-900 animate-fade-in-up">Email Verse</span>
                  <br />
                  <span className="inline-block text-gray-900 animate-fade-in-up animation-delay-200">delivers</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-800 bg-clip-text text-transparent animate-fade-in-up animation-delay-400">
                    AI-driven Solutions
                  </span>
                </h1>
              </div>
              
              <div className="space-y-6 animate-fade-in-up animation-delay-600">
                <p className="text-xl text-secondary-700 leading-relaxed max-w-3xl">
                  Tailored for <span className="font-bold text-primary-600 animate-pulse">B2B, SaaS, and Real Estate</span>. 
                </p>
                <p className="text-lg text-secondary-600 leading-relaxed max-w-3xl">
                  Our platform automates campaigns, nurtures leads, and maximizes ROI through 
                  intelligent workflows and personalized outreach.
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl animate-fade-in-up animation-delay-800">
              {features.map((feature, index) => (
                <div key={index} className={`flex items-center space-x-4 p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-primary-100 hover:shadow-xl transition-all duration-300 min-h-[80px] animate-fade-in-up animation-delay-${(index + 5) * 200}`}>
                  <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 pulse-glow">
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <span className="text-secondary-800 font-semibold text-base leading-tight flex-1">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="space-y-6 animate-fade-in-up animation-delay-1000">
              <div className="space-y-6 max-w-4xl">
                <div className="flex justify-start">
                  <a 
                    href="https://calendly.com/emailverse/consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-primary hover:shadow-lg hover:shadow-primary-500/25 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-3 min-w-[200px] pulse-glow text-lg"
                  >
                    <span>Start Growing Your Leads Now</span>
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 text-base text-secondary-600 max-w-4xl">
                <span className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary-500" />
                  <span>Free consultation</span>
                </span>
                <span className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary-500" />
                  <span>No commitment required</span>
                </span>
                <span className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary-500" />
                  <span>Cancel anytime</span>
                </span>
              </div>
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

          {/* Right Column - ROI Calculator */}
          <div className="relative z-10 flex items-start justify-center lg:justify-end">
            <div className="w-full max-w-lg mx-auto lg:mx-0">
              <ROICalculator />
            </div>

            {/* Floating Success Indicators */}
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white p-2 rounded-full shadow-lg animate-bounce">
              <CheckCircle className="h-5 w-5" />
            </div>
            <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white p-2 rounded-full shadow-lg animate-pulse">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div className="absolute top-1/2 -right-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white p-1.5 rounded-full shadow-lg animate-ping">
              <Zap className="h-3 w-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection