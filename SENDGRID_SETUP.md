# SendGrid Setup Guide for Mbrace Insight DMV

## 🎯 Current Configuration

Based on your SendGrid dashboard:
- **FROM Address:** noreply@mbraceinsight.com
- **REPLY Address:** mfisher@mbraceinsight.com
- **Nickname:** MBRACE Sender
- **Status:** ⚠️ Not Verified (needs verification)

**⚠️ IMPORTANT:** Since you're using Google Workspace and `noreply@mbraceinsight.com` doesn't exist, see `GOOGLE_WORKSPACE_SOLUTION.md` for your best options:
1. **Domain Authentication** (recommended - no Google Workspace setup needed)
2. **Create email alias in Google Workspace** (quick but requires Workspace admin access)
3. **Use `mfisher@mbraceinsight.com`** (fastest for testing)

## 📋 Step-by-Step Setup

### Step 1: Verify Your Sender Email

**CRITICAL:** You must verify `noreply@mbraceinsight.com` before emails can be sent.

1. In SendGrid, click on the **"MBRACE Sender"** entry (or the three dots in Actions column)
2. Click **"Verify"** or **"Send Verification Email"** (or **"Resend Verification"**)
3. Check your inbox at `noreply@mbraceinsight.com` (or forward it to your main email)
4. **IMPORTANT:** Also check spam/junk folders - verification emails often go there!
5. Click the verification link in the email
6. Once verified, the red ❌ will change to a green ✅

**⚠️ Not Receiving the Verification Email?**
- Check spam/junk folder
- Check email forwarding destination (if using)
- Try resending verification email from SendGrid
- Consider using **Domain Authentication** instead (see below)

**Alternative (Recommended):** If you control the domain, use **Domain Authentication** instead:
- Go to Settings → Sender Authentication → Domain Authentication
- Authenticate `mbraceinsight.com` domain
- This allows sending from ANY email on your domain (more flexible and reliable)
- See `VERIFICATION_TROUBLESHOOTING.md` for detailed steps

### Step 2: Create SendGrid API Key

1. In SendGrid, go to **Settings** → **API Keys** (left sidebar)
2. Click **"Create API Key"** (top right)
3. Give it a name: `Mbrace Insight DMV API Key`
4. Select permissions: **Full Access** (or **Restricted Access** with Mail Send permissions)
5. Click **"Create & View"**
6. **⚠️ IMPORTANT:** Copy the API key immediately - you won't be able to see it again!
   - It will look like: `SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Step 3: Add API Key to Environment Variables

#### For Local Development:

1. Create a `.env.local` file in the root of your project (if it doesn't exist)
2. Add:
   ```env
   SENDGRID_API_KEY=SG.your-api-key-here
   EMAIL_FROM=noreply@mbraceinsight.com
   ```

#### For Vercel Deployment:

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add these variables:
   - **Name:** `SENDGRID_API_KEY`
     **Value:** `SG.your-api-key-here` (paste the key from Step 2)
   - **Name:** `EMAIL_FROM`
     **Value:** `noreply@mbraceinsight.com`
4. Select **Production**, **Preview**, and **Development** environments
5. Click **Save**

### Step 4: Test Email Sending

#### Test the Contact Form API:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

You should receive an email at `mfisher@mbraceinsight.com` if everything is configured correctly.

## 🔧 Current Email Configuration

The code is currently configured to use:
- **FROM:** `noreply@mbraceinsight.com` ✅ (matches your SendGrid sender)
- **TO (Contact Form):** `mfisher@mbraceinsight.com`
- **REPLY-TO:** Not explicitly set (will use FROM address)

## 📝 Email Templates in Use

### Contact Form (`/api/contact/route.ts`)
- **To:** mfisher@mbraceinsight.com
- **From:** noreply@mbraceinsight.com
- **Subject:** "New Contact Form Submission from [Name]"

### Audit Tool (`n8n workflow`)
- **To:** User's email address
- **From:** noreply@mbraceinsight.com
- **CC:** mfisher@mbraceinsight.com
- **Subject:** "Your DMV SEO Quick Wins Are Ready 🚀"

## 🚨 Troubleshooting

### "Sender email not verified" error
- ✅ Verify `noreply@mbraceinsight.com` in SendGrid Single Sender Verification
- ✅ Check spam folder for verification email
- ✅ Make sure the email address matches exactly (case-sensitive)

### "API key is invalid" error
- ✅ Verify you copied the entire API key (starts with `SG.`)
- ✅ Check for extra spaces when pasting
- ✅ Ensure the API key has "Mail Send" permissions
- ✅ Regenerate the key if needed (delete old one, create new)

### Emails going to spam
- ✅ Verify your sender email address
- ✅ Set up SPF, DKIM, and DMARC records (Domain Authentication)
- ✅ Use a professional "From" name: "Mbrace Insight" <noreply@mbraceinsight.com>
- ✅ Avoid spam trigger words in subject lines

### No emails received
- ✅ Check SendGrid Activity Feed (Settings → Activity)
- ✅ Verify environment variables are set correctly
- ✅ Check Vercel deployment logs for errors
- ✅ Ensure the sender email is verified (green checkmark)

## 🔐 Security Best Practices

1. **Never commit API keys to Git**
   - ✅ Use `.env.local` for local development (already in .gitignore)
   - ✅ Use Vercel Environment Variables for production

2. **Use Restricted API Keys**
   - Create API keys with only "Mail Send" permissions (not Full Access)
   - Rotate keys periodically

3. **Monitor Activity**
   - Regularly check SendGrid Activity Feed for suspicious activity
   - Set up email alerts for unusual sending patterns

## 📊 Next Steps

1. ✅ Verify `noreply@mbraceinsight.com` in SendGrid
2. ✅ Create and save API key
3. ✅ Add `SENDGRID_API_KEY` to environment variables
4. ✅ Test contact form
5. ⭐ (Optional) Set up Domain Authentication for better deliverability
6. ⭐ (Optional) Configure SendGrid webhook for bounce/complaint tracking

## 🔗 Helpful Links

- [SendGrid Single Sender Verification](https://docs.sendgrid.com/ui/sending-email/sender-verification)
- [SendGrid API Keys](https://docs.sendgrid.com/ui/account-and-settings/api-keys)
- [SendGrid Domain Authentication](https://docs.sendgrid.com/ui/account-and-settings/how-to-set-up-domain-authentication)
- [SendGrid Activity Feed](https://app.sendgrid.com/email_activity)

