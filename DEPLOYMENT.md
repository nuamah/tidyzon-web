# Tidyzon Website Deployment Guide

This guide covers various deployment options for your Tidyzon website.

## 📋 Pre-Deployment Checklist

Before deploying, ensure you've completed:

- [ ] Updated all placeholder images with actual Tidyzon assets
- [ ] Added your company logo to header and footer
- [ ] Updated contact information in footer
- [ ] Customized all text content to match your brand
- [ ] Updated meta tags and SEO information in `index.html`
- [ ] Tested the website on desktop, tablet, and mobile
- [ ] Optimized all images for web (compressed, WebP format recommended)
- [ ] Set up environment variables (if needed)
- [ ] Run `npm run build` to ensure no build errors

## 🚀 Quick Deploy Options

### Option 1: Netlify (Recommended - Free Tier Available)

**One-Click Deploy:**
1. Push your code to GitHub
2. Visit [Netlify](https://www.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

**Custom Domain:**
1. Go to Site Settings → Domain Management
2. Click "Add custom domain"
3. Follow DNS configuration instructions

**Continuous Deployment:**
- Automatically deploys when you push to GitHub
- Preview deployments for pull requests

---

### Option 2: Vercel (Great Alternative - Free Tier Available)

**Deploy Steps:**
1. Push code to GitHub
2. Visit [Vercel](https://vercel.com/)
3. Click "Add New..." → "Project"
4. Import your repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

**Features:**
- Automatic HTTPS
- Global CDN
- Instant rollbacks
- Preview deployments

---

### Option 3: GitHub Pages (Free)

**Setup:**
1. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Update `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/tidyzon-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default {
  base: '/tidyzon-website/'
}
```

4. Deploy:
```bash
npm run deploy
```

---

### Option 4: Traditional Web Hosting (cPanel, FTP)

**Steps:**
1. Build the project:
```bash
npm run build
```

2. Upload files:
   - Connect to your hosting via FTP (FileZilla, etc.)
   - Navigate to `public_html` or `www` folder
   - Upload all contents from the `dist` folder

3. Configure:
   - Ensure `index.html` is in the root directory
   - Set up `.htaccess` for React routing (if needed):
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

### Option 5: AWS S3 + CloudFront

**Steps:**
1. Build the project:
```bash
npm run build
```

2. Create S3 Bucket:
   - Go to AWS S3 Console
   - Create new bucket
   - Enable static website hosting

3. Upload files:
   - Upload all files from `dist` folder
   - Make files public

4. Set up CloudFront (optional but recommended):
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure SSL certificate

---

### Option 6: Firebase Hosting

**Setup:**
1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase:
```bash
firebase init hosting
```

Configuration:
- Public directory: `dist`
- Single-page app: Yes
- Automatic builds: No

4. Build and Deploy:
```bash
npm run build
firebase deploy
```

---

## 🔧 Build Configuration

### Environment Variables

Create `.env.production`:
```env
VITE_API_URL=https://api.tidyzon.com
VITE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

### Optimize Build

Update `vite.config.js`:
```javascript
export default {
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
}
```

---

## 🌐 Domain Configuration

### Setting Up Custom Domain

**DNS Configuration (for Netlify/Vercel):**

Add these records to your domain registrar:

| Type | Name | Value |
|------|------|-------|
| A | @ | 75.2.60.5 (Netlify) or Vercel's IP |
| CNAME | www | your-site.netlify.app |

**SSL Certificate:**
- Netlify and Vercel provide free SSL certificates
- Automatic HTTPS redirect

---

## 📊 Performance Optimization

### Before Deployment:

1. **Image Optimization:**
```bash
# Install sharp for image optimization
npm install --save-dev sharp
```

2. **Code Splitting:**
   - Vite automatically handles this
   - Lazy load components if needed

3. **Compression:**
   - Enable Gzip/Brotli on hosting platform
   - Most platforms (Netlify, Vercel) do this automatically

---

## 🔍 SEO Setup

### robots.txt
Create `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://tidyzon.com/sitemap.xml
```

### Sitemap
Create `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tidyzon.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## 📱 Progressive Web App (PWA)

To make your site a PWA:

1. Install Vite PWA plugin:
```bash
npm install vite-plugin-pwa --save-dev
```

2. Update `vite.config.js`:
```javascript
import { VitePWA } from 'vite-plugin-pwa'

export default {
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Tidyzon',
        short_name: 'Tidyzon',
        description: 'Your trusted service partner',
        theme_color: '#6bb77b',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
}
```

---

## 🔐 Security Best Practices

1. **HTTPS Only:** Always use HTTPS in production
2. **Environment Variables:** Never commit API keys to Git
3. **Headers:** Set security headers on your hosting platform
4. **Dependencies:** Keep packages updated
```bash
npm audit
npm audit fix
```

---

## 📈 Analytics Setup

### Google Analytics 4

Add to `index.html` before `</head>`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run build
```

### Routing Issues
- Ensure your hosting supports SPA routing
- Add redirect rules for single-page applications

### Images Not Loading
- Check image paths (absolute vs. relative)
- Verify images are in `public` folder

---

## 📞 Support

For deployment issues:
1. Check hosting platform documentation
2. Review build logs for errors
3. Test locally with `npm run preview` before deploying

---

## 🎉 Post-Deployment

After successful deployment:
- [ ] Test all pages and features
- [ ] Check mobile responsiveness
- [ ] Verify all images load correctly
- [ ] Test all forms and CTAs
- [ ] Set up analytics tracking
- [ ] Monitor performance with Lighthouse
- [ ] Submit sitemap to Google Search Console

---

**Congratulations! Your Tidyzon website is now live! 🚀**
