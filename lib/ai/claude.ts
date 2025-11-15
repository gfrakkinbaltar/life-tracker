import Anthropic from '@anthropic-ai/sdk'

if (!process.env.ANTHROPIC_API_KEY) {
  console.warn('ANTHROPIC_API_KEY not set. AI features will be disabled.')
}

const anthropic = process.env.ANTHROPIC_API_KEY
  ? new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  : null

export async function generateInsights(data: any): Promise<string[]> {
  if (!anthropic) {
    return ['AI insights are currently unavailable. Please configure ANTHROPIC_API_KEY.']
  }

  try {
    const prompt = `Analyze the following personal data and generate 3-5 insights about patterns, correlations, or recommendations. Be specific and actionable.

Data: ${JSON.stringify(data, null, 2)}

Generate insights in the following format:
- Insight 1: [description]
- Insight 2: [description]
- Insight 3: [description]

Focus on:
1. Patterns across different metrics
2. Correlations between activities and outcomes
3. Actionable recommendations for improvement
4. Predictions based on trends`

    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1000,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    })

    const content = message.content[0]
    if (content.type === 'text') {
      return content.text
        .split('\n')
        .filter(line => line.trim().startsWith('-'))
        .map(line => line.replace(/^-\s*/, '').trim())
    }

    return []
  } catch (error) {
    console.error('Error generating insights:', error)
    return ['Unable to generate insights at this time.']
  }
}

export async function generatePrediction(metric: string, historicalData: number[]): Promise<number> {
  if (!anthropic) {
    // Fallback to simple linear prediction
    if (historicalData.length < 2) return historicalData[historicalData.length - 1] || 0
    const trend = historicalData[historicalData.length - 1] - historicalData[0]
    return historicalData[historicalData.length - 1] + trend / historicalData.length
  }

  try {
    const prompt = `Based on the following historical data for ${metric}, predict the next value. Return only a number.

Historical data: ${JSON.stringify(historicalData)}

Prediction:`

    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 50,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    })

    const content = message.content[0]
    if (content.type === 'text') {
      const prediction = parseFloat(content.text.trim())
      return isNaN(prediction) ? historicalData[historicalData.length - 1] : prediction
    }

    return historicalData[historicalData.length - 1] || 0
  } catch (error) {
    console.error('Error generating prediction:', error)
    return historicalData[historicalData.length - 1] || 0
  }
}

