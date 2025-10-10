import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Car, Sparkles, ArrowRight, Check, Clock, X, Plus } from 'lucide-react'
import DownloadModal from '../DownloadModal'
import './Services.css'

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAddonsModalOpen, setIsAddonsModalOpen] = useState(false)
  const [selectedAddonsPackage, setSelectedAddonsPackage] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [scrollY, setScrollY] = useState(0)
  const servicesRef = useRef(null)

  const carPackages = [
    {
      id: 'speed',
      name: 'Speed Package',
      title: 'SPEED WASH',
      price: '$49.99',
      duration: '30mins',
      features: [
        'Exterior hand wash',
        'Clean all windows',
        'Towel dry'
      ],
      addons: [
        'Vacuum - Regular'
      ]
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
        'Towel dry'
      ],
      addons: [
        'Tire shine, rimps and air',
        'Wipe door jans',
        'Vacuum',
        'Wash Mat',
        'Dashboard Shine',
        'Air for dryer',
        'Air for Vacuum',
        'Armoral and door panel',
        'Dash Clean',
        'Clean cup holders',
        'Shampoo and door panel'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium Package',
      title: 'PREMIUM WASH',
      price: '$199.99',
      duration: '4hrs 30mins',
      features: [
        'Exterior hand wash',
        'Clean all windows',
        'Towel dry'
      ],
      addons: [
        'Tire shine, rimps and air',
        'Wipe door jans',
        'Vacuum',
        'Wash Mat',
        'Dashboard Shine',
        'Air for dryer',
        'Air for Vacuum',
        'Armoral and door panel',
        'Dash Clean',
        'Clean cup holders',
        'Shampoo and door panel',
        'Machine wax'
      ]
    }
  ]

  const handleShowAddons = (packageData) => {
    setSelectedAddonsPackage(packageData)
    setIsAddonsModalOpen(true)
  }

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
                <span>Our Services</span>
              </div>
              <h2 className="section-title">
                Car Cleaning Packages
                <br />
                <span className="gradient-text-services">Choose Your Perfect Wash</span>
              </h2>
              <p className="section-subtitle">
                Professional mobile car cleaning services with packages designed to fit your needs and budget.
              </p>
            </div>
            <div className="section-header-image">
              <img 
                src="/assets/tidyzon_vehicle_02.png" 
                alt="Tidyzon Car Cleaning Service" 
                className="cleaner-image"
              />
            </div>
          </div>

          {/* Packages Grid */}
          <div className="packages-grid">
            {carPackages.map((pkg, index) => (
              <div 
                key={pkg.id}
                className={`pricing-card ${pkg.popular ? 'popular' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {pkg.popular && (
                  <div className="popular-badge">
                    <Sparkles className="popular-icon" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div className="package-icon-wrapper">
                  <Car className="package-icon" />
                </div>

                <div className="package-header">
                  <h3 className="package-name">{pkg.name}</h3>
                  <p className="package-title">{pkg.title}</p>
                </div>

                <div className="package-pricing">
                  <span className="package-price">{pkg.price}</span>
                  <span className="price-label">per wash</span>
                </div>

                <div className="package-duration">
                  <Clock className="duration-icon" />
                  <span>{pkg.duration}</span>
                </div>

                <div className="package-features">
                  <h4 className="features-title">Included Features:</h4>
                  <ul className="features-list">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <Check className="check-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="addons-section">
                  <div className="addons-header">
                    <span className="addons-label">Add ons</span>
                  </div>
                  <button 
                    className="see-addons-btn"
                    onClick={() => handleShowAddons(pkg)}
                  >
                    <Plus className="plus-icon" />
                    <span>See Add ons</span>
                  </button>
                </div>

                <button 
                  className={`pricing-cta-btn ${hoveredIndex === index ? 'hovered' : ''}`}
                  onClick={() => setIsModalOpen(true)}
                >
                  <span>Continue</span>
                  <ArrowRight className="cta-arrow" />
                </button>

                <div className="card-glow"></div>
              </div>
            ))}
          </div>

          {/* Addons Modal */}
          {isAddonsModalOpen && selectedAddonsPackage && (
            <div className="addons-modal-backdrop" onClick={() => setIsAddonsModalOpen(false)}>
              <div className="addons-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={() => setIsAddonsModalOpen(false)}>
                  <X size={24} />
                </button>
                
                <div className="modal-header">
                  <h2 className="modal-title">{selectedAddonsPackage.name}</h2>
                  <p className="modal-subtitle">All included add-ons</p>
                </div>

                <div className="addons-list-modal">
                  <h3 className="addons-modal-title">Add Ons Included:</h3>
                  <ul className="modal-addons-list">
                    {selectedAddonsPackage.addons.map((addon, idx) => (
                      <li key={idx} className="modal-addon-item">
                        <Check className="check-icon" />
                        <span>{addon}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-actions">
                  <button className="modal-cta-btn" onClick={() => setIsModalOpen(true)}>
                    Book This Package
                    <ArrowRight className="btn-icon" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="services-cta">
            <div className="cta-card">
              <div className="cta-content">
                <h3 className="cta-title">Need a Custom Service Package?</h3>
                <p className="cta-text">Contact us for personalized cleaning solutions tailored to your specific needs.</p>
              </div>
              <Link to="/contact" className="cta-button">
                Get Custom Quote
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
                  <h3 className="dual-cta-title">Become a service provider</h3>
                  <p className="dual-cta-subtitle">Sign up as a service provider</p>
                  <button className="dual-cta-button" onClick={() => setIsModalOpen(true)}>
                    Sign up
                  </button>
                </div>
                <div className="dual-cta-image">
                  <img 
                    src="/assets/tidyzon_cleaner_01.png" 
                    alt="Service Providers Team" 
                    className="dual-cta-img"
                  />
                </div>
              </div>

              {/* Book Services */}
              <div className="dual-cta-card">
                <div className="dual-cta-image">
                  <img 
                    src="/assets/tidyzon_welcome_05.png" 
                    alt="Customer Booking Service" 
                    className="dual-cta-img"
                  />
                </div>
                <div className="dual-cta-content">
                  <h3 className="dual-cta-title">Fast, reliable services at your doorstep, at your fingertips</h3>
                  <p className="dual-cta-subtitle">Sign up and book services</p>
                  <button className="dual-cta-button" onClick={() => setIsModalOpen(true)}>
                    Sign up
                  </button>
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