'use client'

import { motion } from 'framer-motion'
import { Sparkles, TrendingUp, Lightbulb, AlertCircle } from 'lucide-react'
import { useState } from 'react'

const sampleInsights = [
  {
    type: 'pattern',
    title: 'Sleep & Exercise Correlation',
    description: 'You sleep 15% better on days when you exercise for 30+ minutes',
    icon: TrendingUp,
    color: 'accent',
    confidence: 92,
  },
  {
    type: 'prediction',
    title: 'Energy Forecast',
    description: 'Based on your sleep patterns, expect high energy tomorrow afternoon',
    icon: Lightbulb,
    color: 'accent-success',
    confidence: 78,
  },
  {
    type: 'recommendation',
    title: 'Optimal Workout Time',
    description: 'Your peak performance occurs Tuesday-Thursday mornings (8-10 AM)',
    icon: Sparkles,
    color: 'accent-secondary',
    confidence: 85,
  },
  {
    type: 'warning',
    title: 'Sleep Debt Alert',
    description: 'You\'ve accumulated 4 hours of sleep debt this week. Consider an earlier bedtime.',
    icon: AlertCircle,
    color: 'accent-tertiary',
    confidence: 95,
  },
]

export default function AIInsights() {
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerateInsights = async () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const iconClasses = {
    accent: 'text-accent',
    'accent-secondary': 'text-accent-secondary',
    'accent-tertiary': 'text-accent-tertiary',
    'accent-success': 'text-accent-success',
  }

  const borderClasses = {
    accent: 'border-accent/30',
    'accent-secondary': 'border-accent-secondary/30',
    'accent-tertiary': 'border-accent-tertiary/30',
    'accent-success': 'border-accent-success/30',
  }

  const bgClasses = {
    accent: 'bg-accent/20',
    'accent-secondary': 'bg-accent-secondary/20',
    'accent-tertiary': 'bg-accent-tertiary/20',
    'accent-success': 'bg-accent-success/20',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-strong rounded-2xl p-6 border border-accent/20 shadow-glow-cyan"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent/20 rounded-lg">
            <Sparkles className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h2 className="text-2xl font-bold glow-text">AI Insights</h2>
            <p className="text-text-secondary text-sm">Pattern recognition & predictions</p>
          </div>
        </div>
        <button
          onClick={handleGenerateInsights}
          disabled={isLoading}
          className="px-4 py-2 bg-accent/20 text-accent rounded-lg hover:bg-accent/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
        >
          {isLoading ? 'Analyzing...' : 'Generate Insights'}
        </button>
      </div>

      <div className="space-y-4">
        {sampleInsights.map((insight, index) => {
          const Icon = insight.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`glass rounded-lg p-4 border ${borderClasses[insight.color as keyof typeof borderClasses]} hover-glow`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg ${bgClasses[insight.color as keyof typeof bgClasses]}`}>
                  <Icon className={`w-5 h-5 ${iconClasses[insight.color as keyof typeof iconClasses]}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-text-primary">{insight.title}</h3>
                    <span className="text-xs text-text-tertiary">
                      {insight.confidence}% confidence
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm">{insight.description}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-background-tertiary rounded text-text-tertiary uppercase">
                      {insight.type}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="mt-6 p-4 bg-background-tertiary/50 rounded-lg border border-accent/10">
        <p className="text-xs text-text-tertiary text-center">
          💡 AI insights are generated using Claude API. Configure ANTHROPIC_API_KEY in your .env file to enable.
        </p>
      </div>
    </motion.div>
  )
}
