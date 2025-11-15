'use client'

import { motion } from 'framer-motion'
import { Activity, Heart, Moon, Apple } from 'lucide-react'
import { useState } from 'react'
import ActivityTracking from '../visualizations/ActivityTracking'
import SleepAnalysis from '../visualizations/SleepAnalysis'
import NutritionTracking from '../visualizations/NutritionTracking'
import HeartRateZones from '../visualizations/HeartRateZones'

export default function HealthFitness() {
  const [activeTab, setActiveTab] = useState<'activity' | 'sleep' | 'nutrition' | 'body'>('activity')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-strong rounded-2xl p-6 border border-accent/20 shadow-glow-cyan"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent-tertiary/20 rounded-lg">
            <Activity className="w-6 h-6 text-accent-tertiary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold glow-text">Health & Fitness</h2>
            <p className="text-text-secondary text-sm">Track your wellness journey</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-accent/10">
        {[
          { id: 'activity', label: 'Activity', icon: Activity },
          { id: 'sleep', label: 'Sleep', icon: Moon },
          { id: 'nutrition', label: 'Nutrition', icon: Apple },
          { id: 'body', label: 'Body', icon: Heart },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'text-accent border-b-2 border-accent'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <tab.icon className="w-4 h-4 inline mr-2" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="min-h-[400px]">
        {activeTab === 'activity' && <ActivityTracking />}
        {activeTab === 'sleep' && <SleepAnalysis />}
        {activeTab === 'nutrition' && <NutritionTracking />}
        {activeTab === 'body' && <HeartRateZones />}
      </div>
    </motion.div>
  )
}

