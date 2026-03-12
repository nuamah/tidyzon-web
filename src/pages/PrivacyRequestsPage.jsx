import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, Mail, MapPin, CheckCircle } from 'lucide-react'
import './PrivacyRequestsPage.css'

const PrivacyRequestsPage = () => {
  return (
    <div className="privacy-requests-page">
      {/* Hero Section */}
      <section className="privacy-requests-hero">
        <div className="container">
          <div className="privacy-requests-hero-content">
            <h1 className="privacy-requests-hero-title">Privacy Request Portal</h1>
            <p className="privacy-requests-hero-subtitle">Exercise Your Privacy Rights</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="privacy-requests-content">
        <div className="container">
          <div className="privacy-requests-wrapper">
            
            {/* Introduction */}
            <div className="privacy-requests-section">
              <h2 className="privacy-requests-section-title">1. YOUR PRIVACY RIGHTS</h2>
              <p className="privacy-requests-text">
                At Tidyzon, we respect your privacy rights. Depending on your location, you may have 
                certain rights regarding your personal information. This portal helps you exercise 
                those rights.
              </p>
              <p className="privacy-requests-text">
                Subject to exceptions, California residents have the following rights. We will not 
                discriminate against you for exercising any rights.
              </p>
              <ul className="privacy-requests-list">
                <li><strong>Right to Know / Access</strong> - the categories and specific pieces of Personal Information we collected, the sources, purposes, and categories of third-party disclosures.</li>
                <li><strong>Right to Delete</strong> - Personal Information we collected from you.</li>
                <li><strong>Right to Correct</strong> - Inaccurate Personal Information.</li>
                <li><strong>Right to Opt-Out of Sale/Sharing for CCBA.</strong> We honor GPC signals.</li>
                <li><strong>Right to Limit Use and Disclosure of Sensitive Personal Information</strong> (where SPI is used beyond service delivery/exempt purposes).</li>
                <li><strong>Right to Portability</strong> (receive certain information in a portable format).</li>
                <li><strong>Shine the Light</strong> (Cal. Civ. Code §1798.83): You may request information about our disclosure of Personal Information to third parties for their direct marketing in the prior calendar year.</li>
                <li><strong>California Minors' Eraser Right</strong> (Bus. & Prof. Code §22581): Eligible minors may request removal of publicly posted content they created.</li>
              </ul>
            </div>

            {/* How to Submit a Request */}
            <div className="privacy-requests-section">
              <h2 className="privacy-requests-section-title">2. HOW TO SUBMIT A PRIVACY REQUEST</h2>
              <p className="privacy-requests-text">
                You can submit a privacy request through any of the following methods:
              </p>

              <h3 className="privacy-requests-subsection-title">2.1 Email Request</h3>
              <div className="method-card">
                <Mail className="method-icon" />
                <div className="method-content">
                  <h4 className="method-title">Email Us</h4>
                  <p className="method-text">
                    Send an email to <a href="mailto:privacy@tidyzon.com" className="privacy-requests-link">privacy@tidyzon.com</a> with the following information:
                  </p>
                  <ul className="privacy-requests-list">
                    <li>Your full name</li>
                    <li>Email address associated with your account</li>
                    <li>Type of request (Access, Delete, Correct, Portability, etc.)</li>
                    <li>Brief description of your request</li>
                  </ul>
                </div>
              </div>

              <h3 className="privacy-requests-subsection-title">2.2 Mail Request</h3>
              <div className="method-card">
                <MapPin className="method-icon" />
                <div className="method-content">
                  <h4 className="method-title">Write to Us</h4>
                  <p className="method-text">
                    Send a written request to:
                  </p>
                  <div className="address-box">
                    <p className="address-text">
                      <strong>Tidyzon, Inc.</strong><br />
                      Privacy Officer<br />
                      708 Saybrook Ct.<br />
                      Romeoville, IL 60446
                    </p>
                  </div>
                  <p className="method-text">
                    Include the same information as listed in the email request method.
                  </p>
                </div>
              </div>

              <h3 className="privacy-requests-subsection-title">2.3 Online Options</h3>
              <div className="method-card">
                <CheckCircle className="method-icon" />
                <div className="method-content">
                  <h4 className="method-title">Quick Actions</h4>
                  <p className="method-text">
                    For specific privacy preferences, you can use our dedicated pages:
                  </p>
                  <ul className="privacy-requests-list">
                    <li>
                      <Link to="/privacy/do-not-sell-or-share" className="privacy-requests-link">
                        Do Not Sell or Share My Personal Information
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy/limit-sensitive-info" className="privacy-requests-link">
                        Limit the Use of My Sensitive Personal Information
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Verification Process */}
            <div className="privacy-requests-section">
              <h2 className="privacy-requests-section-title">3. VERIFICATION PROCESS</h2>
              <p className="privacy-requests-text">
                To protect your privacy and ensure we're processing requests from the correct person, 
                we will verify your request. This may include:
              </p>
              <ul className="privacy-requests-list">
                <li>Matching identifying information you provide with information we have on file</li>
                <li>Verifying your email address or phone number</li>
                <li>Requesting additional information if needed to verify your identity</li>
              </ul>
              <p className="privacy-requests-text">
                We will verify your request (which may include matching identifying information). 
                You may authorize an agent to submit a request; we may require proof of authorization 
                and verification of your identity. Household requests may require additional verification.
              </p>
            </div>

            {/* Response Time */}
            <div className="privacy-requests-section">
              <h2 className="privacy-requests-section-title">4. RESPONSE TIME</h2>
              <p className="privacy-requests-text">
                We aim to respond to your privacy request within the timeframes required by applicable 
                law. Generally:
              </p>
              <ul className="privacy-requests-list">
                <li>We will acknowledge receipt of your request within 10 business days</li>
                <li>We will provide a substantive response within 45 calendar days, or inform you if we need additional time</li>
                <li>For complex requests, we may extend the response time by an additional 45 days with notice</li>
              </ul>
            </div>

            {/* Additional Information */}
            <div className="privacy-requests-section">
              <h2 className="privacy-requests-section-title">5. ADDITIONAL INFORMATION</h2>
              <p className="privacy-requests-text">
                If you have questions about your privacy rights or need assistance with submitting 
                a request, please contact us at <a href="mailto:privacy@tidyzon.com" className="privacy-requests-link">privacy@tidyzon.com</a>.
              </p>
              <p className="privacy-requests-text">
                For more information about our privacy practices, please review our:
              </p>
              <ul className="privacy-requests-list">
                <li><Link to="/privacy" className="privacy-requests-link">Privacy Policy</Link></li>
                <li><Link to="/california-privacy" className="privacy-requests-link">California Privacy Policy</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyRequestsPage

