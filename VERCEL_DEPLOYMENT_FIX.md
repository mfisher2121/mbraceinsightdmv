# Vercel Deployment 404 Error - Fix Guide

## Common Causes of 404 on Vercel

### 1. Build Errors (Most Common)

**Check Vercel Build Logs:**
1. Go to your Vercel dashboard
2. Click on your deployment
3. Check the "Build Logs" tab
4. Look for any errors during `npm run build`

**Common Build Errors:**
- Missing dependencies in `package.json`
- TypeScript errors
- Import path errors
- Missing environment variables

### 2. Missing Root Page

Make sure `app/page.tsx` exists:
```bash
# Should exist:
app/page.tsx
```

### 3. Incorrect Build Settings

In Vercel Project Settings:
- **Framework Preset:** Next.js (should auto-detect)
- **Root Directory:** `./` (leave empty/blank)
- **Build Command:** `npm run build` (default)
- **Output Directory:** `.next` (default)
- **Install Command:** `npm install` (default)

### 4. Missing Environment Variables

Add these in Vercel → Settings → Environment Variables:

```
SENDGRID_API_KEY=SG.your-sendgrid-api-key-here
EMAIL_FROM=noreply@mbraceinsight.com
NEXT_PUBLIC_GA_ID=G-9SQD2P5ZJH
```

**Important:** Add to **Production**, **Preview**, and **Development** environments.

### 5. Git Branch Issues

- Make sure you're deploying from the correct branch (usually `main` or `master`)
- Verify your latest code is pushed to GitHub
- Check if Vercel is watching the correct branch

### 6. Project Root Detection

Vercel might be deploying from the wrong directory if:
- Your repo has multiple Next.js projects
- Root directory setting is incorrect

**Fix:** In Vercel Settings → General → Root Directory, leave blank (or set to `./`)

## Step-by-Step Debugging

### Step 1: Check Build Logs

1. Go to Vercel Dashboard
2. Click your project → Deployments
3. Click the latest deployment
4. Check "Build Logs" for errors

### Step 2: Test Build Locally

```bash
cd mbraceinsightdmv
npm install
npm run build
```

If this fails locally, fix the errors first.

### Step 3: Verify Files Are Committed

```bash
git status
git add .
git commit -m "Fix deployment"
git push
```

### Step 4: Check Vercel Settings

**In Vercel Dashboard → Settings → General:**
- Framework Preset: Next.js
- Root Directory: (blank)
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

**In Vercel Dashboard → Settings → Environment Variables:**
- Make sure all required variables are set

### Step 5: Redeploy

After making changes:
1. Push to GitHub
2. Vercel will auto-deploy
3. Or manually trigger a new deployment

## Quick Fixes

### If Build Fails:

1. **Check package.json has all dependencies:**
   ```json
   {
     "dependencies": {
       "next": "^14.0.0",
       "react": "^18.2.0",
       "react-dom": "^18.2.0",
       "@sendgrid/mail": "^8.1.0"
     }
   }
   ```

2. **Ensure TypeScript config exists:**
   - `tsconfig.json` should be present
   
3. **Check for syntax errors:**
   ```bash
   npm run build
   ```

### If Build Succeeds but 404:

1. **Verify app/page.tsx exists and exports correctly**
2. **Check app/layout.tsx exists**
3. **Verify no routing conflicts**
4. **Check Vercel deployment URL matches your routes**

## Most Likely Issue

Based on your 404 error, check:

1. ✅ **Build Logs** - Most important! Check for build errors
2. ✅ **Environment Variables** - Make sure they're set
3. ✅ **Git Branch** - Ensure latest code is pushed
4. ✅ **Root Directory** - Should be blank/`./`

## Need More Help?

Check your Vercel build logs and share any errors you see. The build logs will tell us exactly what's wrong!

