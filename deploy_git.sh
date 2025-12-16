#!/bin/bash

# Configuration
KEY="$HOME/.ssh/chrisslater_production_v3"
REMOTE="git@git.wpengine.com:production/chrisslaterai.git"

echo "🚀 Deploying to WP Engine (Git)..."

# Build Frontend
echo "🏗️ Building Frontend..."
cd wp-content/themes/chrisslater-hybrid/frontend
npm install
npm run build
cd ../../../..

# Ensure key permissions
chmod 600 "$KEY"

# Configure Git to use the key
export GIT_SSH_COMMAND="ssh -i $KEY -o StrictHostKeyChecking=no -o IdentitiesOnly=yes"

# Add 'wpe' remote if it doesn't exist
if ! git remote | grep -q "wpe"; then
    git remote add wpe "$REMOTE"
fi

# Force add the build artifacts (often ignored)
echo "📦 Staging build artifacts..."
git add -f wp-content/themes/chrisslater-hybrid/frontend/dist

# Add everything else
git add .

# Commit
echo "💾 Committing deployment..."
git commit -m "Deploy: Antigravity Auto-Deploy" || echo "No changes to commit"

# Push
echo "⬆️ Pushing to WP Engine..."
git push wpe main

echo "✅ Git Deployment Complete!"
