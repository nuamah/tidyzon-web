import React from 'react'
import './TermsPage.css'

const TermsPage = () => {
  return (
    <div className="terms-page">
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="container">
          <div className="terms-hero-content">
            <h1 className="terms-hero-title">Terms and Conditions</h1>
            <p className="terms-hero-subtitle">Last Updated: March 2, 2025</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="terms-content">
        <div className="container">
          <div className="terms-wrapper">
            
            {/* Introduction */}
            <div className="terms-section">
              <h2 className="terms-section-title">1. INTRODUCTION</h2>
              <p className="terms-text">
                Welcome to Tidyzon ("Company", "we", "our", "us"). These Terms and Conditions ("Terms") govern your access to and use of the Tidyzon website, mobile application, and services (collectively, the "Platform").
              </p>
              <p className="terms-text">
                By accessing or using our Platform, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Platform.
              </p>
            </div>

            {/* Platform Description */}
            <div className="terms-section">
              <h2 className="terms-section-title">2. PLATFORM DESCRIPTION</h2>
              <p className="terms-text">
                Tidyzon operates an online platform that connects customers with independent service providers who offer on-site services including, but not limited to, car washing and garbage/recycle can cleaning. All services are performed at the customer's location.
              </p>
            </div>

            {/* Eligibility */}
            <div className="terms-section">
              <h2 className="terms-section-title">3. ELIGIBILITY</h2>
              <p className="terms-text">
                You must be at least 18 years of age and capable of forming a binding contract with Tidyzon to use our Platform. By using our Platform, you represent and warrant that you meet these requirements.
              </p>
            </div>

            {/* Account Registration */}
            <div className="terms-section">
              <h2 className="terms-section-title">4. ACCOUNT REGISTRATION</h2>
              <p className="terms-text">
                To use certain features of the Platform, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
              </p>
            </div>

            {/* User Conduct */}
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

            {/* Service Requests */}
            <div className="terms-section">
              <h2 className="terms-section-title">6. SERVICE REQUESTS</h2>
              
              <h3 className="terms-subsection-title">6.1 Requesting Services</h3>
              <p className="terms-text">
                Customers may request services through our Platform for immediate service or scheduled service. Service availability is subject to service provider availability and acceptance.
              </p>

              <h3 className="terms-subsection-title">6.2 Cancellations</h3>
              <p className="terms-text">
                Cancellation policies will be provided at the time of booking. Certain cancellations may be subject to fees.
              </p>

              <h3 className="terms-subsection-title">6.3 Service Provider Selection</h3>
              <p className="terms-text">
                Service providers are independent contractors and not employees of Tidyzon. Tidyzon does not guarantee the availability of any particular service provider.
              </p>

              <h3 className="terms-subsection-title">6.5 Eligibility of Refunds</h3>
              <p className="terms-text">
                Outline details of under what circumstances will we issue a refund.
              </p>

              <h3 className="terms-subsection-title">6.6 Background Verification</h3>
              <p className="terms-text">
                We can talk about the fact that we are verifying our drivers for the safety of our customers. We can talk about exactly what we are getting verified.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="terms-section">
              <h2 className="terms-section-title">7. PAYMENT TERMS</h2>
              
              <h3 className="terms-subsection-title">7.1 Pricing</h3>
              <p className="terms-text">
                Service prices will be displayed on the Platform before you confirm your booking. Prices may vary based on service type, location, and other factors.
              </p>

              <h3 className="terms-subsection-title">7.2 Payment Processing</h3>
              <p className="terms-text">
                All payments are processed through Stripe, a third-party payment processor. Tidyzon does not store your payment information or details specific to payments. By making a payment, you agree to Stripe's terms of service and privacy policy.
              </p>

              <h3 className="terms-subsection-title">7.3 Refunds</h3>
              <p className="terms-text">
                Refund policies will be specified at the time of booking. Generally, if no service provider accepts your service request, you will not be charged.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="terms-section">
              <h2 className="terms-section-title">8. LIMITATION OF LIABILITY</h2>
              <p className="terms-text">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL TIDYZON BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE PLATFORM OR SERVICES.
              </p>
              <p className="terms-text">
                TIDYZON'S TOTAL LIABILITY TO YOU FOR ANY DAMAGES SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SERVICE THAT GAVE RISE TO SUCH LIABILITY.
              </p>
            </div>

            {/* Disclaimer of Warranties */}
            <div className="terms-section">
              <h2 className="terms-section-title">9. DISCLAIMER OF WARRANTIES</h2>
              <p className="terms-text">
                THE PLATFORM AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
            </div>

            {/* Indemnification */}
            <div className="terms-section">
              <h2 className="terms-section-title">10. INDEMNIFICATION</h2>
              <p className="terms-text">
                You agree to indemnify, defend, and hold harmless Tidyzon and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses, including, without limitation, reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the Platform or Services.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="terms-section">
              <h2 className="terms-section-title">11. THIRD-PARTY SERVICES</h2>
              <p className="terms-text">
                Our Platform may contain links to third-party websites or services that are not owned or controlled by Tidyzon. Tidyzon has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>
            </div>

            {/* Data Collection and Privacy */}
            <div className="terms-section">
              <h2 className="terms-section-title">12. DATA COLLECTION AND PRIVACY</h2>
              <p className="terms-text">
                Your use of our Platform is also governed by our Privacy Policy, which is incorporated by reference into these Terms. Please review our Privacy Policy to understand our practices.
              </p>
            </div>

            {/* Modifications to Terms */}
            <div className="terms-section">
              <h2 className="terms-section-title">13. MODIFICATIONS TO TERMS</h2>
              <p className="terms-text">
                Tidyzon reserves the right to modify these Terms at any time. We will provide notice of any material changes through the Platform or by other means. Your continued use of the Platform after such modifications will constitute your acknowledgment and agreement to the modified Terms.
              </p>
            </div>

            {/* Termination */}
            <div className="terms-section">
              <h2 className="terms-section-title">14. TERMINATION</h2>
              <p className="terms-text">
                Tidyzon reserves the right to terminate or suspend your account and access to the Platform at any time, without prior notice or liability, for any reason.
              </p>
            </div>

            {/* Governing Law */}
            <div className="terms-section">
              <h2 className="terms-section-title">15. GOVERNING LAW</h2>
              <p className="terms-text">
                These Terms shall be governed by and construed in accordance with the laws of the State of Illinois, without regard to its conflict of law provisions.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="terms-section">
              <h2 className="terms-section-title">16. DISPUTE RESOLUTION</h2>
              <p className="terms-text">
                Any dispute arising from or relating to the subject matter of these Terms shall be finally settled in accordance with the laws of the State of Illinois. The courts located in Illinois will have exclusive jurisdiction over any dispute arising out of these Terms.
              </p>
              <p className="terms-text">
                Choose between courts, arbitration, and mediation.
              </p>
            </div>

            {/* Severability */}
            <div className="terms-section">
              <h2 className="terms-section-title">17. SEVERABILITY</h2>
              <p className="terms-text">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
              </p>
            </div>

            {/* Entire Agreement */}
            <div className="terms-section">
              <h2 className="terms-section-title">18. ENTIRE AGREEMENT</h2>
              <p className="terms-text">
                These Terms constitute the entire agreement between you and Tidyzon regarding the Platform and supersede all prior and contemporaneous written or oral agreements.
              </p>
            </div>

            {/* Contact Information */}
            <div className="terms-section">
              <h2 className="terms-section-title">19. CONTACT INFORMATION</h2>
              <p className="terms-text">
                If you have any questions about these Terms, please contact us at support@tidyzon.com.
              </p>
              <p className="terms-text">
                By using Tidyzon's Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsPage
