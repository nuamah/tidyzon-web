# Tidyzon Website Customization Guide

This guide will help you customize the Tidyzon website to match your exact needs.

## 🎨 Updating Colors

All colors are defined in `src/index.css` under the `:root` section:

```css
:root {
  /* Primary Colors */
  --primary-green: #2d5016;
  --secondary-green: #4a7c59;
  --accent-green: #6bb77b;
  --light-green: #a8d5a8;
  
  /* Update these to match your brand */
}
```

## 🖼️ Replacing Images

### Step 1: Add Your Images
1. Place your images in the `public/assets/` folder
2. Create subfolders for organization:
   - `public/assets/hero/`
   - `public/assets/services/`
   - `public/assets/team/`

### Step 2: Update Image References

#### Hero Section (`src/components/sections/Hero.jsx`)
```jsx
<img 
  src="/assets/hero/main-hero.jpg"  // Update this path
  alt="Tidyzon service provider at work"
/>
```

#### Services Section (`src/components/sections/Services.jsx`)
```jsx
<img 
  src="/assets/services/car-cleaning.jpg"  // Update this path
  alt="Professional car cleaning"
/>
```

#### Welcome Section (`src/components/sections/Welcome.jsx`)
```jsx
<img 
  src="/assets/team/service-provider.jpg"  // Update this path
  alt="Professional service provider"
/>
```

#### CTA Section (`src/components/sections/CTA.jsx`)
```jsx
<img 
  src="/assets/hero/modern-home.jpg"  // Update this path
  alt="Modern home"
/>
```

## 📝 Updating Text Content

### Header Navigation
Edit `src/components/Header.jsx` to modify navigation links:
```jsx
<a href="#home">Home</a>
<a href="#services">Services</a>
// Add or remove links as needed
```

### Hero Section
Edit `src/components/sections/Hero.jsx`:
```jsx
<h1>Your Main Headline Here</h1>
<p>Your description text here</p>
```

### Services
Edit `src/components/sections/Services.jsx`:
- Update service titles
- Modify descriptions
- Add/remove service cards

### Features
Edit `src/components/sections/Features.jsx`:
```jsx
const features = [
  {
    icon: Calendar,
    title: "Your Feature Title",
    description: "Your feature description"
  },
  // Add more features
]
```

### Testimonials
Edit `src/components/sections/Testimonials.jsx`:
```jsx
const testimonials = [
  {
    quote: "Customer quote here",
    author: "Customer Name",
    rating: 5
  },
  // Add more testimonials
]
```

## 🎯 Adding Your Logo

### Step 1: Add Logo File
Place your logo in `public/assets/logo/logo.png`

### Step 2: Update Header
Edit `src/components/Header.jsx`:
```jsx
<div className="flex items-center">
  <img 
    src="/assets/logo/logo.png" 
    alt="Tidyzon Logo" 
    className="h-12 w-auto"
  />
  <h1 className="text-3xl font-bold text-accent-green ml-3">
    Tidyzon
  </h1>
</div>
```

### Step 3: Update Footer
Edit `src/components/Footer.jsx`:
```jsx
<img 
  src="/assets/logo/logo.png" 
  alt="Tidyzon Logo" 
  className="h-8 w-auto"
/>
```

### Step 4: Update Favicon
Replace `public/vite.svg` with your favicon and update `index.html`:
```html
<link rel="icon" type="image/png" href="/assets/logo/favicon.png" />
```

## 📱 Social Media Links

### Add Social Icons to Footer
Edit `src/components/Footer.jsx`:
```jsx
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

// In the footer:
<div className="flex gap-4 mt-6">
  <a href="https://facebook.com/tidyzon" target="_blank" rel="noopener noreferrer">
    <Facebook className="w-6 h-6 text-white hover:text-accent-green" />
  </a>
  <a href="https://twitter.com/tidyzon" target="_blank" rel="noopener noreferrer">
    <Twitter className="w-6 h-6 text-white hover:text-accent-green" />
  </a>
  {/* Add more social links */}
</div>
```

## 🔧 Contact Information

### Update Footer Contact Info
Edit `src/components/Footer.jsx`:
```jsx
<div className="text-white">
  <p>Email: contact@tidyzon.com</p>
  <p>Phone: (555) 123-4567</p>
  <p>Address: 123 Main St, City, State 12345</p>
</div>
```

## 🌐 SEO Optimization

### Update Meta Tags
Edit `index.html`:
```html
<title>Tidyzon - Your Custom Title</title>
<meta name="description" content="Your custom description" />
<meta name="keywords" content="your, custom, keywords" />

<!-- Open Graph Tags for Social Media -->
<meta property="og:title" content="Tidyzon" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="/assets/og-image.jpg" />
<meta property="og:url" content="https://tidyzon.com" />
```

## 🎬 Adding Animations

The website includes several animation classes you can use:
- `animate-fade-in-up` - Fades in and slides up
- `animate-slide-up` - Slides up from bottom
- `animate-scale-in` - Scales in from 90%
- `animate-pulse` - Gentle pulsing effect

### Usage Example:
```jsx
<div className="animate-fade-in-up">
  Your content here
</div>
```

## 📊 Adding Google Analytics

1. Get your Google Analytics tracking ID
2. Edit `index.html` and add before closing `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚀 Performance Tips

1. **Optimize Images**: Compress images before adding to the site
2. **Use WebP Format**: Convert images to WebP for better compression
3. **Lazy Loading**: Images already use proper loading attributes
4. **Code Splitting**: Vite handles this automatically

## 🔒 Environment Variables

Create a `.env` file in the root for sensitive data:
```env
VITE_API_URL=https://api.tidyzon.com
VITE_GOOGLE_MAPS_API_KEY=your_api_key
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## 📦 Building for Production

```bash
npm run build
```

The optimized files will be in the `dist/` folder, ready for deployment.

## 🌍 Deployment

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import your project
2. Framework preset: Vite
3. Deploy!

### Traditional Hosting
1. Run `npm run build`
2. Upload contents of `dist/` folder to your web server

---

Need more help? Check the main README.md or contact your development team!
