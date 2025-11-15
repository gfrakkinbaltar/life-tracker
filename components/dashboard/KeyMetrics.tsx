'use client'

import { motion } from 'framer-motion'
import MetricCard from './MetricCard'
import { Activity, Brain, Heart, Zap, BookOpen, Users, Target, Coffee } from 'lucide-react'

const metrics = [
  {
    id: 'health',
    title: 'Health Score',
    value: 87,
    max: 100,
    unit: '',
    icon: Heart,
    color: 'accent-tertiary',
    trend: +5,
    microChart: [82, 85, 84, 86, 87, 88, 87],
  },
  {
    id: 'productivity',
    title: 'Productivity',
    value: 73,
    max: 100,
    unit: '%',
    icon: Zap,
    color: 'accent',
    trend: +12,
    microChart: [65, 68, 70, 72, 71, 73, 73],
  },
  {
    id: 'mood',
    title: 'Mood Trend',
    value: 8.2,
    max: 10,
    unit: '/10',
    icon: Brain,
    color: 'accent-secondary',
    trend: +0.3,
    microChart: [7.5, 7.8, 8.0, 8.1, 8.0, 8.2, 8.2],
  },
  {
    id: 'sleep',
    title: 'Sleep Quality',
    value: 85,
    max: 100,
    unit: '%',
    icon: Coffee,
    color: 'accent',
    trend: +2,
    microChart: [80, 82, 83, 84, 85, 84, 85],
  },
  {
    id: 'exercise',
    title: 'Exercise',
    value: 45,
    max: 60,
    unit: ' min',
    icon: Activity,
    color: 'accent-tertiary',
    trend: +10,
    microChart: [30, 35, 40, 42, 43, 44, 45],
  },
  {
    id: 'social',
    title: 'Social',
    value: 6,
    max: 10,
    unit: ' hrs',
    icon: Users,
    color: 'accent-secondary',
    trend: +1,
    microChart: [4, 5, 5, 6, 5, 6, 6],
  },
  {
    id: 'learning',
    title: 'Learning',
    value: 2.5,
    max: 5,
    unit: ' hrs',
    icon: BookOpen,
    color: 'accent',
    trend: +0.5,
    microChart: [1.5, 2.0, 2.2, 2.3, 2.4, 2.5, 2.5],
  },
  {
    id: 'goals',
    title: 'Goals Progress',
    value: 68,
    max: 100,
    unit: '%',
    icon: Target,
    color: 'accent-secondary',
    trend: +8,
    microChart: [55, 58, 60, 62, 65, 67, 68],
  },
]

export default function KeyMetrics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 * index }}
        >
          <MetricCard {...metric} />
        </motion.div>
      ))}
    </motion.div>
  )
}

