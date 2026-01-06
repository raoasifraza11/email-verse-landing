import React from 'react'

interface EmailVerseLogoProps {
  className?: string
  showText?: boolean
  textClassName?: string
}

const EmailVerseLogo: React.FC<EmailVerseLogoProps> = ({ 
  className = "h-8 w-8", 
  showText = true,
  textClassName = "text-2xl font-bold"
}) => {
  return (
    <div className="flex items-center space-x-2">
      {/* EmailVerse Logo Icon */}
      <svg 
        viewBox="0 0 100 100" 
        className={className}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="emailverse-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
        </defs>
        
        {/* Envelope Shape */}
        <path
          d="M15 25 L50 50 L85 25 L85 75 L15 75 Z"
          fill="url(#emailverse-gradient)"
          stroke="url(#emailverse-gradient)"
          strokeWidth="2"
        />
        
        {/* Envelope Flap */}
        <path
          d="M15 25 L50 50 L85 25"
          fill="none"
          stroke="url(#emailverse-gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Inner Lines for Detail */}
        <path
          d="M25 35 L75 35 M25 45 L75 45 M25 55 L60 55"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      
      {/* EmailVerse Text */}
      {showText && (
        <span className={`bg-gradient-to-r from-primary-600 to-secondary-800 bg-clip-text text-transparent ${textClassName}`}>
          EmailVerse
        </span>
      )}
    </div>
  )
}

export default EmailVerseLogo