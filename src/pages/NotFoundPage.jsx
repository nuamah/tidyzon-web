import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Home, ArrowLeft, Search, AlertCircle } from 'lucide-react'
import './NotFoundPage.css'

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <Helmet>
        <title>Page not found | Tidyzon</title>
        <meta name="description" content="This page could not be found. Return to Tidyzon home or contact support." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="not-found-container">
        {/* Background Elements */}
        <div className="not-found-bg-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>

        {/* Main Content */}
        <div className="not-found-content">
          {/* Error Icon */}
          <div className="error-icon-container">
            <AlertCircle className="error-icon" />
          </div>

          {/* Error Code */}
          <div className="error-code">
            <span className="error-number">404</span>
          </div>

          {/* Error Message */}
          <div className="error-message">
            <h1 className="error-title">Oops! Page Not Found</h1>
            <p className="error-description">
              The page you're looking for doesn't exist or has been moved. 
              Don't worry, we'll help you get back on track!
            </p>
          </div>

          {/* Quick Actions */}
          <div className="quick-actions">
            <Link to="/" className="action-btn primary-btn">
              <Home className="btn-icon" />
              <span>Go Home</span>
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="action-btn secondary-btn"
            >
              <ArrowLeft className="btn-icon" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Popular Links */}
          <div className="popular-links">
            <h3 className="popular-title">Popular Pages</h3>
            <div className="links-grid">
              <Link to="/services" className="popular-link">
                <Search className="link-icon" />
                <div className="link-content">
                  <span className="link-title">Our Services</span>
                  <span className="link-desc">Car cleaning & more</span>
                </div>
              </Link>
              <Link to="/about" className="popular-link">
                <Search className="link-icon" />
                <div className="link-content">
                  <span className="link-title">About Us</span>
                  <span className="link-desc">Learn about Tidyzon</span>
                </div>
              </Link>
              <Link to="/contact" className="popular-link">
                <Search className="link-icon" />
                <div className="link-content">
                  <span className="link-title">Contact</span>
                  <span className="link-desc">Get in touch</span>
                </div>
              </Link>
              <Link to="/get-started" className="popular-link">
                <Search className="link-icon" />
                <div className="link-content">
                  <span className="link-title">Get Started</span>
                  <span className="link-desc">Book a service</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Help Section */}
          <div className="help-section">
            <p className="help-text">
              Still can't find what you're looking for? 
              <Link to="/contact" className="help-link"> Contact our support team</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
