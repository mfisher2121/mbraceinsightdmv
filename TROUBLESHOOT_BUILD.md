# Troubleshooting Build Error

## The Error
```
Module not found: Can't resolve './components/Footer'
./app/layout.tsx (5:1)
```

## The Fix

The file `app/layout.tsx` is **correct** and doesn't import Header or Footer. This is a **cache issue**.

### Solution 1: Clear All Caches

```bash
# Stop your dev server (Ctrl+C)

# Clear all caches
rm -rf .next .turbo node_modules/.cache

# Restart
npm run dev
```

### Solution 2: If Still Not Working

1. **Make sure your editor has saved the file**
   - Check if `app/layout.tsx` shows unsaved changes
   - Save all files

2. **Verify the file content:**
   ```bash
   cat app/layout.tsx
   ```
   
   Should show:
   ```tsx
   import './globals.css';
   import GoogleAnalytics from '@/components/GoogleAnalytics';
   import Schema from '@/components/Schema';
   ```
   
   Should NOT show:
   ```tsx
   import Header from './components/Header';
   import Footer from './components/Footer';
   ```

3. **Kill all Node processes:**
   ```bash
   pkill -f node
   npm run dev
   ```

### Solution 3: Full Clean Reinstall

```bash
# Stop server
# Remove everything
rm -rf .next .turbo node_modules package-lock.json

# Reinstall
npm install

# Start fresh
npm run dev
```

## Why This Happens

Turbopack/Next.js caches build files. Sometimes the cache gets out of sync with the actual files, causing these phantom import errors.

## Verification

After clearing cache, the build should work. The `app/layout.tsx` file is correct and doesn't need any changes.

