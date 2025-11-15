'use client'

import { motion } from 'framer-motion'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const moodData = [
  { date: 'Mon', mood: 7.5, energy: 6.5, stress: 3 },
  { date: 'Tue', mood: 8.0, energy: 7.0, stress: 2 },
  { date: 'Wed', mood: 6.5, energy: 5.5, stress: 5 },
  { date: 'Thu', mood: 8.5, energy: 7.5, stress: 2 },
  { date: 'Fri', mood: 9.0, energy: 8.0, stress: 1 },
  { date: 'Sat', mood: 8.5, energy: 7.0, stress: 2 },
  { date: 'Sun', mood: 7.0, energy: 6.0, stress: 4 },
]

export default function MoodRiver() {
  return (
    <div className="glass rounded-lg p-4 border border-accent-secondary/20">
      <h3 className="text-lg font-semibold mb-4">Mood River (7 Days)</h3>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={moodData}>
          <defs>
            <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7b2cbf" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#7b2cbf" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00d4ff" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#00d4ff" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="date" stroke="#b8b8d4" style={{ fontSize: '12px' }} />
          <YAxis stroke="#b8b8d4" style={{ fontSize: '12px' }} domain={[0, 10]} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(20, 20, 31, 0.9)',
              border: '1px solid rgba(123, 44, 191, 0.2)',
              borderRadius: '8px',
              color: '#ffffff',
            }}
          />
          <Area
            type="monotone"
            dataKey="mood"
            stroke="#7b2cbf"
            fillOpacity={1}
            fill="url(#colorMood)"
            strokeWidth={3}
          />
          <Area
            type="monotone"
            dataKey="energy"
            stroke="#00d4ff"
            fillOpacity={1}
            fill="url(#colorEnergy)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex gap-4 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent-secondary" />
          <span className="text-text-secondary">Mood</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent" />
          <span className="text-text-secondary">Energy</span>
        </div>
      </div>
    </div>
  )
}

