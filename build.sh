#!/bin/bash

# Exit the script if any command fails
set -e

echo "Starting build process..."

# Step 1: Install backend dependencies
echo "Installing backend dependencies..."
pip install -r requirements.txt

echo "Build process completed successfully!"
