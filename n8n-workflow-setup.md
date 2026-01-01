# n8n DMV Audit Workflow Setup Guide

This workflow automates the DMV SEO audit process: receives form data, calculates wisdom scores, generates AI-powered quick wins, sends emails, and logs results.

## 📋 Prerequisites

1. n8n instance (cloud or self-hosted)
2. OpenAI API key (for GPT quick wins generation)
3. SendGrid API key (for email delivery)
4. Google Sheets API credentials (OAuth2)
5. Google Sheet created with headers: Date, Business, Website, City, Industry, Email, Wisdom Score, Tier, Email Sent

## 🚀 Installation Steps

### 1. Import Workflow

1. Open your n8n instance
2. Click **"Workflows"** → **"Import from File"**
3. Select `n8n-dmv-audit-workflow.json`
4. The workflow will be imported with placeholder credential IDs

### 2. Configure Credentials

#### OpenAI API
1. Go to **Credentials** → **Add Credential** → **OpenAI API**
2. Enter your OpenAI API key
3. Name it (e.g., "OpenAI API")
4. Note the credential ID
5. In the workflow, update the **"Generate Quick Wins (GPT)"** node:
   - Click on the node
   - Under **Credentials**, select your OpenAI credential

#### SendGrid API
1. Go to **Credentials** → **Add Credential** → **SendGrid API**
2. Enter your SendGrid API key
3. Name it (e.g., "SendGrid API")
4. In the workflow, update the **"Send Email (SendGrid)"** node:
   - Click on the node
   - Under **Credentials**, select your SendGrid credential

#### Google Sheets OAuth2
1. Go to **Credentials** → **Add Credential** → **Google Sheets OAuth2 API**
2. Follow the OAuth2 setup process (requires Google Cloud Console setup)
3. In the workflow, update the **"Log to Google Sheets"** node:
   - Click on the node
   - Under **Credentials**, select your Google Sheets credential
   - Update the **Document ID** to your Google Sheet ID
   - Update the **Sheet Name** to "DMV Audits" (or your sheet name)

### 3. Update Webhook URL

1. After importing, activate the workflow
2. Click on the **"Webhook Trigger"** node
3. Copy the webhook URL (e.g., `https://your-n8n-instance.com/webhook/dmv-audit`)
4. Add this URL to your `.env` file:
   ```
   N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/dmv-audit
   ```

### 4. Test the Workflow

1. Use the webhook URL to send a test POST request:
   ```bash
   curl -X POST https://your-n8n-instance.com/webhook/dmv-audit \
     -H "Content-Type: application/json" \
     -d '{
       "businessName": "Test Business",
       "website": "https://example.com",
       "city": "Washington, DC",
       "serviceType": "HVAC",
       "email": "test@example.com"
     }'
   ```

2. Check the execution logs to verify each step completes successfully

## 🔧 Workflow Structure

### Node Flow:
1. **Webhook Trigger** - Receives POST request from Next.js API
2. **Calculate Wisdom Score** - Computes mock visibility score (replace with DataForSEO integration)
3. **Generate Quick Wins (GPT)** - Uses OpenAI to generate personalized quick wins
4. **Combine Results** - Merges score data with GPT-generated quick wins
5. **Send Email (SendGrid)** - Sends results to user + CC to mfisher@mbraceinsight.com
6. **Log to Google Sheets** - Appends audit data to tracking sheet
7. **Respond to Webhook** - Returns results to Next.js API

## 🎯 Enhancements (Optional)

### Add DataForSEO Integration

Replace the mock scoring in **"Calculate Wisdom Score"** with real DataForSEO API calls:

```javascript
// Example DataForSEO integration
const response = await fetch('https://api.dataforseo.com/v3/domain_analytics/google/domain_rank_overview/live', {
  method: 'POST',
  headers: {
    'Authorization': `Basic ${btoa(login + ':' + password)}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify([{
    target: website,
    location_name: city
  }])
});

const data = await response.json();
// Process DataForSEO results and calculate real scores
```

### Add Calendly Link Generation

Add a node after **"Combine Results"** to generate personalized Calendly booking links based on the audit score.

### Add PDF Report Generation

Add HTML → PDF conversion node to generate and attach a detailed PDF report to the email.

## 📊 Google Sheets Setup

Create a Google Sheet with these columns (in order):
- Date
- Business
- Website
- City
- Industry
- Email
- Wisdom Score
- Tier
- Email Sent

Make sure the sheet name matches what you configure in the workflow (default: "DMV Audits").

## 🔐 Security Notes

- Store all API keys in n8n credentials (never hardcode)
- Use environment variables for webhook URLs
- Consider adding webhook authentication (query params or headers)
- Rate limit webhook endpoints to prevent abuse

## 🐛 Troubleshooting

- **Workflow not activating**: Check that all credentials are properly configured
- **Email not sending**: Verify SendGrid API key and "from" email is verified
- **Sheets not updating**: Check OAuth2 permissions and sheet name matches exactly
- **GPT errors**: Verify OpenAI API key and check API quota/limits

