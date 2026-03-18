'use client'

import React, { useState } from 'react'
import { 
  Mail, 
  FileText, 
  Target, 
  BarChart3, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Download,
  Eye,
  Clock,
  Sparkles,
  TrendingUp,
  Users,
  Brain,
  Palette,
  Search,
  Settings,
  Star,
  Shield,
  Calculator
} from 'lucide-react'

const FreeToolsSection = () => {
  const [activeTool, setActiveTool] = useState(0)
  const [isToolLoading, setIsToolLoading] = useState(false)

  const tools = [
    {
      id: 0,
      name: 'Subject Line Optimizer',
      description: 'AI-powered subject line analysis for maximum open rates',
      icon: Brain,
      gradient: 'from-accent-500 to-accent-600',
      features: ['AI Analysis', 'Spam Score Check', 'A/B Test Suggestions', 'Performance Prediction'],
      demo: {
        title: 'Optimize Subject Lines',
        content: 'Get instant AI feedback on your subject line effectiveness.',
        mockData: {
          score: 87,
          improvement: '+23%',
          suggestions: 5
        }
      }
    },
    {
      id: 1,
      name: 'Email Spam Checker',
      description: 'Analyze your emails to avoid spam filters and improve deliverability',
      icon: Shield,
      gradient: 'from-red-500 to-red-600',
      features: ['Spam Score Analysis', 'Word Highlighting', 'Deliverability Tips', 'Instant Results'],
      demo: {
        title: 'Check Spam Score',
        content: 'Ensure your emails reach the inbox with our spam detection tool.',
        mockData: {
          score: '87/100',
          words: '12 flagged',
          status: 'Good'
        }
      }
    },
    {
      id: 2,
      name: 'ROI Calculator',
      description: 'Calculate your potential return on investment with email marketing',
      icon: Calculator,
      gradient: 'from-green-600 to-green-700',
      features: ['Revenue Projections', 'Cost Analysis', 'Performance Metrics', 'Industry Benchmarks'],
      demo: {
        title: 'Calculate ROI',
        content: 'See your potential return on investment with detailed projections.',
        mockData: {
          roi: '540%',
          revenue: '$24.7K',
          payback: '12 days'
        }
      }
    }
  ]

  const stats = [
    { label: 'Projects Delivered', value: '1K+', icon: Mail, color: 'text-blue-600' },
    { label: 'Subject Lines Analyzed', value: '35K+', icon: FileText, color: 'text-green-600' },
    { label: 'Campaigns Optimized', value: '25K+', icon: Target, color: 'text-purple-600' },
    { label: 'Outbound Machines Delivered', value: '2K+', icon: BarChart3, color: 'text-orange-600' }
  ]

  const handleToolDemo = async (toolId: number) => {
    setIsToolLoading(true)
    setActiveTool(toolId)
    
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 800))
    setIsToolLoading(false)
  }

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-full text-sm font-medium mb-4 shadow-lg border border-primary-200">
            <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
            Free AI-Powered Tools & Resources
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful AI Tools to <span className="text-gradient">Supercharge</span> Your Email Marketing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our suite of AI-powered tools designed to help you create, optimize, and analyze 
            your email campaigns for maximum impact and ROI.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Tools List */}
          <div className="space-y-4">
            {tools.map((tool, index) => (
              <div
                key={tool.id}
                className={`group cursor-pointer transition-all duration-300 ${
                  activeTool === index 
                    ? 'transform scale-105' 
                    : 'hover:transform hover:scale-102'
                }`}
                onClick={() => handleToolDemo(index)}
              >
                <div className={`relative overflow-hidden rounded-2xl p-6 ${
                  activeTool === index 
                    ? 'bg-white shadow-2xl ring-2 ring-primary-500 ring-opacity-50' 
                    : 'bg-white shadow-lg hover:shadow-xl border border-gray-100'
                }`}>
                  {/* Corner Decoration */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${tool.gradient} opacity-10 rounded-bl-full`}></div>
                  <div className={`absolute top-2 right-2 w-3 h-3 bg-gradient-to-br ${tool.gradient} rounded-full ${activeTool === index ? 'animate-pulse' : ''}`}></div>
                  
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className={`bg-gradient-to-br ${tool.gradient} p-4 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 ${activeTool === index ? 'animate-pulse' : ''}`}>
                      <tool.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                        {activeTool === index && (
                          <div className="flex items-center space-x-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span>Active</span>
                          </div>
                        )}
                      </div>
                      <p className="text-gray-600 mb-4">{tool.description}</p>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {tool.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      {tool.id === 0 ? (
                        <a 
                          href="/subject-line-optimizer"
                          className={`flex items-center space-x-2 text-sm font-medium transition-all duration-200 ${
                            activeTool === index 
                              ? 'text-primary-700' 
                              : 'text-primary-600 hover:text-primary-700'
                          }`}
                        >
                          <span>Try Free Tool</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      ) : tool.id === 1 ? (
                        <a 
                          href="/spam-checker"
                          className={`flex items-center space-x-2 text-sm font-medium transition-all duration-200 ${
                            activeTool === index 
                              ? 'text-primary-700' 
                              : 'text-primary-600 hover:text-primary-700'
                          }`}
                        >
                          <span>Try Free Tool</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      ) : tool.id === 2 ? (
                        <a 
                          href="/roi-calculator"
                          className={`flex items-center space-x-2 text-sm font-medium transition-all duration-200 ${
                            activeTool === index 
                              ? 'text-primary-700' 
                              : 'text-primary-600 hover:text-primary-700'
                          }`}
                        >
                          <span>Try Free Tool</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tool Demo */}
          <div className="sticky top-8">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Demo Header */}
              <div className={`bg-gradient-to-r ${tools[activeTool].gradient} p-6 text-white relative overflow-hidden`}>
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16 animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12 animate-pulse delay-500"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl animate-bounce">
                      {React.createElement(tools[activeTool].icon, { className: "h-8 w-8" })}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{tools[activeTool].demo.title}</h3>
                      <p className="text-white/90 text-sm">{tools[activeTool].demo.content}</p>
                    </div>
                  </div>
                  
                  {/* Live Stats with Animation */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(tools[activeTool].demo.mockData).map(([key, value], idx) => (
                      <div key={idx} className="text-center transform hover:scale-105 transition-transform duration-200">
                        <div className="text-2xl font-bold animate-pulse">{value}</div>
                        <div className="text-xs text-white/80 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mock Interface with Enhanced Visuals */}
              <div className="p-6">
                {isToolLoading ? (
                  <div className="flex items-center justify-center h-40">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading AI tool...</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Browser Header */}
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
                      </div>
                      <div className="text-sm text-gray-500 font-medium">EmailVerse AI Tool</div>
                    </div>
                    
                    {/* Enhanced Mock Interface */}
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 space-y-4 border border-gray-200 shadow-inner">
                      {/* Email Template Preview */}
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center animate-pulse">
                            <span className="text-white text-sm font-bold">EV</span>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">EmailVerse Campaign</div>
                            <div className="text-xs text-gray-500">AI-Generated Template</div>
                          </div>
                        </div>
                        
                        {/* Animated Content Bars */}
                        <div className="space-y-2">
                          <div className="h-3 bg-gradient-to-r from-gray-300 to-gray-200 rounded w-3/4 animate-pulse"></div>
                          <div className="h-3 bg-gradient-to-r from-gray-300 to-gray-200 rounded w-1/2 animate-pulse delay-100"></div>
                          
                          {/* Featured Content Area */}
                          <div className={`h-24 bg-gradient-to-r ${tools[activeTool].gradient} opacity-20 rounded-lg flex items-center justify-center relative overflow-hidden`}>
                            {/* Animated Background Elements */}
                            <div className="absolute inset-0">
                              <div className="absolute top-2 left-2 w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
                              <div className="absolute bottom-2 right-2 w-3 h-3 bg-white/30 rounded-full animate-bounce delay-300"></div>
                            </div>
                            {React.createElement(tools[activeTool].icon, { className: "h-12 w-12 text-gray-400 animate-pulse" })}
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="flex space-x-2 pt-2">
                            <div className={`h-8 bg-gradient-to-r ${tools[activeTool].gradient} rounded-lg w-20 flex items-center justify-center shadow-sm animate-pulse`}>
                              <span className="text-white text-xs font-medium">Analyze</span>
                            </div>
                            <div className="h-8 bg-gray-200 rounded-lg w-16 animate-pulse delay-200"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Performance Metrics */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-primary-50 border border-primary-200 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-primary-700 animate-pulse">+23%</div>
                          <div className="text-xs text-primary-600">Improvement</div>
                        </div>
                        <div className="bg-accent-50 border border-accent-200 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-accent-700 animate-pulse delay-100">AI Score</div>
                          <div className="text-xs text-accent-600">87/100</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Enhanced Action Buttons */}
              <div className="p-6 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
                <div className="flex space-x-3">
                  {activeTool === 0 ? (
                    <a 
                      href="/subject-line-optimizer"
                      className={`flex-1 bg-gradient-to-r ${tools[activeTool].gradient} hover:opacity-90 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2`}
                    >
                      <Eye className="h-4 w-4" />
                      <span>Try Now</span>
                    </a>
                  ) : activeTool === 1 ? (
                    <a 
                      href="/spam-checker"
                      className={`flex-1 bg-gradient-to-r ${tools[activeTool].gradient} hover:opacity-90 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2`}
                    >
                      <Eye className="h-4 w-4" />
                      <span>Try Now</span>
                    </a>
                  ) : activeTool === 2 ? (
                    <a 
                      href="/roi-calculator"
                      className={`flex-1 bg-gradient-to-r ${tools[activeTool].gradient} hover:opacity-90 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2`}
                    >
                      <Eye className="h-4 w-4" />
                      <span>Try Now</span>
                    </a>
                  ) : (
                    <button className={`flex-1 bg-gradient-to-r ${tools[activeTool].gradient} hover:opacity-90 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2`}>
                      <Eye className="h-4 w-4" />
                      <span>Try Now</span>
                    </button>
                  )}
                  <button className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-lg border-2 border-gray-300 hover:border-primary-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Export</span>
                  </button>
                </div>
                
                {/* Progress Indicator */}
                <div className="mt-4 flex items-center space-x-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className={`bg-gradient-to-r ${tools[activeTool].gradient} h-2 rounded-full transition-all duration-1000 ease-out`} 
                         style={{ width: `${((activeTool + 1) / tools.length) * 100}%` }}></div>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">{activeTool + 1}/{tools.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Stats */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Trusted by <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Hundreds</span> of Marketers
            </h3>
            <p className="text-gray-600">
              See how our AI-powered tools are making a difference worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-primary-50 group-hover:to-secondary-50 p-4 rounded-2xl inline-block mb-4 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <stat.icon className={`h-8 w-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Ready to supercharge your email marketing?</h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://calendly.com/info-51729/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 inline-block text-center"
              >
                <Sparkles className="h-5 w-5" />
                <span>Start Growing Your Leads Now</span>
              </a>
              <button className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-8 rounded-lg border-2 border-gray-300 hover:border-primary-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                <Eye className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FreeToolsSection