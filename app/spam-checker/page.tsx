'use client'

import { useState } from 'react'
import { Shield, AlertTriangle, CheckCircle, Mail, BarChart3, Target, Zap } from 'lucide-react'

export default function SpamCheckerPage() {
  const [subjectLine, setSubjectLine] = useState('')
  const [emailContent, setEmailContent] = useState('')
  const [result, setResult] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  // Word lists from the provided code
  const shadyWords = ["0 down","Addresses","Addresses on cd","All","All natural","All natural/new","All new","All-natural","All-new","Allowance","As seen on","As seen on Oprah","At no cost","Auto email removal","Avoice bankruptcy","Avoid","Beneficial offer","Billing","Billing Address","Brand new pager","Bulk email","Cable converter","Calling creditors","Can you help us?","Cancel at any time","Cannot be combined","Casino","Celebrity","Cell phone cancer scam","Certified","Chance","Cheap","Cheap meds","Cialis","Clearance","Collect","Collect child support","Compare","Compare now","Compare online","Compare rates","Compete for your business","Confidentiality","Confidentiality on all orders","Congratulations","Consolidate debt and credit","Consolidate your debt","Copy accurately","Copy DVDs","COVID","Credit bureaus","Cures","Cures baldness","Dig up dirt on friends","Direct email","Direct marketing","Eliminate debt","Explode your business","Fast viagra delivery","Finance","Financial","Financial advice","Financial independence","Financially independent","For new customers only","Foreclosure","Free","Free access/money/gift","Free bonus","Free cell phone","Free DVD","Free grant money","Free information","Free installation","Free offer","Free priority mail","Free sample","Free website","Free!","Get","Gift card","Gift certificate","Gift included","Give it away","Giving away","Giving it away","Gold","Great","Great deal","Greetings of the day","Growth hormone","Guarantee","Guaranteed deposit","Guaranteed income","Guaranteed payment","Have you been turned down?","Hello (with no name included)","Hidden","Hidden assets","Hidden charges","Hidden costs","Hidden fees","High score","Home based business","Home mortgage","Human","Human growth hormone","If only it were that easy","Important information","Important notification","In accordance with laws","Instant weight loss","Insurance Lose weight","Internet marketing","Investment decision","Invoice","It's effective","Job alert","Junk","Lambo","Laser printer","Last Day","Leave","Legal","Legal notice","Life","Life insurance","Lifetime access","Lifetime deal","Limited","Limited amount","Limited number","Limited offer","Limited supply","Limited time offer","Limited time only","Loan"]

  const urgencyWords = ["Access now","Act","Act immediately","Act now","Act now!","Action","Action required","Apply here","Apply now","Apply now!","Apply online","Become a member","Before it's too late","Buy","Buy direct","Buy now","Buy today","Call","Call free","Call free/now","Call me","Call now","Call now!","Can we have a minute of your time?","Cancel now","Cancellation required","Claim now","Click","Click below","Click here","Click me to download","Click now","Click this link","Click to get","Click to remove","Contact us immediately","Deal ending soon","Do it now","Do it today","Don't delete","Don't hesitate","Don't waste time","Don't delete","Exclusive deal","Expire","Expires today","Final call","For instant access","For Only","For you","Friday before [holiday]","Get it away","Get it now","Get now","Get started","Get started now","Great offer","Here","Hurry up","Immediately","Important information regarding","Info you requested","Information you requested","Instant","Limited time","New customers only","Now","Now only","Offer expires","Once in lifetime","Only","Order now","Order today","Please read","Purchase now","Sign up free","Sign up free today","Supplies are limited","Take action","Take action now","This won't last","Time limited","Today","Top urgent","Trial","Urgent","What are you waiting for?","While supplies last","You are a winner"]

  const exaggeratedWords = ["$","#1","%","% free","% Satisfied","0%","0% risk","100%","100% free","100% more","100% off","100% satisfied","90%","99%","Access for free","Additional income","Amazed","Please","perfect","Amazing","Amazing offer","Amazing stuff","Be amazed","Be surprised","Be your own boss","Believe me","Best bargain","Best deal","Best offer","Best price","Best rates","Big bucks","Billion","Billion Dollars","Bonus","Boss","Can't live without","Cancel","Cash","Cash bonus","Cashcashcash","Consolidate debt","Double your","Double your cash","Double your income","Drastically reduced","Earn","Earn $","Earn Cash","Earn extra cash","Earn money","Earn per week","Eliminate bad credit","Expect to earn","Extra","Extra cash","Extra income","Fantastic","Fantastic deal","Fantastic offer","FAST","Fast cash","Financial freedom","Free access","Free consultation","Free gift","Free hosting","Free info","Free investment","Free membership","Free money","Free preview","Free quote","Free trial","Full refund","Get out of debt","Get paid","Giveaway","Guaranteed","Income","Income from home","Increase sales","Increase traffic","Incredible deal","Join billions","Join millions","Join millions of Americans","Join thousands","Lower monthly payments","Lower rates","Lowest price","Make $","Make money","Million","Million dollars","Money back","Money making","Month trial offer","More Internet Traffic","Multilevel marketing","No gimmicks","Number one","Once in a lifetime","One hundred percent guaranteed","One time","Pennies a day","Potential earnings","Prize","Promise","Pure profit","Risk-free","Satisfaction guaranteed","Save big money","Save up to","Serious cash","Special promotion","The best","Thousands","Unbeatable offer","Unbelievable","Unlimited","Unlimited trial","Warranty","Web traffic","Work from home"]

  const combinedTerms = []
  
  const addTerms = (list, category) => {
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
      let escaped = item.term.split(" ").map(word => 
        word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      ).join("[\\s\\-]+")
      return "\\b" + escaped + "\\b"
    }
  })

  const combinedRegex = new RegExp(patternParts.join("|"), "gi")

  const normalize = (text) => {
    return text.toLowerCase().replace(/[\s\-]+/g, "")
  }

  const getCategory = (match) => {
    const normMatch = normalize(match)
    for (let item of combinedTerms) {
      if (normalize(item.term) === normMatch) {
        return item.category
      }
    }
    return ""
  }

  const highlightText = (text) => {
    return text.replace(combinedRegex, function(match) {
      const category = getCategory(match)
      return `<span class="${category}">${match}</span>`
    })
  }

  const checkSpam = () => {
    if (!subjectLine.trim() && !emailContent.trim()) {
      return
    }

    setIsAnalyzing(true)

    setTimeout(() => {
      // Get highlighted text
      const highlightedSubject = highlightText(subjectLine)
      const highlightedEmail = highlightText(emailContent)

      // Count spam words
      const matches = emailContent.match(combinedRegex) || []
      const subjectMatches = subjectLine.match(combinedRegex) || []
      const totalSpamWords = matches.length + subjectMatches.length

      // Count per category
      let countShady = 0, countUrgency = 0, countExaggerated = 0
      matches.concat(subjectMatches).forEach(match => {
        const category = getCategory(match)
        if (category === "shady") countShady++
        else if (category === "urgency") countUrgency++
        else if (category === "exaggerated") countExaggerated++
      })

      // Calculate score
      let reducedScore = 100 - (countShady * 3 + countUrgency * 15 + countExaggerated * 10)
      if (reducedScore < 30) reducedScore = 30

      let scoreColor = "text-green-600"
      let feedbackText = "✅ You're good to go!"
      let bgColor = "bg-green-50 border-green-200"

      if (reducedScore < 65) {
        scoreColor = "text-red-600"
        feedbackText = "❌ Caution! Replace or remove the highlighted words."
        bgColor = "bg-red-50 border-red-200"
      } else if (reducedScore < 80) {
        scoreColor = "text-orange-600"
        feedbackText = "⚠️ Consider modifying highlighted words."
        bgColor = "bg-orange-50 border-orange-200"
      }

      // Analysis Report
      const words = emailContent.trim().split(/\s+/).filter(Boolean)
      const subjectWords = subjectLine.trim().split(/\s+/).filter(Boolean)
      
      let wordCountText = words.length + " words"
      let subjectLengthText = subjectWords.length + " words"

      if (subjectWords.length > 5) subjectLengthText += " ❌ (Bad)"
      else if (subjectWords.length >= 3) subjectLengthText += " ✅ (Good)"

      if (words.length > 150) wordCountText += " ❌ (Bad - Might go to spam)"
      else if (words.length >= 60) wordCountText += " ✅ (Good)"

      const linkCount = (emailContent.match(/https?:\/\/[^\s]+/g) || []).length
      let linkCountText = linkCount + " links"
      if (linkCount > 2) linkCountText += " ❌ (Bad)"
      else if (linkCount === 2) linkCountText += " ⚠️ (Okay)"
      else linkCountText += " ✅ (Good)"

      // Generate suggestions
      const suggestions = []
      if (subjectWords.length > 5) {
        suggestions.push("Consider shortening your subject line.")
      } else if (subjectWords.length < 3) {
        suggestions.push("Consider adding more context to your subject line.")
      }

      if (words.length > 150) {
        suggestions.push("Your email content is too long; consider shortening it.")
      } else if (words.length < 60) {
        suggestions.push("Your email content is short; consider adding more details.")
      }

      if (linkCount > 2) {
        suggestions.push("Reduce the number of links to avoid spam filters.")
      }

      if (totalSpamWords > 0) {
        suggestions.push("Review and replace highlighted spammy words.")
      }

      setResult({
        highlightedSubject,
        highlightedEmail,
        score: reducedScore,
        scoreColor,
        bgColor,
        feedbackText,
        subjectLength: subjectLengthText,
        wordCount: wordCountText,
        linkCount: linkCountText,
        spamWordCount: totalSpamWords === 0 ? totalSpamWords + " ✅ (Good)" : totalSpamWords + " ❌ (Bad)",
        suggestions
      })

      setIsAnalyzing(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <Shield className="h-4 w-4 mr-2" />
            Free Email Tool
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Email Spam Checker
            <span className="text-primary-600 block">Avoid the Spam Folder</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Analyze your email content and subject lines to ensure they don't trigger spam filters. 
            Get actionable suggestions to improve your email deliverability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                <Shield className="h-8 w-8 text-primary-600 mx-auto" />
              </div>
              <div className="text-sm font-medium text-gray-700">Spam Detection</div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                <BarChart3 className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <div className="text-sm font-medium text-gray-700">Score Analysis</div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                <Target className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <div className="text-sm font-medium text-gray-700">Word Highlighting</div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                <Zap className="h-8 w-8 text-purple-600 mx-auto" />
              </div>
              <div className="text-sm font-medium text-gray-700">Instant Results</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
            <div className="space-y-6">
              {/* Subject Line Input */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject Line
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subjectLine}
                  onChange={(e) => setSubjectLine(e.target.value)}
                  placeholder="Enter your email subject line..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                />
              </div>

              {/* Email Content Input */}
              <div>
                <label htmlFor="content" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Content
                </label>
                <textarea
                  id="content"
                  value={emailContent}
                  onChange={(e) => setEmailContent(e.target.value)}
                  placeholder="Paste your email content here..."
                  rows={8}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  onClick={checkSpam}
                  disabled={isAnalyzing || (!subjectLine.trim() && !emailContent.trim())}
                  className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <Shield className="h-5 w-5" />
                      <span>Check for Spam</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Results Section */}
          {result && (
            <div className="mt-8 space-y-6">
              {/* Score Display */}
              <div className={`rounded-2xl border-2 p-8 ${result.bgColor}`}>
                <div className="text-center mb-6">
                  <div className={`text-6xl font-bold ${result.scoreColor} mb-2`}>
                    {result.score}/100
                  </div>
                  <div className="text-lg font-semibold text-gray-700 mb-4">Spam Score</div>
                  
                  {/* Score Meter */}
                  <div className="bg-gray-200 rounded-full h-4 max-w-md mx-auto mb-4">
                    <div 
                      className={`h-4 rounded-full transition-all duration-1000 ${
                        result.score >= 80 ? 'bg-green-500' : 
                        result.score >= 65 ? 'bg-orange-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${result.score}%` }}
                    ></div>
                  </div>
                  
                  <div className="text-lg font-medium text-gray-800">
                    {result.feedbackText}
                  </div>
                </div>
              </div>

              {/* Processed Content */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Processed Content</h3>
                
                {result.highlightedSubject && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Subject Line:</h4>
                    <div 
                      className="p-4 bg-gray-50 rounded-lg border"
                      dangerouslySetInnerHTML={{ __html: result.highlightedSubject }}
                      style={{
                        '--shady-color': '#6b7280',
                        '--urgency-color': '#dc2626', 
                        '--exaggerated-color': '#f59e0b'
                      }}
                    />
                  </div>
                )}

                {result.highlightedEmail && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Email Content:</h4>
                    <div 
                      className="p-4 bg-gray-50 rounded-lg border whitespace-pre-wrap"
                      dangerouslySetInnerHTML={{ __html: result.highlightedEmail }}
                    />
                  </div>
                )}
              </div>

              {/* Analysis Report */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">📌 Analysis Report</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Subject Length:</span>
                      <span className="font-semibold">{result.subjectLength}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Word Count:</span>
                      <span className="font-semibold">{result.wordCount}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Number of Links:</span>
                      <span className="font-semibold">{result.linkCount}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Spammy Words:</span>
                      <span className="font-semibold">{result.spamWordCount}</span>
                    </div>
                  </div>
                </div>

                {/* Suggestions */}
                {result.suggestions.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Actionable Suggestions:</h4>
                    <ul className="space-y-2">
                      {result.suggestions.map((suggestion, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Color Guide */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">📌 Word Color Guide:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                      <div className="w-4 h-4 bg-gray-500 rounded"></div>
                      <span className="text-sm"><strong>Grey:</strong> Shady Words – Better to replace</span>
                    </div>
                    <div className="flex items-center space-x-2 p-3 bg-red-50 rounded-lg">
                      <div className="w-4 h-4 bg-red-500 rounded"></div>
                      <span className="text-sm"><strong>Red:</strong> Urgency Words – Should be removed</span>
                    </div>
                    <div className="flex items-center space-x-2 p-3 bg-orange-50 rounded-lg">
                      <div className="w-4 h-4 bg-orange-500 rounded"></div>
                      <span className="text-sm"><strong>Orange:</strong> Exaggerated Words – Consider modifying</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Improve Your Email Deliverability?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get professional email marketing services to ensure your campaigns reach the inbox every time.
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

      <style jsx>{`
        .shady {
          color: #6b7280;
          font-weight: bold;
          background-color: #f3f4f6;
          padding: 2px 4px;
          border-radius: 3px;
        }
        .urgency {
          color: #dc2626;
          font-weight: bold;
          background-color: #fef2f2;
          padding: 2px 4px;
          border-radius: 3px;
        }
        .exaggerated {
          color: #f59e0b;
          font-weight: bold;
          background-color: #fffbeb;
          padding: 2px 4px;
          border-radius: 3px;
        }
      `}</style>
    </div>
  )
}