'use client'

import { useState } from 'react'
import { Calculator, TrendingUp, DollarSign, Users, Mail, BarChart3, Target, Zap } from 'lucide-react'

export default function ROICalculatorPage() {
  const [formData, setFormData] = useState({
    emailsPerDay: '',
    sequences: '',
    platform: '',
    niche: '',
    productPrice: '',
    currentConversion: '',
    currentOpenRate: '',
    currentClickRate: ''
  })
  
  const [results, setResults] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const platforms = [
    { name: 'Instantly', description: 'Best for high-volume outreach', price: '$37/month' },
    { name: 'Smartlead', description: 'Advanced automation features', price: '$39/month' },
    { name: 'Mailwizz', description: 'Self-hosted solution', price: '$59/month' }
  ]

  const niches = [
    { name: 'SaaS', avgConversion: '3.2%', avgPrice: '$97' },
    { name: 'Real Estate', avgConversion: '2.8%', avgPrice: '$2,500' },
    { name: 'Lead Generation', avgConversion: '4.1%', avgPrice: '$150' },
    { name: 'E-commerce', avgConversion: '2.5%', avgPrice: '$85' },
    { name: 'Consulting', avgConversion: '3.8%', avgPrice: '$500' },
    { name: 'Agency Services', avgConversion: '3.5%', avgPrice: '$1,200' }
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const calculateROI = () => {
    setIsCalculating(true)
    
    setTimeout(() => {
      const emailsPerDay = parseInt(formData.emailsPerDay) || 0
      const sequences = parseInt(formData.sequences) || 3
      const productPrice = parseFloat(formData.productPrice) || 0
      const currentConversion = parseFloat(formData.currentConversion) || 1.5
      const currentOpenRate = parseFloat(formData.currentOpenRate) || 25
      const currentClickRate = parseFloat(formData.currentClickRate) || 3

      // EmailVerse improvements
      const improvedOpenRate = Math.min(currentOpenRate * 1.8, 65) // Up to 80% improvement
      const improvedClickRate = Math.min(currentClickRate * 2.2, 15) // Up to 120% improvement
      const improvedConversion = Math.min(currentConversion * 2.5, 12) // Up to 150% improvement

      // Monthly calculations
      const monthlyEmails = emailsPerDay * 30
      const monthlyOpens = monthlyEmails * (improvedOpenRate / 100)
      const monthlyClicks = monthlyOpens * (improvedClickRate / 100)
      const monthlyConversions = monthlyClicks * (improvedConversion / 100)
      const monthlyRevenue = monthlyConversions * productPrice

      // Current performance
      const currentMonthlyOpens = monthlyEmails * (currentOpenRate / 100)
      const currentMonthlyClicks = currentMonthlyOpens * (currentClickRate / 100)
      const currentMonthlyConversions = currentMonthlyClicks * (currentConversion / 100)
      const currentMonthlyRevenue = currentMonthlyConversions * productPrice

      // ROI calculation
      const emailVerseInvestment = 497 // Monthly service cost
      const platformCost = formData.platform === 'Instantly' ? 37 : formData.platform === 'Smartlead' ? 39 : 59
      const totalMonthlyCost = emailVerseInvestment + platformCost
      
      const additionalRevenue = monthlyRevenue - currentMonthlyRevenue
      const roi = ((additionalRevenue - totalMonthlyCost) / totalMonthlyCost) * 100

      setResults({
        monthlyEmails: monthlyEmails.toLocaleString(),
        monthlyOpens: Math.round(monthlyOpens).toLocaleString(),
        monthlyClicks: Math.round(monthlyClicks).toLocaleString(),
        monthlyConversions: Math.round(monthlyConversions),
        monthlyRevenue: monthlyRevenue.toLocaleString(),
        currentRevenue: currentMonthlyRevenue.toLocaleString(),
        additionalRevenue: additionalRevenue.toLocaleString(),
        roi: Math.round(roi),
        totalCost: totalMonthlyCost.toLocaleString(),
        paybackPeriod: Math.ceil(totalMonthlyCost / (additionalRevenue / 30)),
        improvements: {
          openRate: Math.round(((improvedOpenRate - currentOpenRate) / currentOpenRate) * 100),
          clickRate: Math.round(((improvedClickRate - currentClickRate) / currentClickRate) * 100),
          conversion: Math.round(((improvedConversion - currentConversion) / currentConversion) * 100)
        }
      })
      
      setIsCalculating(false)
    }, 2000)
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <Calculator className="h-4 w-4 mr-2" />
            Free ROI Calculator
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Email Marketing
            <span className="text-primary-600 block">ROI Calculator</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Calculate your potential return on investment with EmailVerse. See how much additional 
            revenue you could generate with our proven email marketing strategies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                <Mail className="h-8 w-8 text-primary-600 mx-auto" />
              </div>
              <div className="text-sm font-medium text-gray-700">Email Volume</div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                <TrendingUp className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <div className="text-sm font-medium text-gray-700">Performance</div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                <DollarSign className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <div className="text-sm font-medium text-gray-700">Revenue</div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                <BarChart3 className="h-8 w-8 text-purple-600 mx-auto" />
              </div>
              <div className="text-sm font-medium text-gray-700">ROI Analysis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Step {currentStep} of 4</span>
              <span className="text-sm font-medium text-gray-700">{Math.round((currentStep / 4) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
            {/* Step 1: Email Volume */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <Mail className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Email Volume & Sequences</h2>
                  <p className="text-gray-600">Tell us about your email outreach goals</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      How many emails do you want to send per day?
                    </label>
                    <input
                      type="number"
                      value={formData.emailsPerDay}
                      onChange={(e) => handleInputChange('emailsPerDay', e.target.value)}
                      placeholder="e.g., 100"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                    <p className="text-sm text-gray-500 mt-1">Recommended: 50-200 emails per day</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      How many email sequences? (minimum 3)
                    </label>
                    <input
                      type="number"
                      value={formData.sequences}
                      onChange={(e) => handleInputChange('sequences', e.target.value)}
                      placeholder="e.g., 5"
                      min="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                    <p className="text-sm text-gray-500 mt-1">More sequences = better conversion rates</p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Platform & Niche */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <Target className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Platform & Industry</h2>
                  <p className="text-gray-600">Choose your preferred platform and business niche</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-4">
                    Which platform do you prefer?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {platforms.map((platform) => (
                      <div
                        key={platform.name}
                        onClick={() => handleInputChange('platform', platform.name)}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                          formData.platform === platform.name
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                      >
                        <h3 className="font-semibold text-gray-900">{platform.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{platform.description}</p>
                        <p className="text-sm font-medium text-primary-600">{platform.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-4">
                    What's your business niche?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {niches.map((niche) => (
                      <div
                        key={niche.name}
                        onClick={() => handleInputChange('niche', niche.name)}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                          formData.niche === niche.name
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                      >
                        <h3 className="font-semibold text-gray-900">{niche.name}</h3>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Avg. Conv: {niche.avgConversion}</span>
                          <span>Avg. Price: {niche.avgPrice}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Pricing & Current Performance */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <DollarSign className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Pricing & Performance</h2>
                  <p className="text-gray-600">Tell us about your product pricing and current metrics</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Average product/service price ($)
                    </label>
                    <input
                      type="number"
                      value={formData.productPrice}
                      onChange={(e) => handleInputChange('productPrice', e.target.value)}
                      placeholder="e.g., 497"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Current conversion rate (%)
                    </label>
                    <input
                      type="number"
                      value={formData.currentConversion}
                      onChange={(e) => handleInputChange('currentConversion', e.target.value)}
                      placeholder="e.g., 2.5"
                      step="0.1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Current open rate (%)
                    </label>
                    <input
                      type="number"
                      value={formData.currentOpenRate}
                      onChange={(e) => handleInputChange('currentOpenRate', e.target.value)}
                      placeholder="e.g., 25"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Current click rate (%)
                    </label>
                    <input
                      type="number"
                      value={formData.currentClickRate}
                      onChange={(e) => handleInputChange('currentClickRate', e.target.value)}
                      placeholder="e.g., 3"
                      step="0.1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Results */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <BarChart3 className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Calculate Your ROI</h2>
                  <p className="text-gray-600">Ready to see your potential return on investment?</p>
                </div>

                {!results && (
                  <div className="text-center">
                    <button
                      onClick={calculateROI}
                      disabled={isCalculating}
                      className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
                    >
                      {isCalculating ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Calculating...</span>
                        </>
                      ) : (
                        <>
                          <Calculator className="h-5 w-5" />
                          <span>Calculate My ROI</span>
                        </>
                      )}
                    </button>
                  </div>
                )}

                {results && (
                  <div className="space-y-6">
                    {/* ROI Summary */}
                    <div className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-8 text-center">
                      <div className="text-6xl font-bold text-green-600 mb-2">{results.roi}%</div>
                      <div className="text-xl font-semibold text-gray-800 mb-4">Projected ROI</div>
                      <div className="text-lg text-gray-700">
                        Additional monthly revenue: <span className="font-bold text-green-600">${results.additionalRevenue}</span>
                      </div>
                    </div>

                    {/* Detailed Results */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                        <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-gray-900 mb-1">{results.monthlyEmails}</div>
                        <div className="text-sm text-gray-600">Monthly Emails</div>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                        <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-gray-900 mb-1">{results.monthlyConversions}</div>
                        <div className="text-sm text-gray-600">Monthly Conversions</div>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                        <DollarSign className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-gray-900 mb-1">${results.monthlyRevenue}</div>
                        <div className="text-sm text-gray-600">Monthly Revenue</div>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                        <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-gray-900 mb-1">{results.paybackPeriod} days</div>
                        <div className="text-sm text-gray-600">Payback Period</div>
                      </div>
                    </div>

                    {/* Improvements */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Expected Improvements with EmailVerse</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600 mb-1">+{results.improvements.openRate}%</div>
                          <div className="text-sm text-blue-700">Open Rate Improvement</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600 mb-1">+{results.improvements.clickRate}%</div>
                          <div className="text-sm text-green-700">Click Rate Improvement</div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600 mb-1">+{results.improvements.conversion}%</div>
                          <div className="text-sm text-purple-700">Conversion Improvement</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center bg-primary-50 border border-primary-200 rounded-xl p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Achieve These Results?</h3>
                      <p className="text-gray-600 mb-6">
                        Schedule a free consultation to discuss how EmailVerse can help you reach these projections.
                      </p>
                      <a 
                        href="https://calendly.com/emailverse/consultation" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block text-center"
                      >
                        Start Growing Your Leads Now
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className="bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {currentStep < 4 && (
                <button
                  onClick={nextStep}
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Next Step
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Turn These Projections into Reality?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get professional email marketing services and start seeing real results in your business.
          </p>
          <a 
            href="https://calendly.com/emailverse/consultation" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block text-center"
          >
            Start Growing Your Leads Now
          </a>
        </div>
      </section>
    </div>
  )
}