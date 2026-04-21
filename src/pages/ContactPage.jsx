import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import DownloadModal from '../components/DownloadModal'
import ResponsivePicture from '../components/ResponsivePicture'
import { trackRequestSchedule } from '../lib/analytics'
import './ContactPage.css'

const API_BASE = import.meta.env.VITE_API_URL || ''

const ContactPage = () => {
  const { t } = useTranslation('contact')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'loading' | 'success' | 'error' | null
  const [submitMessage, setSubmitMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    if (submitStatus) setSubmitStatus(null)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus('loading')
    setSubmitMessage('')
    trackRequestSchedule({
      from: 'Contact',
      fullName: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
    })
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setSubmitStatus('error')
        setSubmitMessage(data.message || data.error || t('form.status.genericError'))
        return
      }
      setSubmitStatus('success')
      setSubmitMessage(data.message || t('form.status.success'))
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch {
      setSubmitStatus('error')
      setSubmitMessage(t('form.status.serverUnreachable'))
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: t('info.email'),
      value: 'support@tidyzon.com',
      link: 'mailto:support@tidyzon.com'
    },
    {
      icon: Phone,
      title: t('info.call'),
      value: '(815) 608-1632',
      link: 'tel:+18156081632'
    },
    {
      icon: MapPin,
      title: t('info.visit'),
      value: t('info.address'),
      link: '#'
    },
    {
      icon: Clock,
      title: t('info.hours'),
      value: t('info.hoursValue'),
      link: '#'
    }
  ]

  const faqs = t('faq.items', { returnObjects: true })

  return (
    <>
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="contact-hero-bg"></div>
          <div className="container">
            <div className="contact-hero-content">
              <h1 className="contact-hero-title">
                {t('hero.titlePrefix')} <span className="gradient-text">{t('hero.titleHighlight')}</span>
              </h1>
              <p className="contact-hero-subtitle">
                {t('hero.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="contact-info-section">
          <div className="container">
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="contact-info-card"
                  >
                    <div className="contact-info-icon">
                      <IconComponent />
                    </div>
                    <h3 className="contact-info-title">{info.title}</h3>
                    <p className="contact-info-value">{info.value}</p>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form-section">
          <div className="container">
            <div className="form-grid">
              <div className="form-column">
                <div className="form-header">
                  <MessageCircle className="form-header-icon" />
                  <h2 className="form-title">{t('form.title')}</h2>
                  <p className="form-description">
                    {t('form.description')}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">{t('form.labels.name')}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        required
                        placeholder={t('form.placeholders.name')}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">{t('form.labels.email')}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                        placeholder={t('form.placeholders.email')}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">{t('form.labels.phone')}</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder={t('form.placeholders.phone')}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">{t('form.labels.subject')}</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                        required
                        placeholder={t('form.placeholders.subject')}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">{t('form.labels.message')}</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      required
                      rows="6"
                      placeholder={t('form.placeholders.message')}
                    ></textarea>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="form-feedback form-feedback--success" role="status">
                      {submitMessage}
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="form-feedback form-feedback--error" role="alert">
                      {submitMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="form-submit-btn"
                    disabled={submitStatus === 'loading'}
                  >
                    <Send className="submit-icon" />
                    <span>{submitStatus === 'loading' ? t('form.submit.sending') : t('form.submit.default')}</span>
                  </button>
                </form>

                <div className="contact-image-container">
                  <ResponsivePicture
                    avifSrcSet="/assets/contactImage-480.avif 480w, /assets/contactImage-960.avif 960w, /assets/contactImage-1280.avif 1280w, /assets/contactImage-1536.avif 1536w"
                    webpSrcSet="/assets/contactImage-480.webp 480w, /assets/contactImage-960.webp 960w, /assets/contactImage-1280.webp 1280w, /assets/contactImage-1536.webp 1536w"
                    fallbackSrcSet="/assets/contactImage-480.jpg 480w, /assets/contactImage-960.jpg 960w, /assets/contactImage-1280.jpg 1280w, /assets/contactImage-1536.jpg 1536w"
                    fallbackSrc="/assets/contactImage-480.jpg"
                    alt={t('form.imageAlt')}
                    className="contact-support-image"
                    width={1536}
                    height={1024}
                    sizes="(max-width: 1023px) min(100vw - 2rem, 720px), min(58vw, 720px)"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="faq-column">
                <h3 className="faq-title">{t('faq.title')}</h3>
                <div className="faq-list">
                  {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                      <h4 className="faq-question">{faq.question}</h4>
                      <p className="faq-answer">{faq.answer}</p>
                    </div>
                  ))}
                </div>

                <div className="download-app-cta">
                  <h4 className="download-cta-title">{t('downloadCta.title')}</h4>
                  <p className="download-cta-text">
                    {t('downloadCta.text')}
                  </p>
                  <button type="button" className="download-cta-btn" onClick={() => setIsModalOpen(true)}>
                    {t('downloadCta.button')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <div className="map-placeholder">
            <MapPin className="map-icon" />
            <p className="map-text">{t('map.textPrefix')} {t('map.address')}</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default ContactPage
