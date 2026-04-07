import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Car, Sparkles, ArrowRight, Check, Clock, ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import DownloadModal from '../DownloadModal'
import ResponsivePicture from '../ResponsivePicture'
import './Services.css'

const Services = () => {
  const { t } = useTranslation('services')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [scrollY, setScrollY] = useState(0)
  const [expandedPackage, setExpandedPackage] = useState('deluxe') // Default to deluxe (most popular)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const servicesRef = useRef(null)

  const carPackages = [
    {
      id: 'speed-interior',
      name: t('packages.items.speedInterior.name'),
      title: t('packages.items.speedInterior.title'),
      price: '$29.99',
      duration: t('packages.items.speedInterior.duration'),
      pricingLabel: t('packages.items.speedInterior.pricingLabel'),
      features: t('packages.items.speedInterior.features', { returnObjects: true }),
      excludedFeatures: t('packages.items.speedInterior.excludedFeatures', { returnObjects: true }),
    },
    {
      id: 'speed',
      name: t('packages.items.speed.name'),
      title: t('packages.items.speed.title'),
      price: '$49.99',
      duration: t('packages.items.speed.duration'),
      features: t('packages.items.speed.features', { returnObjects: true }),
    },
    {
      id: 'deluxe',
      name: t('packages.items.deluxe.name'),
      title: t('packages.items.deluxe.title'),
      price: '$155.00',
      duration: t('packages.items.deluxe.duration'),
      features: t('packages.items.deluxe.features', { returnObjects: true }),
      popular: true
    },
    {
      id: 'premium',
      name: t('packages.items.premium.name'),
      title: t('packages.items.premium.title'),
      price: '$249.99',
      duration: t('packages.items.premium.duration'),
      features: t('packages.items.premium.features', { returnObjects: true }),
    },
    {
      id: 'biofluids',
      name: t('packages.items.biofluids.name'),
      title: t('packages.items.biofluids.title'),
      price: '$299.99',
      duration: t('packages.items.biofluids.duration'),
      features: t('packages.items.biofluids.features', { returnObjects: true }),
      featuresLabel: t('packages.items.biofluids.featuresLabel'),
      addOnsIncluded: [
        {
          name: t('packages.items.biofluids.addOnsIncluded.name'),
          price: '$19.99',
          originalPrice: '$50.00',
          duration: t('packages.items.biofluids.addOnsIncluded.duration'),
        },
      ],
    },
  ]

  const maxCarouselIndex = Math.max(0, carPackages.length - 3)

  // Parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <section id="services" className="services-section" ref={servicesRef}>
        {/* Parallax background elements */}
        <div 
          className="parallax-bg-elements" 
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
        
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <div className="section-header-content">
              <div className="section-badge">
                <Sparkles className="badge-icon-sm" />
                <span>{t('sectionServices.badge')}</span>
              </div>
              <h2 className="section-title">
                {t('sectionServices.titleLine1')}
                <br />
                <span className="gradient-text-services">{t('sectionServices.titleLine2')}</span>
              </h2>
              <p className="section-subtitle">
                {t('sectionServices.subtitle')}
              </p>
            </div>
            <div className="section-header-image">
              <ResponsivePicture
                avifSrcSet="/assets/tidyzon_vehicle_02-525.avif 525w, /assets/tidyzon_vehicle_02-800.avif 800w, /assets/tidyzon_vehicle_02-1050.avif 1050w"
                webpSrcSet="/assets/tidyzon_vehicle_02-525.webp 525w, /assets/tidyzon_vehicle_02-800.webp 800w, /assets/tidyzon_vehicle_02-1050.webp 1050w"
                fallbackSrcSet="/assets/tidyzon_vehicle_02-525.jpg 525w, /assets/tidyzon_vehicle_02-800.jpg 800w, /assets/tidyzon_vehicle_02-1050.jpg 1050w"
                fallbackSrc="/assets/tidyzon_vehicle_02-525.jpg"
                alt="Tidyzon Car Cleaning Service"
                className="cleaner-image"
                width={525}
                height={350}
                sizes="(min-width: 1025px) 400px, 300px"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Packages Carousel */}
          <div className="packages-carousel-outer">
            <button
              type="button"
              className="packages-carousel-arrow packages-carousel-arrow-left"
              onClick={() => setCarouselIndex((i) => Math.max(0, i - 1))}
              disabled={carouselIndex === 0}
              aria-label={t('packages.previousPackages')}
            >
              <ChevronLeft className="packages-carousel-arrow-icon" />
            </button>
            <div
              className="packages-carousel-track"
              style={{ transform: `translateX(-${carouselIndex * (100 / 5)}%)` }}
            >
            {carPackages.map((pkg, index) => {
              const isExpanded = expandedPackage === pkg.id
              
              return (
                <div 
                  key={pkg.id}
                  className={`pricing-card ${pkg.popular ? 'popular' : ''} ${isExpanded ? 'expanded' : ''}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Desktop Layout - Original Structure */}
                  <div className="package-desktop-layout">
                    {pkg.addOn && (
                      <div className="package-addon-badge">{t('packages.addOns')}</div>
                    )}
                    {pkg.popular && (
                      <div className="popular-badge">
                        <Sparkles className="popular-icon" />
                        <span>{t('packages.popular')}</span>
                      </div>
                    )}
                    <div className="package-icon-wrapper">
                      <Car className="package-icon" />
                    </div>

                    <div className="package-header">
                      <h3 className="package-name">{pkg.name}</h3>
                      <p className="package-title">{pkg.title}</p>
                      {pkg.description && (
                        <p className="package-description">{pkg.description}</p>
                      )}
                    </div>

                    <div className="package-pricing">
                      {pkg.originalPrice && (
                        <span className="package-original-price">{pkg.originalPrice}</span>
                      )}
                      {pkg.pricingLabel && (
                        <span className="package-pricing-sublabel">{pkg.pricingLabel}</span>
                      )}
                      <span className="package-price">{pkg.price}</span>
                      {!pkg.pricingLabel && <span className="price-label">{t('packages.perWash')}</span>}
                    </div>
                  </div>

                  {/* Mobile Accordion Header - Always visible, clickable */}
                  <div 
                    className="package-accordion-header"
                    onClick={() => {
                      // If clicking the same package that's already expanded, close it
                      // Otherwise, open the clicked package (this automatically closes any other open package)
                      setExpandedPackage(isExpanded ? null : pkg.id)
                    }}
                  >
                    <div className="package-header-left">
                      <div className="package-icon-wrapper-mobile">
                        <Car className="package-icon" />
                      </div>
                      <div className="package-header-content">
                        <p className="package-title-mobile">{pkg.title}</p>
                        <div className="package-pricing-mobile">
                          {pkg.originalPrice && (
                            <span className="package-original-price-mobile">{pkg.originalPrice}</span>
                          )}
                          {pkg.pricingLabel && (
                            <span className="package-pricing-sublabel package-pricing-sublabel--mobile">{pkg.pricingLabel}</span>
                          )}
                          <span className="package-price-mobile">{pkg.price}</span>
                          {!pkg.pricingLabel && <span className="price-label-mobile">{t('packages.perWash')}</span>}
                        </div>
                      </div>
                    </div>
                    <div className="package-header-right">
                      {pkg.addOn && (
                        <div className="package-addon-badge-mobile">{t('packages.addOns')}</div>
                      )}
                      {pkg.popular && (
                        <div className="popular-badge-mobile">
                          <Sparkles className="popular-icon" />
                          <span>{t('packages.popular')}</span>
                        </div>
                      )}
                      <ChevronDown className={`accordion-chevron ${isExpanded ? 'expanded' : ''}`} />
                    </div>
                  </div>

                  {/* Accordion Content - Collapsible on mobile */}
                  <div className={`package-accordion-content ${isExpanded ? 'expanded' : ''}`}>
                    <div className="package-duration">
                      <Clock className="duration-icon" />
                      <span>{pkg.duration}</span>
                    </div>

                    {pkg.features.length > 0 && (
                    <div className="package-features">
                      <p className="package-features-title">{pkg.featuresLabel || t('packages.includedFeatures')}</p>
                      <ul className="features-list">
                        {pkg.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="feature-item">
                            <Check className="check-icon" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {pkg.features.length > 3 && (
                      <>
                      <div className="features-divider"></div>
                      
                      <ul className="features-list features-list-additional">
                        {pkg.features.slice(3).map((feature, idx) => {
                          const featureIndex = idx + 3
                          // Add divider after the 5th feature for all packages.
                          const shouldAddDividerAfterFifthFeature = featureIndex === 4
                          // For Premium: add divider before the final feature.
                          const shouldAddDividerBeforeFinalFeature = pkg.id === 'premium' && featureIndex === pkg.features.length - 1
                          
                          return (
                            <React.Fragment key={idx}>
                              {shouldAddDividerBeforeFinalFeature && <li className="features-divider" role="separator" aria-hidden="true"></li>}
                              <li className="feature-item">
                                <Check className="check-icon" />
                                <span>{feature}</span>
                              </li>
                              {shouldAddDividerAfterFifthFeature && <li className="features-divider" role="separator" aria-hidden="true"></li>}
                            </React.Fragment>
                          );
                        })}
                      </ul>
                      </>
                      )}
                    </div>
                    )}

                    {pkg.excludedFeatures && pkg.excludedFeatures.length > 0 && (
                      <div className="package-excluded">
                        <span className="package-excluded-badge">{t('packages.doNotInclude')}</span>
                        <ul className="package-excluded-list">
                          {pkg.excludedFeatures.map((item, idx) => (
                            <li key={idx} className="package-excluded-item">
                              <X className="package-excluded-icon" aria-hidden />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {pkg.addOnsIncluded && pkg.addOnsIncluded.length > 0 && (
                      <div className="package-addons-included">
                        <p className="package-addons-included-label">{t('packages.addOns')}</p>
                        <ul className="package-addons-included-list">
                          {pkg.addOnsIncluded.map((addon, idx) => (
                            <li key={idx} className="package-addon-included-item">
                              <span className="package-addon-included-name">{addon.name}</span>
                              <span className="package-addon-included-meta">
                                {addon.originalPrice && (
                                  <span className="package-original-price">{addon.originalPrice}</span>
                                )}
                                <span className="package-addon-included-price">{addon.price}</span>
                                <Clock className="duration-icon package-addon-duration-icon" />
                                <span>{addon.duration}</span>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <button 
                      className={`pricing-cta-btn ${hoveredIndex === index ? 'hovered' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsModalOpen(true)
                      }}
                    >
                      <span>{t('packages.continue')}</span>
                      <ArrowRight className="cta-arrow" />
                    </button>
                  </div>

                  <div className="card-glow"></div>
                </div>
              )
            })}
            </div>
            <button
              type="button"
              className="packages-carousel-arrow packages-carousel-arrow-right"
              onClick={() => setCarouselIndex((i) => Math.min(maxCarouselIndex, i + 1))}
              disabled={carouselIndex >= maxCarouselIndex}
              aria-label={t('packages.nextPackages')}
            >
              <ChevronRight className="packages-carousel-arrow-icon" />
            </button>
          </div>

          {/* Bottom CTA */}
          <div className="services-cta">
            <div className="cta-card">
              <div className="cta-content">
                <h3 className="cta-title">{t('sectionServices.customTitle')}</h3>
                <p className="cta-text">{t('sectionServices.customText')}</p>
              </div>
              <Link to="/contact" className="cta-button">
                {t('sectionServices.customQuote')}
                <ArrowRight className="cta-arrow" />
              </Link>
            </div>
          </div>

          {/* New Dual CTA Section */}
          <div className="dual-cta-section">
            <div className="dual-cta-container">
              {/* Become a Service Provider */}
              <div className="dual-cta-card">
                <div className="dual-cta-content">
                  <h3 className="dual-cta-title">{t('sectionServices.providerTitle')}</h3>
                  <p className="dual-cta-subtitle">{t('sectionServices.providerSubtitle')}</p>
                  <Link to="/provider" className="dual-cta-button">
                    {t('sectionServices.signUp')}
                  </Link>
                </div>
                <div className="dual-cta-image">
                  <ResponsivePicture
                    avifSrcSet="/assets/tidyzon_cleaner_01-606.avif 606w, /assets/tidyzon_cleaner_01-800.avif 800w, /assets/tidyzon_cleaner_01-900.avif 900w, /assets/tidyzon_cleaner_01-1212.avif 1212w"
                    webpSrcSet="/assets/tidyzon_cleaner_01-606.webp 606w, /assets/tidyzon_cleaner_01-800.webp 800w, /assets/tidyzon_cleaner_01-900.webp 900w, /assets/tidyzon_cleaner_01-1212.webp 1212w"
                    fallbackSrcSet="/assets/tidyzon_cleaner_01-606.jpg 606w, /assets/tidyzon_cleaner_01-800.jpg 800w, /assets/tidyzon_cleaner_01-900.jpg 900w, /assets/tidyzon_cleaner_01-1212.jpg 1212w"
                    fallbackSrc="/assets/tidyzon_cleaner_01-606.jpg"
                    alt="Service Providers Team"
                    className="dual-cta-img"
                    width={606}
                    height={404}
                    sizes="(max-width: 768px) min(100vw - 3rem, 1000px), 280px"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Book Services */}
              <div className="dual-cta-card">
                <div className="dual-cta-image">
                  <ResponsivePicture
                    avifSrcSet="/assets/newimage-606.avif 606w, /assets/newimage-800.avif 800w, /assets/newimage-900.avif 900w, /assets/newimage-1212.avif 1212w"
                    webpSrcSet="/assets/newimage-606.webp 606w, /assets/newimage-800.webp 800w, /assets/newimage-900.webp 900w, /assets/newimage-1212.webp 1212w"
                    fallbackSrcSet="/assets/newimage-606.jpg 606w, /assets/newimage-800.jpg 800w, /assets/newimage-900.jpg 900w, /assets/newimage-1212.jpg 1212w"
                    fallbackSrc="/assets/newimage-606.jpg"
                    alt="Customer Booking Service"
                    className="dual-cta-img"
                    width={606}
                    height={404}
                    sizes="(max-width: 768px) min(100vw - 3rem, 1000px), 280px"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="dual-cta-content">
                  <h3 className="dual-cta-title">{t('sectionServices.userTitle')}</h3>
                  <p className="dual-cta-subtitle">{t('sectionServices.userSubtitle')}</p>
                  <Link to="/get-started" className="dual-cta-button">
                    {t('sectionServices.signUp')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services