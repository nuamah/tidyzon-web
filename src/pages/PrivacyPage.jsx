import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import './PrivacyPage.css'

const PrivacyPage = () => {
  const navigate = useNavigate()

  return (
    <div className="privacy-page">
      <section className="privacy-hero">
        <div className="container">
          <div className="privacy-hero-content">
            <h1 className="privacy-hero-title">Privacy Policy</h1>
            <p className="privacy-hero-subtitle">Last Updated: Nov 13, 2025</p>
          </div>
        </div>
      </section>

      <section className="privacy-content">
        <div className="container">
          <div className="privacy-wrapper">
            <button onClick={() => navigate(-1)} className="terms-back-button-content" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', padding: '0.625rem 1.25rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', background: '#f1f5f9', cursor: 'pointer', fontSize: '0.875rem' }}>
              <ArrowLeft style={{ width: '1rem', height: '1rem' }} />
              <span>Back</span>
            </button>

            <div className="privacy-section">
              <h2 className="privacy-section-title">1. INTRODUCTION</h2>
              <p className="privacy-text">
                Tidyzon, Inc. ("Tidyzon," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and services (collectively, the "Platform"). By accessing or using our Platform, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
              </p>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-section-title">2. INFORMATION WE COLLECT</h2>
              <p className="privacy-text">
                We collect information you provide (name, email, phone, address, vehicle details, payment information), information from your use of the Platform (device, location, usage), and information related to services and communications. For full details, see our California Privacy Policy and Privacy Request options below.
              </p>
              <p className="privacy-text">
                <Link to="/california-privacy" className="privacy-link">California Privacy Policy</Link>
                {' · '}
                <Link to="/privacy/requests" className="privacy-link">Privacy Requests</Link>
                {' · '}
                <Link to="/privacy/do-not-sell-or-share" className="privacy-link">Do Not Sell or Share</Link>
                {' · '}
                <Link to="/privacy/limit-sensitive-info" className="privacy-link">Limit Sensitive Info</Link>
              </p>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-section-title">3. HOW WE USE YOUR INFORMATION</h2>
              <p className="privacy-text">
                We use your information to provide and improve the Platform, process payments, communicate with you, ensure safety and compliance, and as described in our notices at collection and this policy.
              </p>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-section-title">4. CONTACT</h2>
              <div className="contact-info">
                <p>For privacy questions or to exercise your rights, contact us at support@tidyzon.com or use the <Link to="/privacy/requests" className="privacy-link">Privacy Request Portal</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPage
