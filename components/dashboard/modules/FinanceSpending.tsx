'use client'

import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, TrendingDown, Wallet } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const spendingData = [
  { category: 'Food', amount: 450, color: '#00d4ff' },
  { category: 'Transport', amount: 200, color: '#7b2cbf' },
  { category: 'Shopping', amount: 350, color: '#ff006e' },
  { category: 'Entertainment', amount: 150, color: '#06ffa5' },
  { category: 'Bills', amount: 800, color: '#ffbe0b' },
]

const weeklySpending = [
  { day: 'Mon', amount: 120 },
  { day: 'Tue', amount: 85 },
  { day: 'Wed', amount: 200 },
  { day: 'Thu', amount: 150 },
  { day: 'Fri', amount: 180 },
  { day: 'Sat', amount: 250 },
  { day: 'Sun', amount: 100 },
]

const COLORS = ['#00d4ff', '#7b2cbf', '#ff006e', '#06ffa5', '#ffbe0b']

export default function FinanceSpending() {
  const totalSpent = spendingData.reduce((sum, item) => sum + item.amount, 0)
  const monthlyBudget = 3000
  const remaining = monthlyBudget - totalSpent
  const budgetUsage = (totalSpent / monthlyBudget) * 100

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-strong rounded-2xl p-6 border border-accent/20"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent/20 rounded-lg">
            <DollarSign className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Finance & Spending</h2>
            <p className="text-text-secondary text-sm">Money flow tracking</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Budget Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-lg p-4 border border-accent/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-secondary text-sm">Monthly Budget</p>
                <p className="text-2xl font-bold text-accent">${monthlyBudget.toLocaleString()}</p>
              </div>
              <Wallet className="w-8 h-8 text-accent/50" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-lg p-4 border border-accent-tertiary/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-secondary text-sm">Spent</p>
                <p className="text-2xl font-bold text-accent-tertiary">${totalSpent.toLocaleString()}</p>
                <p className="text-xs text-text-tertiary mt-1">{budgetUsage.toFixed(1)}% used</p>
              </div>
              <TrendingDown className="w-8 h-8 text-accent-tertiary/50" />
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
                <p className="text-text-secondary text-sm">Remaining</p>
                <p className="text-2xl font-bold text-accent-success">${remaining.toLocaleString()}</p>
                <p className="text-xs text-text-tertiary mt-1">On track</p>
              </div>
              <TrendingUp className="w-8 h-8 text-accent-success/50" />
            </div>
          </motion.div>
        </div>

        {/* Budget Progress */}
        <div className="glass rounded-lg p-4 border border-accent/20">
          <h3 className="text-lg font-semibold mb-4">Budget Progress</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Usage</span>
              <span className="text-text-primary font-bold">{budgetUsage.toFixed(1)}%</span>
            </div>
            <div className="h-4 bg-background-tertiary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(budgetUsage, 100)}%` }}
                transition={{ duration: 1 }}
                className={`h-full rounded-full ${
                  budgetUsage > 80 ? 'bg-accent-tertiary' : 'bg-accent-success'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Spending by Category */}
        <div className="glass rounded-lg p-4 border border-accent/20">
          <h3 className="text-lg font-semibold mb-4">Spending by Category</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {spendingData.map((item, index) => (
                <div key={item.category}>
                  <div className="flex justify-between text-sm mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-text-secondary">{item.category}</span>
                    </div>
                    <span className="text-text-primary font-bold">${item.amount}</span>
                  </div>
                  <div className="h-2 bg-background-tertiary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(item.amount / totalSpent) * 100}%` }}
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
                    data={spendingData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="amount"
                  >
                    {spendingData.map((entry, index) => (
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

        {/* Weekly Spending */}
        <div className="glass rounded-lg p-4 border border-accent/20">
          <h3 className="text-lg font-semibold mb-4">Weekly Spending</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklySpending}>
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
              <Bar dataKey="amount" fill="#00d4ff" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  )
}
