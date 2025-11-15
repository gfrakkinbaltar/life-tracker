'use client'

import { motion } from 'framer-motion'
import { Zap, Clock, Target, Focus } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import CalendarHeatmap from '../visualizations/CalendarHeatmap'

const timeAllocation = [
  { name: 'Deep Work', value: 4.5, color: '#00d4ff' },
  { name: 'Meetings', value: 2.0, color: '#7b2cbf' },
  { name: 'Communication', value: 1.5, color: '#ff006e' },
  { name: 'Break', value: 1.0, color: '#06ffa5' },
]

const productivityCalendarData = Array.from({ length: 30 }, (_, i) => {
  const date = new Date()
  date.setDate(date.getDate() - (29 - i))
  return {
    date: date.toISOString().split('T')[0],
    value: Math.floor(Math.random() * 8) + 1,
  }
})

export default function Productivity() {
  const focusScore = 78
  const deepWorkHours = 4.5
  const tasksCompleted = 12
  const tasksTotal = 15

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-strong rounded-2xl p-6 border border-accent/20 shadow-glow-cyan"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent/20 rounded-lg">
            <Zap className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h2 className="text-2xl font-bold glow-text">Productivity</h2>
            <p className="text-text-secondary text-sm">Time tracking & focus</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-lg p-4 border border-accent/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-secondary text-sm">Deep Work</p>
                <p className="text-2xl font-bold text-accent">{deepWorkHours} hrs</p>
                <p className="text-xs text-text-tertiary mt-1">Today</p>
              </div>
              <Focus className="w-8 h-8 text-accent/50" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-lg p-4 border border-accent-secondary/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-secondary text-sm">Focus Score</p>
                <p className="text-2xl font-bold text-accent-secondary">{focusScore}%</p>
                <p className="text-xs text-text-tertiary mt-1">Above average</p>
              </div>
              <Target className="w-8 h-8 text-accent-secondary/50" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-lg p-4 border border-accent-success/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-secondary text-sm">Tasks Done</p>
                <p className="text-2xl font-bold text-accent-success">
                  {tasksCompleted}/{tasksTotal}
                </p>
                <div className="mt-2 h-1.5 bg-background-tertiary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(tasksCompleted / tasksTotal) * 100}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-accent-success rounded-full"
                  />
                </div>
              </div>
              <Clock className="w-8 h-8 text-accent-success/50" />
            </div>
          </motion.div>
        </div>

        {/* Time Allocation */}
        <div className="glass rounded-lg p-4 border border-accent/20">
          <h3 className="text-lg font-semibold mb-4">Time Allocation (Today)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {timeAllocation.map((item, index) => (
                <div key={item.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-text-secondary">{item.name}</span>
                    </div>
                    <span className="text-text-primary font-bold">{item.value}h</span>
                  </div>
                  <div className="h-2 bg-background-tertiary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(item.value / 9) * 100}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={timeAllocation}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {timeAllocation.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(20, 20, 31, 0.9)',
                      border: '1px solid rgba(0, 212, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#ffffff',
                    }}
                  />
                  <Legend
                    wrapperStyle={{ fontSize: '12px', color: '#b8b8d4' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Productivity Calendar */}
        <CalendarHeatmap data={productivityCalendarData} color="accent" />
      </div>
    </motion.div>
  )
}
