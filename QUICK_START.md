# 🚀 Tidyzon Website - Quick Start Guide

Get your Tidyzon website up and running in minutes!

## ⚡ 5-Minute Setup

### Step 1: Navigate to Project
```bash
cd tidyzon-website
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
Visit the URL shown in terminal (usually `http://localhost:5173`)

**That's it! Your website is running! 🎉**

---

## 📋 First-Time Customization Checklist

### Essential Changes (Before Launch):

#### 1. Images (High Priority)
- [ ] Add company logo to `public/assets/logo/logo.png`
- [ ] Replace hero section image in `src/components/sections/Hero.jsx`
- [ ] Replace service images in `src/components/sections/Services.jsx`
- [ ] Add service provider photo in `src/components/sections/Welcome.jsx`
- [ ] Replace CTA section image in `src/components/sections/CTA.jsx`

#### 2. Branding
- [ ] Update company name in Header (if different from "Tidyzon")
- [ ] Update logo in Footer
- [ ] Update favicon in `public/` folder
- [ ] Update page title in `index.html`

#### 3. Content
- [ ] Update hero headline and description
- [ ] Update company welcome text
- [ ] Update service descriptions
- [ ] Add real customer testimonials
- [ ] Update footer contact information

#### 4. Contact Information
- [ ] Add email address in footer
- [ ] Add phone number
- [ ] Add physical address (if applicable)
- [ ] Add social media links

#### 5. SEO
- [ ] Update meta description in `index.html`
- [ ] Update meta keywords
- [ ] Update Open Graph tags
- [ ] Create sitemap.xml
- [ ] Add Google Analytics ID

---

## 🎨 Quick Customization Guide

### Change Primary Color:
**File:** `src/index.css`
```css
:root {
  --primary-green: #2d5016;    /* Change this */
  --secondary-green: #4a7c59;  /* And this */
  --accent-green: #6bb77b;     /* And this */
}
```

### Update Logo:
**File:** `src/components/Header.jsx`
```jsx
<img 
  src="/assets/logo/logo.png" 
  alt="Your Company Name" 
  className="h-12 w-auto"
/>
```

### Change Hero Image:
**File:** `src/components/sections/Hero.jsx`
```jsx
<img 
  src="/assets/hero/your-image.jpg"  // Change this path
  alt="Your description"
/>
```

### Update Navigation Links:
**File:** `src/components/Header.jsx`
```jsx
<a href="#home">Home</a>
<a href="#services">Services</a>
// Add or remove links here
```

---

## 🏗️ Build for Production

### Create Production Build:
```bash
npm run build
```

Output will be in `dist/` folder

### Test Production Build Locally:
```bash
npm run preview
```

---

## 🌐 Deploy (Choose One)

### Option 1: Netlify (Easiest)
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect GitHub repo
4. Click deploy (automatic settings)

### Option 2: Vercel
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import project
4. Click deploy

### Option 3: Traditional Hosting
1. Run `npm run build`
2. Upload `dist/` folder contents to your server
3. Point domain to the folder

**More deployment options in DEPLOYMENT.md**

---

## 📱 Test Checklist

Before going live, test:

- [ ] All navigation links work
- [ ] Mobile menu opens/closes
- [ ] All images load
- [ ] Buttons are clickable
- [ ] Forms work (when added)
- [ ] Responsive on mobile
- [ ] Responsive on tablet
- [ ] All sections display correctly
- [ ] Page loads fast
- [ ] No console errors

---

## 🛠️ Common Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for package updates
npm outdated

# Update packages
npm update
```

---

## 📚 Need More Help?

- **Setup & Installation:** See README.md
- **Customization:** See CUSTOMIZATION_GUIDE.md
- **Deployment:** See DEPLOYMENT.md
- **Overview:** See PROJECT_SUMMARY.md

---

## 🎯 Priority Action Items

### For Today:
1. ✅ Get the dev server running
2. ✅ Browse through all sections
3. ✅ Make a list of content to update

### For This Week:
1. ⏳ Gather all company images
2. ⏳ Write/collect real testimonials
3. ⏳ Update all content
4. ⏳ Test on multiple devices

### Before Launch:
1. ⏳ Complete SEO setup
2. ⏳ Set up analytics
3. ⏳ Test all functionality
4. ⏳ Deploy to hosting

---

## ⚠️ Important Notes

- **Do NOT** commit `.env` files to Git
- **Do NOT** push `node_modules` to GitHub (already in .gitignore)
- **ALWAYS** test locally before deploying
- **BACKUP** your work regularly
- **OPTIMIZE** images before uploading (compress them)

---

## 💡 Pro Tips

1. **Images:** Keep file sizes under 500KB for fast loading
2. **Content:** Write clear, benefit-focused copy
3. **Testing:** Test on real mobile devices, not just browser dev tools
4. **SEO:** Add descriptive alt text to all images
5. **Performance:** Use WebP format for images when possible

---

## 🎉 You're Ready!

Your Tidyzon website is fully functional and ready to customize.

**Next Step:** Start replacing placeholder content with your actual company information!

---

*Happy building! 🚀*
