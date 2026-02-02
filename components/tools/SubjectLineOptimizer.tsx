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

  const generateAnalysis = (subject: string, industry: string, type: string): AnalysisResult => {
    const words = subject.toLowerCase().split(' ')
    const length = subject.length
    
    // Spam words detection
    const spamWords = ['free', 'urgent', 'limited time', 'act now', 'click here', 'guarantee', 'no risk', 'winner', 'cash', 'money']
    const flaggedWords = words.filter(word => spamWords.some(spam => word.includes(spam)))
    
    // Calculate scores
    let score = 75 // Base score
    let spamScore = 15 // Base spam score
    
    // Length analysis
    let lengthCategory: 'optimal' | 'too_short' | 'too_long' = 'optimal'
    if (length < 20) {
      lengthCategory = 'too_short'
      score -= 10
    } else if (length > 60) {
      lengthCategory = 'too_long'
      score -= 15
    } else {
      score += 10
    }
    
    // Spam word penalties
    spamScore += flaggedWords.length * 15
    score -= flaggedWords.length * 10
    
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
    
    // Ensure scores are within bounds
    score = Math.max(0, Math.min(100, score))
    spamScore = Math.max(0, Math.min(100, spamScore))
    
    const openRatePrediction = Math.max(10, Math.min(45, score * 0.4 + Math.random() * 10))
    
    const sentiment: 'positive' | 'neutral' | 'negative' = 
      score > 80 ? 'positive' : score > 60 ? 'neutral' : 'negative'
    
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
      suggestions.push("Remove spam-trigger words to improve deliverability")
      improvements.push(`Avoid words like: ${flaggedWords.join(', ')}`)
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
      strengths
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

                {/* Quick Actions */}
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        variant="outline"
                        onClick={() => copyToClipboard(subjectLine)}
                        className="flex items-center space-x-2"
                      >
                        <Copy className="h-4 w-4" />
                        <span>Copy Subject Line</span>
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSubjectLine("")
                          setResult(null)
                        }}
                        className="flex items-center space-x-2"
                      >
                        <RefreshCw className="h-4 w-4" />
                        <span>Analyze Another</span>
                      </Button>
                    </div>
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