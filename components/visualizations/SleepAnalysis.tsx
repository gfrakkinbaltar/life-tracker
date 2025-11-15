'use client'

import { motion } from 'framer-motion'
import { Moon, Bed, Sunrise } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Line } from 'recharts'

const sleepData = [
  { day: 'Mon', hours: 7.5, deep: 120, light: 180, rem: 90, awake: 30, score: 85 },
  { day: 'Tue', hours: 8.0, deep: 140, light: 200, rem: 100, awake: 20, score: 92 },
  { day: 'Wed', hours: 6.5, deep: 100, light: 150, rem: 80, awake: 60, score: 72 },
  { day: 'Thu', hours: 7.8, deep: 130, light: 190, rem: 95, awake: 25, score: 88 },
  { day: 'Fri', hours: 8.2, deep: 150, light: 210, rem: 110, awake: 15, score: 95 },
  { day: 'Sat', hours: 9.0, deep: 160, light: 220, rem: 120, awake: 10, score: 98 },
  { day: 'Sun', hours: 7.2, deep: 115, light: 170, rem: 85, awake: 40, score: 80 },
]

const lastNight = {
  bedtime: '11:30 PM',
  wakeTime: '7:15 AM',
  duration: '7h 45m',
  score: 88,
  deep: 125,
  light: 185,
  rem: 95,
  awake: 25,
}

export default function SleepAnalysis() {
  return (
    <div className="space-y-6">
      {/* Last Night Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-lg p-4 border border-accent-secondary/20"
        >
          <div className="flex items-center gap-2 mb-2">
            <Bed className="w-4 h-4 text-accent-secondary" />
            <span className="text-text-secondary text-xs">Bedtime</span>
          </div>
          <p className="text-xl font-bold text-accent-secondary">{lastNight.bedtime}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-lg p-4 border border-accent/20"
        >
          <div className="flex items-center gap-2 mb-2">
            <Sunrise className="w-4 h-4 text-accent" />
            <span className="text-text-secondary text-xs">Wake Time</span>
          </div>
          <p className="text-xl font-bold text-accent">{lastNight.wakeTime}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-lg p-4 border border-accent-tertiary/20"
        >
          <div className="flex items-center gap-2 mb-2">
            <Moon className="w-4 h-4 text-accent-tertiary" />
            <span className="text-text-secondary text-xs">Sleep Score</span>
          </div>
          <p className="text-2xl font-bold text-accent-tertiary">{lastNight.score}</p>
        </motion.div>
      </div>

      {/* Sleep Stages */}
      <div className="glass rounded-lg p-4 border border-accent/20">
        <h3 className="text-lg font-semibold mb-4">Sleep Stages (Last Night)</h3>
        <div className="grid grid-cols-4 gap-2 mb-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-accent">{lastNight.deep}</p>
            <p className="text-xs text-text-tertiary">Deep (min)</p>
            <div className="mt-2 h-2 bg-accent/30 rounded-full">
              <div className="h-full bg-accent rounded-full" style={{ width: '35%' }} />
            </div>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-accent-secondary">{lastNight.light}</p>
            <p className="text-xs text-text-tertiary">Light (min)</p>
            <div className="mt-2 h-2 bg-accent-secondary/30 rounded-full">
              <div className="h-full bg-accent-secondary rounded-full" style={{ width: '52%' }} />
            </div>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-accent-tertiary">{lastNight.rem}</p>
            <p className="text-xs text-text-tertiary">REM (min)</p>
            <div className="mt-2 h-2 bg-accent-tertiary/30 rounded-full">
              <div className="h-full bg-accent-tertiary rounded-full" style={{ width: '27%' }} />
            </div>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-text-tertiary">{lastNight.awake}</p>
            <p className="text-xs text-text-tertiary">Awake (min)</p>
            <div className="mt-2 h-2 bg-text-tertiary/30 rounded-full">
              <div className="h-full bg-text-tertiary rounded-full" style={{ width: '7%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Sleep Chart */}
      <div className="glass rounded-lg p-4 border border-accent/20">
        <h3 className="text-lg font-semibold mb-4">Weekly Sleep Patterns</h3>
        <ResponsiveContainer width="100%" height={200}>
          <ComposedChart data={sleepData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="day" stroke="#b8b8d4" style={{ fontSize: '12px' }} />
            <YAxis yAxisId="left" stroke="#b8b8d4" style={{ fontSize: '12px' }} />
            <YAxis yAxisId="right" orientation="right" stroke="#b8b8d4" style={{ fontSize: '12px' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(20, 20, 31, 0.9)',
                border: '1px solid rgba(0, 212, 255, 0.2)',
                borderRadius: '8px',
                color: '#ffffff',
              }}
            />
            <Bar yAxisId="left" dataKey="hours" fill="#7b2cbf" opacity={0.7} />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="score"
              stroke="#00d4ff"
              strokeWidth={2}
              dot={{ fill: '#00d4ff', r: 4 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

