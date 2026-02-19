'use client'

import { useState, useRef, Fragment } from 'react'
import { ChevronDown, ChevronUp, ExternalLink, ThumbsUp, ThumbsDown, Target } from 'lucide-react'
import { getToolProsCons, type ToolProsCons } from '@/lib/ai-sales-tools-data'
import AIToolCard from './AIToolCard'

interface ToolItem {
  name: string
  url: string
  image: string
}

interface AIToolsCategoryGridProps {
  tools: ToolItem[]
  categoryColor: string
}

const HOVER_CLOSE_DELAY_MS = 200

export function ToolProsConsPanelFullWidth({
  data,
  onClose,
  onMouseEnter,
  onMouseLeave
}: {
  data: ToolProsCons
  onClose: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}) {
  return (
    <div
      className="p-6 bg-gray-50 rounded-xl border border-gray-200 text-left w-full"
      role="region"
      aria-label={`Pros and cons for ${data.name}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Pros & Cons — {data.name}
        </span>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 flex items-center gap-1 text-sm"
          aria-label="Close"
        >
          <ChevronUp className="h-4 w-4" />
          Hide
        </button>
      </div>

      {data.bestFor && (
        <div className="mb-4 flex gap-2">
          <Target className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700">
            <span className="font-medium text-gray-900">Best for:</span> {data.bestFor}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <ThumbsUp className="h-4 w-4 text-green-600" />
            <span className="text-xs font-semibold text-green-800">Pros</span>
          </div>
          <ul className="space-y-2">
            {data.pros.map((pro, i) => (
              <li key={i} className="text-sm text-gray-700 flex gap-2">
                <span className="text-green-500 mt-0.5">•</span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <ThumbsDown className="h-4 w-4 text-amber-600" />
            <span className="text-xs font-semibold text-amber-800">Cons</span>
          </div>
          <ul className="space-y-2">
            {data.cons.map((con, i) => (
              <li key={i} className="text-sm text-gray-700 flex gap-2">
                <span className="text-amber-500 mt-0.5">•</span>
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-4 text-xs text-gray-400">
        Source:{' '}
        <a
          href="https://www.salescaptain.io/ai-sales-tools"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-500"
        >
          SalesCaptain – AI Sales Tools
        </a>
      </p>
    </div>
  )
}

const COLS = 5

export default function AIToolsCategoryGrid({ tools, categoryColor }: AIToolsCategoryGridProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scheduleClose = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    closeTimeoutRef.current = setTimeout(() => setExpandedIndex(null), HOVER_CLOSE_DELAY_MS)
  }
  const cancelClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }
  const open = (i: number) => {
    cancelClose()
    setExpandedIndex(i)
  }

  // Build row-based layout so the full-width panel appears directly below the row of the expanded card
  const rows: number[][] = []
  for (let r = 0; r < tools.length; r += COLS) {
    rows.push(Array.from({ length: Math.min(COLS, tools.length - r) }, (_, c) => r + c))
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {rows.map((rowIndices, rowIndex) => (
        <Fragment key={rowIndex}>
          {rowIndices.map((i) => {
            const tool = tools[i]
            const data = getToolProsCons(tool.name)
            const isExpanded = expandedIndex === i
            return (
              <AIToolCard
                key={i}
                name={tool.name}
                url={tool.url}
                image={tool.image}
                categoryColor={categoryColor}
                isExpanded={isExpanded}
                onToggleExpand={data ? () => setExpandedIndex(isExpanded ? null : i) : undefined}
                onMouseEnter={data ? () => open(i) : undefined}
                onMouseLeave={data ? scheduleClose : undefined}
              />
            )
          })}
          {rowIndices.includes(expandedIndex ?? -1) && expandedIndex !== null && getToolProsCons(tools[expandedIndex].name) && (
            <div className="col-span-full">
              <ToolProsConsPanelFullWidth
                data={getToolProsCons(tools[expandedIndex].name)!}
                onClose={() => setExpandedIndex(null)}
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
              />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  )
}
