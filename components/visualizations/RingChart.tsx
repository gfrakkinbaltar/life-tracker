'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface RingChartProps {
  value: number
  color: 'accent' | 'accent-secondary' | 'accent-tertiary' | 'accent-success'
  size?: number
  strokeWidth?: number
}

export default function RingChart({
  value,
  color,
  size = 100,
  strokeWidth = 8,
}: RingChartProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  const colorClasses = {
    accent: 'stroke-accent',
    'accent-secondary': 'stroke-accent-secondary',
    'accent-tertiary': 'stroke-accent-tertiary',
    'accent-success': 'stroke-accent-success',
  }

  const glowClasses = {
    accent: 'drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]',
    'accent-secondary': 'drop-shadow-[0_0_8px_rgba(123,44,191,0.6)]',
    'accent-tertiary': 'drop-shadow-[0_0_8px_rgba(255,0,110,0.6)]',
    'accent-success': 'drop-shadow-[0_0_8px_rgba(6,255,165,0.6)]',
  }

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Value circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className={cn(colorClasses[color], glowClasses[color])}
        />
      </svg>
    </div>
  )
}

