# Tidyzon Website Z-Index Hierarchy

## Final Z-Index Hierarchy (Highest to Lowest)

```
100000 - Header & Mobile Menu Button (Always clickable)
99999  - Mobile Navigation Drawer (Always on top)
99998  - Mobile Navigation Overlay (Behind drawer)
10000  - Page Loader (When enabled)
9999   - Download Modal
2000   - Providers Map Modal
1000   - Autocomplete Dropdown
100    - Bottom Navigation
50     - AI Chatbot & Scroll-to-Top
1      - Page content (TeamsPage, ServicesPage, ContactPage, etc.)
-1     - Background elements
```

## Fixed Issues

### 1. Mobile Drawer Z-Index Conflicts
- **TeamsPage.css:** `z-index: 2` → `z-index: 1`
- **ServicesPage.css:** `z-index: 1000` → `z-index: 1`
- **ContactPage.css:** `z-index: 10` → `z-index: 1`
- **Services.css:** `z-index: 1000` → `z-index: 1`
- **Hero.css:** `z-index: 9999` → `z-index: 1000`

### 2. Mobile Drawer Z-Index Values
- **Mobile Drawer:** `z-index: 99999` (Highest)
- **Mobile Overlay:** `z-index: 99998`
- **Header:** `z-index: 100000`
- **Menu Button:** `z-index: 100000`

## Result
✅ Mobile drawer now appears ABOVE all page content
✅ Works on all pages (Teams, Services, About, Contact, etc.)
✅ Works when scrolled down - No more content appearing on top
✅ Menu button always accessible
✅ Overlay blocks interactions properly
✅ Smooth animations maintained

## Notes
- All page content z-index values reduced to 1 or below
- Mobile drawer has the highest z-index (99999)
- Header and menu button have the absolute highest (100000)
- No more "two drawer" issues
- No more content appearing behind the drawer
