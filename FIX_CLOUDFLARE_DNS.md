# Fix SendGrid Domain Authentication - Cloudflare DNS Issue

## 🎯 The Problem

Your CNAME records in Cloudflare are set to **"Proxied"** (orange cloud ☁️), but SendGrid needs them to be **"DNS only"** (grey cloud ⚪).

## ✅ The Fix (5 Minutes)

### Step 1: Find the Records in Cloudflare

Go to your Cloudflare DNS page for `mbraceinsight.com`. You need to find these 3 CNAME records:

1. `58404708.mbraceinsight.com` → `sendgrid.net`
2. `em4752.mbraceinsight.com` → `u58404708.wl209.sendgrid.net`
3. `s1._domainkey.mbraceinsight.com` → `s1.domainkey.u58404708.wl209.sendgrid.net`

**Note:** You might see `em1625` instead of `em4752` - that's fine, we'll update it.

### Step 2: Change Each Record from "Proxied" to "DNS only"

For EACH of the SendGrid CNAME records:

1. Click the **"Edit"** button (pencil icon) for that record
2. Find the **orange cloud icon** ☁️ next to the record
3. Click the cloud icon to turn it **grey** ⚪ (DNS only)
4. Click **"Save"**

**You need to do this for these CNAME records:**
- `58404708` (or `url9958` if that's what SendGrid is asking for)
- `em4752`
- `s1._domainkey`
- `s2._domainkey`

**Repeat this for all SendGrid CNAME records.**

### Step 3: Update/Fix the Records

Make sure each record matches what SendGrid expects:

#### Record 1:
- **Type:** CNAME
- **Name:** `58404708`
- **Target:** `sendgrid.net`
- **Proxy status:** ⚪ DNS only (grey cloud)

#### Record 2:
- **Type:** CNAME  
- **Name:** `em4752` (or update `em1625` to `em4752` if that's what you have)
- **Target:** `u58404708.wl209.sendgrid.net`
- **Proxy status:** ⚪ DNS only (grey cloud)

#### Record 3:
- **Type:** CNAME
- **Name:** `s1._domainkey`
- **Target:** `s1.domainkey.u58404708.wl209.sendgrid.net`
- **Proxy status:** ⚪ DNS only (grey cloud)

### Step 4: Wait 5-10 Minutes

DNS changes take a few minutes to propagate. Wait 5-10 minutes.

### Step 5: Verify in SendGrid

1. Go back to SendGrid
2. Go to **Settings** → **Sender Authentication** → **Domain Authentication**
3. Click **"Verify"** or **"Check DNS"**
4. The yellow error messages should disappear
5. You should see a green checkmark ✅

## 📋 Quick Checklist

- [ ] Changed `58404708` CNAME from Proxied ☁️ to DNS only ⚪
- [ ] Changed `em4752` (or `em1625`) CNAME from Proxied ☁️ to DNS only ⚪
- [ ] Changed `s1._domainkey` CNAME from Proxied ☁️ to DNS only ⚪
- [ ] Verified all target values match SendGrid requirements
- [ ] Waited 5-10 minutes for DNS propagation
- [ ] Clicked "Verify" in SendGrid
- [ ] Saw green checkmark ✅ in SendGrid

## 🔍 Visual Guide

**Before (Wrong):**
```
CNAME  em4752.mbraceinsight.com  →  u58404708.wl209.sendgrid.net  ☁️ Proxied
```

**After (Correct):**
```
CNAME  em4752.mbraceinsight.com  →  u58404708.wl209.sendgrid.net  ⚪ DNS only
```

## ⚠️ Important Notes

- **Don't change any other DNS records** - only these 3 CNAME records
- **A records can stay proxied** - only the SendGrid CNAME records need to be DNS only
- **MX records are fine** - leave them as is
- **TXT records are fine** - leave them as is

## 🚀 Once Verified

After SendGrid shows the green checkmark ✅:

1. You can use `noreply@mbraceinsight.com` (or any email @mbraceinsight.com)
2. Update your `.env.local`:
   ```env
   EMAIL_FROM=noreply@mbraceinsight.com
   ```
3. Your contact form will work!

## ❓ Troubleshooting

**Still showing errors after 10 minutes?**
- Double-check the record names match exactly (case-sensitive)
- Double-check the target values match exactly
- Make sure all 3 are set to DNS only (grey cloud)
- Try clicking "Verify" again in SendGrid

**Can't find one of the records?**
- You might need to create it - click "Add record" in Cloudflare
- Use the exact values from SendGrid
- Set it to DNS only (grey cloud)

