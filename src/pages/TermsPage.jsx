import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import './TermsPage.css'

const TermsPage = () => {
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
                TidyZon operates an online platform that facilitates the connection between customers and independent service providers ("Providers") who offer on-site services(at your door step), including but not limited to vehicle washing and garbage or recycling bin cleaning. All services are performed at the customer's designated location by independent Providers, who operate as separate entities and are not employees, agents, or representatives of TidyZon.
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
                All service providers operating through the TidyZon platform are independent contractors, not employees, agents, or representatives of TidyZon. TidyZon does not control or direct the manner, method, or means by which service providers perform their work and assumes no responsibility for their actions, omissions, or performance. However, all service providers are required to adhere to TidyZon's strict community guidelines, which establish professional, safety, and quality standards that must be followed while providing services through the platform.
              </p>

              <h3 className="terms-subsection-title">6.5 Eligibility of Refunds</h3>
              <p className="terms-text">TidyZon may issue refunds under the following conditions:</p>
              
              <h4 className="terms-subsection-subtitle">Service Not Performed</h4>
              <p className="terms-text">
                The assigned Provider did not arrive or perform any portion of the scheduled service, and the customer reported the issue within the required timeframe.
              </p>

              <h4 className="terms-subsection-subtitle">Incomplete Service</h4>
              <p className="terms-text">
                A significant portion of the service was not completed (e.g., only exterior wash completed when a full interior & exterior package was purchased), and the customer submits clear evidence within 24 hours of service completion.
              </p>

              <h4 className="terms-subsection-subtitle">Service Quality Issues</h4>
              <p className="terms-text">
                If the completed service shows clear deficiencies inconsistent with the description of the purchased package, and the customer provides supporting photos within 24 hours, TidyZon may issue a partial or full refund at its discretion.
              </p>

              <h4 className="terms-subsection-subtitle">Provider Cancellation</h4>
              <p className="terms-text">
                If the assigned Provider cancels and TidyZon cannot reassign another Provider, the customer will receive a full refund.
              </p>

              <h4 className="terms-subsection-subtitle">Duplicate Charges / Billing Errors</h4>
              <p className="terms-text">
                Any accidental duplicate charge or billing error attributable to TidyZon will be fully refunded.
              </p>

              <h4 className="terms-subsection-subtitle">Approved Weather-Related Cancellations</h4>
              <p className="terms-text">
                If unsafe or extreme weather prevents service and rescheduling is not possible, the customer may receive a refund.
              </p>

              <h3 className="terms-subsection-title">6.6 Background Verification</h3>
              <p className="terms-text">
                TidyZon conducts background verification on all independent service providers ("Providers") who use the platform to offer mobile car-wash and related on-site services. These verification measures are implemented solely to enhance the safety and confidence of our customers. Providers are required to successfully complete TidyZon's verification process before accepting or performing any service requests through the platform.
              </p>

              <h4 className="terms-subsection-subtitle">1. Identity Verification</h4>
              <p className="terms-text">
                TidyZon verifies the Provider's identity by reviewing government-issued identification. This process may include confirming:
              </p>
              <ul className="terms-list">
                <li>Full legal name</li>
                <li>Date of birth</li>
                <li>Valid, non-expired photo identification</li>
                <li>Current residential address</li>
              </ul>

              <h4 className="terms-subsection-subtitle">2. Driving & Motor Vehicle Record Screening</h4>
              <p className="terms-text">
                Because Providers travel to customer locations, TidyZon reviews each Provider's driving eligibility. This may include:
              </p>
              <ul className="terms-list">
                <li>Verification of a valid driver's license</li>
                <li>Review of past driving history</li>
                <li>Confirmation that the Provider has no recent major violations, including but not limited to DUIs, reckless driving, or license suspensions</li>
              </ul>

              <h4 className="terms-subsection-subtitle">3. Criminal Background Check</h4>
              <p className="terms-text">
                To promote customer safety, TidyZon conducts a criminal-history screening through authorized third-party providers. This may include checks for:
              </p>
              <ul className="terms-list">
                <li>Violent or assault-related offenses</li>
                <li>Theft, fraud, or property-related crimes</li>
                <li>Sexual offenses</li>
                <li>Other criminal convictions deemed disqualifying under TidyZon's safety standards</li>
              </ul>
              <p className="terms-text">
                Providers with disqualifying criminal histories may be denied access to the platform.
              </p>

              <h4 className="terms-subsection-subtitle">4. Work Authorization or Business Verification</h4>
              <p className="terms-text">
                Providers must demonstrate legal eligibility to operate as independent contractors. This may include:
              </p>
              <ul className="terms-list">
                <li>Proof of legal authorization to work, or</li>
                <li>Proof of registration as a legally recognized business entity.</li>
              </ul>

              <h4 className="terms-subsection-subtitle">5. Insurance Compliance</h4>
              <p className="terms-text">
                Where applicable, TidyZon may require Providers to carry valid personal auto insurance or business liability insurance. Providers must supply proof of coverage when requested.
              </p>

              <h4 className="terms-subsection-subtitle">6. Ongoing Monitoring</h4>
              <p className="terms-text">
                TidyZon reserves the right to periodically review or re-verify Provider information to ensure continued compliance with safety and eligibility obligations.
              </p>

              <h4 className="terms-subsection-subtitle">7. Provider Obligations</h4>
              <p className="terms-text">Providers agree to:</p>
              <ul className="terms-list">
                <li>Submit truthful and accurate information during verification</li>
                <li>Maintain valid documentation required for platform use</li>
                <li>Notify TidyZon immediately of any changes affecting eligibility, including license issues, criminal charges, or loss of insurance</li>
                <li>Cooperate with any re-verification process deemed necessary by TidyZon</li>
              </ul>

              <h4 className="terms-subsection-subtitle">8. No Guarantee or Warranty</h4>
              <p className="terms-text">
                While TidyZon performs these verification checks to enhance customer safety, TidyZon does not guarantee the character, performance, or conduct of any Provider. Providers operate as independent contractors and are not employees, agents, or representatives of TidyZon. TidyZon is not responsible for any actions taken by Providers outside the scope of the services arranged through the platform.
              </p>
            </div>

            {/* SMS Terms */}
            <div id="sms-terms" className="terms-section">
              <h2 className="terms-section-title">7. SMS TERMS & CONDITIONS</h2>
              <p className="terms-text">
               
              </p>
              <p className="terms-text">
                These SMS Program Terms apply to SMS and MMS text messages sent by Tidyzon, including messages sent using an autodialer or other automated technology. Tidyzon may send messages from multiple phone numbers or short codes.
              </p>

              <h3 className="terms-subsection-title">1) What you will receive</h3>
              <p className="terms-text">If you opt in, Tidyzon may send messages such as:</p>
              <ul className="terms-list">
                <li>One-time passcodes and account security verification</li>
                <li>Booking confirmations, reminders, and status updates</li>
                <li>Provider arrival notifications, service updates, and cancellations</li>
                <li>Customer support communications you request</li>
              </ul>

              <h3 className="terms-subsection-title">2) How you opt in</h3>
              <p className="terms-text">You opt in only when you take an affirmative action, such as:</p>
              <ul className="terms-list">
                <li>Checking an SMS consent box in the app or on the website</li>
                <li>Enabling SMS in your notification settings</li>
                <li>Providing your number for a specific text feature and confirming consent where prompted</li>
              </ul>
              <p className="terms-text">
                <strong>Consent rules</strong>
              </p>
              <ul className="terms-list">
                <li>Message frequency varies based on your activity.</li>
                <li>Message and data rates may apply.</li>
                <li>Your consent to receive texts is not required to purchase.</li>
              </ul>

              <h3 className="terms-subsection-title">3) Message frequency</h3>
              <p className="terms-text">
                Message frequency varies. It depends on account activity, booking activity, and support requests.
              </p>

              <h3 className="terms-subsection-title">4) Costs</h3>
              <p className="terms-text">
                Tidyzon does not charge for texts. Your carrier may charge message and data rates.
              </p>

              <h3 className="terms-subsection-title">5) Opt out</h3>
              <p className="terms-text">You can opt out at any time by replying STOP.</p>
              <p className="terms-text">
                You can also use common opt-out keywords such as END, CANCEL, UNSUBSCRIBE, or QUIT.
              </p>
              <p className="terms-text">
                <strong>After you opt out:</strong>
              </p>
              <ul className="terms-list">
                <li>You will receive one confirmation message.</li>
                <li>You will stop receiving Tidyzon texts, including security codes, until you opt back in.</li>
              </ul>

              <h3 className="terms-subsection-title">6) Opt back in</h3>
              <p className="terms-text">To opt back in:</p>
              <ul className="terms-list">
                <li>Reply START (or UNSTOP, where supported), or</li>
                <li>Re-enable SMS in the app settings.</li>
              </ul>

              <h3 className="terms-subsection-title">7) Help</h3>
              <p className="terms-text">Reply HELP for help, or contact Tidyzon support at:</p>
              <ul className="terms-list">
                <li>Email: support@tidyzon.com</li>
                <li>In-app support: Tidyzon app support chat</li>
              </ul>

              <h3 className="terms-subsection-title">8) Carrier and delivery</h3>
              <p className="terms-text">
                Carriers are not liable for delayed or undelivered messages. Message delivery is not guaranteed and depends on your carrier and network availability.
              </p>

              <h3 className="terms-subsection-title">9) Changes</h3>
              <p className="terms-text">
                Tidyzon may update these SMS Program Terms. Continued enrollment after the effective date constitutes acceptance of the revised terms.
              </p>

              <h3 className="terms-subsection-title">10) Privacy</h3>
              <p className="terms-text">
                Tidyzon handles phone numbers and SMS data as described in the Tidyzon Privacy Policy and the Tidyzon SMS Privacy Notice below.
              </p>

              <h3 className="terms-subsection-title">TidyZon SMS Privacy Policy</h3>
              <p className="terms-text">
                This notice explains how Tidyzon handles your phone number and SMS related data.
              </p>

              <h4 className="terms-subsection-subtitle">What we collect for SMS</h4>
              <ul className="terms-list">
                <li>Phone number</li>
                <li>Opt-in and opt-out records (timestamp, source, and method)</li>
                <li>Message metadata (timestamps, delivery status)</li>
                <li>Message content needed to provide the service (example: OTP, booking updates, support threads)</li>
              </ul>

              <h4 className="terms-subsection-subtitle">How we use it</h4>
              <ul className="terms-list">
                <li>Provide security and account access (example: OTP)</li>
                <li>Send booking and service updates you request</li>
                <li>Provide customer support</li>
                <li>Prevent fraud and abuse</li>
                <li>Meet legal and compliance obligations</li>
              </ul>

              <h4 className="terms-subsection-subtitle">Sharing</h4>
              <p className="terms-text">We may share limited SMS related data with:</p>
              <ul className="terms-list">
                <li>Messaging and infrastructure vendors that deliver messages on our behalf</li>
                <li>Providers and contractors are only needed to fulfill a booking</li>
                <li>Authorities, when required by law</li>
              </ul>
              <p className="terms-text">
                Vendors must protect your information and may use it only to provide services to Tidyzon.
              </p>

              <h4 className="terms-subsection-subtitle">No selling, no marketing, sharing of mobile data</h4>
              <ul className="terms-list">
                <li>Tidyzon does not sell your phone number.</li>
                <li>Tidyzon does not share mobile information for third-party marketing or promotional purposes.</li>
              </ul>

              <h4 className="terms-subsection-subtitle">Retention</h4>
              <p className="terms-text">We keep SMS related data only as long as needed for:</p>
              <ul className="terms-list">
                <li>Service delivery</li>
                <li>Security and fraud prevention</li>
                <li>Compliance and dispute resolution</li>
              </ul>

              <h4 className="terms-subsection-subtitle">Your choices</h4>
              <ul className="terms-list">
                <li>Reply STOP to opt out.</li>
                <li>Manage notification preferences in the app.</li>
                <li>Request access, correction, or deletion where applicable by contacting support.</li>
              </ul>

              <h4 className="terms-subsection-subtitle">Your Rights</h4>
              <p className="terms-text">Depending on your location, you may have the right to:</p>
              <ul className="terms-list">
                <li>Access, correct, or delete your personal information</li>
                <li>Withdraw consent for SMS communications</li>
                <li>Request information about data usage and sharing</li>
              </ul>
              <p className="terms-text">
                Requests can be made through the TidyZon app or customer support.
              </p>

              <h4 className="terms-subsection-subtitle">Changes to This Policy</h4>
              <p className="terms-text">
                TidyZon may update this Privacy Policy from time to time. Continued use of the app constitutes acceptance of the revised policy.
              </p>
            </div>

            {/* Customer Service Agreement */}
            <div className="terms-section">
              <h2 className="terms-section-title">8. CUSTOMER SERVICE AGREEMENT</h2>
              <p className="terms-text">
                Review the Customer Service Agreement governing use of our services (<Link to="/customer-service-agreement" className="terms-link">Customer service agreement</Link>).
              </p>
            </div>

            {/* Service Provider Agreement */}
            <div className="terms-section">
              <h2 className="terms-section-title">9. SERVICE PROVIDER AGREEMENT</h2>
              <p className="terms-text">
                Review the Service Provider Agreement governing use of our services (<Link to="/service-provider-agreement" className="terms-link">Service provider agreement</Link>).
              </p>
            </div>

            {/* Payment Terms */}
            <div className="terms-section">
              <h2 className="terms-section-title">10. PAYMENT TERMS</h2>
              
              <h3 className="terms-subsection-title">10.1 Pricing</h3>
              <p className="terms-text">
                Service prices will be displayed on the Platform before you confirm your booking. Prices may vary based on service type, location, and other factors.
              </p>

              <h3 className="terms-subsection-title">10.2 Payment Processing</h3>
              <p className="terms-text">
                All payments are processed through Stripe, a third-party payment processor. Tidyzon does not store your payment information or details specific to payments. By making a payment, you agree to Stripe's terms of service and privacy policy.
              </p>

              <h3 className="terms-subsection-title">10.3 Refunds</h3>
              <p className="terms-text">
                Refund policies will be specified at the time of booking. Generally, if no service provider accepts your service request, you will not be charged.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="terms-section">
              <h2 className="terms-section-title">11. LIMITATION OF LIABILITY</h2>
              <p className="terms-text">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL TIDYZON BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE PLATFORM OR SERVICES.
              </p>
              <p className="terms-text">
                TIDYZON'S TOTAL LIABILITY TO YOU FOR ANY DAMAGES SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SERVICE THAT GAVE RISE TO SUCH LIABILITY.
              </p>
            </div>

            {/* Disclaimer of Warranties */}
            <div className="terms-section">
              <h2 className="terms-section-title">12. DISCLAIMER OF WARRANTIES</h2>
              <p className="terms-text">
                THE PLATFORM AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
            </div>

            {/* Indemnification */}
            <div className="terms-section">
              <h2 className="terms-section-title">13. INDEMNIFICATION</h2>
              <p className="terms-text">
                You agree to indemnify, defend, and hold harmless Tidyzon and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses, including, without limitation, reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the Platform or Services.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="terms-section">
              <h2 className="terms-section-title">14. THIRD-PARTY SERVICES</h2>
              <p className="terms-text">
                Our Platform may contain links to third-party websites or services that are not owned or controlled by Tidyzon. Tidyzon has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>
            </div>

            {/* Data Collection and Privacy */}
            <div className="terms-section">
              <h2 className="terms-section-title">15. DATA COLLECTION AND PRIVACY</h2>
              <p className="terms-text">
                Your use of our Platform is also governed by our Privacy Policy, which is incorporated by reference into these Terms. Please review our Privacy Policy to understand our practices.
              </p>
            </div>

            {/* Modifications to Terms */}
            <div className="terms-section">
              <h2 className="terms-section-title">16. MODIFICATIONS TO TERMS</h2>
              <p className="terms-text">
                Tidyzon reserves the right to modify these Terms at any time. We will provide notice of any material changes through the Platform or by other means. Your continued use of the Platform after such modifications will constitute your acknowledgment and agreement to the modified Terms.
              </p>
            </div>

            {/* Termination */}
            <div className="terms-section">
              <h2 className="terms-section-title">17. TERMINATION</h2>
              <p className="terms-text">
                Tidyzon reserves the right to terminate or suspend your account and access to the Platform at any time, without prior notice or liability, for any reason.
              </p>
            </div>

            {/* Governing Law */}
            <div className="terms-section">
              <h2 className="terms-section-title">18. GOVERNING LAW</h2>
              <p className="terms-text">
                These Terms shall be governed by and construed in accordance with the laws of the State of Illinois, without regard to its conflict of law provisions.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="terms-section">
              <h2 className="terms-section-title">19. DISPUTE RESOLUTION</h2>
              <p className="terms-text">
                Any dispute arising from or relating to the subject matter of these Terms shall be finally settled in accordance with the laws of the State of Illinois. The courts located in Illinois will have exclusive jurisdiction over any dispute arising out of these Terms.
              </p>
            </div>

            {/* Severability */}
            <div className="terms-section">
              <h2 className="terms-section-title">20. SEVERABILITY</h2>
              <p className="terms-text">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
              </p>
            </div>

            {/* Entire Agreement */}
            <div className="terms-section">
              <h2 className="terms-section-title">21. ENTIRE AGREEMENT</h2>
              <p className="terms-text">
                These Terms constitute the entire agreement between you and Tidyzon regarding the Platform and supersede all prior and contemporaneous written or oral agreements.
              </p>
            </div>

            {/* Contact Information */}
            <div className="terms-section">
              <h2 className="terms-section-title">22. CONTACT INFORMATION</h2>
              <p className="terms-text">
                If you have any questions about these Terms, please contact us at info@tidyzon.com.
              </p>
              <p className="terms-text">
                By using Tidyzon's Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>

            {/* Scroll to Top Button */}
            <div className="terms-scroll-to-top-container">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="terms-scroll-to-top-btn"
                aria-label="Scroll to top"
              >
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
