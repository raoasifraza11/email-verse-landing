'use client'

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Brain, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp, 
  Copy, 
  RefreshCw,
  Sparkles,
  Target,
  Eye,
  Mail,
  BarChart3,
  Lightbulb,
  Shield,
  Zap
} from 'lucide-react'

interface AnalysisResult {
  score: number
  spamScore: number
  openRatePrediction: number
  sentiment: 'positive' | 'neutral' | 'negative'
  length: 'optimal' | 'too_short' | 'too_long'
  suggestions: string[]
  improvements: string[]
  flaggedWords: string[]
  strengths: string[]
  highlightedSubject: string
  subjectLength: string
  spamWordCount: string
}

const industries = ["Technology", "Healthcare", "Finance", "Retail", "Real Estate", "Education", "Marketing", "Consulting"]
const emailTypes = ["Newsletter", "Promotional", "Welcome", "Follow-up", "Event", "Product Launch", "Sales", "Survey"]

export default function SubjectLineOptimizer() {
  const [subjectLine, setSubjectLine] = useState("")
  const [industry, setIndustry] = useState("")
  const [emailType, setEmailType] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)

  const analyzeSubjectLine = async () => {
    if (!subjectLine.trim()) return
    
    setIsAnalyzing(true)
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const analysis = generateAnalysis(subjectLine, industry, emailType)
    setResult(analysis)
    setIsAnalyzing(false)
  }

  // Word lists from spam checker (same logic)
  const shadyWords = ["0 down","Addresses","Addresses on cd","All","All natural","All natural/new","All new","All-natural","All-new","Allowance","As seen on","As seen on Oprah","At no cost","Auto email removal","Avoice bankruptcy","Avoid","Beneficial offer","Billing","Billing Address","Brand new pager","Bulk email","Cable converter","Calling creditors","Can you help us?","Cancel at any time","Cannot be combined","Casino","Celebrity","Cell phone cancer scam","Certified","Chance","Cheap","Cheap meds","Cialis","Clearance","Collect","Collect child support","Compare","Compare now","Compare online","Compare rates","Compete for your business","Confidentiality","Confidentiality on all orders","Congratulations","Consolidate debt and credit","Consolidate your debt","Copy accurately","Copy DVDs","COVID","Credit bureaus","Cures","Cures baldness","Dig up dirt on friends","Direct email","Direct marketing","Eliminate debt","Explode your business","Fast viagra delivery","Finance","Financial","Financial advice","Financial independence","Financially independent","For new customers only","Foreclosure","Free","Free access/money/gift","Free bonus","Free cell phone","Free DVD","Free grant money","Free information","Free installation","Free offer","Free priority mail","Free sample","Free website","Free!","Get","Gift card","Gift certificate","Gift included","Give it away","Giving away","Giving it away","Gold","Great","Great deal","Greetings of the day","Growth hormone","Guarantee","Guaranteed deposit","Guaranteed income","Guaranteed payment","Have you been turned down?","Hello (with no name included)","Hidden","Hidden assets","Hidden charges","Hidden costs","Hidden fees","High score","Home based business","Home mortgage","Human","Human growth hormone","If only it were that easy","Important information","Important notification","In accordance with laws","Instant weight loss","Insurance Lose weight","Internet marketing","Investment decision","Invoice","It's effective","Job alert","Junk","Lambo","Laser printer","Last Day","Leave","Legal","Legal notice","Life","Life insurance","Lifetime access","Lifetime deal","Limited","Limited amount","Limited number","Limited offer","Limited supply","Limited time offer","Limited time only","Loan"]

  const urgencyWords = ["Access now","Act","Act immediately","Act now","Act now!","Action","Action required","Apply here","Apply now","Apply now!","Apply online","Become a member","Before it's too late","Buy","Buy direct","Buy now","Buy today","Call","Call free","Call free/now","Call me","Call now","Call now!","Can we have a minute of your time?","Cancel now","Cancellation required","Claim now","Click","Click below","Click here","Click me to download","Click now","Click this link","Click to get","Click to remove","Contact us immediately","Deal ending soon","Do it now","Do it today","Don't delete","Don't hesitate","Don't waste time","Don't delete","Exclusive deal","Expire","Expires today","Final call","For instant access","For Only","For you","Friday before [holiday]","Get it away","Get it now","Get now","Get started","Get started now","Great offer","Here","Hurry up","Immediately","Important information regarding","Info you requested","Information you requested","Instant","Limited time","New customers only","Now","Now only","Offer expires","Once in lifetime","Only","Order now","Order today","Please read","Purchase now","Sign up free","Sign up free today","Supplies are limited","Take action","Take action now","This won't last","Time limited","Today","Top urgent","Trial","Urgent","What are you waiting for?","While supplies last","You are a winner"]

  const exaggeratedWords = ["$","#1","%","% free","% Satisfied","0%","0% risk","100%","100% free","100% more","100% off","100% satisfied","90%","99%","Access for free","Additional income","Amazed","Please","perfect","Amazing","Amazing offer","Amazing stuff","Be amazed","Be surprised","Be your own boss","Believe me","Best bargain","Best deal","Best offer","Best price","Best rates","Big bucks","Billion","Billion Dollars","Bonus","Boss","Can't live without","Cancel","Cash","Cash bonus","Cashcashcash","Consolidate debt","Double your","Double your cash","Double your income","Drastically reduced","Earn","Earn $","Earn Cash","Earn extra cash","Earn money","Earn per week","Eliminate bad credit","Expect to earn","Extra","Extra cash","Extra income","Fantastic","Fantastic deal","Fantastic offer","FAST","Fast cash","Financial freedom","Free access","Free consultation","Free gift","Free hosting","Free info","Free investment","Free membership","Free money","Free preview","Free quote","Free trial","Full refund","Get out of debt","Get paid","Giveaway","Guaranteed","Income","Income from home","Increase sales","Increase traffic","Incredible deal","Join billions","Join millions","Join millions of Americans","Join thousands","Lower monthly payments","Lower rates","Lowest price","Make $","Make money","Million","Million dollars","Money back","Money making","Month trial offer","More Internet Traffic","Multilevel marketing","No gimmicks","Number one","Once in a lifetime","One hundred percent guaranteed","One time","Pennies a day","Potential earnings","Prize","Promise","Pure profit","Risk-free","Satisfaction guaranteed","Save big money","Save up to","Serious cash","Special promotion","The best","Thousands","Unbeatable offer","Unbelievable","Unlimited","Unlimited trial","Warranty","Web traffic","Work from home"]

  const combinedTerms: { term: string; category: string }[] = []
  
  const addTerms = (list: string[], category: string) => {
    list.forEach(term => {
      combinedTerms.push({ term, category })
    })
  }

  addTerms(shadyWords, "shady")
  addTerms(urgencyWords, "urgency")
  addTerms(exaggeratedWords, "exaggerated")

  // Sort by descending term length to prioritize longer matches
  combinedTerms.sort((a, b) => b.term.length - a.term.length)

  const patternParts = combinedTerms.map(item => {
    if (item.term === "$") {
      return "\\$"
    } else {
      // Escape special regex characters and handle multi-word phrases
      const escaped = item.term.split(/\s+/).map(word => 
        word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      ).join("[\\s\\-]+")
      // Use word boundaries - they work at word/non-word boundaries
      return "\\b" + escaped + "\\b"
    }
  })

  const combinedRegex = new RegExp(patternParts.join("|"), "gi")

  const normalize = (text: string): string => {
    return text.toLowerCase().replace(/[\s\-]+/g, "")
  }

  const getCategory = (match: string): string => {
    const normMatch = normalize(match)
    for (const item of combinedTerms) {
      if (normalize(item.term) === normMatch) {
        return item.category
      }
    }
    return ""
  }

  const highlightText = (text: string): string => {
    return text.replace(combinedRegex, function(match: string) {
      const category = getCategory(match)
      return `<span class="${category}">${match}</span>`
    })
  }

  const generateAnalysis = (subject: string, industry: string, type: string): AnalysisResult => {
    const words = subject.toLowerCase().split(' ')
    const length = subject.length
    
    // Use spam checker logic to detect spam words
    const subjectMatches: string[] = subject.match(combinedRegex) || []
    const flaggedWords = Array.from(new Set(subjectMatches)) // Remove duplicates
    
    // Count per category (same as spam checker)
    let countShady = 0, countUrgency = 0, countExaggerated = 0
    subjectMatches.forEach(match => {
      const category = getCategory(match)
      if (category === "shady") countShady++
      else if (category === "urgency") countUrgency++
      else if (category === "exaggerated") countExaggerated++
    })
    
    // Calculate score using spam checker formula (subject line only, no email content)
    let reducedScore = 100 - (countShady * 3 + countUrgency * 15 + countExaggerated * 10)
    if (reducedScore < 30) reducedScore = 30
    
    // Convert to 0-100 scale for display (invert: higher is better)
    let score = reducedScore
    let spamScore = 100 - reducedScore // Spam score: higher = more spammy
    
    // Length analysis
    const subjectWords = subject.trim().split(/\s+/).filter(Boolean)
    let lengthCategory: 'optimal' | 'too_short' | 'too_long' = 'optimal'
    if (subjectWords.length > 5) {
      lengthCategory = 'too_long'
      score -= 10
    } else if (subjectWords.length < 3) {
      lengthCategory = 'too_short'
      score -= 10
    } else {
      score += 5 // Bonus for optimal length
    }
    
    // Positive indicators
    const positiveWords = ['new', 'exclusive', 'update', 'tips', 'guide', 'insights', 'results']
    const hasPositiveWords = words.some(word => positiveWords.includes(word))
    if (hasPositiveWords) score += 5
    
    // Personalization check
    if (subject.includes('[Name]') || subject.includes('{{')) score += 8
    
    // Question marks
    if (subject.includes('?')) score += 3
    
    // Numbers
    if (/\d/.test(subject)) score += 5
    
    // If 2 or more bad words, keep score low (5–8%)
    if (flaggedWords.length >= 2) {
      score = Math.floor(Math.min(score, 5 + Math.random() * 3)) // 5 to 8
      spamScore = 100 - score
    }

    // Ensure scores are within bounds and always integers
    score = Math.round(Math.max(0, Math.min(100, score)))
    spamScore = Math.round(Math.max(0, Math.min(100, spamScore)))
    
    const openRatePrediction = Math.max(10, Math.min(45, score * 0.4 + Math.random() * 10))
    
    const sentiment: 'positive' | 'neutral' | 'negative' = 
      score > 80 ? 'positive' : score > 60 ? 'neutral' : 'negative'
    
    // Get highlighted subject line
    const highlightedSubject = highlightText(subject)
    
    // Subject length text (same format as spam checker)
    let subjectLengthText = subjectWords.length + " words"
    if (subjectWords.length > 5) subjectLengthText += " ❌ (Bad)"
    else if (subjectWords.length >= 3) subjectLengthText += " ✅ (Good)"
    
    // Spam word count text
    const totalSpamWords = subjectMatches.length
    const spamWordCountText = totalSpamWords === 0 ? totalSpamWords + " ✅ (Good)" : totalSpamWords + " ❌ (Bad)"
    
    // Generate suggestions
    const suggestions = []
    const improvements = []
    const strengths = []
    
    if (lengthCategory === 'too_short') {
      suggestions.push("Consider adding more descriptive words to make your subject line more compelling")
      improvements.push(`Try: "${subject} - Exclusive Insights Inside"`)
    }
    
    if (lengthCategory === 'too_long') {
      suggestions.push("Shorten your subject line for better mobile readability")
      improvements.push(`Try: "${subject.substring(0, 40)}..."`)
    }
    
    if (flaggedWords.length > 0) {
      suggestions.push("Review and replace highlighted spammy words to improve deliverability")
      improvements.push(`Remove words like: ${flaggedWords.slice(0, 3).join(', ')}`)
    }
    
    if (!subject.includes('?') && type === 'Newsletter') {
      suggestions.push("Consider adding a question to increase curiosity")
      improvements.push(`Try: "Did you know ${subject.toLowerCase()}?"`)
    }
    
    if (!/\d/.test(subject)) {
      suggestions.push("Adding numbers can increase open rates by up to 45%")
      improvements.push(`Try: "5 Ways to ${subject}"`)
    }
    
    if (!hasPositiveWords) {
      suggestions.push("Include power words to make your subject more compelling")
      improvements.push(`Try: "Exclusive ${subject}" or "New ${subject}"`)
    }
    
    // Strengths
    if (lengthCategory === 'optimal') strengths.push("Perfect length for mobile and desktop")
    if (hasPositiveWords) strengths.push("Contains engaging power words")
    if (/\d/.test(subject)) strengths.push("Includes numbers which boost open rates")
    if (subject.includes('?')) strengths.push("Uses curiosity-driven question format")
    if (flaggedWords.length === 0) strengths.push("No spam-trigger words detected")
    
    return {
      score,
      spamScore,
      openRatePrediction,
      sentiment,
      length: lengthCategory,
      suggestions,
      improvements,
      flaggedWords,
      strengths,
      highlightedSubject,
      subjectLength: subjectLengthText,
      spamWordCount: spamWordCountText
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-green-100 border-green-200'
    if (score >= 60) return 'bg-yellow-100 border-yellow-200'
    return 'bg-red-100 border-red-200'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Subject Line Optimizer</h1>
                <p className="text-gray-600">AI-powered analysis to maximize your email open rates</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Sparkles className="h-4 w-4" />
              <span>Powered by Advanced AI</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-1">
            <Card className="shadow-xl rounded-2xl">
              <CardContent className="p-6 space-y-6">
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Analyze Your Subject Line</h2>
                  <p className="text-gray-600 text-sm">Get AI-powered insights and optimization suggestions</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Subject Line *
                  </label>
                  <textarea
                    value={subjectLine}
                    onChange={(e) => setSubjectLine(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    rows={3}
                    placeholder="Enter your email subject line here..."
                    maxLength={100}
                  />
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {subjectLine.length}/100 characters
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry (Optional)
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select Industry</option>
                    {industries.map(ind => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Type (Optional)
                  </label>
                  <select
                    value={emailType}
                    onChange={(e) => setEmailType(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select Email Type</option>
                    {emailTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <Button
                  onClick={analyzeSubjectLine}
                  disabled={!subjectLine.trim() || isAnalyzing}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Brain className="h-5 w-5 mr-2" />
                      Analyze Subject Line
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-2">
            {!result ? (
              <Card className="shadow-xl rounded-2xl h-full">
                <CardContent className="p-12 text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Brain className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Ready to Optimize</h3>
                  <p className="text-gray-600 mb-6">Enter your subject line and click "Analyze" to get AI-powered insights and suggestions.</p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-gray-900">Performance Score</div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-gray-900">Spam Analysis</div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <Lightbulb className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-gray-900">AI Suggestions</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {/* Score Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className={`${getScoreBg(result.score)} border-2`}>
                    <CardContent className="p-6 text-center">
                      <div className="flex items-center justify-center mb-3">
                        <Target className={`h-8 w-8 ${getScoreColor(result.score)}`} />
                      </div>
                      <div className={`text-3xl font-bold ${getScoreColor(result.score)} mb-1`}>
                        {result.score}/100
                      </div>
                      <div className="text-sm font-medium text-gray-700">Performance Score</div>
                    </CardContent>
                  </Card>

                  <Card className={`${result.spamScore > 50 ? 'bg-red-100 border-red-200' : 'bg-green-100 border-green-200'} border-2`}>
                    <CardContent className="p-6 text-center">
                      <div className="flex items-center justify-center mb-3">
                        <Shield className={`h-8 w-8 ${result.spamScore > 50 ? 'text-red-600' : 'text-green-600'}`} />
                      </div>
                      <div className={`text-3xl font-bold ${result.spamScore > 50 ? 'text-red-600' : 'text-green-600'} mb-1`}>
                        {result.spamScore}%
                      </div>
                      <div className="text-sm font-medium text-gray-700">Spam Risk</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-blue-100 border-blue-200 border-2">
                    <CardContent className="p-6 text-center">
                      <div className="flex items-center justify-center mb-3">
                        <Eye className="h-8 w-8 text-blue-600" />
                      </div>
                      <div className="text-3xl font-bold text-blue-600 mb-1">
                        {result.openRatePrediction.toFixed(1)}%
                      </div>
                      <div className="text-sm font-medium text-gray-700">Predicted Open Rate</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Highlighted Subject Line */}
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Processed Subject Line</h3>
                    <div 
                      className="p-4 bg-gray-50 rounded-lg border text-lg"
                      dangerouslySetInnerHTML={{ __html: result.highlightedSubject }}
                    />
                  </CardContent>
                </Card>

                {/* Analysis Report */}
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">📌 Analysis Report</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-700">Subject Length:</span>
                        <span className="font-semibold">{result.subjectLength}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-700">Spammy Words:</span>
                        <span className="font-semibold">{result.spamWordCount}</span>
                      </div>
                    </div>

                    {/* Color Guide - First option kept as-is */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">📌 Word Color Guide:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                          <div className="w-4 h-4 bg-gray-500 rounded"></div>
                          <span className="text-xs"><strong>Grey:</strong> Shady Words – Better to replace</span>
                        </div>
                        <div className="flex items-center space-x-2 p-2 bg-red-50 rounded-lg">
                          <div className="w-4 h-4 bg-red-500 rounded"></div>
                          <span className="text-xs"><strong>Red:</strong> Urgency Words – Should be removed</span>
                        </div>
                        <div className="flex items-center space-x-2 p-2 bg-orange-50 rounded-lg">
                          <div className="w-4 h-4 bg-orange-500 rounded"></div>
                          <span className="text-xs"><strong>Orange:</strong> Exaggerated Words – Consider modifying</span>
                        </div>
                      </div>
                    </div>

                    {/* Tips for better subject lines */}
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">📌 Tips for better subject lines:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-0.5">•</span>
                          <span><strong>Keep it 3–7 words (30–50 characters)</strong> — Fits mobile screens and avoids looking like a long sales pitch.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-0.5">•</span>
                          <span><strong>Use simple, natural words</strong> — Write like a human, not a marketer. Avoid words like free, offer, discount, guarantee, buy now.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-0.5">•</span>
                          <span><strong>Mention the reader’s situation</strong> — Add their role, industry, or problem so it feels written just for them.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-0.5">•</span>
                          <span><strong>Focus on one clear idea</strong> — Don’t mix multiple things. One subject line = one promise or one curiosity.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-0.5">•</span>
                          <span><strong>End with curiosity or benefit</strong> — Either hint at a result or leave a small gap that makes them want to open.</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Analysis Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Strengths */}
                  {result.strengths.length > 0 && (
                    <Card className="shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                          <h3 className="text-lg font-semibold text-gray-900">Strengths</h3>
                        </div>
                        <ul className="space-y-2">
                          {result.strengths.map((strength, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}

                  {/* Flagged Words */}
                  {result.flaggedWords.length > 0 && (
                    <Card className="shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                          <h3 className="text-lg font-semibold text-gray-900">Flagged Words</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {result.flaggedWords.map((word, index) => (
                            <span key={index} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                              {word}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-gray-600 mt-3">
                          These words may trigger spam filters and reduce deliverability.
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Suggestions */}
                {result.suggestions.length > 0 && (
                  <Card className="shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Lightbulb className="h-6 w-6 text-yellow-600 mr-2" />
                        <h3 className="text-lg font-semibold text-gray-900">AI Suggestions</h3>
                      </div>
                      <div className="space-y-4">
                        {result.suggestions.map((suggestion, index) => (
                          <div key={index} className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                            <p className="text-gray-800 mb-2">{suggestion}</p>
                            {result.improvements[index] && (
                              <div className="flex items-center justify-between bg-white p-3 rounded border">
                                <span className="text-sm text-gray-700 font-medium">{result.improvements[index]}</span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => copyToClipboard(result.improvements[index])}
                                  className="ml-2"
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}