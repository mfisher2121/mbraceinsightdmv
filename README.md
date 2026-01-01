# Mbrace Insight DMV

AI-Powered Local SEO & Marketing Automation Platform for the DMV (DC, Maryland, Virginia)

Built with Next.js + Tailwind CSS + Vercel.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Environment Variables

Create `.env.local` file:

```env
SENDGRID_API_KEY=your-sendgrid-api-key
EMAIL_FROM=noreply@mbraceinsight.com
NEXT_PUBLIC_GA_ID=G-9SQD2P5ZJH
N8N_WEBHOOK_URL=your-n8n-webhook-url
```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

- `/app` - Next.js 13+ App Router pages and API routes
- `/components` - React components
- `/app/api/contact` - Contact form API endpoint
- `/app/api/audit` - Audit tool API endpoint
- `/app/free-tool` - Free audit tool page
- `/app/page.tsx` - Homepage

## 📚 Documentation

- `LAUNCH_CHECKLIST.md` - Complete launch guide
- `SENDGRID_SETUP.md` - Email configuration guide
- `GOOGLE_WORKSPACE_SOLUTION.md` - Google Workspace email setup
- `n8n-workflow-setup.md` - n8n automation workflow setup

## 🔧 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Email:** SendGrid
- **Analytics:** Google Analytics
- **Deployment:** Vercel
- **Automation:** n8n (optional)

## 📝 License

Private - Mbrace Insight
