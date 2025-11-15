'use client'

import { motion } from 'framer-motion'
import { Activity, Footprints, Flame, Zap } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'

const activityData = [
  { day: 'Mon', steps: 8500, distance: 6.2, calories: 420, active: 45 },
  { day: 'Tue', steps: 10200, distance: 7.5, calories: 510, active: 60 },
  { day: 'Wed', steps: 7800, distance: 5.8, calories: 390, active: 35 },
  { day: 'Thu', steps: 11500, distance: 8.4, calories: 580, active: 70 },
  { day: 'Fri', steps: 9200, distance: 6.8, calories: 460, active: 50 },
  { day: 'Sat', steps: 6800, distance: 5.0, calories: 340, active: 25 },
  { day: 'Sun', steps: 9500, distance: 7.0, calories: 475, active: 55 },
]

const todayStats = {
  steps: 8500,
  goal: 10000,
  distance: 6.2,
  calories: 420,
  activeMinutes: 45,
}

export default function ActivityTracking() {
  const stepsProgress = (todayStats.steps / todayStats.goal) * 100

  return (
    <div className="space-y-6">
      {/* Today's Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass rounded-lg p-4 border border-accent/20"
        >
          <div className="flex items-center gap-2 mb-2">
            <Footprints className="w-4 h-4 text-accent" />
            <span className="text-text-secondary text-xs">Steps</span>
          </div>
          <p className="text-2xl font-bold text-accent">{todayStats.steps.toLocaleString()}</p>
          <p className="text-xs text-text-tertiary">Goal: {todayStats.goal.toLocaleString()}</p>
          <div className="mt-2 h-2 bg-background-tertiary rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${stepsProgress}%` }}
              transition={{ duration: 1 }}
              className="h-full bg-accent rounded-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-lg p-4 border border-accent-secondary/20"
        >
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-accent-secondary" />
            <span className="text-text-secondary text-xs">Distance</span>
          </div>
          <p className="text-2xl font-bold text-accent-secondary">{todayStats.distance} km</p>
          <p className="text-xs text-text-tertiary">Today</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-lg p-4 border border-accent-tertiary/20"
        >
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-4 h-4 text-accent-tertiary" />
            <span className="text-text-secondary text-xs">Calories</span>
          </div>
          <p className="text-2xl font-bold text-accent-tertiary">{todayStats.calories}</p>
          <p className="text-xs text-text-tertiary">Burned</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-lg p-4 border border-accent-success/20"
        >
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-accent-success" />
            <span className="text-text-secondary text-xs">Active</span>
          </div>
          <p className="text-2xl font-bold text-accent-success">{todayStats.activeMinutes} min</p>
          <p className="text-xs text-text-tertiary">Today</p>
        </motion.div>
      </div>

      {/* Weekly Chart */}
      <div className="glass rounded-lg p-4 border border-accent/20">
        <h3 className="text-lg font-semibold mb-4">Weekly Activity</h3>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={activityData}>
            <defs>
              <linearGradient id="colorSteps" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00d4ff" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#00d4ff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="day" stroke="#b8b8d4" style={{ fontSize: '12px' }} />
            <YAxis stroke="#b8b8d4" style={{ fontSize: '12px' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(20, 20, 31, 0.9)',
                border: '1px solid rgba(0, 212, 255, 0.2)',
                borderRadius: '8px',
                color: '#ffffff',
              }}
            />
            <Area
              type="monotone"
              dataKey="steps"
              stroke="#00d4ff"
              fillOpacity={1}
              fill="url(#colorSteps)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

