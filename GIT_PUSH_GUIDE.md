# Git Push Guide - Getting Code to GitHub

## Quick Commands

```bash
# Make sure you're in the right directory
cd mbraceinsightdmv

# Add all changes
git add -A

# Commit the changes
git commit -m "Add all project files and configuration"

# Push to GitHub
git push
```

## Step-by-Step

### 1. Check Status
```bash
git status
```

### 2. Add All Files
```bash
git add -A
# or
git add .
```

### 3. Commit
```bash
git commit -m "Initial commit - Mbrace Insight DMV project"
```

### 4. Push to GitHub
```bash
git push
```

If it asks for credentials, you'll need to:
- Use a Personal Access Token (not your password)
- Or set up SSH keys

## If Git Push Fails

### If "Everything up-to-date" but files aren't committed:

```bash
# Check what's not staged
git status

# Add all files
git add -A

# Check what will be committed
git status

# Commit
git commit -m "Add project files"

# Push
git push
```

### If Authentication Fails:

Use a Personal Access Token instead of password:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. Use token as password when git asks

