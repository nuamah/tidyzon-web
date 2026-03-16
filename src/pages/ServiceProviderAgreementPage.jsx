import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowUp } from 'lucide-react'
import './TermsPage.css'

const ServiceProviderAgreementPage = () => {
  const navigate = useNavigate()

  return (
    <div className="terms-page">
      <section className="terms-hero">
        <div className="container">
          <div className="terms-hero-content">
            <h1 className="terms-hero-title">Service Provider Agreement</h1>
            <p className="terms-hero-subtitle">For independent contractors using the Tidyzon platform</p>
          </div>
        </div>
      </section>

      <section className="terms-content">
        <div className="container">
          <div className="terms-wrapper">
            <button onClick={() => navigate(-1)} className="terms-back-button-content">
              <ArrowLeft className="back-icon" />
              <span>Back</span>
            </button>

            <div className="terms-section">
              <p className="terms-text">
                This Service Provider Agreement governs the relationship between Tidyzon, Inc. and independent contractors who provide services through the Tidyzon platform. It covers eligibility, background verification, service performance, payment, and other obligations.
              </p>
              <p className="terms-text">
                For the full agreement, please see the version provided when you sign up as a provider or contact support@tidyzon.com.
              </p>
            </div>

            <div className="terms-scroll-to-top-container">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="terms-scroll-to-top-btn" aria-label="Scroll to top">
                <ArrowUp className="scroll-icon" />
                <span>Scroll to Top</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceProviderAgreementPage
