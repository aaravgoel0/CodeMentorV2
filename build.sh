#!/bin/bash

set -e

echo "🚀 Starting backend-only build process..."

cd "$(dirname "$0")"
cd back-end

echo "🔄 Updating Python and pip..."
python -m pip install --upgrade pip

if [ ! -d "venv" ]; then
    echo "🛠 Creating virtual environment..."
    python -m venv venv
fi

source venv/bin/activate

if [ ! -f "requirements.txt" ]; then
    echo "❌ Error: requirements.txt not found!"
    exit 1
fi

echo "📦 Installing dependencies..."
pip install -r requirements.txt
pip install gunicorn  # Explicitly install Gunicorn

echo "✅ Backend setup complete!"
