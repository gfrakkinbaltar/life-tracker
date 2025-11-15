'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MicroChartProps {
  data: number[]
  color: 'accent' | 'accent-secondary' | 'accent-tertiary' | 'accent-success'
  height?: number
}

export default function MicroChart({
  data,
  color,
  height = 40,
}: MicroChartProps) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  const colorClasses = {
    accent: 'stroke-accent fill-accent/20',
    'accent-secondary': 'stroke-accent-secondary fill-accent-secondary/20',
    'accent-tertiary': 'stroke-accent-tertiary fill-accent-tertiary/20',
    'accent-success': 'stroke-accent-success fill-accent-success/20',
  }

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100
    const y = 100 - ((value - min) / range) * 100
    return `${x},${y}`
  }).join(' ')

  const areaPath = `M 0,100 L ${points} L 100,100 Z`

  return (
    <div className="w-full" style={{ height }}>
      <svg
        width="100%"
        height={height}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="overflow-visible"
      >
        {/* Area fill */}
        <motion.path
          d={areaPath}
          className={cn(colorClasses[color])}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        {/* Line */}
        <motion.polyline
          points={points}
          fill="none"
          strokeWidth="0.5"
          className={cn(colorClasses[color].split(' ')[0])}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}

