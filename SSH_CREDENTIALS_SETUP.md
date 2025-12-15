# SSH Credentials Setup for WP Engine Deployment

## Overview
This document describes the SSH credential configuration for deploying to WP Engine.

## Files

### Local Deployment
- **`wpe_deploy_key`** - Private SSH key (NOT committed to git, .gitignore excluded)
- **`wpe_deploy_key.pub`** - Public SSH key (safe to commit)
- **`deploy_git.sh`** - Local deployment script using the private key

### GitHub Actions Deployment
- **`.github/workflows/build-deploy.yml`** - CI/CD workflow
- **Secret Required**: `WPE_SSH_KEY_PRIVATE` - Must be configured in GitHub repository secrets

## Setup Instructions

### 1. WP Engine SSH Key Configuration
1. The SSH key pair has been generated and updated (Dec 15, 2025)
2. Public key (`wpe_deploy_key.pub`) must be added to WP Engine dashboard:
   - Log into WP Engine portal
   - Navigate to: User Portal → SSH Keys
   - Add the public key content

### 2. Local Deployment Setup
```bash
# Ensure private key has correct permissions
chmod 600 wpe_deploy_key

# Deploy using the script
./deploy_git.sh
```

### 3. GitHub Actions Setup
The private key must be added to GitHub repository secrets:

1. Copy the private key content:
   ```bash
   cat wpe_deploy_key
   ```

2. Add to GitHub:
   - Go to: Repository → Settings → Secrets and variables → Actions
   - Create/Update secret: `WPE_SSH_KEY_PRIVATE`
   - Paste the entire private key content (including BEGIN/END lines)

### 4. Security Notes
- ✅ Private key is excluded from git via `.gitignore`
- ✅ Private key is removed from git history (as of this update)
- ✅ Public key can be safely committed
- ⚠️ Never commit private keys to version control
- ⚠️ Rotate keys if they were previously committed

## WP Engine Git Remote
```
git@git.wpengine.com:production/chrisslaterai.git
```

## Deployment Methods

### Method 1: Local Deployment
```bash
./deploy_git.sh
```

### Method 2: GitHub Actions
Push to `main` branch triggers automatic deployment:
```bash
git push origin main
```

## Verification
Test SSH connection to WP Engine:
```bash
ssh -i wpe_deploy_key git@git.wpengine.com info
```

## Troubleshooting

### Permission Denied
- Verify key permissions: `chmod 600 wpe_deploy_key`
- Verify public key is added to WP Engine dashboard
- Check SSH connection: `ssh -i wpe_deploy_key -v git@git.wpengine.com info`

### GitHub Actions Fails
- Verify `WPE_SSH_KEY_PRIVATE` secret is set correctly
- Ensure the entire private key is copied (including headers/footers)
- Check workflow logs for specific errors

## Last Updated
December 15, 2025 - SSH credentials updated
