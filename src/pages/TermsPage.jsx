import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowUp } from 'lucide-react'
import './TermsPage.css'

const TermsPage = () => {
  const navigate = useNavigate()

  return (
    <div className="terms-page">
      <section className="terms-hero">
        <div className="container">
          <div className="terms-hero-content">
            <h1 className="terms-hero-title">Terms &amp; Conditions</h1>
            <p className="terms-hero-subtitle">Last Updated: March 2, 2025</p>
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
              <h2 className="terms-section-title">1. INTRODUCTION</h2>
              <p className="terms-text">
                Welcome to Tidyzon ("Company", "we", "our", "us"). These Terms and Conditions ("Terms") govern your access to and use of the Tidyzon website, mobile application, and services (collectively, the "Platform"). By accessing or using our Platform, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Platform.
              </p>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title">2. PLATFORM DESCRIPTION</h2>
              <p className="terms-text">
                TidyZon operates an online platform that facilitates the connection between customers and independent service providers ("Providers") who offer on-site services (at your door step), including but not limited to vehicle washing and garbage or recycling bin cleaning. All services are performed at the customer's designated location by independent Providers, who operate as separate entities and are not employees, agents, or representatives of TidyZon.
              </p>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title">3. ELIGIBILITY</h2>
              <p className="terms-text">
                You must be at least 18 years of age and capable of forming a binding contract with Tidyzon to use our Platform. By using our Platform, you represent and warrant that you meet these requirements.
              </p>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title">4. ACCOUNT REGISTRATION</h2>
              <p className="terms-text">
                To use certain features of the Platform, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
              </p>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title">5. USER CONDUCT</h2>
              <p className="terms-text">When using our Platform, you agree not to:</p>
              <ul className="terms-list">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Submit false or misleading information</li>
                <li>Interfere with the proper operation of the Platform</li>
                <li>Engage in any conduct that restricts or inhibits any other user from using the Platform</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title">6. SERVICE REQUESTS</h2>
              <p className="terms-text">
                Customers may request services through our Platform for immediate service or scheduled service. Service availability is subject to service provider availability and acceptance. Cancellation policies will be provided at the time of booking. All service providers operating through the TidyZon platform are independent contractors. Refund eligibility is as specified in our Customer Service Agreement and at the time of booking.
              </p>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title">7. PAYMENT TERMS</h2>
              <p className="terms-text">
                Service prices will be displayed on the Platform before you confirm your booking. All payments are processed through Stripe. Refund policies will be specified at the time of booking.
              </p>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title">8. LIMITATION OF LIABILITY</h2>
              <p className="terms-text">
                To the maximum extent permitted by law, in no event shall Tidyzon be liable for any indirect, incidental, special, exemplary, or consequential damages. Tidyzon's total liability to you for any damages shall not exceed the amount paid by you for the service that gave rise to such liability.
              </p>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title">9. GOVERNING LAW &amp; CONTACT</h2>
              <p className="terms-text">
                These Terms shall be governed by the laws of the State of Illinois. If you have any questions, please contact us at support@tidyzon.com. By using Tidyzon's Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
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

export default TermsPage
