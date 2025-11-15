'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

export default function LocationTravel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-strong rounded-2xl p-6 border border-accent/20"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent/20 rounded-lg">
            <MapPin className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Location & Travel</h2>
            <p className="text-text-secondary text-sm">Movement patterns</p>
          </div>
        </div>
      </div>
      <p className="text-text-tertiary">Coming soon...</p>
    </motion.div>
  )
}

