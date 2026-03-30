import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react'
import DownloadModal from '../components/DownloadModal'
import ResponsivePicture from '../components/ResponsivePicture'
import { trackRequestSchedule } from '../lib/analytics'
import './ContactPage.css'

const API_BASE = import.meta.env.VITE_API_URL || ''

const ContactPage = () => {
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
        setSubmitMessage(data.message || data.error || 'Something went wrong. Please try again.')
        return
      }
      setSubmitStatus('success')
      setSubmitMessage(data.message || 'Thank you! We will get back to you soon.')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch {
      setSubmitStatus('error')
      setSubmitMessage('Could not reach the server. If you are developing locally, run the API with npm run server.')
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'support@tidyzon.com',
      link: 'mailto:support@tidyzon.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '(815) 608-1632',
      link: 'tel:+18156081632'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: '708 Saybrook Ct. Romeoville IL 60446',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Sun: 7AM - 7PM',
      link: '#'
    }
  ]

  const faqs = [
    {
      question: 'How quickly can I book a service?',
      answer: 'You can book a service instantly through our app. Most services are available same-day or within 24 hours.'
    },
    {
      question: 'Are your service providers insured?',
      answer: 'Yes, all our service providers are fully insured and background-checked for your peace of mind.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We currently serve major metropolitan areas. Check the app for availability in your specific location.'
    },
    {
      question: 'Can I cancel or reschedule a booking?',
      answer: 'Yes, you can cancel or reschedule up to 24 hours before your appointment through the app.'
    }
  ]

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
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="contact-hero-subtitle">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
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
                  <h2 className="form-title">Send us a Message</h2>
                  <p className="form-description">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="(815) 608-1632"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">Subject *</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                        required
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      required
                      rows="6"
                      placeholder="Tell us more about your inquiry..."
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
                    <span>{submitStatus === 'loading' ? 'Sending…' : 'Send Message'}</span>
                  </button>
                </form>

                <div className="contact-image-container">
                  <ResponsivePicture
                    avifSrcSet="/assets/contactImage-480.avif 480w, /assets/contactImage-960.avif 960w, /assets/contactImage-1280.avif 1280w, /assets/contactImage-1536.avif 1536w"
                    webpSrcSet="/assets/contactImage-480.webp 480w, /assets/contactImage-960.webp 960w, /assets/contactImage-1280.webp 1280w, /assets/contactImage-1536.webp 1536w"
                    fallbackSrcSet="/assets/contactImage-480.jpg 480w, /assets/contactImage-960.jpg 960w, /assets/contactImage-1280.jpg 1280w, /assets/contactImage-1536.jpg 1536w"
                    fallbackSrc="/assets/contactImage-480.jpg"
                    alt="Tidyzon Contact Support"
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
                <h3 className="faq-title">Frequently Asked Questions</h3>
                <div className="faq-list">
                  {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                      <h4 className="faq-question">{faq.question}</h4>
                      <p className="faq-answer">{faq.answer}</p>
                    </div>
                  ))}
                </div>

                <div className="download-app-cta">
                  <h4 className="download-cta-title">Prefer to use the app?</h4>
                  <p className="download-cta-text">
                    Get instant support through our mobile app
                  </p>
                  <button type="button" className="download-cta-btn" onClick={() => setIsModalOpen(true)}>
                    Download App
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
            <p className="map-text">Visit our office at 708 Saybrook Ct. Romeoville IL 60446</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default ContactPage
