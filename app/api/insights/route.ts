import { NextResponse } from 'next/server'
import { generateInsights } from '@/lib/ai/claude'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const insights = await generateInsights(data)
    return NextResponse.json({ insights })
  } catch (error) {
    console.error('Error generating insights:', error)
    return NextResponse.json(
      { error: 'Failed to generate insights' },
      { status: 500 }
    )
  }
}

