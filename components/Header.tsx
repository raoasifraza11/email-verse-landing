'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Star, Shield, Users, Zap, Mail } from 'lucide-react'
import EmailVerseLogo from './EmailVerseLogo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showDropdown, setShowDropdown] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Features', 
      href: '/features',
      dropdown: [
        { name: 'Analytics', href: '/features#analytics', icon: Star },
        { name: 'Templates', href: '/features#templates', icon: Mail },
        { name: 'Integrations', href: '/features#integrations', icon: Shield }
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Statistics', href: '/statistics' },
  ]

  const trustIndicators = [
    { text: 'SOC 2 Certified', icon: Shield },
    { text: '2K+ Projects', icon: Users },
    { text: '4.9★ Rating', icon: Star }
  ]

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/99 backdrop-blur-lg shadow-xl border-b border-gray-200' 
        : 'bg-white shadow-md border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <EmailVerseLogo 
                className="h-10 w-auto group-hover:scale-105 transition-transform duration-200" 
                showText={false}
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 ml-12">
            <div className="flex items-center space-x-12">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setShowDropdown(item.name)}
                      onMouseLeave={() => setShowDropdown('')}
                    >
                      <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-semibold transition-colors duration-200 py-3 px-2">
                        <span>{item.name}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      
                      {showDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50">
                          {item.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              href={dropItem.href}
                              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
                            >
                              <dropItem.icon className="h-5 w-5 text-primary-500" />
                              <span className="font-medium">{dropItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-primary-600 font-semibold transition-colors duration-200 relative group py-3 px-2"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/login" 
              className="text-gray-700 hover:text-primary-600 font-semibold transition-colors duration-200 px-4 py-2"
            >
              Sign In
            </Link>
            <a 
              href="https://calendly.com/emailverse/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-primary hover:shadow-lg hover:shadow-primary-500/25 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <Zap className="h-4 w-4" />
              <span>Get Started Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-xl text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-all duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-100 bg-white/95 backdrop-blur-lg">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-secondary-600 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          href={dropItem.href}
                          className="flex items-center space-x-2 text-secondary-500 hover:text-primary-600 py-1 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <dropItem.icon className="h-4 w-4" />
                          <span>{dropItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Trust Indicators */}
              <div className="pt-4 border-t border-primary-100">
                <div className="flex flex-wrap gap-2 mb-4">
                  {trustIndicators.map((indicator, index) => (
                    <div key={index} className="flex items-center space-x-1 px-2 py-1 bg-primary-50 rounded-full text-xs text-secondary-600">
                      <indicator.icon className="h-3 w-3" />
                      <span>{indicator.text}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  href="/login" 
                  className="block text-secondary-600 hover:text-primary-600 font-medium mb-3 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <a 
                  href="https://calendly.com/emailverse/consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-primary hover:shadow-lg hover:shadow-primary-500/25 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Zap className="h-4 w-4" />
                  <span>Get Started Now</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header