#!/bin/bash

# Exit immediately if any command fails
set -e

echo "🚀 Starting backend-only build process..."

# Step 1: Navigate to the backend directory
cd "$(dirname "$0")"  # Ensures script runs from any location
cd back-end

# Step 2: Ensure Python is up to date
echo "🔄 Updating Python and pip..."
python -m pip install --upgrade pip

# Step 3: Create a virtual environment (optional but recommended)
if [ ! -d "venv" ]; then
    echo "🛠 Creating virtual environment..."
    python -m venv venv
fi

# Activate virtual environment
source venv/bin/activate

# Step 4: Ensure requirements.txt exists before proceeding
if [ ! -f "requirements.txt" ]; then
    echo "❌ Error: requirements.txt not found in back-end directory!"
    exit 1
fi

# Step 5: Install backend dependencies
echo "📦 Installing backend dependencies..."
pip install -r requirements.txt

# Step 6: Apply database migrations (if applicable)
# Uncomment this if you're using Flask-Migrate
# echo "⚡ Applying database migrations..."
# flask db upgrade  

echo "✅ Backend setup complete!"
