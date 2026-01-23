import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './PrivacyPage.css'

const PrivacyPage = () => {
  const location = useLocation()

  useEffect(() => {
    // Scroll to hash anchor if present
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    } else {
      // Scroll to top if no hash
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <div className="privacy-page">
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="container">
          <div className="privacy-hero-content">
            <h1 className="privacy-hero-title">Privacy Policy</h1>
            <p className="privacy-hero-subtitle">Last Updated: Nov 13, 2025</p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-content">
        <div className="container">
          <div className="privacy-wrapper">
            
            {/* Introduction */}
            <div className="privacy-section">
              <h2 className="privacy-section-title">1. INTRODUCTION</h2>
              <p className="privacy-text">
                Tidyzon, Inc. ("Tidyzon," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and services (collectively, the "Platform").
              </p>
              <p className="privacy-text">
                Please read this Privacy Policy carefully. By accessing or using our Platform, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with our policies and practices, please do not use our Platform.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="privacy-section">
              <h2 className="privacy-section-title">2. INFORMATION WE COLLECT</h2>
              <p className="privacy-text">
                We collect information from and about users of our Platform in a variety of ways:
              </p>
              
              <h3 className="privacy-subsection-title">2.1 Information You Provide to Us</h3>
              <p className="privacy-text">
                When you register an account, request services, or otherwise interact with our Platform, we may collect:
              </p>
              
              <h4 className="privacy-subheading">For Customers:</h4>
              
              <h5 className="privacy-subsection-subtitle">Personal Identification Information</h5>
              <ul className="privacy-list">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
              </ul>

              <h5 className="privacy-subsection-subtitle">Service Location Information</h5>
              <ul className="privacy-list">
                <li>Service address</li>
                <li>Access instructions (e.g., gate codes, parking details)</li>
              </ul>

              <h5 className="privacy-subsection-subtitle">Vehicle Information</h5>
              <ul className="privacy-list">
                <li>Make, model, year</li>
                <li>License plate (optional)</li>
                <li>Photos provided for quotes, damage identification, or before/after documentation</li>
                <li>Service preferences for each vehicle</li>
              </ul>

              <h5 className="privacy-subsection-subtitle">Property Information</h5>
              <ul className="privacy-list">
                <li>Details relevant to performing services (driveway access, water faucet availability, etc.)</li>
              </ul>

              <h5 className="privacy-subsection-subtitle">Payment & Billing Information</h5>
              <p className="privacy-text">
                (Processed through secure third-party payment processors; TidyZon does not store full card numbers.)
              </p>
              <ul className="privacy-list">
                <li>Payment method type (e.g., card type, last four digits)</li>
                <li>Billing address</li>
                <li>Transaction history</li>
                <li>Payment confirmations or failure notices</li>
              </ul>

              <h5 className="privacy-subsection-subtitle">Account & Authentication Information</h5>
              <ul className="privacy-list">
                <li>Username and encrypted password</li>
                <li>Verification codes (SMS/email)</li>
                <li>Login timestamps</li>
                <li>Account preferences and settings</li>
              </ul>

              <h5 className="privacy-subsection-subtitle">Appointment & Service Details</h5>
              <ul className="privacy-list">
                <li>Selected service packages and add-ons</li>
                <li>Preferred date/time</li>
                <li>Assigned service provider</li>
                <li>Notes or instructions added to the service</li>
                <li>Rescheduling or cancellation history</li>
              </ul>

              <h5 className="privacy-subsection-subtitle">Photos, Videos, and Uploaded Media</h5>
              <ul className="privacy-list">
                <li>Vehicle photos, videos, or notes you upload</li>
                <li>Media shared through support channels or messaging features</li>
              </ul>

              <h5 className="privacy-subsection-subtitle">Communications & Interaction Data</h5>
              <ul className="privacy-list">
                <li>Messages sent through the Platform</li>
                <li>Communications with TidyZon customer support</li>
                <li>Service feedback, complaints, and ratings</li>
                <li>Reviews of service providers</li>
              </ul>

              <h5 className="privacy-subsection-subtitle">Device, Technical, and Location Information</h5>
              <p className="privacy-text">Automatically collected when accessing the Platform:</p>
              <ul className="privacy-list">
                <li>Device type, browser, operating system</li>
                <li>IP address</li>
                <li>Cookie identifiers</li>
                <li>Approximate geolocation</li>
                <li>Usage analytics (pages viewed, time spent, features accessed)</li>
              </ul>

              <h5 className="privacy-subsection-subtitle">Safety & Verification Data</h5>
              <ul className="privacy-list">
                <li>Address or service eligibility confirmations</li>
                <li>Fraud-prevention checks</li>
                <li>Vehicle ownership or authorization confirmations (if applicable)</li>
              </ul>

              <h4 className="privacy-subheading">For Service Providers:</h4>
              
              <h5 className="privacy-subsection-subtitle">Personal Identification Information</h5>
              <ul className="privacy-list">
                <li>Full legal name</li>
                <li>Date of birth</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Residential address</li>
                <li>Government-issued photo ID</li>
              </ul>

              <h5 className="privacy-subsection-subtitle">Tax & Financial Information</h5>
              <ul className="privacy-list">
                <li>Social Security Number or Tax Identification Number</li>
                <li>W-9 or other tax forms</li>
                <li>Bank account details for payouts</li>
                <li>Earnings history, payment adjustments, and incentive amounts</li>
              </ul>

              <h5 className="privacy-subsection-subtitle">Account & Authentication Information</h5>
              <ul className="privacy-list">
                <li>Username and encrypted password</li>
                <li>Verification codes</li>
                <li>Login timestamps</li>
                <li>Profile information</li>
              </ul>

              <h5 className="privacy-subsection-subtitle">Driving & Vehicle Information</h5>
              <ul className="privacy-list">
                <li>Driver's license number, state, and expiration date</li>
                <li>Motor vehicle record results</li>
                <li>Vehicle make, model, year, and registration</li>
                <li>Proof of auto insurance</li>
              </ul>

              <h5 className="privacy-subsection-subtitle">Business & Compliance Documentation</h5>
              <ul className="privacy-list">
                <li>Business registration documents (if applicable)</li>
                <li>Certificates or qualifications</li>
                <li>Proof of liability insurance</li>
              </ul>

              <h5 className="privacy-subsection-subtitle">Location & Availability Data</h5>
              <ul className="privacy-list">
                <li>Real-time GPS data while "Available"</li>
                <li>Historical service-route data</li>
                <li>Service acceptance/decline history</li>
                <li>Hours of availability</li>
                <li>Job completion timestamps</li>
              </ul>

              <h5 className="privacy-subsection-subtitle">Work Documentation & Media</h5>
              <ul className="privacy-list">
                <li>Before/after photos of services</li>
                <li>Photos documenting issues, safety concerns, or vehicle damage</li>
                <li>Notes or logs submitted via the Platform</li>
              </ul>

              <h5 className="privacy-subsection-subtitle">Provider Communications</h5>
              <ul className="privacy-list">
                <li>Messages exchanged with Customers</li>
                <li>Messages exchanged with TidyZon support</li>
                <li>Dispute resolution records or appeals</li>
              </ul>

              <h5 className="privacy-subsection-subtitle">Ratings, Reviews & Performance Metrics</h5>
              <ul className="privacy-list">
                <li>Customer ratings and written reviews</li>
                <li>Reliability metrics (acceptance rate, cancellations, no-shows)</li>
                <li>Internal quality and safety evaluations</li>
                <li>Compliance history</li>
              </ul>

              <h5 className="privacy-subsection-subtitle">Device & Technical Metadata</h5>
              <ul className="privacy-list">
                <li>IP address</li>
                <li>Device type, operating system, browser</li>
                <li>App usage logs and analytics</li>
                <li>Cookie identifiers</li>
              </ul>

              <h5 className="privacy-subsection-subtitle">Safety & Background Check Information</h5>
              <ul className="privacy-list">
                <li>Third-party background check results</li>
                <li>Driving history screening results</li>
                <li>Insurance verification</li>
                <li>Safety incident reports or violations</li>
              </ul>

              <h3 className="privacy-subsection-title">2.2 Information We Collect Automatically</h3>
              <p className="privacy-text">When you use our Platform, we may automatically collect:</p>
              <ul className="privacy-list">
                <li>Device information (e.g., IP address, device type, operating system)</li>
                <li>Usage data (e.g., how you interact with our Platform, services requested)</li>
                <li>Location data when using our mobile application (with your consent)</li>
                <li>Cookies and similar tracking technologies (as described in Section 3)</li>
              </ul>

              <h3 className="privacy-subsection-title">2.3 Information from Third Parties</h3>
              <p className="privacy-text">We may receive information about you from third parties, including:</p>
              <ul className="privacy-list">
                <li>Background check providers (for Service Providers)</li>
                <li>Payment processors</li>
                <li>Marketing partners</li>
                <li>Public databases</li>
              </ul>
            </div>

            {/* Cookies and Tracking */}
            <div className="privacy-section">
              <h2 className="privacy-section-title">3. COOKIES AND TRACKING TECHNOLOGIES</h2>
              
              <h3 className="privacy-subsection-title">3.1 How We Use Cookies</h3>
              <p className="privacy-text">
                We and our service providers use cookies, web beacons, and similar technologies to track information about your use of our Platform. We may combine this information with other information we collect about you.
              </p>
              <p className="privacy-text">These technologies help us to:</p>
              <ul className="privacy-list">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our Platform</li>
                <li>Improve our Platform</li>
                <li>Provide personalized content and advertisements</li>
                <li>Analyze the effectiveness of our marketing efforts</li>
              </ul>

              <h3 className="privacy-subsection-title">3.2 Your Choices Regarding Cookies</h3>
              <p className="privacy-text">
                Most web browsers are set to accept cookies by default. You can usually set your browser to remove or reject cookies. Please note that removing or rejecting cookies could affect the availability and functionality of our Platform.
              </p>
            </div>

            {/* How We Use Information */}
            <div className="privacy-section">
              <h2 className="privacy-section-title">4. HOW WE USE YOUR INFORMATION</h2>
              <p className="privacy-text">We may use the information we collect about you to:</p>
              <ul className="privacy-list">
                <li>Create and manage your account</li>
                <li>Provide, maintain, and improve our Platform</li>
                <li>Process and fulfill your service requests</li>
                <li>Connect Customers with appropriate Service Providers</li>
                <li>Process payments (through our payment processor, Stripe)</li>
                <li>Communicate with you about services, updates, and promotions</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Protect against, identify, and prevent fraud and other illegal activity</li>
                <li>Comply with legal obligations</li>
                <li>Enforce our Terms and Conditions and other agreements</li>
              </ul>
            </div>

            {/* How We Share Information */}
            <div className="privacy-section">
              <h2 className="privacy-section-title">5. HOW WE SHARE YOUR INFORMATION</h2>
              <p className="privacy-text">We may share your information in the following circumstances:</p>
              
              <h3 className="privacy-subsection-title">5.1 With Service Providers and Business Partners</h3>
              <p className="privacy-text">
                We may share your information with third-party vendors, service providers, and other business partners who need access to such information to carry out work on our behalf, such as:
              </p>
              <ul className="privacy-list">
                <li>Payment processors (Stripe)</li>
                <li>Cloud storage providers</li>
                <li>Analytics providers</li>
                <li>Customer support services</li>
                <li>Marketing and advertising partners</li>
                <li>Background check providers (for Service Provider information)</li>
              </ul>

              <h3 className="privacy-subsection-title">5.2 Between Customers and Service Providers</h3>
              <p className="privacy-text">To facilitate services through our Platform:</p>
              <ul className="privacy-list">
                <li>When a Customer requests a service, we share relevant information (such as location, service needs, and contact information) with potential Service Providers</li>
                <li>When a Service Provider accepts a service request, we share relevant information about the Service Provider (such as name, photo, and contact information) with the Customer</li>
              </ul>

              <h3 className="privacy-subsection-title">5.3 For Legal Purposes</h3>
              <p className="privacy-text">We may disclose your information:</p>
              <ul className="privacy-list">
                <li>To comply with applicable laws and regulations</li>
                <li>To respond to a subpoena, search warrant, or other lawful request for information</li>
                <li>To protect the rights, property, or safety of Tidyzon, our users, or others</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>

              <h3 className="privacy-subsection-title">5.4 With Your Consent</h3>
              <p className="privacy-text">
                We may share your information in any other circumstances where we have your consent.
              </p>
            </div>

            {/* SMS Privacy */}
            <div id="sms-privacy" className="privacy-section">
              <h2 className="privacy-section-title">6. SMS AND TEXT MESSAGE PRIVACY</h2>
              
              <h3 className="privacy-subsection-title">TidyZon SMS Privacy Policy</h3>
              <p className="privacy-text">
                This notice explains how Tidyzon handles your phone number and SMS related data.
              </p>

              <h4 className="privacy-subsection-subtitle">What we collect for SMS</h4>
              <ul className="privacy-list">
                <li>Phone number</li>
                <li>Opt-in and opt-out records (timestamp, source, and method)</li>
                <li>Message metadata (timestamps, delivery status)</li>
                <li>Message content needed to provide the service (example: OTP, booking updates, support threads)</li>
              </ul>

              <h4 className="privacy-subsection-subtitle">How we use it</h4>
              <ul className="privacy-list">
                <li>Provide security and account access (example: OTP)</li>
                <li>Send booking and service updates you request</li>
                <li>Provide customer support</li>
                <li>Prevent fraud and abuse</li>
                <li>Meet legal and compliance obligations</li>
              </ul>

              <h4 className="privacy-subsection-subtitle">Sharing</h4>
              <p className="privacy-text">We may share limited SMS related data with:</p>
              <ul className="privacy-list">
                <li>Messaging and infrastructure vendors that deliver messages on our behalf</li>
                <li>Providers and contractors are only needed to fulfill a booking</li>
                <li>Authorities, when required by law</li>
              </ul>
              <p className="privacy-text">
                Vendors must protect your information and may use it only to provide services to Tidyzon.
              </p>

              <h4 className="privacy-subsection-subtitle">No selling, no marketing, sharing of mobile data</h4>
              <ul className="privacy-list">
                <li>Tidyzon does not sell your phone number.</li>
                <li>Tidyzon does not share mobile information for third-party marketing or promotional purposes.</li>
              </ul>

              <h4 className="privacy-subsection-subtitle">Retention</h4>
              <p className="privacy-text">We keep SMS related data only as long as needed for:</p>
              <ul className="privacy-list">
                <li>Service delivery</li>
                <li>Security and fraud prevention</li>
                <li>Compliance and dispute resolution</li>
              </ul>

              <h4 className="privacy-subsection-subtitle">Your choices</h4>
              <ul className="privacy-list">
                <li>Reply STOP to opt out.</li>
                <li>Manage notification preferences in the app.</li>
                <li>Request access, correction, or deletion where applicable by contacting support.</li>
              </ul>

              <h4 className="privacy-subsection-subtitle">Your Rights</h4>
              <p className="privacy-text">Depending on your location, you may have the right to:</p>
              <ul className="privacy-list">
                <li>Access, correct, or delete your personal information</li>
                <li>Withdraw consent for SMS communications</li>
                <li>Request information about data usage and sharing</li>
              </ul>
              <p className="privacy-text">
                Requests can be made through the TidyZon app or customer support.
              </p>

              <h4 className="privacy-subsection-subtitle">Changes to This Policy</h4>
              <p className="privacy-text">
                TidyZon may update this Privacy Policy from time to time. Continued use of the app constitutes acceptance of the revised policy.
              </p>
            </div>

            {/* Payment Information */}
            <div className="privacy-section">
              <h2 className="privacy-section-title">7. PAYMENT INFORMATION</h2>
              <p className="privacy-text">
                We use Stripe as our payment processor. When you provide payment information, you are providing it directly to Stripe, and Tidyzon does not store your full payment details. Please review Stripe's privacy policy to understand how they handle your payment information.
              </p>
            </div>

            {/* Data Retention */}
            <div className="privacy-section">
              <h2 className="privacy-section-title">8. DATA RETENTION</h2>
              <p className="privacy-text">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When determining how long to retain information, we consider the amount, nature, and sensitivity of the information, the potential risk of harm from unauthorized use or disclosure, and whether we can achieve the purposes of processing through other means.
              </p>
            </div>

            {/* Data Security */}
            <div className="privacy-section">
              <h2 className="privacy-section-title">9. DATA SECURITY</h2>
              <p className="privacy-text">
                We have implemented appropriate technical and organizational measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </div>

            {/* Your Rights and Choices */}
            <div className="privacy-section">
              <h2 className="privacy-section-title">10. YOUR RIGHTS AND CHOICES</h2>
              <p className="privacy-text">Depending on your location, you may have certain rights regarding your personal information:</p>
              
              <h3 className="privacy-subsection-title">10.1 Account Information</h3>
              <p className="privacy-text">
                You can review and change your personal information by logging into your account and visiting your account profile page.
              </p>

              <h3 className="privacy-subsection-title">10.2 Location Data</h3>
              <p className="privacy-text">
                You can choose whether to allow our mobile application to collect and use real-time information about your device's location through your device's settings. If you block the use of location information, some parts of our Platform may be inaccessible or have limited functionality.
              </p>

              <h3 className="privacy-subsection-title">10.3 Promotional Communications</h3>
              <p className="privacy-text">
                You can opt out of receiving promotional emails from us by following the instructions in those emails. If you opt out, we may still send you non-promotional communications, such as those about your account or our ongoing business relations.
              </p>

              <h3 className="privacy-subsection-title">10.4 Do Not Track</h3>
              <p className="privacy-text">
                Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your online activities tracked. Our Platform does not currently respond to browser "Do Not Track" signals.
              </p>

              <h3 className="privacy-subsection-title">10.5 Privacy Rights</h3>
              <p className="privacy-text">Depending on your location, you may have the right to:</p>
              <ul className="privacy-list">
                <li>Access the personal information we have about you</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Restrict or object to certain processing of your information</li>
                <li>Data portability (receive your data in a structured, commonly used format)</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="privacy-text">
                To exercise these rights, please contact us using the information provided in Section 13.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="privacy-section">
              <h2 className="privacy-section-title">11. CHILDREN'S PRIVACY</h2>
              <p className="privacy-text">
                Our Platform is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe we have collected information from your child, please contact us immediately.
              </p>
            </div>

            {/* International Data Transfers */}
            <div className="privacy-section">
              <h2 className="privacy-section-title">12. INTERNATIONAL DATA TRANSFERS</h2>
              <p className="privacy-text">
                Our Platform is operated in the United States. If you are located outside of the United States, please be aware that information we collect will be transferred to, processed, and stored in the United States. By using our Platform, you consent to the transfer, processing, and storage of your information in the United States, where different data protection laws may apply.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="privacy-section">
              <h2 className="privacy-section-title">13. CHANGES TO THIS PRIVACY POLICY</h2>
              <p className="privacy-text">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We will provide more prominent notice of material changes, which may include email notification. Your continued use of the Platform after we post changes to the Privacy Policy means you accept those changes.
              </p>
            </div>

            {/* Contact Us */}
            <div className="privacy-section">
              <h2 className="privacy-section-title">14. CONTACT US</h2>
              <p className="privacy-text">If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:</p>
              <div className="contact-info">
                <p className="privacy-text"><strong>Tidyzon, Inc.</strong></p>
                <p className="privacy-text">Privacy Officer</p>
                <p className="privacy-text">privacy@tidyzon.com</p>
              </div>
            </div>

            {/* California Privacy Rights */}
            <div className="privacy-section">
              <h2 className="privacy-section-title">15. CALIFORNIA PRIVACY RIGHTS</h2>
              <p className="privacy-text">
                If you are a California resident, California law may provide you with additional rights regarding our use of your personal information. To learn more about your California privacy rights, visit our <Link to="/california-privacy" className="privacy-link">California Privacy Notice for California Residents</Link>.
              </p>
              
              <h3 className="privacy-subsection-title">15.1 California "Shine the Light" Law</h3>
              <p className="privacy-text">
                California's "Shine the Light" law (Civil Code Section § 1798.83) permits users of our Platform that are California residents to request certain information regarding our disclosure of personal information to third parties for their direct marketing purposes. To make such a request, please send an email or write to us at the address provided in Section 13.
              </p>
            </div>

            {/* Nevada Privacy Rights */}
            <div className="privacy-section">
              <h2 className="privacy-section-title">16. NEVADA PRIVACY RIGHTS</h2>
              <p className="privacy-text">
                Nevada residents have the right to opt out of the sale of certain personal information to third parties who intend to license or sell that personal information. You can exercise this right by contacting us at the address provided in Section 13 with the subject line "Nevada Do Not Sell Request" and providing us with your name and the email address associated with your account.
              </p>
              <p className="privacy-text">
                By using our Platform, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPage
