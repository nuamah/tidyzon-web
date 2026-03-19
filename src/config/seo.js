/**
 * Public site URL for canonical links, Open Graph, and sitemap hints.
 * Set VITE_SITE_URL in .env (e.g. https://www.tidyzon.com) for production.
 */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || 'https://tidyzon.com'
).replace(/\/$/, '')

export const defaultDescription =
  'Tidyzon connects you with trusted providers for mobile car wash, trash bin cleaning, and more. Book on-demand home and vehicle services.'

export const ogImagePath = '/assets/tidyzon_hero_02.png'

export function absoluteUrl(path = '/') {
  const p = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${p}`
}0
