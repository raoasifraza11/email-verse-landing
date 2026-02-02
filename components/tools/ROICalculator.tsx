'use client'

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Mail, 
  Target,
  Sparkles,
  Calendar,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

interface ChatState {
  currentStep: number
  emailsPerDay: number | null
  sequences: number | null
  sendingTool: string | null
  warmingPlan: string | null
  premiumMailboxes: string | null
  industry: string | null
  productPrice: number | null
}

interface Message {
  type: 'ai' | 'user'
  content: string
  isTyping?: boolean
}

interface ROIReport {
  domainsNeeded: number
  domainCostYearly: number
  vpsCostMonthly: number
  warmingCost: number
  apiCost: number
  toolCost: number
  configCost: number
  totalMonthlyCost: number
  uniqueVolume: number
  totalVolume: number
  opens: number
  replies: number
  positives: number
  monthlyRevenue: number
  annualRevenue: number
  monthlyProfit: number
  annualProfit: number
  roiPercent: string
  premiumMailboxes: boolean
}

export default function ROICalculator() {
  const [chatState, setChatState] = useState<ChatState>({
    currentStep: 0,
    emailsPerDay: null,
    sequences: null,
    sendingTool: null,
    warmingPlan: null,
    premiumMailboxes: null,
    industry: null,
    productPrice: null
  })

  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'ai',
      content: "👋 Hello! I'm your AI ROI Assistant. Let's calculate your potential ROI together!\n\nHow many emails do you want to send per day?"
    }
  ])

  const [currentInput, setCurrentInput] = useState('')
  const [inputType, setInputType] = useState<'number' | 'options'>('number')
  const [options, setOptions] = useState<Array<{value: string, label: string, description: string}>>([])
  const [isTyping, setIsTyping] = useState(false)
  const [report, setReport] = useState<ROIReport | null>(null)

  const questions = [
    {
      type: 'number' as const,
      message: "👋 Hello! I'm your AI ROI Assistant. Let's calculate your potential ROI together!\n\nHow many emails do you want to send per day?",
      hint: "💡 Tip: Most businesses start with 1,000-2,000 emails per day",
      field: 'emailsPerDay' as keyof ChatState,
      validation: (val: number) => val > 0
    },
    {
      type: 'number' as const,
      message: "Great! Now, how many email sequences do you want to send?",
      hint: "💡 Recommendation: We suggest a minimum of 3 sequences (1 initial + 2 follow-ups) for best results",
      field: 'sequences' as keyof ChatState,
      validation: (val: number) => val > 0,
      warning: (val: number) => val > 5 ? "⚠️ Note: More than 5 sequences may increase spam complaints. Proceed with caution!" : null
    },
    {
      type: 'options' as const,
      message: "Which sending platform do you prefer to use?",
      hint: "💡 Each platform has different pricing and features",
      field: 'sendingTool' as keyof ChatState,
      options: (state: ChatState) => {
        const opts = [
          { value: 'instantly', label: 'Instantly - $97/month', description: '✨ Popular choice with great features' },
          { value: 'smartlead', label: 'Smartlead - $94/month', description: '🚀 Cost-effective and reliable' }
        ]
        if (state.emailsPerDay && state.emailsPerDay >= 4000 && state.emailsPerDay <= 5000) {
          opts.push({ value: 'mailwizz', label: 'Mailwizz - $90 one-time', description: '💎 Best for high volume (4000-5000/day)' })
        }
        return opts
      }
    },
    {
      type: 'options' as const,
      message: "Do you want to use a premium warming service or your sending tool's built-in warming?",
      hint: "💡 Warming helps improve email deliverability",
      field: 'warmingPlan' as keyof ChatState,
      options: () => [
        { value: 'premium', label: 'Premium Warming - $19/domain/month', description: '🔥 Maximum deliverability (first 2 months only)' },
        { value: 'inbuilt', label: 'Built-in Warming - No Cost', description: '✅ Included with your sending tool' }
      ]
    },
    {
      type: 'options' as const,
      message: "Would you like to use Gsuite and Microsoft account combination to make your inbox deliverability bulletproof?",
      hint: "💡 This adds 8 Gsuite and 25 Microsoft mailboxes to your infrastructure for superior deliverability (+$100/month)",
      field: 'premiumMailboxes' as keyof ChatState,
      options: () => [
        { value: 'yes', label: 'Yes - Add Premium Mailboxes ($100/month)', description: '🛡️ 8 Gsuite + 25 Microsoft accounts for maximum deliverability' },
        { value: 'no', label: 'No - Standard Setup', description: '📧 Use standard mailbox configuration' }
      ]
    },
    {
      type: 'options' as const,
      message: "What's your business niche or industry?",
      hint: "💡 Different industries have different response rates",
      field: 'industry' as keyof ChatState,
      options: () => [
        { value: 'saas', label: 'SaaS', description: '📊 ~48% open rate' },
        { value: 'software', label: 'Software Development', description: '💻 ~26% open rate' },
        { value: 'finance', label: 'Finance', description: '💰 ~39% open rate' },
        { value: 'fintech', label: 'Fintech', description: '🏦 ~38% open rate' },
        { value: 'leadgen', label: 'Lead Generation Software', description: '🎯 ~41% open rate' },
        { value: 'realestate', label: 'Real Estate', description: '🏠 ~22% open rate' },
        { value: 'podcast', label: 'Podcast', description: '🎙️ ~43% open rate' }
      ]
    },
    {
      type: 'number' as const,
      message: "Finally, what's your average product or service price in USD?",
      hint: "💡 This helps us calculate your potential revenue",
      field: 'productPrice' as keyof ChatState,
      validation: (val: number) => val >= 0
    }
  ]

  const addMessage = (type: 'ai' | 'user', content: string) => {
    setMessages(prev => [...prev, { type, content }])
  }

  const showTyping = () => {
    setIsTyping(true)
    setMessages(prev => [...prev, { type: 'ai', content: '', isTyping: true }])
  }

  const hideTyping = () => {
    setIsTyping(false)
    setMessages(prev => prev.filter(msg => !msg.isTyping))
  }

  const handleNumberSubmit = () => {
    const value = parseFloat(currentInput)
    const currentQuestion = questions[chatState.currentStep]
    
    if (!value || !currentQuestion.validation(value)) {
      return
    }

    const newState = { ...chatState, [currentQuestion.field]: value }
    setChatState(newState)
    addMessage('user', value.toLocaleString())
    setCurrentInput('')

    // Check for warning
    if (currentQuestion.warning) {
      const warningMsg = currentQuestion.warning(value)
      if (warningMsg) {
        setTimeout(() => {
          showTyping()
          setTimeout(() => {
            hideTyping()
            addMessage('ai', warningMsg)
            setTimeout(() => nextQuestion(newState), 1500)
          }, 1000)
        }, 500)
        return
      }
    }

    setTimeout(() => nextQuestion(newState), 800)
  }

  const handleOptionSubmit = (value: string, label: string) => {
    const currentQuestion = questions[chatState.currentStep]
    const newState = { ...chatState, [currentQuestion.field]: value }
    setChatState(newState)
    addMessage('user', label)
    setTimeout(() => nextQuestion(newState), 800)
  }

  const nextQuestion = (state: ChatState) => {
    const newStep = state.currentStep + 1
    const newState = { ...state, currentStep: newStep }
    setChatState(newState)

    if (newStep >= questions.length) {
      generateReport(newState)
      return
    }

    showTyping()
    setTimeout(() => {
      hideTyping()
      const question = questions[newStep]
      addMessage('ai', question.message + (question.hint ? '\n\n' + question.hint : ''))
      
      if (question.type === 'number') {
        setInputType('number')
      } else if (question.type === 'options') {
        setInputType('options')
        const opts = typeof question.options === 'function' ? question.options(newState) : question.options()
        setOptions(opts)
      }
    }, 1200)
  }

  const generateReport = (state: ChatState) => {
    showTyping()
    setTimeout(() => {
      hideTyping()
      addMessage('ai', "🎉 Perfect! I'm calculating your personalized ROI report...")
      setTimeout(() => {
        const calculatedReport = calculateROI(state)
        setReport(calculatedReport)
        showTyping()
        setTimeout(() => {
          hideTyping()
          addMessage('ai', "📋 Here's your complete ROI analysis based on your requirements!")
        }, 1500)
      }, 1000)
    }, 1000)
  }

  const calculateROI = (state: ChatState): ROIReport => {
    const { emailsPerDay, sequences, sendingTool, warmingPlan, premiumMailboxes, industry, productPrice } = state

    // Calculate domains and costs
    const totalEmailsPerDay = (emailsPerDay || 0) * (sequences || 1)
    const domainsNeeded = Math.ceil(totalEmailsPerDay / 60)
    let warmingCost = warmingPlan === "premium" ? domainsNeeded * 19 : 0
    const domainCostYearly = domainsNeeded * 10
    const vpsCount = domainsNeeded
    const vpsCostMonthly = vpsCount * 5

    // API Cost based on premium mailboxes choice
    let apiCost = 0
    if (premiumMailboxes === 'yes') {
      apiCost = 100
    }

    let toolCost = 0
    if (sendingTool === "instantly") toolCost = 97
    else if (sendingTool === "smartlead") toolCost = 94
    else if (sendingTool === "mailwizz") toolCost = 90

    // Updated management cost structure
    let configCost = 0
    if (emailsPerDay && emailsPerDay >= 100 && emailsPerDay <= 1000) {
      configCost = 100
    } else if (emailsPerDay && emailsPerDay >= 1001 && emailsPerDay <= 3000) {
      configCost = 200
    } else if (emailsPerDay && emailsPerDay >= 3001) {
      configCost = 300
    }

    const totalMonthlyCost = vpsCostMonthly + warmingCost + apiCost + toolCost + configCost

    // Calculate ROI metrics
    const weeksPerMonth = 4.33
    const uniqueVolume = (emailsPerDay || 0) * 5 * weeksPerMonth
    const totalVolume = uniqueVolume * (sequences || 1)

    const industryRates: Record<string, number> = {
      saas: 0.48,
      software: 0.26,
      finance: 0.39,
      fintech: 0.38,
      realestate: 0.22,
      podcast: 0.43,
      leadgen: 0.41
    }

    const openRate = industryRates[industry || 'saas'] || 0.35
    const opens = Math.round(uniqueVolume * openRate)
    const replyRate = (sequences || 1) >= 3 ? 0.06 : 0.04
    const replies = Math.round(opens * replyRate)
    const positiveRate = (sequences || 1) >= 3 ? 0.35 : 0.20
    const positives = Math.round(replies * positiveRate)
    const monthlyRevenue = positives * (productPrice || 0)
    const annualRevenue = monthlyRevenue * 12
    const monthlyProfit = monthlyRevenue - totalMonthlyCost
    const annualProfit = monthlyProfit * 12
    const roiPercent = totalMonthlyCost > 0 ? ((monthlyProfit / totalMonthlyCost) * 100).toFixed(1) : '0'

    return {
      domainsNeeded,
      domainCostYearly,
      vpsCostMonthly,
      warmingCost,
      apiCost,
      toolCost,
      configCost,
      totalMonthlyCost,
      uniqueVolume: Math.round(uniqueVolume),
      totalVolume: Math.round(totalVolume),
      opens,
      replies,
      positives,
      monthlyRevenue,
      annualRevenue,
      monthlyProfit,
      annualProfit,
      roiPercent,
      premiumMailboxes: premiumMailboxes === 'yes'
    }
  }

  const resetCalculator = () => {
    setChatState({
      currentStep: 0,
      emailsPerDay: null,
      sequences: null,
      sendingTool: null,
      warmingPlan: null,
      premiumMailboxes: null,
      industry: null,
      productPrice: null
    })
    setMessages([
      {
        type: 'ai',
        content: "👋 Hello! I'm your AI ROI Assistant. Let's calculate your potential ROI together!\n\nHow many emails do you want to send per day?"
      }
    ])
    setCurrentInput('')
    setInputType('number')
    setOptions([])
    setReport(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ROI Calculator</h1>
                <p className="text-gray-600">Calculate your email marketing return on investment</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Sparkles className="h-4 w-4" />
              <span>AI-Powered Analysis</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Section */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl rounded-2xl">
              <CardContent className="p-6">
                <div className="h-96 overflow-y-auto mb-6 space-y-4" id="chatContainer">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      {message.isTyping ? (
                        <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-4 rounded-2xl rounded-bl-sm max-w-xs">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                        </div>
                      ) : (
                        <div className={`p-4 rounded-2xl max-w-xs lg:max-w-md whitespace-pre-line ${
                          message.type === 'ai' 
                            ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-bl-sm' 
                            : 'bg-white text-gray-900 rounded-br-sm border border-gray-200'
                        }`}>
                          {message.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Input Area */}
                {!report && (
                  <div className="space-y-4">
                    {inputType === 'number' ? (
                      <div className="flex space-x-3">
                        <input
                          type="number"
                          value={currentInput}
                          onChange={(e) => setCurrentInput(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleNumberSubmit()}
                          className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Enter your answer..."
                          min="0"
                        />
                        <Button
                          onClick={handleNumberSubmit}
                          disabled={!currentInput}
                          className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                        >
                          Submit
                        </Button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 gap-3">
                        {options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleOptionSubmit(option.value, option.label)}
                            className="p-4 text-left border-2 border-green-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all duration-200"
                          >
                            <div className="font-semibold text-gray-900 mb-1">{option.label}</div>
                            <div className="text-sm text-gray-600">{option.description}</div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {report && (
                  <div className="mt-6">
                    <Button
                      onClick={resetCalculator}
                      variant="outline"
                      className="w-full"
                    >
                      Calculate Another ROI
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-1">
            {!report ? (
              <Card className="shadow-xl rounded-2xl h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calculator className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">ROI Analysis</h3>
                  <p className="text-gray-600 mb-6">Answer the questions to get your personalized ROI calculation.</p>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-gray-900">Revenue Projection</div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-gray-900">Cost Analysis</div>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-gray-900">Performance Metrics</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {/* ROI Summary Card */}
                <Card className="shadow-xl rounded-2xl bg-gradient-to-r from-green-500 to-blue-600 text-white">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="text-3xl mb-2">🎯</div>
                      <h3 className="text-xl font-bold">Your ROI Summary</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold">{report.roiPercent}%</div>
                        <div className="text-sm opacity-90">Monthly ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">${report.monthlyProfit.toLocaleString()}</div>
                        <div className="text-sm opacity-90">Monthly Profit</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold">${report.annualProfit.toLocaleString()}</div>
                      <div className="text-sm opacity-90">Annual Profit Projection</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Infrastructure Breakdown */}
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-blue-600" />
                      Infrastructure Breakdown
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Domains Needed:</span>
                        <span className="font-semibold">{report.domainsNeeded}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>VPS Cost:</span>
                        <span className="font-semibold">${report.vpsCostMonthly}/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Warming Service:</span>
                        <span className="font-semibold">${report.warmingCost}/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sending Tool:</span>
                        <span className="font-semibold">${report.toolCost}/month</span>
                      </div>
                      {report.premiumMailboxes && (
                        <div className="flex justify-between">
                          <span>Premium Mailboxes:</span>
                          <span className="font-semibold">${report.apiCost}/month</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Management & Setup:</span>
                        <span className="font-semibold">${report.configCost}/month</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between font-bold">
                        <span>Total Monthly Cost:</span>
                        <span>${report.totalMonthlyCost.toLocaleString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Performance Metrics */}
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Target className="h-5 w-5 mr-2 text-green-600" />
                      Performance Metrics
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-3">
                        <div>
                          <div className="text-gray-600">Monthly Volume</div>
                          <div className="font-semibold text-lg">{report.uniqueVolume.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Expected Opens</div>
                          <div className="font-semibold text-lg text-blue-600">{report.opens.toLocaleString()}</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <div className="text-gray-600">Expected Replies</div>
                          <div className="font-semibold text-lg text-orange-600">{report.replies.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Qualified Leads</div>
                          <div className="font-semibold text-lg text-green-600">{report.positives.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Revenue Breakdown */}
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                      Revenue Analysis
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Monthly Revenue:</span>
                        <span className="font-semibold text-green-600">${report.monthlyRevenue.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly Costs:</span>
                        <span className="font-semibold text-red-600">-${report.totalMonthlyCost.toLocaleString()}</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between font-bold text-lg">
                        <span>Net Monthly Profit:</span>
                        <span className="text-green-600">${report.monthlyProfit.toLocaleString()}</span>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg mt-4">
                        <div className="text-center">
                          <div className="text-sm text-gray-600">Annual Profit Projection</div>
                          <div className="text-2xl font-bold text-green-600">${report.annualProfit.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="shadow-lg">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold text-gray-900 mb-4">🚀 Ready to achieve these results?</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Let our experts set up your entire email infrastructure and start generating leads immediately.
                    </p>
                    <a
                      href="https://calendly.com/emailverse/consultation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-200"
                    >
                      <Calendar className="h-5 w-5" />
                      <span>Schedule Free Consultation</span>
                    </a>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}