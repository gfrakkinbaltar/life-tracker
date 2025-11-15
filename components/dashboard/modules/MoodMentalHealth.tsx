'use client'

import { motion } from 'framer-motion'
import { Brain, Smile, Heart, TrendingUp } from 'lucide-react'
import MoodRiver from '../visualizations/MoodRiver'
import CalendarHeatmap from '../visualizations/CalendarHeatmap'

const moodCalendarData = Array.from({ length: 30 }, (_, i) => {
  const date = new Date()
  date.setDate(date.getDate() - (29 - i))
  return {
    date: date.toISOString().split('T')[0],
    value: Math.floor(Math.random() * 10) + 1,
  }
})

export default function MoodMentalHealth() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-strong rounded-2xl p-6 border border-accent-secondary/20 shadow-glow-purple"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent-secondary/20 rounded-lg">
            <Brain className="w-6 h-6 text-accent-secondary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold glow-text-purple">Mood & Mental Health</h2>
            <p className="text-text-secondary text-sm">Emotional wellness tracking</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Today's Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-lg p-4 border border-accent-secondary/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-secondary text-sm">Today's Mood</p>
                <p className="text-2xl font-bold text-accent-secondary">8/10</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-accent-success" />
                  <span className="text-xs text-accent-success">+0.5</span>
                </div>
              </div>
              <Smile className="w-8 h-8 text-accent-secondary/50" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-lg p-4 border border-accent/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-secondary text-sm">Weekly Avg</p>
                <p className="text-2xl font-bold text-accent">7.8/10</p>
                <p className="text-xs text-text-tertiary mt-1">+0.3 vs last week</p>
              </div>
              <Heart className="w-8 h-8 text-accent/50" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-lg p-4 border border-accent-tertiary/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-secondary text-sm">Stress Level</p>
                <p className="text-2xl font-bold text-accent-tertiary">3/10</p>
                <p className="text-xs text-text-tertiary mt-1">Low</p>
              </div>
              <Brain className="w-8 h-8 text-accent-tertiary/50" />
            </div>
          </motion.div>
        </div>

        {/* Mood River */}
        <MoodRiver />

        {/* Mood Calendar */}
        <CalendarHeatmap data={moodCalendarData} color="accent-secondary" />
      </div>
    </motion.div>
  )
}

