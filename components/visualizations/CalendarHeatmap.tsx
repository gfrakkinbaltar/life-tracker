'use client'

import { motion } from 'framer-motion'

interface CalendarHeatmapProps {
  data: { date: string; value: number }[]
  color?: string
}

export default function CalendarHeatmap({ data, color = 'accent' }: CalendarHeatmapProps) {
  // Generate last 30 days
  const days = Array.from({ length: 30 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - (29 - i))
    return date.toISOString().split('T')[0]
  })

  const maxValue = Math.max(...data.map(d => d.value), 1)
  
  const colorClasses = {
    accent: {
      bg: 'bg-accent',
      border: 'border-accent/30',
    },
    'accent-secondary': {
      bg: 'bg-accent-secondary',
      border: 'border-accent-secondary/30',
    },
    'accent-tertiary': {
      bg: 'bg-accent-tertiary',
      border: 'border-accent-tertiary/30',
    },
    'accent-success': {
      bg: 'bg-accent-success',
      border: 'border-accent-success/30',
    },
  }

  const getIntensity = (date: string) => {
    const entry = data.find(d => d.date === date)
    if (!entry) return 0
    return (entry.value / maxValue) * 100
  }

  return (
    <div className="glass rounded-lg p-4 border border-accent/20">
      <h3 className="text-lg font-semibold mb-4">Activity Calendar</h3>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          const intensity = getIntensity(day)
          const opacity = intensity / 100
          
          return (
            <motion.div
              key={day}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.01 }}
              className={`aspect-square rounded border ${
                intensity > 0
                  ? `${colorClasses[color as keyof typeof colorClasses].bg} ${colorClasses[color as keyof typeof colorClasses].border}`
                  : 'bg-background-tertiary border-background-tertiary'
              }`}
              style={{
                opacity: intensity > 0 ? Math.max(0.3, opacity) : 0.2,
              }}
              title={`${day}: ${data.find(d => d.date === day)?.value || 0}`}
            />
          )
        })}
      </div>
      <div className="flex items-center justify-between mt-4 text-xs text-text-tertiary">
        <span>Less</span>
        <div className="flex gap-1">
          {[0, 25, 50, 75, 100].map((val) => (
            <div
              key={val}
              className={`w-3 h-3 rounded border ${
                val > 0
                  ? `${colorClasses[color as keyof typeof colorClasses].bg} ${colorClasses[color as keyof typeof colorClasses].border}`
                  : 'bg-background-tertiary border-background-tertiary'
              }`}
              style={{
                opacity: val > 0 ? Math.max(0.3, val / 100) : 0.2,
              }}
            />
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  )
}

