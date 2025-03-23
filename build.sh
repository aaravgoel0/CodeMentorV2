#!/bin/bash

set -e  # Exit on error

echo "🚀 Starting backend-only build process..."

# Navigate to the backend directory
cd "$(dirname "$0")"
cd back-end

echo "🔄 Updating Python and pip..."
python -m pip install --upgrade pip

# Ensure virtual environment exists
if [ ! -d "venv" ]; then
    echo "🛠 Creating virtual environment..."
    python -m venv venv
fi

# Activate the virtual environment
source venv/bin/activate

# Install dependencies
echo "📦 Installing dependencies..."
pip install -r requirements.txt
pip install gunicorn  # Force install Gunicorn

echo "✅ Backend setup complete!"
