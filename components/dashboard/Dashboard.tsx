'use client'

import { useState } from 'react'
import HeroSection from './HeroSection'
import KeyMetrics from './KeyMetrics'
import HealthFitness from './modules/HealthFitness'
import Productivity from './modules/Productivity'
import MoodMentalHealth from './modules/MoodMentalHealth'
import SocialRelationships from './modules/SocialRelationships'
import FinanceSpending from './modules/FinanceSpending'
import LearningGrowth from './modules/LearningGrowth'
import LocationTravel from './modules/LocationTravel'
import AIInsights from './modules/AIInsights'

export default function Dashboard() {
  const [activeModule, setActiveModule] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        <HeroSection />
        <KeyMetrics />
        
        {/* Module Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <HealthFitness />
          <Productivity />
          <MoodMentalHealth />
          <SocialRelationships />
          <div className="md:col-span-2">
            <FinanceSpending />
          </div>
          <LearningGrowth />
          <LocationTravel />
          <div className="md:col-span-2">
            <AIInsights />
          </div>
        </div>
      </main>
    </div>
  )
}

