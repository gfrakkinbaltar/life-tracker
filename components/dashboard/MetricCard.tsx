'use client'

import { motion } from 'framer-motion'
import { LucideIcon, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import RingChart from '../visualizations/RingChart'
import MicroChart from '../visualizations/MicroChart'

interface MetricCardProps {
  title: string
  value: number
  max: number
  unit: string
  icon: LucideIcon
  color: 'accent' | 'accent-secondary' | 'accent-tertiary' | 'accent-success'
  trend?: number
  microChart: number[]
}

export default function MetricCard({
  title,
  value,
  max,
  unit,
  icon: Icon,
  color,
  trend,
  microChart,
}: MetricCardProps) {
  const percentage = (value / max) * 100
  const colorClasses = {
    accent: 'border-accent/30 text-accent',
    'accent-secondary': 'border-accent-secondary/30 text-accent-secondary',
    'accent-tertiary': 'border-accent-tertiary/30 text-accent-tertiary',
    'accent-success': 'border-accent-success/30 text-accent-success',
  }

  const glowClasses = {
    accent: 'shadow-glow-cyan',
    'accent-secondary': 'shadow-glow-purple',
    'accent-tertiary': 'shadow-glow-pink',
    'accent-success': 'shadow-[0_0_20px_rgba(6,255,165,0.5)]',
  }

  const iconBgClasses = {
    accent: 'bg-accent/20',
    'accent-secondary': 'bg-accent-secondary/20',
    'accent-tertiary': 'bg-accent-tertiary/20',
    'accent-success': 'bg-accent-success/20',
  }

  const iconTextClasses = {
    accent: 'text-accent',
    'accent-secondary': 'text-accent-secondary',
    'accent-tertiary': 'text-accent-tertiary',
    'accent-success': 'text-accent-success',
  }

  const valueTextClasses = {
    accent: 'text-accent',
    'accent-secondary': 'text-accent-secondary',
    'accent-tertiary': 'text-accent-tertiary',
    'accent-success': 'text-accent-success',
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      className={cn(
        'glass rounded-xl p-5 border hover-glow transition-all duration-300',
        colorClasses[color],
        glowClasses[color]
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={cn('p-2 rounded-lg', iconBgClasses[color])}>
            <Icon className={cn('w-5 h-5', iconTextClasses[color])} />
          </div>
          <div>
            <p className="text-text-tertiary text-xs font-medium uppercase tracking-wide">
              {title}
            </p>
            {trend !== undefined && (
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3 text-accent-success" />
                <span className="text-xs text-accent-success font-medium">
                  {trend > 0 ? '+' : ''}{trend}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={cn('text-3xl font-bold', valueTextClasses[color])}
          >
            {value.toFixed(value % 1 === 0 ? 0 : 1)}
            <span className="text-lg text-text-secondary ml-1">{unit}</span>
          </motion.p>
        </div>
        <div className="relative w-16 h-16">
          <RingChart value={percentage} color={color} size={64} />
        </div>
      </div>

      {/* Micro Chart */}
      <div className="mt-4 h-12">
        <MicroChart data={microChart} color={color} />
      </div>
    </motion.div>
  )
}

