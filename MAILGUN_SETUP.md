# Mailgun Setup Guide for Yago

## Quick Setup (5 minutes)

### Step 1: Get Mailgun Credentials

1. **Login to Mailgun**: https://app.mailgun.com
2. **Get your API Key**:
   - Go to Settings → API Keys
   - Copy your "Private API key" (starts with `key-...`)
3. **Get your Domain**:
   - Go to Sending → Domains
   - Copy your domain name (e.g., `sandbox123.mailgun.org` or `mg.yourdomain.com`)

### Step 2: Configure Environment Variables

1. **Create `.env.local` file** in the project root (if it doesn't exist):

```bash
# Create the file (if needed)
echo. > .env.local
```

2. **Add your Mailgun credentials** to `.env.local`:

```env
# Mailgun Configuration
MAILGUN_API_KEY=key-your_actual_api_key_here
MAILGUN_DOMAIN=your_domain_here.mailgun.org
```

**Example**:
```env
MAILGUN_API_KEY=key-1234567890abcdef1234567890abcdef
MAILGUN_DOMAIN=sandbox1a2b3c4d5e6f7g8h9i0j.mailgun.org
```

### Step 3: Restart Development Server

```bash
# Stop the current server (Ctrl+C in the terminal)
# Then restart:
npm run dev -- -p 3004
```

### Step 4: Test Email Sending

1. **Go to your site**: http://localhost:3004
2. **Enter your real email address**
3. **Click "Notify Me"**
4. **Check your inbox** for the welcome email

---

## Using Sandbox Domain (Free Testing)

Mailgun provides a **sandbox domain** for free testing.

### Limitations:
- Can only send to **authorized recipients** (emails you pre-approve)
- Limited to **300 emails/day**
- Perfect for testing!

### How to Add Authorized Recipients:

1. Go to **Sending → Domains** in Mailgun
2. Click on your **sandbox domain**
3. Scroll down to **Authorized Recipients**
4. Click **Add Recipient**
5. Enter your email address
6. **Check your email** and click the confirmation link
7. Now you can receive test emails!

---

## Using Your Own Domain (Production)

For production, you should use your own domain (e.g., `mg.yago.co.uz`).

### Step 1: Add Your Domain to Mailgun

1. Go to **Sending → Domains** in Mailgun
2. Click **Add New Domain**
3. Enter your subdomain: `mg.yago.co.uz` (or `mail.yago.co.uz`)
4. Click **Add Domain**

### Step 2: Verify Domain with DNS Records

Mailgun will provide DNS records to add to your domain:

**You'll need to add these DNS records** (example):

| Type | Host | Value | Priority |
|------|------|-------|----------|
| TXT | @ | v=spf1 include:mailgun.org ~all | - |
| TXT | _dmarc | v=DMARC1; p=none | - |
| TXT | k1._domainkey | (long key provided by Mailgun) | - |
| CNAME | email | mailgun.org | - |
| MX | @ | mxa.mailgun.org | 10 |
| MX | @ | mxb.mailgun.org | 10 |

### Step 3: Add DNS Records to Your Domain Provider

**Where to add these records depends on your domain provider:**

#### If using **Cloudflare**:
1. Go to Cloudflare dashboard
2. Select your domain
3. Go to **DNS** → **Records**
4. Click **Add record**
5. Add each record from Mailgun

#### If using **GoDaddy**:
1. Go to GoDaddy DNS Management
2. Add each record under DNS settings

#### If using **Namecheap**:
1. Go to Domain List → Manage
2. Advanced DNS
3. Add each record

### Step 4: Verify Domain in Mailgun

1. After adding DNS records, **wait 10-15 minutes** for propagation
2. Go back to Mailgun → Domains
3. Click **Verify DNS Settings**
4. If verified, you'll see green checkmarks ✅

### Step 5: Update Environment Variable

```env
MAILGUN_DOMAIN=mg.yago.co.uz
```

---

## Troubleshooting

### Email Not Sending?

**Check 1: Are environment variables set?**
```bash
# In your terminal, check if variables are loaded
echo $MAILGUN_API_KEY
# Should show your key
```

**Check 2: Server logs**
Look at your terminal where the dev server is running. You should see:
- `Welcome email sent successfully:` (if working)
- `Mailgun not configured` (if env vars not loaded)
- Error messages (if something is wrong)

**Check 3: Restart server after adding .env.local**
```bash
# Stop server (Ctrl+C)
npm run dev -- -p 3004
```

### Using Sandbox Domain?

**Add authorized recipient:**
1. Mailgun → Domains → Your Sandbox Domain
2. Authorized Recipients → Add Recipient
3. Enter your email and verify it

### Email Goes to Spam?

For production with your own domain:
1. ✅ Verify all DNS records (SPF, DKIM, DMARC)
2. ✅ Use a dedicated subdomain (mg.yago.co.uz)
3. ✅ Warm up your domain (start with small volumes)
4. ✅ Monitor your sender reputation

---

## Email Limits

### Free Plan (Sandbox):
- 300 emails/day for 3 months
- Only to authorized recipients
- Good for testing

### Paid Plans:
- **Flex**: Pay as you go ($0.80 per 1,000 emails)
- **Grow**: $35/month (50,000 emails)
- **Scale**: Custom pricing

---

## Security Best Practices

### 1. Never Commit .env.local
Already in `.gitignore` ✅

### 2. Rotate API Keys Regularly
Every 3-6 months, generate new keys

### 3. Use Different Keys for Environments
- Development: Sandbox domain
- Production: Your domain

### 4. Monitor Email Activity
Check Mailgun logs regularly for suspicious activity

---

## Testing Checklist

- [ ] API key copied from Mailgun
- [ ] Domain name copied from Mailgun
- [ ] .env.local file created
- [ ] Environment variables added
- [ ] Dev server restarted
- [ ] Authorized recipient added (if using sandbox)
- [ ] Test email submitted
- [ ] Email received in inbox
- [ ] Email looks good (check template)
- [ ] Links work in email

---

## Quick Commands Reference

```bash
# Create .env.local file
echo. > .env.local

# Edit .env.local (use your preferred editor)
notepad .env.local
# OR
code .env.local

# Restart dev server
npm run dev -- -p 3004

# Check if email was sent (look for this in terminal logs)
"Welcome email sent successfully"
```

---

## Example .env.local File

```env
# Mailgun Configuration
MAILGUN_API_KEY=key-1234567890abcdef1234567890abcdef
MAILGUN_DOMAIN=sandbox1a2b3c4d5e6f7g8h9i0j.mailgun.org

# Optional: Other environment variables
# NEXT_PUBLIC_SITE_URL=http://localhost:3004
```

---

## Need Help?

### Check Mailgun Logs:
1. Go to Mailgun dashboard
2. Click **Sending** → **Logs**
3. See all email attempts, deliveries, and failures

### Common Issues:

**"Mailgun not configured"**
→ Environment variables not loaded. Restart server.

**"401 Unauthorized"**
→ Wrong API key. Check and update.

**"Domain not found"**
→ Wrong domain name. Check spelling.

**"Recipient not authorized"**
→ Add recipient to sandbox domain.

---

## What's Next?

After Mailgun is configured, we can:
1. ✅ Test the current email template
2. 🎨 Design a custom email template
3. 📊 Add email tracking
4. 📧 Create additional email types (launch announcement, updates, etc.)

---

Ready to configure? Let's do it! 🚀
