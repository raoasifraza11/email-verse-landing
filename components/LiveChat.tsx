'use client'

import { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Send, Minimize2, User, Bot, Phone, Mail, Clock } from 'lucide-react'

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [message, setMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Sarah from EmailVerse. How can I help you today? 👋",
      sender: 'agent',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: '👩‍💼'
    }
  ])

  const quickReplies = [
    "Tell me about pricing",
    "How does AI automation work?",
    "Can I see a demo?",
    "What integrations do you support?"
  ]

  const agentResponses = [
    "Thanks for your interest! Let me help you with that. Our pricing starts at $29/month for up to 10,000 contacts. Would you like to see our full pricing plans?",
    "Great question! Our AI analyzes your subscriber behavior and automatically optimizes send times, subject lines, and content for better engagement. Want to see it in action?",
    "I'd love to show you a demo! You can book a personalized demo with our team, or start with our free 14-day trial. Which would you prefer?",
    "We support 500+ integrations including Shopify, Salesforce, HubSpot, and many more. What specific tools are you looking to connect?",
    "That's a great question! Let me connect you with one of our specialists who can provide more detailed information.",
    "I'm here to help! Is there anything specific about EmailVerse you'd like to know more about?"
  ]

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  useEffect(() => {
    if (!isOpen && messages.length > 1) {
      setUnreadCount(messages.filter(m => m.sender === 'agent').length - 1)
    } else {
      setUnreadCount(0)
    }
  }, [isOpen, messages])

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: '👤'
      }
      setMessages([...messages, newMessage])
      setMessage('')
      
      // Show typing indicator
      setIsTyping(true)
      
      // Simulate agent response
      setTimeout(() => {
        setIsTyping(false)
        const randomResponse = agentResponses[Math.floor(Math.random() * agentResponses.length)]
        const agentResponse = {
          id: messages.length + 2,
          text: randomResponse,
          sender: 'agent',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          avatar: '👩‍💼'
        }
        setMessages(prev => [...prev, agentResponse])
      }, 1500 + Math.random() * 1000)
    }
  }

  const handleQuickReply = (reply: string) => {
    setMessage(reply)
    setTimeout(() => handleSendMessage(), 100)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="relative bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-bounce-slow"
          >
            <MessageCircle className="h-6 w-6" />
            {unreadCount > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-pulse">
                {unreadCount}
              </div>
            )}
          </button>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Chat with us! We're online 💬
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 transition-all duration-300 ${isMinimized ? 'h-16' : 'h-[500px]'} overflow-hidden`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-lg">👩‍💼</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <span className="font-semibold">Sarah Johnson</span>
                <div className="text-xs opacity-90 flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Online • Typically replies in minutes</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white/80 hover:text-white transition-colors p-1 rounded"
              >
                <Minimize2 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1 rounded"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-end space-x-2 max-w-xs ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs flex-shrink-0">
                        {msg.avatar}
                      </div>
                      <div
                        className={`px-4 py-2 rounded-2xl text-sm ${
                          msg.sender === 'user'
                            ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-br-sm'
                            : 'bg-white text-gray-900 border border-gray-200 rounded-bl-sm shadow-sm'
                        }`}
                      >
                        <p>{msg.text}</p>
                        <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-primary-100' : 'text-gray-500'}`}>
                          {msg.timestamp}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-end space-x-2 max-w-xs">
                      <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs">
                        👩‍💼
                      </div>
                      <div className="bg-white text-gray-900 border border-gray-200 rounded-2xl rounded-bl-sm shadow-sm px-4 py-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              {messages.length <= 2 && (
                <div className="px-4 py-2 border-t border-gray-200 bg-white">
                  <div className="text-xs text-gray-500 mb-2">Quick replies:</div>
                  <div className="flex flex-wrap gap-1">
                    {quickReplies.slice(0, 2).map((reply, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickReply(reply)}
                        className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
                
                {/* Contact Options */}
                <div className="flex items-center justify-center space-x-4 mt-3 pt-3 border-t border-gray-100">
                  <button className="flex items-center space-x-1 text-xs text-gray-500 hover:text-primary-600 transition-colors">
                    <Phone className="h-3 w-3" />
                    <span>Call us</span>
                  </button>
                  <button className="flex items-center space-x-1 text-xs text-gray-500 hover:text-primary-600 transition-colors">
                    <Mail className="h-3 w-3" />
                    <span>Email</span>
                  </button>
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default LiveChat