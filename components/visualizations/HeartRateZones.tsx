'use client'

import { motion } from 'framer-motion'
import { Heart, Activity } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const heartRateData = [
  { time: '00:00', bpm: 58, zone: 'Rest' },
  { time: '04:00', bpm: 55, zone: 'Rest' },
  { time: '08:00', bpm: 72, zone: 'Fat Burn' },
  { time: '12:00', bpm: 95, zone: 'Cardio' },
  { time: '16:00', bpm: 145, zone: 'Peak' },
  { time: '20:00', bpm: 88, zone: 'Fat Burn' },
  { time: '24:00', bpm: 62, zone: 'Rest' },
]

const zones = [
  { name: 'Rest', min: 50, max: 60, color: '#6b6b8a', time: '8h 30m' },
  { name: 'Fat Burn', min: 60, max: 120, color: '#00d4ff', time: '2h 15m' },
  { name: 'Cardio', min: 120, max: 150, color: '#7b2cbf', time: '45m' },
  { name: 'Peak', min: 150, max: 180, color: '#ff006e', time: '15m' },
]

export default function HeartRateZones() {
  const avgHeartRate = 78
  const maxHeartRate = 145
  const restingHeartRate = 58

  return (
    <div className="space-y-6">
      {/* Heart Rate Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass rounded-lg p-4 border border-accent-tertiary/20 text-center"
        >
          <Heart className="w-6 h-6 text-accent-tertiary mx-auto mb-2" />
          <p className="text-2xl font-bold text-accent-tertiary">{avgHeartRate}</p>
          <p className="text-xs text-text-tertiary">Avg BPM</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-lg p-4 border border-accent/20 text-center"
        >
          <Activity className="w-6 h-6 text-accent mx-auto mb-2" />
          <p className="text-2xl font-bold text-accent">{maxHeartRate}</p>
          <p className="text-xs text-text-tertiary">Max BPM</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-lg p-4 border border-accent-secondary/20 text-center"
        >
          <Heart className="w-6 h-6 text-accent-secondary mx-auto mb-2" />
          <p className="text-2xl font-bold text-accent-secondary">{restingHeartRate}</p>
          <p className="text-xs text-text-tertiary">Resting BPM</p>
        </motion.div>
      </div>

      {/* Heart Rate Chart */}
      <div className="glass rounded-lg p-4 border border-accent/20">
        <h3 className="text-lg font-semibold mb-4">Heart Rate Zones (Today)</h3>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={heartRateData}>
            <defs>
              <linearGradient id="colorHeartRate" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff006e" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#ff006e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="time" stroke="#b8b8d4" style={{ fontSize: '12px' }} />
            <YAxis stroke="#b8b8d4" style={{ fontSize: '12px' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(20, 20, 31, 0.9)',
                border: '1px solid rgba(255, 0, 110, 0.2)',
                borderRadius: '8px',
                color: '#ffffff',
              }}
            />
            <Area
              type="monotone"
              dataKey="bpm"
              stroke="#ff006e"
              fillOpacity={1}
              fill="url(#colorHeartRate)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Zone Breakdown */}
      <div className="glass rounded-lg p-4 border border-accent/20">
        <h3 className="text-lg font-semibold mb-4">Time in Zones</h3>
        <div className="space-y-3">
          {zones.map((zone, index) => (
            <div key={zone.name}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: zone.color }}
                  />
                  <span className="text-text-secondary text-sm">{zone.name}</span>
                </div>
                <span className="text-text-primary font-bold">{zone.time}</span>
              </div>
              <div className="h-2 bg-background-tertiary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(index + 1) * 25}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: zone.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

