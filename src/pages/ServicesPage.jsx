import React, { useState } from 'react'
import { Car, Sparkles, Check, ArrowRight, Shield, Award, Clock, ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import DownloadModal from '../components/DownloadModal'
import ResponsivePicture from '../components/ResponsivePicture'
import './ServicesPage.css'

const ServicesPage = () => {
  const { t } = useTranslation('services')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [expandedPackage, setExpandedPackage] = useState('deluxe') // Default to deluxe (most popular)
  const [carouselIndex, setCarouselIndex] = useState(0)

  const carPackages = [
    {
      id: 'speed-interior',
      name: t('packages.items.speedInterior.name'),
      title: t('packages.items.speedInterior.title'),
      price: '$29.99',
      duration: t('packages.items.speedInterior.duration'),
      pricingLabel: t('packages.items.speedInterior.pricingLabel'),
      features: t('packages.items.speedInterior.features', { returnObjects: true }),
      excludedFeatures: t('packages.items.speedInterior.excludedFeatures', { returnObjects: true })
    },
    {
      id: 'speed',
      name: t('packages.items.speed.name'),
      title: t('packages.items.speed.title'),
      price: '$49.99',
      duration: t('packages.items.speed.duration'),
      features: t('packages.items.speed.features', { returnObjects: true })
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
      features: t('packages.items.premium.features', { returnObjects: true })
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
        { name: t('packages.items.biofluids.addOnsIncluded.name'), price: '$19.99', originalPrice: '$50.00', duration: t('packages.items.biofluids.addOnsIncluded.duration') }
      ]
    }
  ]

  const maxCarouselIndex = Math.max(0, carPackages.length - 3)

  const whyChoose = [
    {
      icon: Award,
      ...t('whyChoose.items.0', { returnObjects: true })
    },
    {
      icon: Shield,
      ...t('whyChoose.items.1', { returnObjects: true })
    },
    {
      icon: Clock,
      ...t('whyChoose.items.2', { returnObjects: true })
    }
  ]

  return (
    <>
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div className="services-page">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="services-hero-bg">
            <div className="hero-orb hero-orb-1"></div>
            <div className="hero-orb hero-orb-2"></div>
            <div className="hero-orb hero-orb-3"></div>
          </div>
          <div className="container">
            <div className="services-hero-content">
              <h1 className="services-hero-title animate-fade-up">
                {t('hero.title')}
              </h1>
              <p className="services-hero-subtitle animate-fade-up delay-1">
                {t('hero.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Main CTA Section */}
        <section className="main-cta-section">
          <div className="container">
            <div className="main-cta-content">
              <h2 className="main-cta-title">{t('mainCta.title')}</h2>
              <p className="main-cta-subtitle">{t('mainCta.subtitle')}</p>
              <button className="main-cta-btn" onClick={() => setIsModalOpen(true)}>
                {t('mainCta.button')}
                <ArrowRight className="btn-icon" />
              </button>
            </div>
          </div>
        </section>


        {/* Car Cleaning Service Section */}
        <section className="car-service-section">
          <div className="container">
            <div className="car-service-header">
              <div className="car-icon-wrapper">
                <Car className="car-icon" />
              </div>
              <h2 className="car-service-title">{t('carCleaning.title')}</h2>
              <p className="car-service-description">
                {t('carCleaning.description')}
              </p>
            </div>

            {/* Package Pricing Grid */}
            <div className="pricing-header">
              <h3 className="pricing-section-title">{t('packages.title')}</h3>
              <p className="pricing-subtitle">{t('packages.subtitle')}</p>
            </div>

            <div className="pricing-carousel-outer">
              <button
                type="button"
                className="pricing-carousel-arrow pricing-carousel-arrow-left"
                onClick={() => setCarouselIndex((i) => Math.max(0, i - 1))}
                disabled={carouselIndex === 0}
                aria-label={t('packages.previousPackages')}
              >
                <ChevronLeft className="pricing-carousel-arrow-icon" />
              </button>
              <div
                className="pricing-carousel-track"
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
                      onClick={() => setExpandedPackage(isExpanded ? null : pkg.id)}
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
                        <p className="features-title">{pkg.featuresLabel || t('packages.includedFeatures')}</p>
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
                            // Add divider after "Wipe door jambs" for all packages (separates section 2 from section 3)
                            const shouldAddDividerAfterWipeDoorJambs = feature === 'Wipe door jambs';
                            
                            // For Premium: Add divider before "machine wax" (separates section 3 from section 4)
                            const shouldAddDividerBeforeMachineWax = pkg.id === 'premium' && 
                                                                   feature === 'machine wax';
                            
                            return (
                              <React.Fragment key={idx}>
                                {shouldAddDividerBeforeMachineWax && <li className="features-divider" role="separator" aria-hidden="true"></li>}
                                <li className="feature-item">
                                  <Check className="check-icon" />
                                  <span>{feature}</span>
                                </li>
                              {shouldAddDividerAfterWipeDoorJambs && <li className="features-divider" role="separator" aria-hidden="true"></li>}
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
                className="pricing-carousel-arrow pricing-carousel-arrow-right"
                onClick={() => setCarouselIndex((i) => Math.min(maxCarouselIndex, i + 1))}
                disabled={carouselIndex >= maxCarouselIndex}
                aria-label={t('packages.nextPackages')}
              >
                <ChevronRight className="pricing-carousel-arrow-icon" />
              </button>
            </div>
          </div>
        </section>

        {/* Trash Bin Package Section */}
        <section className="trash-bin-section">
          <div className="container">
            <div className="trash-bin-card">
              <div className="trash-bin-image">
                <ResponsivePicture
                  avifSrcSet="/assets/trashbin-350.avif 350w, /assets/trashbin-700.avif 700w, /assets/trashbin-1050.avif 1050w"
                  webpSrcSet="/assets/trashbin-350.webp 350w, /assets/trashbin-700.webp 700w, /assets/trashbin-1050.webp 1050w"
                  fallbackSrcSet="/assets/trashbin-350.jpg 350w, /assets/trashbin-700.jpg 700w, /assets/trashbin-1050.jpg 1050w"
                  fallbackSrc="/assets/trashbin-350.jpg"
                  alt={t('trashBin.imageAlt')}
                  className="service-image"
                  width={1536}
                  height={1024}
                  sizes="(max-width: 768px) min(100vw - 2rem, 400px), 350px"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="trash-bin-content">
                <h3 className="service-title">{t('trashBin.title')}</h3>
                <p className="service-description">{t('trashBin.description')}</p>
                <div className="service-price">{t('trashBin.price')}</div>
                <button className="service-button" onClick={() => setIsModalOpen(true)}>
                  {t('trashBin.bookNow')}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="why-choose-section">
          <div className="container">
            <h2 className="why-choose-title">{t('whyChoose.title')}</h2>
            <div className="why-choose-grid">
              {whyChoose.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div 
                    key={index} 
                    className="why-card animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="why-icon-container">
                      <IconComponent className="why-icon" />
                    </div>
                    <h3 className="why-card-title">{item.title}</h3>
                    <p className="why-card-description">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ServicesPage