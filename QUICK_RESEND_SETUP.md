# Quick Resend Setup - Your API Key is Ready!

## Your Resend API Key
```
re_YZziRMr6_87EAp6zG29rqc3ehHbjWfYRe
```

## Setup Steps

### 1. Local Development (`.env.local`)

Create or update `.env.local` in your project root:

```env
RESEND_API_KEY=re_YZziRMr6_87EAp6zG29rqc3ehHbjWfYRe
EMAIL_FROM=onboarding@resend.dev
NEXT_PUBLIC_GA_ID=G-9SQD2P5ZJH
```

**Note:** Start with `onboarding@resend.dev` - you can verify your domain later to use `noreply@mbraceinsight.com`.

### 2. Vercel Environment Variables

1. Go to: https://vercel.com → Your Project → Settings → Environment Variables
2. Click **"Add New"**
3. Add:
   - **Name:** `RESEND_API_KEY`
   - **Value:** `re_YZziRMr6_87EAp6zG29rqc3ehHbjWfYRe`
   - **Environments:** ✅ Production, ✅ Preview, ✅ Development
4. Click **"Save"**

Also add:
- **Name:** `EMAIL_FROM`
- **Value:** `onboarding@resend.dev` (or `noreply@mbraceinsight.com` after domain verification)
- **Environments:** ✅ All

### 3. Test Locally

```bash
# Make sure .env.local exists with the API key
npm install
npm run dev

# Test the contact form at http://localhost:3000
```

### 4. Deploy to Vercel

After adding environment variables in Vercel:
- Push your code to GitHub
- Vercel will automatically redeploy
- Your contact form will work! ✅

## Domain Verification (Optional - Do Later)

To use `noreply@mbraceinsight.com`:
1. Go to Resend dashboard → Domains
2. Add `mbraceinsight.com`
3. Add DNS records to Cloudflare
4. Once verified, update `EMAIL_FROM` to `noreply@mbraceinsight.com`

**For now, `onboarding@resend.dev` works perfectly!**

## That's It!

Resend is much simpler - no complex verification needed to start. Just add the API key and you're ready to go! 🚀

