import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import './AnimatedStats.css'

const AnimatedStats = () => {
  const { t } = useTranslation('home')
  return (
    <section className="animated-stats-section">
      <div className="container">
        <div className="image-text-layout image-right">
          <div className="content-section">
            <h2 className="section-title">
              {t('animatedStats.title')}
              <span className="gradient-text">{t('animatedStats.titleHighlight')}</span>
            </h2>
            <p className="section-description">
              {t('animatedStats.description')}
            </p>
            <div className="section-buttons">
              <Link to="/get-started" className="section-btn btn-user">
                <span>{t('animatedStats.userCta')}</span>
                <ArrowRight className="btn-arrow" />
              </Link>
              <Link to="/provider" className="section-btn btn-provider">
                <span>{t('animatedStats.providerCta')}</span>
                <ArrowRight className="btn-arrow" />
              </Link>
            </div>
          </div>
          <div className="image-section">
            <img 
              src="/assets/ttd.jpg" 
              alt="Join Tidyzon as a provider" 
              className="section-image"
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnimatedStats
