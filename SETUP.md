# Yago Email Subscription Setup Guide

## Overview

Your Yago coming soon page now includes a fully functional email subscription system with:
- ✅ Email collection and storage
- ✅ Mailgun integration for automated welcome emails
- ✅ Admin dashboard to view and export subscribers
- ✅ Beautiful success modal with early bird messaging
- ✅ Database migration guides (PostgreSQL/MongoDB)

---

## Quick Start

### 1. Development Setup

The app is currently running on **http://localhost:3004**

To restart the dev server:
```bash
npm run dev -- -p 3004
```

### 2. Configure Mailgun (Optional but Recommended)

To enable automated welcome emails:

1. **Get Your Mailgun Credentials**:
   - Go to https://app.mailgun.com/settings/api_security
   - Copy your API key
   - Note your domain (e.g., `mg.yourdomain.com` or sandbox domain)

2. **Create `.env.local` file**:
```env
MAILGUN_API_KEY=your_mailgun_api_key_here
MAILGUN_DOMAIN=your_mailgun_domain_here
```

3. **Test the integration**:
   - Submit a test email on your site
   - Check if you receive the welcome email
   - Check server logs for any errors

**Note**: If Mailgun is not configured, emails won't be sent but subscriptions will still be saved.

---

## Features

### 1. Email Subscription Form

**Location**: Main page (`/`)

**Features**:
- Email validation (frontend & backend)
- Duplicate detection
- Loading states with spinner
- Error handling
- Success modal with congratulations message

**User Flow**:
1. Visitor enters email
2. Clicks "Notify Me"
3. Email is validated and saved
4. Welcome email is sent (if Mailgun configured)
5. Beautiful modal appears with early bird benefits
6. Visitor can close modal and continue exploring

### 2. Admin Dashboard

**Location**: http://localhost:3004/admin/subscribers

**Features**:
- View all subscribers
- Real-time subscriber count
- Export to CSV
- Refresh data
- Responsive design
- Formatted dates

**Note**: Currently no authentication - add password protection before deploying!

**To add basic authentication**, create `app/admin/subscribers/layout.tsx`:

```typescript
'use client';

import { useState, useEffect } from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Change this password!
    if (password === 'your-secure-password') {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin-auth', 'true');
    } else {
      alert('Invalid password');
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem('admin-auth') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <form onSubmit={handleSubmit} className="max-w-md w-full p-8 border border-[#C59D5F]/30">
          <h1 className="text-2xl text-[#D4AF37] mb-4">Admin Access</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full bg-black border border-[#C59D5F]/30 text-white px-4 py-2 mb-4"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C59D5F] text-black py-2 font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
}
```

### 3. Welcome Email

**Triggered**: Automatically after successful subscription

**Template Features**:
- Luxury design matching your brand
- Early bird benefits list
- Call-to-action button
- Responsive HTML email
- Plain text fallback

**To customize the email**:
Edit `lib/mailgun.ts` and update the HTML/text content.

### 4. Data Storage

**Current**: JSON file at `data/subscribers.json`

**Format**:
```json
[
  {
    "email": "user@example.com",
    "subscribedAt": "2025-11-18T10:30:00.000Z"
  }
]
```

**Location**:
- Development: `D:\Projects\jovoxYago\data\subscribers.json`
- Protected by `.gitignore` (won't be committed to Git)

**To view subscribers**:
1. Check the file directly
2. Use the admin dashboard
3. Call the API: `GET /api/subscribe`

---

## API Endpoints

### POST /api/subscribe

Subscribe a new email address.

**Request**:
```json
{
  "email": "user@example.com"
}
```

**Success Response** (201):
```json
{
  "message": "Successfully subscribed!",
  "success": true
}
```

**Duplicate Response** (200):
```json
{
  "message": "You are already subscribed!",
  "alreadySubscribed": true
}
```

**Error Response** (400):
```json
{
  "error": "Invalid email address"
}
```

### GET /api/subscribe

Get all subscribers (for admin use).

**Response** (200):
```json
{
  "count": 42,
  "subscribers": [
    {
      "email": "user@example.com",
      "subscribedAt": "2025-11-18T10:30:00.000Z"
    }
  ]
}
```

---

## Deployment

### Before Deploying

1. **Set up environment variables**:
   - Add `MAILGUN_API_KEY` and `MAILGUN_DOMAIN` to your hosting provider

2. **Add authentication to admin dashboard**:
   - Implement the layout example above
   - Or use a proper auth solution (NextAuth.js, Clerk, etc.)

3. **Test thoroughly**:
   - Test email submission
   - Test duplicate prevention
   - Test welcome email delivery
   - Test admin dashboard
   - Test CSV export

### Deploy to Vercel

1. **Push to GitHub**:
```bash
git add .
git commit -m "Add email subscription system"
git push
```

2. **Deploy to Vercel**:
```bash
npm install -g vercel
vercel
```

3. **Add Environment Variables**:
   - Go to Vercel Dashboard → Settings → Environment Variables
   - Add `MAILGUN_API_KEY`
   - Add `MAILGUN_DOMAIN`
   - Redeploy

4. **Verify DNS (for Mailgun)**:
   - Add DNS records in your domain provider
   - Verify domain in Mailgun dashboard

### Data Persistence on Vercel

⚠️ **Important**: Vercel's filesystem is ephemeral. The JSON file will be reset on each deployment.

**Solutions**:
1. **Migrate to a database** (Recommended)
   - See `DATABASE_MIGRATION.md` for guides
   - Use Vercel Postgres, MongoDB Atlas, or Supabase

2. **Use Vercel KV** (Simple alternative)
   ```bash
   npm install @vercel/kv
   ```

3. **Use Vercel Blob** (File storage)
   ```bash
   npm install @vercel/blob
   ```

---

## File Structure

```
jovoxYago/
├── app/
│   ├── api/
│   │   └── subscribe/
│   │       └── route.ts          # API endpoint
│   ├── admin/
│   │   └── subscribers/
│   │       └── page.tsx          # Admin dashboard
│   ├── coming-soon.tsx           # Main page
│   └── ...
├── components/
│   └── SuccessModal.tsx          # Congratulations modal
├── lib/
│   └── mailgun.ts                # Email service
├── data/
│   └── subscribers.json          # Subscriber storage (gitignored)
├── .env.example                  # Environment variables template
├── .env.local                    # Your local environment (gitignored)
├── DATABASE_MIGRATION.md         # Database migration guide
└── SETUP.md                      # This file
```

---

## Troubleshooting

### Welcome emails not sending

1. Check environment variables are set correctly
2. Verify Mailgun API key is valid
3. Check Mailgun domain is verified
4. Check server logs for errors
5. Test with Mailgun sandbox domain first

### Subscribers not saving

1. Check `data` directory exists and is writable
2. Check server logs for errors
3. Verify API endpoint is being called
4. Check browser console for errors

### Admin dashboard showing empty

1. Check if `data/subscribers.json` exists
2. Verify the file contains valid JSON
3. Check API endpoint is working: `GET /api/subscribe`
4. Check browser console for errors

### Port already in use

```bash
# Find process using port
netstat -ano | findstr :3004

# Kill the process (replace PID)
taskkill /F /PID <PID>

# Or use a different port
npm run dev -- -p 3005
```

---

## Next Steps

### Immediate
- [ ] Configure Mailgun credentials
- [ ] Test email subscription flow
- [ ] Add admin dashboard authentication
- [ ] Customize welcome email template

### Before Launch
- [ ] Test on mobile devices
- [ ] Set up proper database (see DATABASE_MIGRATION.md)
- [ ] Add analytics tracking
- [ ] Set up error monitoring (Sentry)
- [ ] Add rate limiting to prevent spam
- [ ] Test email deliverability

### Post-Launch
- [ ] Monitor subscriber growth
- [ ] A/B test messaging
- [ ] Set up email sequences
- [ ] Add unsubscribe functionality
- [ ] Create segmentation
- [ ] Integrate with CRM

---

## Support

If you need help:
1. Check the troubleshooting section
2. Review the documentation files
3. Check server logs for errors
4. Test each component individually

---

## Security Considerations

1. **Admin Dashboard**: Add authentication before deploying
2. **Rate Limiting**: Add to prevent spam (use Vercel's rate limiting or upstash)
3. **Email Validation**: Already implemented
4. **Environment Variables**: Never commit `.env.local` to Git
5. **API Keys**: Rotate regularly
6. **CORS**: Configure if needed for API access

---

## Maintenance

### Regular Tasks
- Monitor subscriber growth
- Check email delivery rates
- Review error logs
- Update dependencies
- Backup subscriber data

### Monthly
- Review and clean invalid emails
- Check Mailgun usage/costs
- Update welcome email content
- Analyze subscriber patterns

---

## License & Credits

Built for Yago Concierge with:
- Next.js 14
- Framer Motion
- Mailgun.js
- Lucide Icons

---

**Questions?** Review the code comments or create an issue in your repository.
