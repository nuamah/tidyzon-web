import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { defaultDescription, ogImagePath, absoluteUrl } from '../config/seo'

const ROUTES = {
  '/': {
    title: 'Tidyzon — Mobile car wash & home cleaning services',
    description: defaultDescription,
  },
  '/about': {
    title: 'About Tidyzon',
    description:
      'Learn about Tidyzon, our mission, and how we connect customers with professional on-site service providers.',
  },
  '/services': {
    title: 'Services',
    description:
      'Explore Tidyzon services: mobile car washing, garbage and recycle bin cleaning, and more at your location.',
  },
  '/teams': {
    title: 'Team',
    description: 'Meet the Tidyzon team building a better on-demand service experience.',
  },
  '/provider': {
    title: 'Become a service provider',
    description:
      'Join Tidyzon as an independent contractor. Offer car wash and cleaning services on your schedule.',
  },
  '/get-started': {
    title: 'Get started',
    description: 'Get started with Tidyzon — download the app and book your first service.',
  },
  '/reviews': {
    title: 'Reviews',
    description: 'Read what customers say about Tidyzon services and providers.',
  },
  '/open-positions': {
    title: 'Careers & open positions',
    description: 'Open roles and career opportunities at Tidyzon.',
  },
  '/contact': {
    title: 'Contact & help',
    description:
      'Contact Tidyzon by email, phone, or message. FAQs, SMS terms, and support information.',
  },
  '/help': {
    title: 'Help',
    description: 'Tidyzon help center — contact us and find answers to common questions.',
  },
  '/terms': {
    title: 'Terms & conditions',
    description:
      'Tidyzon Terms and Conditions governing use of our website, app, and platform services.',
  },
  '/privacy': {
    title: 'Privacy policy',
    description:
      'How Tidyzon collects, uses, and protects your personal information, including SMS privacy (Section 8).',
  },
  '/privacy/requests': {
    title: 'Privacy requests',
    description: 'Submit privacy rights requests to Tidyzon under applicable laws.',
  },
  '/privacy/do-not-sell-or-share': {
    title: 'Do not sell or share my personal information',
    description: 'California preference: opt out of sale or sharing of personal information.',
  },
  '/privacy/limit-sensitive-info': {
    title: 'Limit use of sensitive personal information',
    description: 'California preference: limit use of sensitive personal information (SPI).',
  },
  '/california-privacy': {
    title: 'California privacy notice (CCPA/CPRA)',
    description:
      'California Notice at Collection and Privacy Policy for California residents using Tidyzon.',
  },
  '/customer-service-agreement': {
    title: 'Customer service agreement',
    description: 'Agreement between Tidyzon and customers who book services on the platform.',
  },
  '/service-provider-agreement': {
    title: 'Service provider agreement',
    description:
      'Agreement for independent contractors who provide services through the Tidyzon platform.',
  },
}

const DEFAULT_META = ROUTES['/']

const RouteSEO = () => {
  const { pathname } = useLocation()
  const meta = ROUTES[pathname] || DEFAULT_META
  const title = meta.title.includes('Tidyzon') ? meta.title : `${meta.title} | Tidyzon`
  const canonical = absoluteUrl(pathname)
  const ogImage = absoluteUrl(ogImagePath)

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content="Tidyzon" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="robots" content="index, follow" />
    </Helmet>
  )
}

export default RouteSEO
