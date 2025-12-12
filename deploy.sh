# Configuration
WPE_ENV="chrisslaterai"
SSH_HOST="$WPE_ENV.ssh.wpengine.net"
SSH_USER="$WPE_ENV"
SSH_KEY="./wpe_deploy_key" 
REMOTE_PATH="sites/$WPE_ENV/wp-content/themes/chrisslater-hybrid"

echo "🚀 Deploying to WP Engine ($WPE_ENV)..."

# Ensure permissions
chmod 600 "$SSH_KEY"

# Sync files
# Using rsync with specific SSH command to handle key and strict host checking
rsync -avz \
  -e "ssh -i $SSH_KEY -o StrictHostKeyChecking=no" \
  --exclude 'node_modules' \
  --exclude '.git' \
  --exclude '.github' \
  --exclude '*.zip' \
  --exclude 'src' \
  --exclude '.DS_Store' \
  wp-content/themes/chrisslater-hybrid/ \
  "$SSH_USER@$SSH_HOST:$REMOTE_PATH/"

echo "✅ Deployment Complete!"
