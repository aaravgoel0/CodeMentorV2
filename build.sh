#!/bin/bash

# Exit immediately if a command fails
set -e

echo "Navigating to the backend directory..."
cd back-end

echo "Installing Python dependencies..."
pip install --upgrade pip
pip install -r requirements.txt

echo "Applying database migrations (if applicable)..."
# Uncomment the next line if using Flask-Migrate
# flask db upgrade

echo "Backend setup complete!"
