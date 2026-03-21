# SEO (Google & social)

## What we implemented

1. **Per-route titles & descriptions** — `react-helmet-async` updates `<title>`, meta description, **canonical URL**, **Open Graph**, and **Twitter** tags when users (and Googlebot) run JavaScript.
2. **Static fallbacks in `index.html`** — Default tags + **JSON-LD** `Organization` schema for crawlers and link previews before/without JS.
3. **`public/robots.txt`** — Allows crawling and points to the sitemap.
4. **`public/sitemap.xml`** — Lists main URLs for Google Search Console.

## SPA limitations

This app is a **client-rendered** React (Vite) SPA. Google **can** index JavaScript sites, but:

- **Canonical URLs** and unique titles for each path rely on Helmet after JS runs — keep important content in HTML where possible.
- All routes return the same `index.html` (Vercel rewrite). Invalid URLs still get HTTP 200; the **404 page** sets `noindex` to reduce junk indexing.

For **maximum** SEO (faster, richer snippets), consider later: **prerendering** (e.g. `vite-plugin-prerender`) or **SSR** — not required to “appear on Google,” but helps competitiveness.

## What you should configure

1. **Production domain** — If the live site is not `https://tidyzon.com`, update:
   - `public/robots.txt` (Sitemap line)
   - `public/sitemap.xml` (every `<loc>`)
   - `index.html` (canonical, `og:*`, `twitter:*`, JSON-LD `url` / `logo`)
2. **Environment variable** (optional) — Create `.env.production` on the host:
   ```env
   VITE_SITE_URL=https://www.your-domain.com
   ```
   This drives canonical + OG image URLs in `RouteSEO` (`src/config/seo.js`).

## Google Search Console

1. Add the **property** (domain or URL prefix).
2. Submit **`https://tidyzon.com/sitemap.xml`** (or your production origin + `/sitemap.xml`).
3. Request indexing for key URLs if needed.
4. Fix any **Mobile usability** / **Core Web Vitals** issues reported there.

### “Search instead for Tidyzon” (brand disambiguation)

If Google suggests a different brand (e.g. autocorrect), **don’t only click the wrong result**. When you see **“Search instead for Tidyzon”** (or similar), use it, then **click through to your real site**. Repeated correct clicks help teach Google that users want **Tidyzon** and your domain.

### Organization schema (`index.html`)

The site ships with **JSON-LD `Organization`** in `index.html`, including **`sameAs`** for official social profiles. Update those URLs if your handles differ, and add more profiles (e.g. LinkedIn, YouTube) to `sameAs` when you have real links.

### Brand citations (off-site)

- Use the exact name **Tidyzon** on Instagram, Facebook, LinkedIn, etc., and **link back** to `https://tidyzon.com`.
- A **Google Business Profile** for the brand (even for online-first businesses) can reinforce the name and reduce “did you mean” suggestions over time.

## Vercel

- **Domains:** In **Settings → Domains**, assign **`tidyzon.com`** (and `www` if used) to **Production**, not only preview URLs.
- **Canonical:** Set **`VITE_SITE_URL=https://tidyzon.com`** (no trailing slash) in production env so **Helmet** canonicals and OG URLs match the live domain, not `*.vercel.app`.
