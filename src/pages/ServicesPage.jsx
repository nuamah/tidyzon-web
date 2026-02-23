import React, { useState } from 'react'
import { Car, Sparkles, Check, ArrowRight, Shield, Award, Clock, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import DownloadModal from '../components/DownloadModal'
import './ServicesPage.css'

const ServicesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [expandedPackage, setExpandedPackage] = useState('deluxe') // Default to deluxe (most popular)
  const [carouselIndex, setCarouselIndex] = useState(0)

  const carPackages = [
    {
      id: 'speed-interior',
      name: 'Speed Package',
      title: 'SPEED WASH - INTERIOR ONLY',
      price: '$29.99',
      duration: '15mins',
      features: ['Vacuum - Regular', 'Wipe door jambs'],
    },
    {
      id: 'speed',
      name: 'Speed Wash',
      title: 'SPEED WASH - FULL PACKAGE',
      price: '$49.99',
      duration: '30mins',
      features: [
        'Exterior hand wash',
        'Clean all windows',
        'Towel dry',
        'Vacuum - Regular',
        'Wipe door jambs'
      ],
    },
    {
      id: 'deluxe',
      name: 'Deluxe Package',
      title: 'DELUXE WASH',
      price: '$155.00',
      duration: '2hrs 30mins',
      features: [
        'Exterior hand wash',
        'Clean all windows',
        'Towel dry',
        'Vacuum - Regular',
        'Wipe door jambs',
        'Air for dryer',
        'Air for Vacuum',
        'Tire shine, rims and air',
        'Wash Mat',
        'Armoral and door panel',
        'Dash Clean and Shine',
        'Clean cup holders',
        'Shampoo and door panel',
        'Shampoo seats & Carpets'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium Package',
      title: 'PREMIUM WASH',
      price: '$249.99',
      duration: '4hrs 30mins',
      features: [
        'Exterior hand wash',
        'Clean all windows',
        'Towel dry',
        'Vacuum - Regular',
        'Wipe door jambs',
        'Air for dryer',
        'Air for Vacuum',
        'Tire shine, rims and air',
        'Wash Mat',
        'Armoral and door panel',
        'Dash Clean and Shine',
        'Clean cup holders',
        'Shampoo and door panel',
        'Shampoo seats & Carpets',
        'machine wax'
      ],
    }
  ]

  const maxCarouselIndex = Math.max(0, carPackages.length - 3)

  const whyChoose = [
    {
      icon: Award,
      title: "Advanced Cleaning Equipment",
      description: "Our providers use state-of-the-art equipment to ensure efficient and effective cleaning for every service offered."
    },
    {
      icon: Shield,
      title: "Thorough Background Checks",
      description: "All providers undergo comprehensive background checks to guarantee safety and reliability for our customers."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book services at your convenience, with options for immediate or future scheduling to fit your busy lifestyle."
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
                Services
              </h1>
              <p className="services-hero-subtitle animate-fade-up delay-1">
                Experience top-tier cleaning solutions tailored to your needs, delivered right to your doorstep with unmatched convenience and quality.
              </p>
            </div>
          </div>
        </section>

        {/* Main CTA Section */}
        <section className="main-cta-section">
          <div className="container">
            <div className="main-cta-content">
              <h2 className="main-cta-title">Your Quality Service Awaits</h2>
              <p className="main-cta-subtitle">Join countless satisfied customers and enjoy a cleaner, healthier quality service.</p>
              <button className="main-cta-btn" onClick={() => setIsModalOpen(true)}>
                Book Your Service Today
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
              <h2 className="car-service-title">Car Cleaning</h2>
              <p className="car-service-description">
                Our car cleaning services offer a thorough interior vacuum, dashboard polish, window cleaning, and exterior wash, ensuring your vehicle looks pristine inside and out.
              </p>
            </div>

            {/* Package Pricing Grid */}
            <div className="pricing-header">
              <h3 className="pricing-section-title">Choose Your Package</h3>
              <p className="pricing-subtitle">Bundle wash (All add ons inclusive)</p>
            </div>

            <div className="pricing-carousel-outer">
              <button
                type="button"
                className="pricing-carousel-arrow pricing-carousel-arrow-left"
                onClick={() => setCarouselIndex((i) => Math.max(0, i - 1))}
                disabled={carouselIndex === 0}
                aria-label="Previous packages"
              >
                <ChevronLeft className="pricing-carousel-arrow-icon" />
              </button>
              <div
                className="pricing-carousel-track"
                style={{ transform: `translateX(-${carouselIndex * 30}%)` }}
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
                      {pkg.popular && (
                        <div className="popular-badge">
                          <Sparkles className="popular-icon" />
                          <span>Most Popular</span>
                        </div>
                      )}
                      <div className="package-header">
                        <h3 className="package-name">{pkg.name}</h3>
                        <p className="package-title">{pkg.title}</p>
                      </div>

                      <div className="package-pricing">
                        <span className="package-price">{pkg.price}</span>
                        <span className="price-label">per wash</span>
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
                            <span className="package-price-mobile">{pkg.price}</span>
                            <span className="price-label-mobile">per wash</span>
                          </div>
                        </div>
                      </div>
                      <div className="package-header-right">
                        {pkg.popular && (
                          <div className="popular-badge-mobile">
                            <Sparkles className="popular-icon" />
                            <span>Most popular</span>
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

                      <div className="package-features">
                        <h4 className="features-title">Included Features:</h4>
                        <ul className="features-list">
                          {pkg.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="feature-item">
                              <Check className="check-icon" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
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
                                {shouldAddDividerBeforeMachineWax && <div className="features-divider"></div>}
                                <li className="feature-item">
                                  <Check className="check-icon" />
                                  <span>{feature}</span>
                                </li>
                                {shouldAddDividerAfterWipeDoorJambs && <div className="features-divider"></div>}
                              </React.Fragment>
                            );
                          })}
                        </ul>
                      </div>

                      <button 
                        className={`pricing-cta-btn ${hoveredIndex === index ? 'hovered' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          setIsModalOpen(true)
                        }}
                      >
                        <span>Continue</span>
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
                aria-label="Next packages"
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
                <img 
                  src="/assets/trashbin.jpg" 
                  alt="Trash Bin Cleaning Service" 
                  className="service-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="trash-bin-content">
                <h3 className="service-title">Trash Bin Cleaning</h3>
                <p className="service-description">Professional sanitization service that eliminates odors, bacteria, and germs with eco-friendly solutions.</p>
                <div className="service-price">$10.00 per bin</div>
                <button className="service-button" onClick={() => setIsModalOpen(true)}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="why-choose-section">
          <div className="container">
            <h2 className="why-choose-title">Why Choose Tidyzon?</h2>
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