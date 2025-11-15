import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Shield, AlertCircle, CheckCircle, Info } from 'lucide-react'
import './LimitSPIPage.css'

const LimitSPIPage = () => {
  const [showToast, setShowToast] = useState(false)
  const [limitSPI, setLimitSPI] = useState(false)

  const handleToggle = () => {
    setLimitSPI(!limitSPI)
  }

  const handleSave = () => {
    // In production, this would save to backend
    console.log('Saving SPI limitation:', limitSPI)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <div className="limit-spi-page">
      {/* Hero Section */}
      <section className="limit-spi-hero">
        <div className="container">
          <div className="limit-spi-hero-content">
            <div className="hero-icon-wrapper">
              <Shield className="hero-icon" />
            </div>
            <h1 className="limit-spi-hero-title">
              Limit the Use of My Sensitive Personal Information
            </h1>
            <p className="limit-spi-hero-subtitle">California Preference Center</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="limit-spi-content">
        <div className="container">
          <div className="limit-spi-wrapper">
            
            {/* Intro Copy */}
            <div className="intro-section">
              <p className="intro-text">
                Under California law, Sensitive Personal Information (SPI) includes data like 
                precise geolocation, account log-in credentials, and certain identity data 
                (e.g., background check information for Providers). Tidyzon uses SPI only as 
                necessary to provide the service, maintain security, prevent fraud, and meet 
                legal obligations. You may choose to limit any non-exempt uses.
              </p>
            </div>

            {/* SPI Categories */}
            <div className="spi-categories-section">
              <h2 className="categories-title">SPI Categories We Process</h2>
              <ul className="spi-categories-list">
                <li>
                  <strong>Precise geolocation</strong> (Consumers & Providers) for dispatch/navigation during active use
                </li>
                <li>
                  <strong>Account log-in and security credentials</strong>
                </li>
                <li>
                  <strong>Provider background check data</strong> (processed by our screening vendor)
                </li>
              </ul>
            </div>

            {/* Preference Control */}
            <div className="preference-section">
              <div className="preference-card">
                <div className="preference-header">
                  <div className="preference-info">
                    <h3 className="preference-name">Limit non-exempt uses of my SPI</h3>
                    <p className="preference-description">
                      We will not use SPI for purposes beyond service delivery, security/fraud 
                      prevention, and legal compliance. <strong>Note:</strong> If you limit precise 
                      location, certain features (instant jobs, accurate ETAs, provider availability) 
                      may not work. You can still schedule services with manual addresses.
                    </p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={limitSPI}
                      onChange={handleToggle}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>

              {/* Provider Notice */}
              <div className="provider-notice">
                <AlertCircle className="notice-icon" />
                <p className="notice-text">
                  <strong>Provider Notice:</strong> If you're a Provider, background check data is 
                  required for platform eligibility and legal/safety purposes. Limiting non-exempt 
                  uses will not remove screening requirements needed to participate on Tidyzon.
                </p>
              </div>

              {/* Save Button */}
              <button className="save-button" onClick={handleSave}>
                Save Preference
              </button>
            </div>

            {/* Footer Links */}
            <div className="preference-footer-links">
              <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              <span className="footer-separator">•</span>
              <Link to="/privacy/do-not-sell-or-share" className="footer-link">Do Not Sell or Share</Link>
              <span className="footer-separator">•</span>
              <Link to="/privacy/requests" className="footer-link">Privacy Requests</Link>
            </div>

          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {showToast && (
        <div className="toast-notification">
          <CheckCircle className="toast-icon" />
          <p className="toast-text">
            Your SPI limitation choice has been saved.
          </p>
        </div>
      )}
    </div>
  )
}

export default LimitSPIPage

