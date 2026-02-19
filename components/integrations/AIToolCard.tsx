'use client'

import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'

interface AIToolCardProps {
  name: string
  url: string
  image: string
  categoryColor: string
  isExpanded?: boolean
  onToggleExpand?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export default function AIToolCard({
  name,
  url,
  image,
  categoryColor,
  isExpanded = false,
  onToggleExpand,
  onMouseEnter,
  onMouseLeave
}: AIToolCardProps) {
  const hasProsCons = !!onToggleExpand

  return (
    <div
      className="flex flex-col"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group bg-white rounded-lg border-2 transition-all duration-200 flex flex-col items-center text-center hover:shadow-lg overflow-hidden ${categoryColor}`}
      >
        <div className="w-full p-4 flex flex-col items-center">
          <div className="w-16 h-16 mb-3 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain p-2"
              loading="lazy"
            />
          </div>
          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2">
            {name}
          </h4>
          {hasProsCons && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onToggleExpand?.()
              }}
              className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-700"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="h-3.5 w-3.5" />
                  Hide pros & cons
                </>
              ) : (
                <>
                  <ChevronDown className="h-3.5 w-3.5" />
                  View pros & cons
                </>
              )}
            </button>
          )}
          {hasProsCons && (
            <p className="mt-1 text-[10px] text-gray-400">Hover for pros & cons</p>
          )}
          <ExternalLink className="h-3 w-3 text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </a>
    </div>
  )
}
