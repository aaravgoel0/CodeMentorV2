

#!/bin/bash

# Exit immediately if a command fails
set -e

echo "Starting backend-only build process..."

# Step 1: Navigate to the backend directory
echo "Navigating to the backend directory..."
cd back-end

# Step 2: Ensure requirements.txt exists before trying to install
if [ ! -f "requirements.txt" ]; then
    echo "Error: requirements.txt not found in back-end directory!"
    exit 1
fi

# Step 3: Install backend dependencies
echo "Installing backend dependencies..."
pip install --upgrade pip
pip install -r requirements.txt

# Step 4: Apply database migrations (if applicable)
echo "Applying database migrations (if applicable)..."
# flask db upgrade  # Uncomment this if you're using Flask-Migrate

echo "Backend setup complete!"
