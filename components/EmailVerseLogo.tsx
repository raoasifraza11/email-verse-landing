import React from 'react'
import Image from 'next/image'

interface EmailVerseLogoProps {
  className?: string
  showText?: boolean
  textClassName?: string
}

const EmailVerseLogo: React.FC<EmailVerseLogoProps> = ({ 
  className = "h-10 w-auto", 
  showText = false,
  textClassName = "text-2xl font-bold"
}) => {
  return (
    <div className="flex items-center">
      {/* EmailVerse Logo - Using New PNG Version */}
      <div className={`relative ${className}`}>
        <Image
          src="/emailverse-logo.png"
          alt="EmailVerse Logo"
          width={200}
          height={80}
          className="object-contain"
          priority
        />
      </div>
      
      {/* EmailVerse Text - Only show if explicitly requested */}
      {showText && (
        <span className={`text-gray-800 ml-3 ${textClassName}`}>
          EmailVerse
        </span>
      )}
    </div>
  )
}

export default EmailVerseLogo