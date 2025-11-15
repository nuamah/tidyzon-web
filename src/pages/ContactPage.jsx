import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react'
import DownloadModal from '../components/DownloadModal'
import './ContactPage.css'

const ContactPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "info@tidyzon.com",
      link: "mailto:info@tidyzon.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "(630) 788-9081",
      link: "tel:+16307889081"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "708 Saybrook Ct. Romeoville IL 60446",
      link: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Fri: 7AM-7PM, Sat-Sun: 9AM-6PM",
      link: "#"
    }
  ]

  const faqs = [
    {
      question: "How quickly can I book a service?",
      answer: "You can book a service instantly through our app. Most services are available same-day or within 24 hours."
    },
    {
      question: "Are your service providers insured?",
      answer: "Yes, all our service providers are fully insured and background-checked for your peace of mind."
    },
    {
      question: "What areas do you serve?",
      answer: "We currently serve major metropolitan areas. Check the app for availability in your specific location."
    },
    {
      question: "Can I cancel or reschedule a booking?",
      answer: "Yes, you can cancel or reschedule up to 24 hours before your appointment through the app."
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
                        placeholder="(630) 788-9081"
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

                  <button type="submit" className="form-submit-btn">
                    <Send className="submit-icon" />
                    <span>Send Message</span>
                  </button>
                </form>
                
                <div className="contact-image-container">
                  <img 
                    src="/assets/contactImage.jpg" 
                    alt="Tidyzon Contact Support" 
                    className="contact-support-image"
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
                  <button className="download-cta-btn" onClick={() => setIsModalOpen(true)}>
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
