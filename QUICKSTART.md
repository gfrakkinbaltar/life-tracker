# Quick Start Guide

Get up and running with Life Tracker in minutes!

## Prerequisites

- **Node.js** 18+ ([download](https://nodejs.org/))
- **PostgreSQL** 12+ ([download](https://www.postgresql.org/download/))
- **npm** or **yarn**

## Installation

### 1. Clone and Install

```bash
cd life-tracker
npm install
```

### 2. Set Up Environment Variables

```bash
cp .env.example .env
```

Edit `.env` and add your configuration:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/life_tracker

# Anthropic Claude API (optional, for AI insights)
ANTHROPIC_API_KEY=your_api_key_here

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Set Up Database

```bash
# Create database
createdb life_tracker

# Run schema
psql life_tracker < lib/db/schema.sql
```

Or use the setup script:

```bash
chmod +x scripts/setup.sh
./scripts/setup.sh
```

### 4. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## What You'll See

- **Dashboard Overview** - Hero section with greeting, streak, and quick stats
- **Key Metrics** - 8 customizable metric cards with ring charts and micro-charts
- **Health & Fitness** - Activity tracking, sleep analysis, nutrition, heart rate
- **Productivity** - Time allocation, focus sessions, task completion
- **Mood & Mental Health** - Mood river, calendar heatmap, emotional tracking
- **More Modules** - Social, Finance, Learning, Location, AI Insights

## Features to Try

### 1. Dashboard Customization
- All metrics are interactive
- Hover over cards to see animations
- Click on modules to explore details

### 2. Health Tracking
- View activity stats (steps, distance, calories)
- Analyze sleep patterns with stages
- Track nutrition and macronutrients
- Monitor heart rate zones

### 3. Productivity Insights
- See time allocation breakdown
- Track focus sessions
- View productivity calendar
- Monitor task completion

### 4. Mood Tracking
- View mood river visualization
- See mood calendar heatmap
- Track stress levels
- Analyze weekly averages

## Adding Sample Data

The app currently displays sample/demo data. To add real data:

1. **Manual Entry** (Coming soon)
   - Quick add widgets
   - Voice input
   - Photo logging

2. **API Integrations** (Coming soon)
   - Apple Health
   - Google Fit
   - Fitbit
   - RescueTime
   - And more...

3. **Import Scripts** (Coming soon)
   - CSV import
   - JSON import
   - Service-specific importers

## Development

### Project Structure

```
life-tracker/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── dashboard/         # Dashboard components
│   └── visualizations/    # Chart components
├── lib/                   # Utilities
│   ├── ai/               # AI integration
│   ├── db/               # Database utilities
│   └── utils.ts          # Helper functions
└── scripts/              # Setup scripts
```

### Available Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

### Key Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS
- **Framer Motion** - Animations
- **Recharts** - Chart library
- **PostgreSQL** - Database
- **TimescaleDB** - Time-series extension
- **Claude API** - AI insights

## Troubleshooting

### Database Connection Issues

```bash
# Check PostgreSQL is running
sudo service postgresql status

# Test connection
psql -U your_user -d life_tracker
```

### Port Already in Use

```bash
# Change port in package.json or use:
PORT=3001 npm run dev
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## Next Steps

1. **Configure AI Insights**
   - Get API key from [Anthropic](https://console.anthropic.com/)
   - Add to `.env` file
   - AI insights will be enabled automatically

2. **Set Up Data Integrations**
   - Follow integration guides (coming soon)
   - Connect your health apps
   - Import historical data

3. **Customize Dashboard**
   - Rearrange widgets (coming soon)
   - Add custom metrics (coming soon)
   - Set personal goals (coming soon)

## Support

- **Documentation:** See [README.md](./README.md)
- **Issues:** Open an issue on GitHub
- **Discussions:** Join our community

## License

MIT License - See LICENSE file for details

---

**Happy Tracking! 📊✨**

