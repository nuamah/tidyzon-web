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
2. Submit **`/sitemap.xml`**.
3. Request indexing for key URLs if needed.
4. Fix any **Mobile usability** / **Core Web Vitals** issues reported there.
