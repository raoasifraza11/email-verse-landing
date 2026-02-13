'use client'

import { useState, useEffect, useRef } from 'react'
import { Calculator, TrendingUp, DollarSign, Users, Zap, AlertTriangle, X, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react'

interface CalculatorResults {
  domainsNeeded: number
  domainCost: number
  vpsCost: number
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
  roiPercent: number
}

interface ChatMessage {
  type: 'ai' | 'user'
  message: string
  options?: string[]
}

// Typing indicator component
const TypingIndicator = ({ selectedOption }: { selectedOption?: string }) => {
  const [dots, setDots] = useState('.')
  
  useEffect(() => {
    console.log('💬 TypingIndicator rendered with:', selectedOption)
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '.'
        return prev + '.'
      })
    }, 500)
    
    return () => clearInterval(interval)
  }, [selectedOption])
  
  return (
    <div className="flex justify-start animate-fadeIn">
      <div className="bg-gradient-to-r from-primary-50 to-primary-100 border-2 border-primary-200 text-gray-800 max-w-xs p-4 rounded-lg shadow-lg animate-pulse">
        <div className="flex items-center space-x-3">
          <div className="w-7 h-7 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0 animate-bounce">
            <MessageCircle className="h-4 w-4 text-white" />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-primary-800">
              {selectedOption ? `Processing "${selectedOption}"` : 'AI is typing'}
            </span>
            <span className="text-sm text-primary-600 font-mono w-8 text-left font-bold">{dots}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const ROICalculator = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      type: 'ai',
      message: 'Hi! I\'m your AI assistant. Let me help you calculate your email marketing ROI. How many emails do you want to send per day?',
      options: ['500-1000', '1000-2000', '2000-3000', '3000-5000', 'Custom amount']
    }
  ])
  
  const [formData, setFormData] = useState({
    emailsPerDay: '',
    sequences: '',
    platform: '',
    niche: '',
    productPrice: ''
  })
  
  const [results, setResults] = useState<CalculatorResults | null>(null)
  const [showWarning, setShowWarning] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string>('')
  const [customInput, setCustomInput] = useState('')
  const [showCustomInput, setShowCustomInput] = useState(false)

  // Ref for chat messages container to enable auto-scroll
  const chatMessagesRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change or typing starts
  const scrollToBottom = () => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight
    }
  }

  // Scroll to bottom when messages change or typing state changes
  useEffect(() => {
    scrollToBottom()
  }, [chatMessages, isTyping])

  // Debug effect to track typing state changes
  useEffect(() => {
    console.log('📊 STATE UPDATE - isTyping:', isTyping, 'selectedOption:', selectedOption, 'step:', currentStep)
  }, [isTyping, selectedOption, currentStep])

  const questions = [
    {
      question: 'How many emails do you want to send per day?',
      options: ['500-1000', '1000-2000', '2000-3000', '3000-5000', 'Custom amount'],
      field: 'emailsPerDay'
    },
    {
      question: 'How many email sequences do you want to send? (I suggest 3 minimum)',
      options: ['3 sequences', '4 sequences', '5 sequences', 'Custom amount'],
      field: 'sequences'
    },
    {
      question: 'Which platform do you prefer to use?',
      options: ['Instantly ($97/month)', 'Smartlead ($94/month)', 'Mailwizz ($90 one-time)', 'Need recommendation'],
      field: 'platform'
    },
    {
      question: 'What will be your niche?',
      options: ['SaaS', 'Real Estate', 'Lead Generation Software', 'Finance/Fintech', 'Other'],
      field: 'niche'
    },
    {
      question: 'What will be your average product/service price?',
      options: ['$50-100', '$100-500', '$500-1000', '$1000+', 'Custom amount'],
      field: 'productPrice'
    }
  ]

  const handleOptionClick = (option: string) => {
    console.log('🔥 OPTION CLICKED:', option, 'Step:', currentStep)
    
    const currentQuestion = questions[currentStep]
    let value = option

    // Handle custom input
    if (option === 'Custom amount' || option === 'Need recommendation' || option === 'Other') {
      setShowCustomInput(true)
      return
    }

    // Extract numeric values from options
    if (currentQuestion.field === 'emailsPerDay') {
      if (option === '500-1000') value = '750'
      else if (option === '1000-2000') value = '1500'
      else if (option === '2000-3000') value = '2500'
      else if (option === '3000-5000') value = '4000'
    } else if (currentQuestion.field === 'sequences') {
      value = option.split(' ')[0]
    } else if (currentQuestion.field === 'platform') {
      if (option.includes('Instantly')) value = 'instantly'
      else if (option.includes('Smartlead')) value = 'smartlead'
      else if (option.includes('Mailwizz')) value = 'mailwizz'
    } else if (currentQuestion.field === 'niche') {
      value = option.toLowerCase().replace(/[^a-z]/g, '')
    } else if (currentQuestion.field === 'productPrice') {
      if (option === '$50-100') value = '75'
      else if (option === '$100-500') value = '300'
      else if (option === '$500-1000') value = '750'
      else if (option === '$1000+') value = '1500'
    }

    // 1. Add user message immediately
    setChatMessages(prev => [...prev, { type: 'user', message: option }])
    
    // 2. Update form data
    setFormData(prev => ({ ...prev, [currentQuestion.field]: value }))
    
    // 3. Start typing animation
    console.log('🚀 STARTING TYPING ANIMATION for:', option)
    setIsTyping(true)
    setSelectedOption(option)
    
    // 4. Scroll to bottom to show typing indicator
    setTimeout(() => {
      scrollToBottom()
    }, 100)
    
    // 4. After 1.5 seconds, stop typing and show next question
    setTimeout(() => {
      console.log('⏰ TIMEOUT EXECUTED - Stopping typing animation')
      setIsTyping(false)
      setSelectedOption('')
      
      if (currentStep < questions.length - 1) {
        // Move to next question
        const nextQuestion = questions[currentStep + 1]
        setChatMessages(prev => [...prev, {
          type: 'ai',
          message: nextQuestion.question,
          options: nextQuestion.options
        }])
        setCurrentStep(currentStep + 1)
        console.log('📝 MOVED TO NEXT STEP:', currentStep + 1)
        
        // Scroll to bottom after adding new message
        setTimeout(() => {
          scrollToBottom()
        }, 100)
      } else {
        // All questions answered, calculate ROI
        setChatMessages(prev => [...prev, {
          type: 'ai',
          message: 'Perfect! Let me calculate your ROI based on your answers...'
        }])
        calculateROI({ ...formData, [currentQuestion.field]: value })
        console.log('🧮 STARTING ROI CALCULATION')
        
        // Scroll to bottom after adding calculation message
        setTimeout(() => {
          scrollToBottom()
        }, 100)
      }
    }, 1500)
  }

  const handleCustomSubmit = () => {
    if (!customInput.trim()) return

    // Immediately show typing
    setIsTyping(true)
    setSelectedOption(customInput)

    const currentQuestion = questions[currentStep]
    let value = customInput

    // Process custom input based on field
    if (currentQuestion.field === 'emailsPerDay' || currentQuestion.field === 'sequences' || currentQuestion.field === 'productPrice') {
      value = customInput.replace(/[^0-9]/g, '')
    } else if (currentQuestion.field === 'platform') {
      value = 'instantly' // Default recommendation
    } else if (currentQuestion.field === 'niche') {
      value = 'saas' // Default to SaaS
    }

    setFormData(prev => ({ ...prev, [currentQuestion.field]: value }))
    setChatMessages(prev => [...prev, { type: 'user', message: customInput }])
    
    setCustomInput('')
    setShowCustomInput(false)

    // Scroll to show typing indicator
    setTimeout(() => {
      scrollToBottom()
    }, 100)

    // Show typing animation for 1.5 seconds, then proceed
    setTimeout(() => {
      setIsTyping(false)
      setSelectedOption('')
      
      // Continue to next question
      if (currentStep < questions.length - 1) {
        const nextQuestion = questions[currentStep + 1]
        setChatMessages(prev => [...prev, {
          type: 'ai',
          message: nextQuestion.question,
          options: nextQuestion.options
        }])
        setCurrentStep(currentStep + 1)
        
        // Scroll after adding new message
        setTimeout(() => {
          scrollToBottom()
        }, 100)
      } else {
        setChatMessages(prev => [...prev, {
          type: 'ai',
          message: 'Perfect! Let me calculate your ROI based on your answers...'
        }])
        calculateROI({ ...formData, [currentQuestion.field]: value })
        
        // Scroll after adding calculation message
        setTimeout(() => {
          scrollToBottom()
        }, 100)
      }
    }, 1500)
  }

  const calculateROI = async (data: typeof formData) => {
    setIsCalculating(true)
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const emailsPerDay = parseInt(data.emailsPerDay) || 2000
    const sequences = parseInt(data.sequences) || 3
    const productPrice = parseFloat(data.productPrice) || 300
    
    // Days per week (default to 5 days per week)
    const daysPerWeek = 5
    // Weeks per month (using 4 weeks to match example: 100 emails/day × 5 days × 4 weeks = 2000/month)
    const weeksPerMonth = 4

    // Calculate unique volume: emails/day × days/week × weeks/month
    const uniqueVolume = Math.round(emailsPerDay * daysPerWeek * weeksPerMonth)
    
    // Total volume includes followups: unique volume × sequences
    const totalVolume = uniqueVolume * sequences

    // Domain calculation - 30 emails per domain per day (industry standard)
    // Based on total emails per day (unique × sequences)
    const totalEmailsPerDay = emailsPerDay * sequences
    const domainsNeeded = Math.ceil(totalEmailsPerDay / 30)
    
    // Domain cost: $10/domain/year (show separately as annual)
    const domainCostYearly = domainsNeeded * 10
    const domainCostMonthly = domainCostYearly / 12 // For monthly cost calculation only
    
    // VPS cost: $5/vps/month (1 VPS can handle 10 domains)
    const vpsCount = Math.ceil(domainsNeeded / 10)
    const vpsCost = vpsCount * 5

    // Warming cost: Premium $19/domain/month OR Built-in (free)
    // Note: This is simplified - in real calculator, user selects warming plan
    const warmingCost = domainsNeeded * 19 // Assuming premium for now
    
    // Premium Mailboxes: $100/month (8 Gsuite and 25 Microsoft mailboxes)
    // Note: This is simplified - in real calculator, user selects premium mailboxes
    let apiCost = 0 // Default to no premium mailboxes

    // Tool cost
    let toolCost = 0
    if (data.platform === "instantly") toolCost = 97
    else if (data.platform === "smartlead") toolCost = 94
    else if (data.platform === "mailwizz") toolCost = 0 // $90 one-time, not monthly

    // Management cost: $100/month for up to 2000 emails/day, $200/month if above
    let configCost = 0
    if (emailsPerDay > 0) {
      if (emailsPerDay <= 2000) {
        configCost = 100
      } else {
        configCost = 200
      }
    }

    // Total monthly cost (excluding one-time Mailwizz cost)
    const totalMonthlyCost = vpsCost + warmingCost + apiCost + toolCost + configCost + domainCostMonthly

    // Industry-specific open rates (from provided table)
    const industryRates: Record<string, number> = {
      saas: 0.48,              // 48%
      software: 0.26,          // 26%
      finance: 0.39,           // 39%
      fintech: 0.38,           // 38%
      leadgenerationsoftware: 0.41, // 41% (Lead Generation Software)
      realestate: 0.22,        // 22%
      podcast: 0.43,           // 43%
      other: 0.39             // Default to Finance
    }

    const openRate = industryRates[data.niche] || industryRates.other
    const opens = Math.round(uniqueVolume * openRate)
    
    // Reply rate logic: 6% of opens if sequences ≥ 3, else 4% of opens
    const replyRate = sequences >= 3 ? 0.06 : 0.04
    const replies = Math.round(opens * replyRate)
    
    // Positive response rate: 11% of replies if sequences > 3, else 5% of replies
    const positiveRate = sequences > 3 ? 0.11 : 0.05
    const positives = Math.round(replies * positiveRate)
    
    // Revenue calculations
    const monthlyRevenue = positives * productPrice
    const annualRevenue = monthlyRevenue * 12
    const monthlyProfit = monthlyRevenue - totalMonthlyCost
    const annualProfit = monthlyProfit * 12
    const roiPercent = totalMonthlyCost > 0 ? ((monthlyProfit / totalMonthlyCost) * 100) : 0
    
    setResults({
      domainsNeeded,
      domainCost: domainCostYearly, // Show annual domain cost
      vpsCost,
      warmingCost,
      apiCost,
      toolCost,
      configCost,
      totalMonthlyCost,
      uniqueVolume,
      totalVolume,
      opens,
      replies,
      positives,
      monthlyRevenue,
      annualRevenue,
      monthlyProfit,
      annualProfit,
      roiPercent
    })
    
    setIsCalculating(false)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount)
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num)
  }

  const resetCalculator = () => {
    console.log('🔄 RESETTING CALCULATOR')
    setCurrentStep(0)
    setFormData({
      emailsPerDay: '',
      sequences: '',
      platform: '',
      niche: '',
      productPrice: ''
    })
    setResults(null)
    setIsTyping(false)
    setSelectedOption('')
    setShowCustomInput(false)
    setChatMessages([
      {
        type: 'ai',
        message: 'Hi! I\'m your AI assistant. Let me help you calculate your email marketing ROI. How many emails do you want to send per day?',
        options: ['500-1000', '1000-2000', '2000-3000', '3000-5000', 'Custom amount']
      }
    ])
  }

  return (
    <div className="relative bg-white rounded-3xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-500 border-2 border-primary-100 w-full max-w-lg mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-3 rounded-xl">
            <MessageCircle className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
            ROI Calculator
          </h3>
        </div>
        <p className="text-gray-600 text-sm">Interactive AI-powered ROI calculation</p>
      </div>

      {!results ? (
        /* Chat Interface */
        <div className="space-y-4">
          {/* Chat Messages */}
          <div 
            ref={chatMessagesRef}
            className="bg-gray-50 rounded-lg p-4 max-h-80 overflow-y-auto space-y-4 scroll-smooth"
            style={{ scrollBehavior: 'smooth' }}
          >
            {chatMessages.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs p-3 rounded-lg ${
                  msg.type === 'user' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white border border-gray-200 text-gray-800'
                }`}>
                  <div className="flex items-start space-x-2">
                    {msg.type === 'ai' && (
                      <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MessageCircle className="h-3 w-3 text-white" />
                      </div>
                    )}
                    <div className="text-sm">{msg.message}</div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && <TypingIndicator selectedOption={selectedOption} />}
            
            {isCalculating && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 text-gray-800 max-w-xs p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-3 w-3 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-600"></div>
                      <span className="text-sm">Calculating your ROI...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Options or Custom Input */}
          {!isCalculating && !results && !isTyping && (
            <div className="space-y-3">
              {showCustomInput ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    placeholder="Enter your answer..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                    onKeyPress={(e) => e.key === 'Enter' && handleCustomSubmit()}
                  />
                  <div className="flex space-x-2">
                    <button
                      onClick={handleCustomSubmit}
                      className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm flex items-center justify-center space-x-2"
                    >
                      <ArrowRight className="h-4 w-4" />
                      <span>Submit</span>
                    </button>
                    <button
                      onClick={() => {
                        setShowCustomInput(false)
                        setCustomInput('')
                      }}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                chatMessages[chatMessages.length - 1]?.options?.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className="w-full text-left p-4 bg-white border border-gray-200 hover:border-primary-300 hover:bg-primary-50 rounded-lg transition-all duration-200 text-sm font-medium text-gray-700 hover:text-primary-700"
                  >
                    {option}
                  </button>
                ))
              )}
            </div>
          )}
        </div>
      ) : (
        /* Results Display */
        <div className="space-y-5">
          <div className="text-center mb-5">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <h4 className="text-xl font-bold text-gray-800">Your ROI Report</h4>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-lg border border-green-200">
              <div className="flex items-center space-x-2 mb-3">
                <DollarSign className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-green-800">Monthly Revenue</span>
              </div>
              <div className="text-2xl font-bold text-green-700">
                {formatCurrency(results.monthlyRevenue)}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-2 mb-3">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Monthly Profit</span>
              </div>
              <div className="text-2xl font-bold text-blue-700">
                {formatCurrency(results.monthlyProfit)}
              </div>
            </div>
          </div>

          {/* ROI Highlight */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-lg border border-purple-200">
            <div className="flex items-center space-x-2 mb-3">
              <Zap className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-800">Return on Investment</span>
            </div>
            <div className="text-3xl font-bold text-purple-700">
              {results.roiPercent.toFixed(1)}%
            </div>
            <div className="text-sm text-purple-600">Monthly return</div>
          </div>

          {/* Infrastructure Summary */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="font-semibold text-gray-800 mb-3 text-sm">Infrastructure Summary</h5>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-600">Domains Needed</div>
                <div className="font-semibold">{results.domainsNeeded}</div>
              </div>
              <div>
                <div className="text-gray-600">Domain Cost (Annual)</div>
                <div className="font-semibold">{formatCurrency(results.domainCost)}</div>
                <div className="text-xs text-gray-500">({formatCurrency(results.domainCost / 12)}/month)</div>
              </div>
              <div>
                <div className="text-gray-600">Management Cost</div>
                <div className="font-semibold">{formatCurrency(results.configCost)}</div>
              </div>
              <div>
                <div className="text-gray-600">VPS Cost</div>
                <div className="font-semibold">{formatCurrency(results.vpsCost)}</div>
              </div>
              <div>
                <div className="text-gray-600">Tool Cost</div>
                <div className="font-semibold">{formatCurrency(results.toolCost)}</div>
              </div>
              <div>
                <div className="text-gray-600">Warming Cost</div>
                <div className="font-semibold">{formatCurrency(results.warmingCost)}</div>
              </div>
              <div>
                <div className="text-gray-600">API Cost</div>
                <div className="font-semibold">{formatCurrency(results.apiCost)}</div>
              </div>
              <div>
                <div className="text-gray-600 font-semibold">Total Monthly Cost</div>
                <div className="font-bold text-primary-600">{formatCurrency(results.totalMonthlyCost)}</div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-lg font-bold text-gray-700">{formatNumber(results.opens)}</div>
              <div className="text-xs text-gray-600">Opens</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-lg font-bold text-gray-700">{formatNumber(results.replies)}</div>
              <div className="text-xs text-gray-600">Replies</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-lg font-bold text-gray-700">{formatNumber(results.positives)}</div>
              <div className="text-xs text-gray-600">Meetings</div>
            </div>
          </div>

          {/* Annual Projection */}
          <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-4 rounded-lg text-center">
            <div className="text-sm opacity-90 mb-1">Annual Profit Projection</div>
            <div className="text-2xl font-bold">{formatCurrency(results.annualProfit)}</div>
          </div>

          {/* ROI Summary Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-5 mt-5">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                <Calculator className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-lg font-bold text-purple-600">ROI Summary</h4>
            </div>
            
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Based on your <span className="font-semibold">{formData.niche || 'business'}</span> business sending{' '}
              <span className="font-semibold">{parseInt(formData.emailsPerDay) || 0} emails per day</span> with{' '}
              <span className="font-semibold">{parseInt(formData.sequences) || 0} sequences</span> and a product price of{' '}
              <span className="font-semibold">${parseFloat(formData.productPrice) || 0}</span>, you can expect approximately{' '}
              <span className="font-semibold text-green-600">{formatNumber(results.positives)} positive responses</span> per month. 
              After deducting monthly costs of{' '}
              <span className="font-semibold text-red-600">{formatCurrency(results.totalMonthlyCost)}</span>, your net monthly profit would be{' '}
              <span className="font-semibold text-green-600">{formatCurrency(results.monthlyProfit)}</span>, leading to an annual profit of{' '}
              <span className="font-semibold text-green-600">{formatCurrency(results.annualProfit)}</span>.
            </p>

            <div className="text-center mb-4">
              <a
                href="https://calendly.com/emailverse/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-sm"
              >
                Want to get started?
              </a>
            </div>

            {/* Disclaimer Section */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h5 className="font-bold text-gray-900 mb-2 text-sm">Disclaimer:</h5>
              <p className="text-xs text-gray-700 leading-relaxed mb-2">
                These estimates are based on our 10+ years of experience. Actual results may vary depending on list quality, offer relevance, user interest, and email infrastructure. Most importantly, your results will depend on the strength of your sending infrastructure and how well it's managed—combined with a highly targeted list.
              </p>
              <p className="text-xs text-gray-700 font-medium">
                We won't stop until we bring you the results you're expecting 😉
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 mt-5">
            <button
              onClick={resetCalculator}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors text-sm"
            >
              Start Over
            </button>
            <a
              href="https://calendly.com/emailverse/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-medium py-3 px-4 rounded-lg transition-all text-center text-sm"
            >
              Get Started
            </a>
          </div>
        </div>
      )}

      {/* Live indicator */}
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-xs text-gray-500 font-medium">AI LIVE</span>
      </div>
    </div>
  )
}

export default ROICalculator