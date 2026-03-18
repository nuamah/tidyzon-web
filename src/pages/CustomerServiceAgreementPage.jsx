import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowUp } from 'lucide-react'
import './TermsPage.css'

const CustomerServiceAgreementPage = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className="terms-page">
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="container">
          <div className="terms-hero-content">
            <h1 className="terms-hero-title">Customer Service Agreement</h1>
            <p className="terms-hero-subtitle">Effective Date: As of account creation date</p>
          </div>
        </div>
      </section>

      {/* Agreement Content */}
      <section className="terms-content">
        <div className="container">
          <div className="terms-wrapper">
            {/* Back Button */}
            <button onClick={handleBack} className="terms-back-button-content">
              <ArrowLeft className="back-icon" />
              <span>Back</span>
            </button>
            
            {/* Introduction */}
            <div className="terms-section">
              <p className="terms-text">
                THIS CUSTOMER SERVICE AGREEMENT (the "Agreement") is entered into between Tidyzon, Inc., an Illinois corporation ("Tidyzon"), and the individual or entity that registers as a customer on the Tidyzon Platform ("Customer").
              </p>
              <p className="terms-text">
                <strong>EFFECTIVE DATE:</strong> This Agreement is effective as of the date Customer creates an account on the Tidyzon Platform.
              </p>
            </div>

            {/* Definitions */}
            <div className="terms-section">
              <h2 className="terms-section-title">1. DEFINITIONS</h2>
              
              <h3 className="terms-subsection-title">1.1 "Platform"</h3>
              <p className="terms-text">
                means Tidyzon's online platform, including its website and mobile application, which connects Customers with Service Providers.
              </p>

              <h3 className="terms-subsection-title">1.2 "Service Provider"</h3>
              <p className="terms-text">
                means an independent contractor who has entered into an agreement with Tidyzon to provide services to Customers through the Platform.
              </p>

              <h3 className="terms-subsection-title">1.3 "Services"</h3>
              <p className="terms-text">
                means the on-site services offered through the Platform, including but not limited to car washing services and garbage/recycle can cleaning services.
              </p>

              <h3 className="terms-subsection-title">1.4 "Customer"</h3>
              <p className="terms-text">
                means the individual or entity that registers as a customer on the Tidyzon Platform.
              </p>
            </div>

            {/* Platform Services */}
            <div className="terms-section">
              <h2 className="terms-section-title">2. PLATFORM SERVICES</h2>
              
              <h3 className="terms-subsection-title">2.1 Platform Access</h3>
              <p className="terms-text">
                Tidyzon grants Customers a limited, non-exclusive, non-transferable right to access and use the Platform to request Services from Service Providers.
              </p>

              <h3 className="terms-subsection-title">2.2 Service Providers</h3>
              <p className="terms-text">Customer acknowledges and agrees that:</p>
              <ul className="terms-list">
                <li>Service Providers are independent contractors and not employees of Tidyzon</li>
                <li>Tidyzon does not provide the Services directly but facilitates connections between Customers and Service Providers</li>
                <li>Service Providers operate their own businesses and set their own schedules</li>
                <li>Tidyzon makes no guarantees about Service Provider availability</li>
              </ul>

              <h3 className="terms-subsection-title">2.3 Service Requests</h3>
              <p className="terms-text">Customer may request Services through the Platform for:</p>
              <ul className="terms-list">
                <li><strong>Immediate service</strong> - seeking a Service Provider who can perform Services as soon as possible</li>
                <li><strong>Scheduled service</strong> - booking a Service Provider for a future date and time</li>
              </ul>

              <h3 className="terms-subsection-title">2.4 Service Provider Assignment</h3>
              <p className="terms-text">For each service request:</p>
              <ul className="terms-list">
                <li>Tidyzon will notify nearby Service Providers of the service opportunity</li>
                <li>Service Providers may accept service requests at their discretion</li>
                <li>Customer will be notified when a Service Provider accepts their request</li>
                <li>If no Service Provider accepts the request, Customer will be notified and no charge will apply</li>
              </ul>

              <h3 className="terms-subsection-title">2.5 Cancellations</h3>
              <p className="terms-text">
                For each cancellation request:
              </p>
              <p className="terms-text">
                Blah
              </p>
              <p className="terms-text">
                blah
              </p>
            </div>

            {/* Customer Obligations */}
            <div className="terms-section">
              <h2 className="terms-section-title">3. CUSTOMER OBLIGATIONS</h2>
              
              <h3 className="terms-subsection-title">3.1 Account Information</h3>
              <p className="terms-text">
                Customers agrees to provide accurate, current, and complete information during registration and to update such information as necessary.
              </p>

              <h3 className="terms-subsection-title">3.2 Service Details</h3>
              <p className="terms-text">When requesting Services, Customer agrees to provide accurate information regarding:</p>
              <ul className="terms-list">
                <li>Customer name and contact information</li>
                <li>Service location address</li>
                <li>Vehicle make and model (for car washing services)</li>
                <li>Photos of the vehicle or items to be serviced</li>
                <li>Availability of outside water faucet</li>
                <li>Any other information reasonably requested by Tidyzon</li>
              </ul>

              <h3 className="terms-subsection-title">3.3 Property Access</h3>
              <p className="terms-text">Customer agrees to:</p>
              <ul className="terms-list">
                <li>Provide reasonable access to the Service Provider to perform the requested Services</li>
                <li>Ensure the area where Services will be performed is safe and accessible</li>
                <li>Grant permission for Service Providers to use the Customer's outdoor water faucet when available and necessary for the Services</li>
              </ul>

              <h3 className="terms-subsection-title">3.4 Compliance with Laws</h3>
              <p className="terms-text">
                Customer agrees to comply with all applicable laws, regulations, and ordinances related to the Services.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="terms-section">
              <h2 className="terms-section-title">4. PAYMENT TERMS</h2>
              
              <h3 className="terms-subsection-title">4.1 Pricing</h3>
              <p className="terms-text">
                Service prices will be displayed on the Platform before Customer confirms a booking. Prices may vary based on service type, location, and other factors.
              </p>

              <h3 className="terms-subsection-title">4.2 Payment Processing</h3>
              <p className="terms-text">
                All payments will be processed through Stripe, a third-party payment processor. Customer agrees to pay all fees for Services requested through the Platform.
              </p>

              <h3 className="terms-subsection-title">4.3 Payment Timing</h3>
              <p className="terms-text">
                Customer will be charged when a Service Provider accepts their service request.
              </p>

              <h3 className="terms-subsection-title">4.4 Cancellations</h3>
              <p className="terms-text">
                Cancellation policies will be provided at the time of booking. Certain cancellations may be subject to fees.
              </p>

              <h3 className="terms-subsection-title">4.5 Refunds</h3>
              <p className="terms-text">
                If no Service Provider accepts Customer's service request, Customer will not be charged. Other refund situations will be handled according to the refund policy in effect at the time of the service request.
              </p>
            </div>

            {/* Relationship of Parties */}
            <div className="terms-section">
              <h2 className="terms-section-title">5. RELATIONSHIP OF PARTIES</h2>
              
              <h3 className="terms-subsection-title">5.1 No Employment Relationship</h3>
              <p className="terms-text">
                Tidyzon is not an employer of Service Providers. Service Providers are independent contractors who have entered into separate agreements with Tidyzon.
              </p>

              <h3 className="terms-subsection-title">5.2 No Agency</h3>
              <p className="terms-text">
                Nothing in this Agreement creates any agency, joint venture, partnership, or other form of joint enterprise between Customer and Tidyzon.
              </p>
            </div>

            {/* Liability Limitations */}
            <div className="terms-section">
              <h2 className="terms-section-title">6. LIABILITY LIMITATIONS</h2>
              
              <h3 className="terms-subsection-title">6.1 Maximum Liability</h3>
              <p className="terms-text">
                To the maximum extent permitted by law, Tidyzon's liability to Customer for any damages arising from or related to this Agreement shall not exceed the amount paid by Customer for the specific Service that gave rise to such liability.
              </p>

              <h3 className="terms-subsection-title">6.2 Exclusion of Damages</h3>
              <p className="terms-text">
                In no event will Tidyzon be liable for any consequential, incidental, indirect, special, punitive, or exemplary damages, including lost profits, business interruption, or loss of information, arising out of or related to this Agreement.
              </p>

              <h3 className="terms-subsection-title">6.3 Service Provider Actions</h3>
              <p className="terms-text">
                Tidyzon is not liable for the acts or omissions of Service Providers. Complaints regarding Services should be reported to Tidyzon but resolution of such complaints is at Tidyzon's discretion.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="terms-section">
              <h2 className="terms-section-title">7. DISCLAIMERS</h2>
              
              <h3 className="terms-subsection-title">7.1 Service Provider Availability</h3>
              <p className="terms-text">
                Tidyzon does not guarantee the availability of Service Providers at any specific time or location.
              </p>

              <h3 className="terms-subsection-title">7.2 Service Quality</h3>
              <p className="terms-text">
                While Tidyzon endeavors to connect Customers with qualified Service Providers, Tidyzon does not guarantee the quality of any Services performed.
              </p>

              <h3 className="terms-subsection-title">7.3 Platform Availability</h3>
              <p className="terms-text">
                Tidyzon does not guarantee that the Platform will be available at all times or will be error-free.
              </p>
            </div>

            {/* Term and Termination */}
            <div className="terms-section">
              <h2 className="terms-section-title">8. TERM AND TERMINATION</h2>
              
              <h3 className="terms-subsection-title">8.1 Term</h3>
              <p className="terms-text">
                This Agreement will remain in effect until terminated by either party.
              </p>

              <h3 className="terms-subsection-title">8.2 Termination by Customer</h3>
              <p className="terms-text">
                Customers may terminate this Agreement at any time by closing their account.
              </p>

              <h3 className="terms-subsection-title">8.3 Termination by Tidyzon</h3>
              <p className="terms-text">
                Tidyzon may terminate this Agreement or suspend Customer's access to the Platform at any time for any reason, including but not limited to Customer's violation of this Agreement.
              </p>

              <h3 className="terms-subsection-title">8.4 Effect of Termination</h3>
              <p className="terms-text">
                Upon termination, Customer's right to access and use the Platform will immediately cease.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="terms-section">
              <h2 className="terms-section-title">9. INTELLECTUAL PROPERTY</h2>
              
              <h3 className="terms-subsection-title">9.1 Ownership</h3>
              <p className="terms-text">
                All intellectual property rights in the Platform, including software, features, and content, are owned by Tidyzon or its licensors.
              </p>

              <h3 className="terms-subsection-title">9.2 License</h3>
              <p className="terms-text">
                Customers are granted a limited, non-exclusive, non-transferable license to use the Platform for its intended purpose.
              </p>

              <h3 className="terms-subsection-title">9.3 Restrictions</h3>
              <p className="terms-text">
                Customers may not copy, modify, distribute, sell, or lease any part of the Platform or its content.
              </p>
            </div>

            {/* Privacy */}
            <div className="terms-section">
              <h2 className="terms-section-title">10. PRIVACY</h2>
              
              <h3 className="terms-subsection-title">10.1 Data Collection</h3>
              <p className="terms-text">
                Tidyzon collects personal information from Customers as described in the Privacy Policy, including name, address, phone number, vehicle information, and location.
              </p>

              <h3 className="terms-subsection-title">10.2 Data Use</h3>
              <p className="terms-text">
                Customer's personal information will be used to provide the Services, process payments, communicate with Customer, and improve the Platform.
              </p>

              <h3 className="terms-subsection-title">10.3 Payment Information</h3>
              <p className="terms-text">
                Payment information is processed through Stripe. Tidyzon does not store or have access to Customer's full payment details.
              </p>
            </div>

            {/* General Provisions */}
            <div className="terms-section">
              <h2 className="terms-section-title">11. GENERAL PROVISIONS</h2>
              
              <h3 className="terms-subsection-title">11.1 Governing Law</h3>
              <p className="terms-text">
                This Agreement shall be governed by and construed in accordance with the laws of the State of Illinois, without giving effect to any principles of conflicts of law.
              </p>

              <h3 className="terms-subsection-title">11.2 Dispute Resolution</h3>
              <p className="terms-text">
                Any dispute arising from or relating to this Agreement shall be resolved in the courts located in Illinois.
              </p>

              <h3 className="terms-subsection-title">11.3 Entire Agreement</h3>
              <p className="terms-text">
                This Agreement, together with the Terms and Conditions and Privacy Policy, constitutes the entire agreement between Customer and Tidyzon regarding the subject matter hereof.
              </p>

              <h3 className="terms-subsection-title">11.4 Modifications</h3>
              <p className="terms-text">
                Tidyzon reserves the right to modify this Agreement at any time. Continued use of the Platform after such modifications constitutes acceptance of the modified Agreement.
              </p>

              <h3 className="terms-subsection-title">11.5 Severability</h3>
              <p className="terms-text">
                If any provision of this Agreement is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that this Agreement will otherwise remain in full force and effect.
              </p>

              <h3 className="terms-subsection-title">11.6 Assignment</h3>
              <p className="terms-text">
                Customers may not assign this Agreement without Tidyzon's prior written consent. Tidyzon may assign this Agreement without Customer's consent.
              </p>

              <h3 className="terms-subsection-title">11.7 Force Majeure</h3>
              <p className="terms-text">
                Tidyzon will not be liable for any failure or delay in performance due to circumstances beyond its reasonable control.
              </p>
            </div>

            {/* Conclusion */}
            <div className="terms-section">
              <p className="terms-text">
                By creating an account on the Tidyzon Platform, Customers acknowledge that they have read, understood, and agree to be bound by this Customer Service Agreement.
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

export default CustomerServiceAgreementPage
