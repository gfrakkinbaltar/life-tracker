'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, TrendingUp, Calendar, Sun } from 'lucide-react'
import { getGreeting, formatTime, formatDate } from '@/lib/utils'

export default function HeroSection() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [streak, setStreak] = useState(42)
  const [mood, setMood] = useState(8)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const greeting = getGreeting()

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="glass-strong rounded-2xl p-8 border border-accent/20 shadow-glow-cyan">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Greeting Section */}
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-2 glow-text"
            >
              {greeting}, <span className="text-accent">Alex</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-text-secondary text-lg"
            >
              {formatDate(currentTime)} • {formatTime(currentTime)}
            </motion.p>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4">
            {/* Streak */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="glass rounded-xl p-4 border border-accent-secondary/30 hover-glow"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent-secondary/20 rounded-lg">
                  <Sparkles className="w-5 h-5 text-accent-secondary" />
                </div>
                <div>
                  <p className="text-text-tertiary text-sm">Day Streak</p>
                  <p className="text-2xl font-bold text-accent-secondary">{streak}</p>
                </div>
              </div>
            </motion.div>

            {/* Mood */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="glass rounded-xl p-4 border border-accent-tertiary/30 hover-glow"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent-tertiary/20 rounded-lg">
                  <Sun className="w-5 h-5 text-accent-tertiary" />
                </div>
                <div>
                  <p className="text-text-tertiary text-sm">Today's Mood</p>
                  <p className="text-2xl font-bold text-accent-tertiary">{mood}/10</p>
                </div>
              </div>
            </motion.div>

            {/* Trend */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="glass rounded-xl p-4 border border-accent/30 hover-glow"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-text-tertiary text-sm">Health Score</p>
                  <p className="text-2xl font-bold text-accent">87</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Weather Integration Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 pt-6 border-t border-accent/10"
        >
          <div className="flex items-center gap-2 text-text-secondary">
            <Sun className="w-4 h-4" />
            <span className="text-sm">Sunny, 72°F • Perfect weather for productivity</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

