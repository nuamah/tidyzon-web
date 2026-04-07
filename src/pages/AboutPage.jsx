import React, { useState } from 'react'
import { Target, Eye, Award, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import DownloadModal from '../components/DownloadModal'
import ResponsivePicture from '../components/ResponsivePicture'
import './AboutPage.css'

const AboutPage = () => {
  const { t } = useTranslation('about')
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-bg"></div>
          <div className="container">
            <div className="about-hero-content">
              <h1 className="about-hero-title">
                {t('hero.titlePrefix')} <span className="gradient-text">{t('hero.titleBrand')}</span>
              </h1>
              <p className="about-hero-subtitle">
                {t('hero.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Our Journey Section */}
        <section className="story-section">
          <div className="container">
            <div className="story-grid">
              <div className="story-content">
                <h2 className="story-title">{t('journey.title')}</h2>
                <p className="story-text">
                  {t('journey.p1')}
                </p>
                <p className="story-text">
                  {t('journey.p2')}
                </p>
              </div>
              <div className="story-image">
                <ResponsivePicture
                  avifSrcSet="/assets/discover-512.avif 512w, /assets/discover-768.avif 768w, /assets/discover-1024.avif 1024w"
                  webpSrcSet="/assets/discover-512.webp 512w, /assets/discover-768.webp 768w, /assets/discover-1024.webp 1024w"
                  fallbackSrcSet="/assets/discover-512.jpg 512w, /assets/discover-768.jpg 768w, /assets/discover-1024.jpg 1024w"
                  fallbackSrc="/assets/discover-512.jpg"
                  alt={t('journey.imageAlt')}
                  width={1024}
                  height={1536}
                  sizes="(max-width: 1023px) min(100vw - 2rem, 736px), min(45vw, 520px)"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="container">
            <div className="mission-content">
              <div className="mission-icon-wrapper">
                <Target className="mission-icon" />
              </div>
              <h2 className="mission-title">{t('mission.title')}</h2>
              <h3 className="mission-subtitle">{t('mission.subtitle')}</h3>
              <div className="mission-text-content">
                <p className="mission-text">
                  {t('mission.p1')}
                </p>
                <p className="mission-text">
                  {t('mission.p2')}
                </p>
                <p className="mission-text">
                  {t('mission.p3')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="vision-section">
          <div className="container">
            <div className="vision-content">
              <div className="vision-icon-wrapper">
                <Eye className="vision-icon" />
              </div>
              <h2 className="vision-title">{t('vision.title')}</h2>
              <div className="vision-text-content">
                <p className="vision-text">
                  {t('vision.p1')}
                </p>
                <p className="vision-text">
                  {t('vision.p2')}
                </p>
                <p className="vision-text">
                  {t('vision.p3')}
                </p>
                <p className="vision-text">
                  {t('vision.p4')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Commitment Section */}
        <section className="quality-section">
          <div className="container">
            <div className="quality-content">
              <div className="quality-icon-wrapper">
                <Award className="quality-icon" />
              </div>
              <h2 className="quality-title">{t('quality.title')}</h2>
              <div className="quality-text-content">
                <p className="quality-text">
                  {t('quality.p1')}
                </p>
                <p className="quality-text">
                  {t('quality.p2')}
                </p>
                <p className="quality-text">
                  {t('quality.p3')}
                </p>
                <p className="quality-text">
                  {t('quality.p4')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta-section">
          <div className="container">
            <div className="about-cta-card">
              <h2 className="cta-title">{t('cta.title')}</h2>
              <p className="cta-subtitle">
                {t('cta.subtitle')}
              </p>
              <button className="btn-cta-white" onClick={() => setIsModalOpen(true)}>
                {t('cta.button')}
                <ArrowRight className="btn-icon" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutPage
