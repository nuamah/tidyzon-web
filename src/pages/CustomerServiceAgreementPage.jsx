import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, ArrowUp } from 'lucide-react'
import './TermsPage.css'

const CustomerServiceAgreementPage = () => {
  const navigate = useNavigate()

  return (
    <div className="terms-page">
      <section className="terms-hero">
        <div className="container">
          <div className="terms-hero-content">
            <h1 className="terms-hero-title">Customer Service Agreement</h1>
            <p className="terms-hero-subtitle">Effective as of account creation</p>
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
                This Customer Service Agreement is entered into between Tidyzon, Inc. and the individual or entity that registers as a customer on the Tidyzon Platform. It covers platform access, service requests, cancellations, refunds, payment terms, and liability. By creating an account, you agree to be bound by this Agreement.
              </p>
              <p className="terms-text">
                For the full agreement text, please see the version provided in the Tidyzon app or contact support@tidyzon.com. Key policies are also summarized in our <Link to="/terms" className="terms-link">Terms &amp; Conditions</Link>.
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

export default CustomerServiceAgreementPage
