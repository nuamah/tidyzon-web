import React from 'react'
import { Link } from 'react-router-dom'
import './DoNotSellPage.css'

const DoNotSellPage = () => {
  return (
    <div className="do-not-sell-page">
      {/* Hero Section */}
      <section className="do-not-sell-hero">
        <div className="container">
          <div className="do-not-sell-hero-content">
            <h1 className="do-not-sell-hero-title">Do Not Sell or Share My Personal Information</h1>
            <p className="do-not-sell-hero-subtitle">California Preference Center</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="do-not-sell-content">
        <div className="container">
          <div className="do-not-sell-wrapper">
            
            {/* Introduction */}
            <div className="do-not-sell-section">
              <h2 className="do-not-sell-section-title">1. INTRODUCTION</h2>
              <p className="do-not-sell-text">
                Under the California Consumer Privacy Act (as amended), "sharing" includes using 
                personal information for cross-context behavioral advertising (CCBA). Tidyzon does 
                not sell personal information for money. We may share certain identifiers, app activity, 
                and device data with ad/analytics partners to measure and personalize ads unless you 
                opt out. Opting out does not affect basic operations (payments, security, or service delivery).
              </p>
            </div>

            {/* Global Privacy Control */}
            <div className="do-not-sell-section">
              <h2 className="do-not-sell-section-title">2. GLOBAL PRIVACY CONTROL (GPC) SIGNAL</h2>
              <p className="do-not-sell-text">
                We received a Global Privacy Control (GPC) signal from your browser. We have applied 
                your opt-out of sharing to this device and browser. You can also apply it to your account below.
              </p>
            </div>

            {/* Account-Scoped Controls */}
            <div className="do-not-sell-section">
              <h2 className="do-not-sell-section-title">3. ACCOUNT-SCOPED CONTROLS</h2>
              <p className="do-not-sell-text">
                If you are logged in, you can manage your privacy preferences below. These settings 
                will apply across all devices associated with your account.
              </p>

              <h3 className="do-not-sell-subsection-title">3.1 Opt-out of "Sharing" (CCBA)</h3>
              <p className="do-not-sell-text">
                When ON, we stop sharing your personal information with ad partners for 
                cross-context advertising. We still use information for security, fraud 
                prevention, measurement that doesn't constitute CCBA, and service operations.
              </p>

              <h3 className="do-not-sell-subsection-title">3.2 Limit Personalized Analytics (optional, non-CCPA)</h3>
              <p className="do-not-sell-text">
                When ON, we reduce analytics personalization; we still collect minimal 
                diagnostics to run and secure the app.
              </p>

              <h3 className="do-not-sell-subsection-title">3.3 Marketing Emails & SMS (CAN-SPAM/CTIA hygiene)</h3>
              <p className="do-not-sell-text">
                You'll receive only transactional messages (e.g., receipts, service updates).
              </p>
            </div>

            {/* Device-Only Controls */}
            <div className="do-not-sell-section">
              <h2 className="do-not-sell-section-title">4. DEVICE-ONLY CONTROLS</h2>
              <p className="do-not-sell-text">
                We'll store your choice in a browser cookie on this device. To make it apply 
                to your account across devices, please <Link to="/get-started" className="do-not-sell-link">sign in</Link>.
              </p>
            </div>

            {/* Confirmation */}
            <div className="do-not-sell-section">
              <h2 className="do-not-sell-section-title">5. CONFIRMATION</h2>
              <p className="do-not-sell-text">
                Your privacy choices have been saved. It may take up to 15 minutes to propagate.
              </p>
            </div>

            {/* Important Notes */}
            <div className="do-not-sell-section">
              <h2 className="do-not-sell-section-title">6. IMPORTANT NOTES</h2>
              <p className="do-not-sell-text">Some partners may take additional time to reflect your choice.</p>
              <p className="do-not-sell-text">
                If you clear cookies or use a new device/browser, re-apply your choice or 
                sign in to bind it to your account.
              </p>
            </div>

            {/* Related Links */}
            <div className="do-not-sell-section">
              <h2 className="do-not-sell-section-title">7. RELATED LINKS</h2>
              <p className="do-not-sell-text">
                For more information about your privacy rights, please visit:
              </p>
              <ul className="do-not-sell-list">
                <li><Link to="/privacy" className="do-not-sell-link">Privacy Policy</Link></li>
                <li><Link to="/privacy/limit-sensitive-info" className="do-not-sell-link">Limit SPI</Link></li>
                <li><Link to="/privacy/requests" className="do-not-sell-link">Privacy Requests</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default DoNotSellPage
