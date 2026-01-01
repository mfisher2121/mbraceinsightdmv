# 🚀 Launch Checklist - Mbrace Insight DMV

## ✅ Pre-Launch Verification

### SendGrid Setup
- [ ] Domain Authentication verified in SendGrid (green checkmark ✅)
- [ ] OR Single Sender verified (if using that approach)
- [ ] API Key created and saved securely
- [ ] `.env.local` file created with:
  ```env
  SENDGRID_API_KEY=SG.your-sendgrid-api-key-here
  EMAIL_FROM=noreply@mbraceinsight.com
  ```

### Local Testing
- [ ] Run `npm run dev` and test locally
- [ ] Test contact form submission
- [ ] Verify email received at mfisher@mbraceinsight.com
- [ ] Test free audit tool form
- [ ] Check that homepage loads correctly
- [ ] Verify Google Analytics is tracking (check browser console)

### Code Ready
- [x] Homepage created (`/app/page.tsx`)
- [x] Free tool page created (`/app/free-tool/page.tsx`)
- [x] Contact API route (`/app/api/contact/route.ts`)
- [x] Audit API route (`/app/api/audit/route.ts`)
- [x] Components created (CTA, Footer, Schema, GoogleAnalytics)
- [x] All environment variables configured

## 🌐 Vercel Deployment

### Step 1: Push to GitHub

1. **Initialize Git (if not done):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Mbrace Insight DMV"
   ```

2. **Connect to GitHub:**
   ```bash
   git remote add origin https://github.com/mfisher2121/mbraceinsightdmv.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Go to Vercel:**
   - Visit: https://vercel.com/import/git
   - Or: https://vercel.com/new

2. **Import Repository:**
   - Select GitHub
   - Choose `mfisher2121/mbraceinsightdmv`
   - Click "Import"

3. **Configure Project:**
   - **Framework Preset:** Next.js (should auto-detect)
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)

4. **Add Environment Variables:**
   
   Click "Environment Variables" and add:
   
   ```
   SENDGRID_API_KEY = SG.your-sendgrid-api-key-here
   EMAIL_FROM = noreply@mbraceinsight.com
   NEXT_PUBLIC_GA_ID = G-9SQD2P5ZJH
   ```
   
   (Leave `N8N_WEBHOOK_URL` empty for now, add it when you set up n8n)

5. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)
   - Your site will be live at `https://mbraceinsightdmv.vercel.app` (or custom domain if configured)

### Step 3: Verify Deployment

- [ ] Visit your Vercel URL
- [ ] Test homepage loads
- [ ] Test contact form (submit a test message)
- [ ] Verify email received
- [ ] Test free audit tool
- [ ] Check Google Analytics events in console
- [ ] Test on mobile device

## 🔧 Post-Launch Setup

### Custom Domain (Optional)

1. In Vercel, go to your project → Settings → Domains
2. Add your domain: `mbraceinsightdmv.com` or `dmv.mbraceinsight.com`
3. Follow DNS instructions to verify domain
4. Update your domain's DNS with Vercel's records

### n8n Workflow (When Ready)

1. Set up n8n instance (cloud or self-hosted)
2. Import `n8n-dmv-audit-workflow.json`
3. Configure credentials (OpenAI, SendGrid, Google Sheets)
4. Get webhook URL
5. Add to Vercel environment variables:
   ```
   N8N_WEBHOOK_URL = https://your-n8n-instance.com/webhook/dmv-audit
   ```
6. Redeploy Vercel (environment variables trigger redeploy)

### Monitoring

- [ ] Set up Vercel Analytics (optional)
- [ ] Monitor SendGrid Activity Feed
- [ ] Check Google Analytics for traffic
- [ ] Set up error monitoring (Sentry, etc.)

## 📝 Quick Reference

### Environment Variables (Vercel)

```
SENDGRID_API_KEY=SG.your-sendgrid-api-key-here
EMAIL_FROM=noreply@mbraceinsight.com
NEXT_PUBLIC_GA_ID=G-9SQD2P5ZJH
N8N_WEBHOOK_URL=(add later when n8n is ready)
```

### Key URLs

- **Homepage:** `/`
- **Free Tool:** `/free-tool`
- **Contact API:** `/api/contact`
- **Audit API:** `/api/audit`

### Testing Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎯 You're Ready!

Once you've:
- ✅ Verified SendGrid is working
- ✅ Pushed code to GitHub
- ✅ Deployed to Vercel
- ✅ Added environment variables
- ✅ Tested the live site

**You're live! 🚀**

---

Need help? Check the troubleshooting guides:
- `SENDGRID_SETUP.md` - Email configuration
- `GOOGLE_WORKSPACE_SOLUTION.md` - Email account issues
- `FIX_CLOUDFLARE_DNS.md` - DNS troubleshooting

