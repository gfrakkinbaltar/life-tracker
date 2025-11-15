# Life Tracker - Personal Analytics Platform

A beautiful, futuristic personal analytics and life tracking platform that turns your life into a comprehensive data story. Discover patterns, optimize habits, and visualize your journey with infographic-quality visualizations.

## 🎨 Design Philosophy

- **Infographic-quality visualizations** - Every chart is magazine-worthy
- **Futuristic dashboard** - Inspired by sci-fi interfaces
- **Dark theme with glowing accents** - Data becomes art
- **Inspired by** Gyroscope, Exist.io, Apple Health

## 🚀 Tech Stack

- **Frontend:** Next.js 14 with TypeScript, Framer Motion, TailwindCSS
- **Visualization:** D3.js, Recharts, Visx, Three.js (for 3D)
- **AI:** Claude API for insights and predictions
- **Database:** PostgreSQL with TimescaleDB
- **Integrations:** REST APIs for data import

## 📦 Installation

1. **Clone the repository:**
   ```bash
   cd life-tracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Set up the database:**
   ```bash
   # Make sure PostgreSQL is running
   createdb life_tracker
   
   # Run the schema
   psql life_tracker < lib/db/schema.sql
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 🎯 Core Features

### 1. Dashboard Overview
- Hero section with personalized greeting
- Day streak visualization
- Today's mood indicator
- Quick stats carousel
- Weather and time integration

### 2. Health & Fitness Module
- Activity tracking (steps, distance, calories, active minutes)
- Heart rate zones visualization
- Sleep analysis with hypnogram
- Nutrition tracking with macronutrients
- Body metrics tracking

### 3. Productivity & Time Tracking
- Time allocation (sunburst chart)
- Focus sessions tracking
- App usage analysis
- Deep work hours

### 4. Mood & Mental Health
- Daily mood rating
- Emotion tracking
- Mood calendar
- Correlation analysis
- AI-powered mood forecasting

### 5. Social & Relationships
- Social interaction frequency
- Relationship health scores
- Network visualization
- Communication patterns

### 6. Finance & Spending
- Money flow (Sankey diagram)
- Net worth tracking
- Budget tracking
- Spending by category

### 7. Learning & Growth
- Learning hours by subject
- Books read counter
- Courses completed
- Skill level visualizations

### 8. Location & Travel
- Visited locations (heat map)
- Travel timeline
- Distance traveled
- Movement patterns

### 9. AI-Powered Insights
- Pattern recognition
- Predictions
- Recommendations
- Personal benchmarks

### 10. Reports & Storytelling
- Weekly digest
- Monthly review
- Year in review (Spotify Wrapped-style)

## 🎨 Visualization Types

- **Standard Charts:** Line, Bar, Pie, Area, Scatter
- **Advanced Visualizations:** Heatmaps, Radar, Sankey, Sunburst, Network graphs
- **3D Visualizations:** 3D terrain, Rotating globe, Particle clouds
- **Creative Visualizations:** Tree rings, Constellation maps, River flows

## 🔌 Data Integrations

- **Health Apps:** Apple Health, Google Fit, Fitbit, Garmin, Whoop, Oura
- **Productivity:** RescueTime, Toggl, Calendar integrations
- **Finance:** Plaid, Mint, YNAB
- **Social:** Twitter, Instagram, Message frequency
- **Location:** Google Maps Timeline, Foursquare
- **Learning:** Kindle, Goodreads, Duolingo

## 🔒 Privacy & Security

- **Data Ownership:** You own all your data
- **Encryption:** End-to-end encrypted sensitive data
- **Privacy Controls:** Choose what to track
- **GDPR Compliant:** Full data export and deletion

## 🎮 Gamification

- **Streaks:** Daily tracking streaks with visual flames
- **Achievements:** Milestone badges
- **Levels:** Level up with consistent tracking

## 📱 Mobile Support

- Responsive design for mobile devices
- Quick capture widgets
- Notifications and reminders
- (Future: Native iOS/Android apps)

## 🛠️ Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, please open an issue on GitHub.

---

**Turn your life into art. Discover patterns. Optimize habits. Visualize your journey.**

