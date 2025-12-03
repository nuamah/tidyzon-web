import React, { useState, useEffect, useRef } from 'react'
import { Zap, Shield, Clock, Users, Award, HeartHandshake } from 'lucide-react'
import './Features.css'

const Features = () => {
  const [scrollY, setScrollY] = useState(0)
  const featuresRef = useRef(null)

  // Parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    {
      icon: Zap,
      title: "Instant Booking",
      description: "Book services in seconds with our intuitive mobile app. No waiting, no hassle."
    },
    {
      icon: Shield,
      title: "Verified Professionals",
      description: "All service providers are background-checked and highly rated by our community."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Choose times that work for you. Same-day service available in most areas."
    },
    {
      icon: Users,
      title: "Trusted by 10K+",
      description: "Join thousands of satisfied customers who trust Tidyzon for their cleaning needs."
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "100% satisfaction guarantee or we'll make it right. Your happiness is our priority."
    },
    {
      icon: HeartHandshake,
      title: "Eco-Friendly",
      description: "We use environmentally safe products that are tough on dirt, gentle on nature."
    }
  ]

  return (
    <section className="features-section" ref={featuresRef}>
      <div className="features-bg-pattern"></div>
      
      {/* Parallax background elements */}
      <div 
        className="parallax-bg-elements" 
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
      
      <div className="container">
        <div className="features-header">
          <h2 className="features-title">
            Why Choose <span className="gradient-text-feat">Tidyzon</span>
          </h2>
          <p className="features-subtitle">
            Experience the difference with our premium cleaning services designed for modern living
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="feature-card">
                {/* Desktop Layout */}
                <div className="feature-desktop-layout">
                  <div className="feature-icon-container">
                    <div className="feature-icon-bg"></div>
                    <IconComponent className="feature-icon" />
                  </div>
                  <h3 className="feature-card-title">{feature.title}</h3>
                  <p className="feature-card-description">{feature.description}</p>
                </div>

                {/* Mobile Layout */}
                <div className="feature-mobile-layout">
                  <div className="feature-icon-container-mobile">
                    <div className="feature-icon-bg-mobile"></div>
                    <IconComponent className="feature-icon-mobile" />
                  </div>
                  <div className="feature-mobile-content">
                    <h3 className="feature-card-title-mobile">{feature.title}</h3>
                    <p className="feature-card-description-mobile">{feature.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Image Text Section */}
        <div className="image-text-layout image-left">
          <div className="image-section">
            <img 
              src="/assets/t1.jpg" 
              alt="Tidyzon track record" 
              className="section-image"
              loading="lazy"
            />
          </div>
          <div className="content-section">
            <h2 className="section-title">
              Our <span className="gradient-text-feat">Track Record</span> Speaks
            </h2>
            <p className="section-description">
              Anywhere! Anytime! Everywhere we bring the VIP treatment your car deserves to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features