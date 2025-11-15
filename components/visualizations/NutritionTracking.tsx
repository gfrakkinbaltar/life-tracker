'use client'

import { motion } from 'framer-motion'
import { Apple, Droplet, Flame } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'

const macroData = [
  { name: 'Protein', value: 120, color: '#00d4ff', goal: 150 },
  { name: 'Carbs', value: 200, color: '#7b2cbf', goal: 250 },
  { name: 'Fat', value: 65, color: '#ff006e', goal: 80 },
]

const COLORS = ['#00d4ff', '#7b2cbf', '#ff006e']

const pieData = [
  { name: 'Protein', value: 30, color: '#00d4ff' },
  { name: 'Carbs', value: 50, color: '#7b2cbf' },
  { name: 'Fat', value: 20, color: '#ff006e' },
]

export default function NutritionTracking() {
  const caloriesConsumed = 1850
  const caloriesBurned = 2200
  const waterIntake = 6
  const waterGoal = 8

  return (
    <div className="space-y-6">
      {/* Calorie Balance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass rounded-lg p-4 border border-accent/20"
        >
          <div className="flex items-center gap-2 mb-4">
            <Flame className="w-4 h-4 text-accent-tertiary" />
            <span className="text-text-secondary text-sm">Calories</span>
          </div>
          <div className="flex items-end gap-4">
            <div>
              <p className="text-3xl font-bold text-accent-tertiary">{caloriesConsumed}</p>
              <p className="text-xs text-text-tertiary">Consumed</p>
            </div>
            <div className="text-text-secondary text-2xl">/</div>
            <div>
              <p className="text-3xl font-bold text-accent-success">{caloriesBurned}</p>
              <p className="text-xs text-text-tertiary">Burned</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-text-secondary">Deficit</span>
              <span className="text-accent-success font-bold">-{caloriesBurned - caloriesConsumed} cal</span>
            </div>
            <div className="h-2 bg-background-tertiary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(caloriesConsumed / caloriesBurned) * 100}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-accent-tertiary rounded-full"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-lg p-4 border border-accent/20"
        >
          <div className="flex items-center gap-2 mb-4">
            <Droplet className="w-4 h-4 text-accent" />
            <span className="text-text-secondary text-sm">Water Intake</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <p className="text-3xl font-bold text-accent">{waterIntake}</p>
              <p className="text-xs text-text-tertiary">of {waterGoal} glasses</p>
            </div>
            <div className="flex gap-1">
              {Array.from({ length: waterGoal }).map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-8 rounded ${
                    i < waterIntake
                      ? 'bg-accent shadow-glow-cyan'
                      : 'bg-background-tertiary border border-accent/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Macronutrients */}
      <div className="glass rounded-lg p-4 border border-accent/20">
        <h3 className="text-lg font-semibold mb-4">Macronutrients</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {macroData.map((macro, index) => (
              <div key={macro.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-text-secondary">{macro.name}</span>
                  <span className="text-text-primary font-bold">
                    {macro.value}g / {macro.goal}g
                  </span>
                </div>
                <div className="h-2 bg-background-tertiary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(macro.value / macro.goal) * 100}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: macro.color }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
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
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

