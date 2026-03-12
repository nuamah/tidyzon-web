import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import './ContactPage.css'

const ContactPage = () => {
  const faqItems = [
    { question: 'SMS Terms', linkUrl: '/terms#sms-terms', linkLabel: 'View SMS Terms' },
    { question: 'SMS Privacy', linkUrl: '/privacy#sms-privacy', linkLabel: 'View SMS Privacy' },
    { question: 'How do I book a service?', answer: 'Download the Tidyzon app or use our website to schedule a service at your convenience.' },
    { question: 'How can I reach support?', answer: 'Email us at info@tidyzon.com or call (630) 788-9081.' },
  ]

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">Contact &amp; Help</h1>
            <p className="contact-hero-subtitle">Get in touch or find answers to common questions.</p>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info-section">
              <h2>Get in Touch</h2>
              <div className="contact-details">
                <div className="contact-detail-item">
                  <Mail size={20} color="#10b981" />
                  <a href="mailto:info@tidyzon.com">info@tidyzon.com</a>
                </div>
                <div className="contact-detail-item">
                  <Phone size={20} color="#10b981" />
                  <a href="tel:+16307889081">(630) 788-9081</a>
                </div>
                <div className="contact-detail-item">
                  <MapPin size={20} color="#10b981" />
                  <span>708 Saybrook Ct. Romeoville IL 60446</span>
                </div>
              </div>
            </div>

            <div className="contact-faq-section">
              <h2>Frequently Asked Questions</h2>
              <ul className="contact-faq-list">
                {faqItems.map((item, idx) => (
                  <li key={idx} className="contact-faq-item">
                    <strong>{item.question}</strong>
                    {item.linkUrl ? (
                      <div className="faq-link">
                        <Link to={item.linkUrl}>{item.linkLabel}</Link>
                      </div>
                    ) : (
                      item.answer && <p style={{ marginTop: '0.5rem', marginBottom: 0, color: '#475569' }}>{item.answer}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
