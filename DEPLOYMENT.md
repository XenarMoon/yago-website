# Yago Website Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Yago website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Done! Your site will be live in ~2 minutes

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

---

## Deploy to Other Platforms

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Or use: `npx netlify-cli deploy --prod`

### Railway

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

### Docker Deployment

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t yago-website .
docker run -p 3000:3000 yago-website
```

---

## Environment Variables

Before deploying, set these environment variables:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=Yago
```

Optional:
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Google Analytics
CONTACT_EMAIL=hello@yago.com
```

---

## Pre-Deployment Checklist

- [ ] Update metadata in `app/layout.tsx` with your domain
- [ ] Add your actual logo/images to `public/images/`
- [ ] Update social media links in Footer
- [ ] Test all navigation links
- [ ] Run `npm run build` locally to check for errors
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Configure custom domain in Vercel/Netlify
- [ ] Set up SSL certificate (automatic on Vercel/Netlify)
- [ ] Test mobile responsiveness
- [ ] Run Lighthouse audit

---

## Custom Domain Setup

### On Vercel:

1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Wait for DNS propagation (~24 hours max)

### DNS Records Example:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## Performance Optimization

Before going live:

1. **Optimize Images**
   - Use WebP format
   - Compress images (TinyPNG, Squoosh)
   - Use Next.js Image component

2. **Enable Analytics**
   ```bash
   npm install @vercel/analytics
   ```

   Add to `app/layout.tsx`:
   ```tsx
   import { Analytics } from '@vercel/analytics/react';

   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     );
   }
   ```

3. **SEO Optimization**
   - Add sitemap.xml
   - Add robots.txt
   - Submit to Google Search Console

---

## Monitoring & Maintenance

### Recommended Tools:

- **Analytics**: Vercel Analytics, Google Analytics, Plausible
- **Error Tracking**: Sentry
- **Uptime Monitoring**: UptimeRobot, Better Uptime
- **Performance**: Lighthouse CI, WebPageTest

### Regular Tasks:

- Weekly: Check analytics and user feedback
- Monthly: Update dependencies (`npm update`)
- Quarterly: Review and optimize performance
- Yearly: Refresh content and design

---

## Troubleshooting

### Build Fails

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### Slow Performance

1. Check image sizes (use WebP, compress)
2. Reduce JavaScript bundle size
3. Enable CDN caching
4. Use font subsetting

### 404 Errors

- Check your `next.config.js`
- Ensure all routes are properly configured
- Clear Vercel cache and redeploy

---

## Support

For deployment issues:
- Vercel: https://vercel.com/support
- Next.js: https://nextjs.org/docs
- GitHub Issues: (your repo)

---

**Happy Deploying! 🚀**
