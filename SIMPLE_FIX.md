# Simple Fix: SendGrid Domain Authentication

## The Problem
Your Cloudflare DNS records are "Proxied" but need to be "DNS only" for SendGrid to verify.

## The Solution (3 Steps)

### 1. Go to Cloudflare DNS
Open your `mbraceinsight.com` DNS settings in Cloudflare.

### 2. Find These 3 CNAME Records & Turn Off Proxy

Look for these records and click the **orange cloud ☁️** to make it **grey ⚪**:

1. **`58404708`** → `sendgrid.net`
2. **`em4752`** (or `em1625`) → `u58404708.wl209.sendgrid.net`  
3. **`s1._domainkey`** → `s1.domainkey.u58404708.wl209.sendgrid.net`

**How:** Click "Edit" → Click orange cloud → Turns grey → Save

### 3. Wait 5 Minutes, Then Verify in SendGrid

- Go to SendGrid → Settings → Domain Authentication
- Click "Verify"
- Should show ✅ green checkmark

**Done!** Now you can use `noreply@mbraceinsight.com` in your code.

---

That's it. See `FIX_CLOUDFLARE_DNS.md` for more details if needed.

