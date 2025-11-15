#!/bin/bash

echo "🚀 Setting up Life Tracker..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo "⚠️  PostgreSQL is not installed. Please install PostgreSQL to set up the database."
    echo "   You can continue without it for frontend development."
else
    echo "🗄️  Setting up database..."
    
    # Check if .env file exists
    if [ ! -f .env ]; then
        echo "📝 Creating .env file from .env.example..."
        cp .env.example .env
        echo "⚠️  Please update .env with your database credentials and API keys."
    fi
    
    # Check if database exists
    if psql -lqt | cut -d \| -f 1 | grep -qw life_tracker; then
        echo "✅ Database 'life_tracker' already exists."
    else
        echo "📊 Creating database 'life_tracker'..."
        createdb life_tracker
    fi
    
    # Run schema
    if [ -f lib/db/schema.sql ]; then
        echo "📋 Running database schema..."
        psql life_tracker < lib/db/schema.sql
        echo "✅ Database schema created."
    else
        echo "⚠️  Schema file not found at lib/db/schema.sql"
    fi
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update .env with your API keys (ANTHROPIC_API_KEY, DATABASE_URL, etc.)"
echo "2. Run 'npm run dev' to start the development server"
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo "Happy tracking! 📊"

