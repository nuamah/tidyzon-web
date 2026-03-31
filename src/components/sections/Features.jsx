import React, { useState, useEffect, useRef } from 'react'
import { Zap, Shield, Clock, Users, Award, HeartHandshake } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import './Features.css'

const Features = () => {
  const { t } = useTranslation('home')
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

  const iconMap = [Zap, Shield, Clock, Users, Award, HeartHandshake]
  const localizedItems = t('features.items', { returnObjects: true })
  const features = (Array.isArray(localizedItems) ? localizedItems : []).map((item, idx) => ({
    icon: iconMap[idx] || Zap,
    title: item.title,
    description: item.description,
  }))

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
            {t('features.titlePrefix')} <span className="gradient-text-feat">{t('features.titleBrand')}</span>
          </h2>
          <p className="features-subtitle">
            {t('features.subtitle')}
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
              width={1024}
              height={1536}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="content-section">
            <h2 className="section-title">
              {t('features.trackTitlePrefix')} <span className="gradient-text-feat">{t('features.trackTitleHighlight')}</span>{t('features.trackTitleSuffix')}
            </h2>
            <p className="section-description">
              {t('features.trackDescription')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features