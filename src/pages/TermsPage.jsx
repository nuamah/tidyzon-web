import React from 'react'
import { Link } from 'react-router-dom'
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
                By accessing or using our Platform, you agree to be bound by these Terms, including our <a href="#sms-terms" className="terms-inline-link">SMS Terms &amp; Conditions</a> when you use text messaging features. If you disagree with any part of these Terms, you may not access the Platform.
              </p>
              <p className="terms-text">
                Depending on how you use the Platform, additional agreements may apply: our{' '}
                <Link to="/customer-service-agreement" className="terms-inline-link">Customer Service Agreement</Link>{' '}
                (for customers who book services) and our{' '}
                <Link to="/service-provider-agreement" className="terms-inline-link">Service Provider Agreement</Link>{' '}
                (for independent contractors who provide services). The Privacy Policy describes how we handle personal information—it does not replace these agreements.
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
                Service providers are independent contractors and not employees of Tidyzon. Tidyzon does not guarantee the availability of any particular service provider. Anyone who provides services through the Platform is bound by the{' '}
                <Link to="/service-provider-agreement" className="terms-inline-link">Service Provider Agreement</Link>.
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

            {/* SMS Terms */}
            <div id="sms-terms" className="terms-section">
              <h2 className="terms-section-title">7. TIDYZON SMS TERMS & CONDITIONS</h2>
              <p className="terms-text">
                <strong>Effective date: 12/23/2025</strong>
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
                Tidyzon handles phone numbers and SMS data as described in the Tidyzon Privacy Policy and our <Link to="/privacy#sms-privacy" className="terms-inline-link">SMS Privacy Notice</Link>.
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

            {/* Payment Terms */}
            <div className="terms-section">
              <h2 className="terms-section-title">8. PAYMENT TERMS</h2>
              
              <h3 className="terms-subsection-title">8.1 Pricing</h3>
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
              <h2 className="terms-section-title">9. LIMITATION OF LIABILITY</h2>
              <p className="terms-text">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL TIDYZON BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE PLATFORM OR SERVICES.
              </p>
              <p className="terms-text">
                TIDYZON'S TOTAL LIABILITY TO YOU FOR ANY DAMAGES SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SERVICE THAT GAVE RISE TO SUCH LIABILITY.
              </p>
            </div>

            {/* Disclaimer of Warranties */}
            <div className="terms-section">
              <h2 className="terms-section-title">10. DISCLAIMER OF WARRANTIES</h2>
              <p className="terms-text">
                THE PLATFORM AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
            </div>

            {/* Indemnification */}
            <div className="terms-section">
              <h2 className="terms-section-title">11. INDEMNIFICATION</h2>
              <p className="terms-text">
                You agree to indemnify, defend, and hold harmless Tidyzon and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses, including, without limitation, reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the Platform or Services.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="terms-section">
              <h2 className="terms-section-title">12. THIRD-PARTY SERVICES</h2>
              <p className="terms-text">
                Our Platform may contain links to third-party websites or services that are not owned or controlled by Tidyzon. Tidyzon has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>
            </div>

            {/* Data Collection and Privacy */}
            <div className="terms-section">
              <h2 className="terms-section-title">13. DATA COLLECTION AND PRIVACY</h2>
              <p className="terms-text">
                Your use of our Platform is also governed by our Privacy Policy, which is incorporated by reference into these Terms. For text messaging, our <a href="#sms-terms" className="terms-inline-link">SMS Terms &amp; Conditions</a> and the <Link to="/privacy#sms-privacy" className="terms-inline-link">SMS Privacy Notice</Link> also apply. Please review our Privacy Policy to understand our practices.
              </p>
            </div>

            {/* Modifications to Terms */}
            <div className="terms-section">
              <h2 className="terms-section-title">14. MODIFICATIONS TO TERMS</h2>
              <p className="terms-text">
                Tidyzon reserves the right to modify these Terms at any time. We will provide notice of any material changes through the Platform or by other means. Your continued use of the Platform after such modifications will constitute your acknowledgment and agreement to the modified Terms.
              </p>
            </div>

            {/* Termination */}
            <div className="terms-section">
              <h2 className="terms-section-title">15. TERMINATION</h2>
              <p className="terms-text">
                Tidyzon reserves the right to terminate or suspend your account and access to the Platform at any time, without prior notice or liability, for any reason.
              </p>
            </div>

            {/* Governing Law */}
            <div className="terms-section">
              <h2 className="terms-section-title">16. GOVERNING LAW</h2>
              <p className="terms-text">
                These Terms shall be governed by and construed in accordance with the laws of the State of Illinois, without regard to its conflict of law provisions.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="terms-section">
              <h2 className="terms-section-title">17. DISPUTE RESOLUTION</h2>
              <p className="terms-text">
                Any dispute arising from or relating to the subject matter of these Terms shall be finally settled in accordance with the laws of the State of Illinois. The courts located in Illinois will have exclusive jurisdiction over any dispute arising out of these Terms.
              </p>
            </div>

            {/* Severability */}
            <div className="terms-section">
              <h2 className="terms-section-title">18. SEVERABILITY</h2>
              <p className="terms-text">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
              </p>
            </div>

            {/* Entire Agreement */}
            <div className="terms-section">
              <h2 className="terms-section-title">19. ENTIRE AGREEMENT</h2>
              <p className="terms-text">
                These Terms constitute the entire agreement between you and Tidyzon regarding the Platform and supersede all prior and contemporaneous written or oral agreements.
              </p>
            </div>

            {/* Contact Information */}
            <div className="terms-section">
              <h2 className="terms-section-title">20. CONTACT INFORMATION</h2>
              <p className="terms-text">
                If you have any questions about these Terms, please contact us at info@tidyzon.com.
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
