import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowUp } from 'lucide-react'
import './TermsPage.css'

const ServiceProviderAgreementPage = () => {
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
            <h1 className="terms-hero-title">Service Provider Agreement</h1>
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
                THIS SERVICE PROVIDER AGREEMENT (the "Agreement") is entered into between Tidyzon, Inc., an Illinois corporation ("Tidyzon"), and the individual or entity that registers as a service provider on the Tidyzon Platform ("Service Provider").
              </p>
              <p className="terms-text">
                <strong>EFFECTIVE DATE:</strong> This Agreement is effective as of the date Service Provider creates an account on the Tidyzon Platform.
              </p>
            </div>

            {/* Definitions */}
            <div className="terms-section">
              <h2 className="terms-section-title">1. DEFINITIONS</h2>
              
              <h3 className="terms-subsection-title">1.1 "Customer"</h3>
              <p className="terms-text">
                means an individual or entity that requests Services through the Platform.
              </p>

              <h3 className="terms-subsection-title">1.2 "Platform"</h3>
              <p className="terms-text">
                means Tidyzon's online platform, including its website and mobile application, which connects Customers with Service Providers.
              </p>

              <h3 className="terms-subsection-title">1.3 "Services"</h3>
              <p className="terms-text">
                means the on-site services offered through the Platform, including but not limited to car washing services and garbage/recycle can cleaning services.
              </p>
            </div>

            {/* Independent Contractor Relationship */}
            <div className="terms-section">
              <h2 className="terms-section-title">2. INDEPENDENT CONTRACTOR RELATIONSHIP</h2>
              
              <h3 className="terms-subsection-title">2.1 Independent Contractor Status</h3>
              <p className="terms-text">
                Service Provider is an independent contractor and not an employee, agent, joint venturer, or partner of Tidyzon. Nothing in this Agreement shall be interpreted or construed as creating or establishing an employment relationship between Tidyzon and Service Provider.
              </p>

              <h3 className="terms-subsection-title">2.2 No Control</h3>
              <p className="terms-text">Tidyzon has no control over Service Provider or Service Provider's employees, agents, or operations. Tidyzon will not:</p>
              <ul className="terms-list">
                <li>Control Service Provider's manner or means of performing Services</li>
                <li>Require Service Provider to work specific hours or shifts</li>
                <li>Require Service Provider to accept any particular service request</li>
                <li>Provide Service Provider with training on how to perform Services</li>
                <li>Provide Service Provider with tools, equipment, or supplies needed to perform Services</li>
              </ul>

              <h3 className="terms-subsection-title">2.3 No Benefits</h3>
              <p className="terms-text">
                Service Provider is not eligible for and shall not receive any employee benefits from Tidyzon, including but not limited to health insurance, vacation, overtime, or retirement benefits.
              </p>

              <h3 className="terms-subsection-title">2.4 Tax Responsibilities</h3>
              <p className="terms-text">Service Provider is responsible for all tax reporting, tax payments, and other tax-related obligations arising from Service Provider's relationship with Tidyzon, including:</p>
              <ul className="terms-list">
                <li>Filing all tax returns and tax forms</li>
                <li>Paying all applicable taxes, including income taxes, self-employment taxes, and other taxes</li>
                <li>Providing Tidyzon with accurate taxpayer identification information</li>
              </ul>

              <h3 className="terms-subsection-title">2.5 Form 1099</h3>
              <p className="terms-text">
                Tidyzon will issue an IRS Form 1099 to Service Provider as required by law.
              </p>
            </div>

            {/* Platform Services */}
            <div className="terms-section">
              <h2 className="terms-section-title">3. PLATFORM SERVICES</h2>
              
              <h3 className="terms-subsection-title">3.1 Platform Access</h3>
              <p className="terms-text">Tidyzon grants Service Provider a limited, non-exclusive, non-transferable right to access and use the Platform to:</p>
              <ul className="terms-list">
                <li>Receive notifications of service requests from Customers</li>
                <li>Accept or decline service requests</li>
                <li>Communicate with Customers regarding Services</li>
                <li>Receive payment for Services performed</li>
              </ul>

              <h3 className="terms-subsection-title">3.2 Account Information</h3>
              <p className="terms-text">Service Provider agrees to provide accurate, current, and complete information during registration, including:</p>
              <ul className="terms-list">
                <li>Legal name</li>
                <li>Social Security Number or Tax Identification Number</li>
                <li>Contact information</li>
                <li>Banking information for payment processing</li>
                <li>Other information reasonably requested by Tidyzon</li>
              </ul>

              <h3 className="terms-subsection-title">3.3 Service Provider Eligibility</h3>
              <p className="terms-text">Service Provider represents and warrants that:</p>
              <ul className="terms-list">
                <li>Service Provider is at least 18 years of age</li>
                <li>Service Provider has the right, authority, and capacity to enter into this Agreement</li>
                <li>Service Provider is legally authorized to work in the United States</li>
                <li>Service Provider has all licenses, permits, and authorizations required to perform the Services</li>
                <li>Service Provider has not been convicted of any felony or misdemeanor involving dishonesty, violence, or moral turpitude</li>
                <li>Add all the items we are going to check in the background check</li>
              </ul>

              <h3 className="terms-subsection-title">3.4 No Guaranteed Requests</h3>
              <p className="terms-text">
                Tidyzon does not guarantee that Service Provider will receive any minimum number of service requests or any service requests at all.
              </p>
            </div>

            {/* Service Provider Obligations */}
            <div className="terms-section">
              <h2 className="terms-section-title">4. SERVICE PROVIDER OBLIGATIONS</h2>
              
              <h3 className="terms-subsection-title">4.1 Service Performance</h3>
              <p className="terms-text">Service Provider agrees to:</p>
              <ul className="terms-list">
                <li>Perform Services in a professional, workmanlike manner</li>
                <li>Complete Services in accordance with industry standards</li>
                <li>Comply with all reasonable requests from Customers regarding the Services</li>
                <li>Arrive at the service location at the scheduled time</li>
                <li>Bring all necessary equipment, tools, and supplies to perform the Services</li>
              </ul>

              <h3 className="terms-subsection-title">4.2 Service Provider Equipment</h3>
              <p className="terms-text">
                Service Provider is responsible for providing all equipment, tools, and supplies necessary to perform the Services, with the exception that Service Provider may use Customer's outdoor water faucet when available and with Customer's permission.
              </p>

              <h3 className="terms-subsection-title">4.3 Customer Interactions and Conduct</h3>
              <p className="terms-text">Service Provider agrees to:</p>
              <ul className="terms-list">
                <li>Treat Customers with respect and professionalism</li>
                <li>Communicate clearly with Customers about the Services</li>
                <li>Address any Customer concerns promptly and professionally</li>
                <li>Notify Tidyzon of any disputes or issues with Customers</li>
                <li>Maintain a professional appearance and demeanor at all times</li>
                <li>Refrain from using offensive language, profanity, or inappropriate humor</li>
                <li>Not smoke, consume alcohol, or use any controlled substances while on Customer property</li>
                <li>Not bring any individuals not authorized by Tidyzon to Customer property</li>
                <li>Respect Customer's privacy and property (including not entering areas of the property not necessary for service completion)</li>
                <li>Not take photos or videos of Customer property except as necessary to document service completion</li>
                <li>Not engage in any form of harassment, discrimination, or intimidating behavior</li>
                <li>Not solicit Customers for any services outside the Tidyzon platform</li>
                <li>Not display or discuss political, religious, or controversial matters while providing Services</li>
              </ul>

              <h3 className="terms-subsection-title">4.4 Communication Restrictions</h3>
              <p className="terms-text">Service Provider is expressly forbidden from:</p>
              <ul className="terms-list">
                <li>Contacting Customers directly outside of the Tidyzon platform for any reason</li>
                <li>Providing Customers with personal contact information (phone number, email, social media, etc.)</li>
                <li>Accepting or requesting direct contact information from Customers</li>
                <li>Engaging with Customers once the service is completed for any reason without going through Tidyzon</li>
                <li>Attempting to arrange future services directly with Customers outside of the Tidyzon platform</li>
                <li>Using Customer information obtained through the Platform for any purpose other than completing the requested service</li>
              </ul>

              <h3 className="terms-subsection-title">4.5 Compliance with Laws</h3>
              <p className="terms-text">Service Provider agrees to comply with all applicable laws, regulations, and ordinances related to the Services, including but not limited to:</p>
              <ul className="terms-list">
                <li>Business licensing requirements</li>
                <li>Environmental regulations</li>
                <li>Labor laws</li>
                <li>Tax laws</li>
                <li>Vehicle and traffic laws</li>
              </ul>

              <h3 className="terms-subsection-title">4.6 Insurance</h3>
              <p className="terms-text">Service Provider agrees to maintain insurance appropriate for the Services performed, which may include:</p>
              <ul className="terms-list">
                <li>General liability insurance</li>
                <li>Commercial automobile insurance</li>
                <li>Workers' compensation insurance (if Service Provider has employees)</li>
              </ul>

              <h3 className="terms-subsection-title">4.7 Background Checks</h3>
              <p className="terms-text">
                Service Provider consents to background checks as determined by Tidyzon, which may include criminal background checks, driving record checks, and verification of information provided during registration.
              </p>
            </div>

            {/* Service Requests and Scheduling */}
            <div className="terms-section">
              <h2 className="terms-section-title">5. SERVICE REQUESTS AND SCHEDULING</h2>
              
              <h3 className="terms-subsection-title">5.1 Service Requests</h3>
              <p className="terms-text">
                Tidyzon will notify Service Provider of service requests from Customers in Service Provider's geographic area. Service Provider may accept or decline any service request at Service Provider's discretion.
              </p>

              <h3 className="terms-subsection-title">5.2 Acceptance Process</h3>
              <p className="terms-text">Upon receiving a service request notification, Service Provider may accept the request through the Platform. Once accepted:</p>
              <ul className="terms-list">
                <li>The Customer will be notified of the acceptance</li>
                <li>Service Provider will be provided with the Customer's location and service details</li>
                <li>Service Provider must proceed to the Customer's location to perform the Services</li>
              </ul>

              <h3 className="terms-subsection-title">5.3 Scheduling</h3>
              <p className="terms-text">
                Service Provider is responsible for managing Service Provider's own schedule and ensuring availability for accepted service requests.
              </p>

              <h3 className="terms-subsection-title">5.4 Cancellations</h3>
              <p className="terms-text">If Service Provider needs to cancel an accepted service request, Service Provider must:</p>
              <ul className="terms-list">
                <li>Notify Tidyzon as soon as possible</li>
                <li>Provide a reason for the cancellation</li>
                <li>Understand that excessive cancellations may result in reduced access to the Platform</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div className="terms-section">
              <h2 className="terms-section-title">6. PAYMENT TERMS</h2>
              
              <h3 className="terms-subsection-title">6.1 Service Fees</h3>
              <p className="terms-text">
                For each service request completed by Service Provider, Tidyzon will pay Service Provider a percentage of the total amount paid by the Customer. The specific percentage will be provided to Service Provider through the Platform and may change from time to time.
              </p>

              <h3 className="terms-subsection-title">6.2 Payment Processing</h3>
              <p className="terms-text">
                Payments to Service Provider will be processed through the Platform using the banking information provided by Service Provider.
              </p>

              <h3 className="terms-subsection-title">6.3 Payment Timing</h3>
              <p className="terms-text">
                Payments will be made to Service Provider according to the payment schedule established by Tidyzon, which may be weekly, bi-weekly, or monthly.
              </p>

              <h3 className="terms-subsection-title">6.4 Taxes</h3>
              <p className="terms-text">
                Service Provider is responsible for reporting and paying all taxes on amounts received from Tidyzon.
              </p>

              <h3 className="terms-subsection-title">6.5 Chargebacks and Refunds</h3>
              <p className="terms-text">
                Tidyzon reserves the right to deduct from future payments to Service Provider any amounts refunded to Customers due to Service Provider's failure to adequately perform Services.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="terms-section">
              <h2 className="terms-section-title">7. INTELLECTUAL PROPERTY</h2>
              
              <h3 className="terms-subsection-title">7.1 Tidyzon Intellectual Property</h3>
              <p className="terms-text">
                All intellectual property rights in the Platform, including software, features, and content, are owned by Tidyzon or its licensors.
              </p>

              <h3 className="terms-subsection-title">7.2 License</h3>
              <p className="terms-text">
                Service Provider is granted a limited, non-exclusive, non-transferable license to use the Platform for its intended purpose.
              </p>

              <h3 className="terms-subsection-title">7.3 Restrictions</h3>
              <p className="terms-text">
                Service Provider may not copy, modify, distribute, sell, or lease any part of the Platform or its content.
              </p>

              <h3 className="terms-subsection-title">7.4 Feedback</h3>
              <p className="terms-text">
                If Service Provider provides feedback or suggestions regarding the Platform, Tidyzon may use such feedback without restriction or compensation to Service Provider.
              </p>
            </div>

            {/* Confidentiality */}
            <div className="terms-section">
              <h2 className="terms-section-title">8. CONFIDENTIALITY</h2>
              
              <h3 className="terms-subsection-title">8.1 Confidential Information</h3>
              <p className="terms-text">
                Service Provider may receive confidential information from Tidyzon or Customers, including but not limited to Customer personal information, platform operations, and business strategies.
              </p>

              <h3 className="terms-subsection-title">8.2 Protection Obligations</h3>
              <p className="terms-text">Service Provider agrees to:</p>
              <ul className="terms-list">
                <li>Keep confidential information strictly confidential</li>
                <li>Use confidential information only as necessary to perform Services</li>
                <li>Not disclose confidential information to any third party without prior written consent</li>
                <li>Take reasonable measures to protect confidential information</li>
              </ul>

              <h3 className="terms-subsection-title">8.3 Customer Information</h3>
              <p className="terms-text">
                Service Provider agrees to protect Customer information in accordance with applicable privacy laws and to use such information only as necessary to perform Services.
              </p>
            </div>

            {/* Term and Termination */}
            <div className="terms-section">
              <h2 className="terms-section-title">9. TERM AND TERMINATION</h2>
              
              <h3 className="terms-subsection-title">9.1 Term</h3>
              <p className="terms-text">
                This Agreement will remain in effect until terminated by either party.
              </p>

              <h3 className="terms-subsection-title">9.2 Termination by Service Provider</h3>
              <p className="terms-text">
                Service Provider may terminate this Agreement at any time by providing written notice to Tidyzon and closing their account.
              </p>

              <h3 className="terms-subsection-title">9.3 Termination by Tidyzon</h3>
              <p className="terms-text">Tidyzon may terminate this Agreement or suspend Service Provider's access to the Platform at any time for any reason, including but not limited to:</p>
              <ul className="terms-list">
                <li>Service Provider's violation of this Agreement</li>
                <li>Consistent poor ratings from Customers</li>
                <li>Excessive cancellations of accepted service requests</li>
                <li>Inappropriate behavior toward Customers</li>
                <li>Violation of the conduct standards outlined in Section 4.3</li>
                <li>Violation of communication restrictions outlined in Section 4.4</li>
                <li>Contacting Customers outside the Tidyzon platform</li>
                <li>Dishonesty or fraudulent activity</li>
                <li>Damage to Customer property</li>
                <li>Unauthorized collection or use of Customer information</li>
              </ul>

              <h3 className="terms-subsection-title">9.4 Effect of Termination</h3>
              <p className="terms-text">Upon termination:</p>
              <ul className="terms-list">
                <li>Service Provider's right to access and use the Platform will immediately cease</li>
                <li>Service Provider must complete any accepted service requests unless otherwise directed by Tidyzon</li>
                <li>Tidyzon will pay Service Provider for Services completed prior to termination</li>
              </ul>
            </div>

            {/* Representations and Warranties */}
            <div className="terms-section">
              <h2 className="terms-section-title">10. REPRESENTATIONS AND WARRANTIES</h2>
              
              <h3 className="terms-subsection-title">10.1 Service Provider Representations</h3>
              <p className="terms-text">Service Provider represents and warrants that:</p>
              <ul className="terms-list">
                <li>Service Provider has the right, power, and authority to enter into this Agreement</li>
                <li>Service Provider will perform Services in a professional manner</li>
                <li>Service Provider will comply with all applicable laws</li>
                <li>All information provided to Tidyzon is true, accurate, and complete</li>
                <li>Service Provider has all necessary licenses, permits, and insurance required to perform the Services</li>
              </ul>

              <h3 className="terms-subsection-title">10.2 Tidyzon Representations</h3>
              <p className="terms-text">Tidyzon represents and warrants that:</p>
              <ul className="terms-list">
                <li>Tidyzon has the right, power, and authority to enter into this Agreement</li>
                <li>The Platform will be provided in a professional manner</li>
              </ul>
            </div>

            {/* Indemnification */}
            <div className="terms-section">
              <h2 className="terms-section-title">11. INDEMNIFICATION</h2>
              
              <h3 className="terms-subsection-title">11.1 Service Provider Indemnification</h3>
              <p className="terms-text">Service Provider agrees to indemnify, defend, and hold harmless Tidyzon and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with:</p>
              <ul className="terms-list">
                <li>Service Provider's breach of this Agreement</li>
                <li>Service Provider's performance of Services</li>
                <li>Service Provider's negligence or willful misconduct</li>
                <li>Service Provider's violation of any law or regulation</li>
                <li>Any claim that Service Provider is an employee of Tidyzon</li>
              </ul>

              <h3 className="terms-subsection-title">11.2 Tidyzon Indemnification</h3>
              <p className="terms-text">
                Tidyzon agrees to indemnify, defend, and hold harmless Service Provider from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with Tidyzon's breach of this Agreement.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="terms-section">
              <h2 className="terms-section-title">12. LIMITATION OF LIABILITY</h2>
              
              <h3 className="terms-subsection-title">12.1 Limitation of Damages</h3>
              <p className="terms-text">
                In no event will Tidyzon be liable for any consequential, incidental, indirect, special, punitive, or exemplary damages, including lost profits, business interruption, or loss of information, arising out of or related to this Agreement.
              </p>

              <h3 className="terms-subsection-title">12.2 Cap on Liability</h3>
              <p className="terms-text">
                Tidyzon's total liability to Service Provider for any damages arising from or related to this Agreement shall not exceed the amount paid by Tidyzon to Service Provider in the three (3) months preceding the event giving rise to such liability.
              </p>
            </div>

            {/* General Provisions */}
            <div className="terms-section">
              <h2 className="terms-section-title">13. GENERAL PROVISIONS</h2>
              
              <h3 className="terms-subsection-title">13.1 Governing Law</h3>
              <p className="terms-text">
                This Agreement shall be governed by and construed in accordance with the laws of the State of Illinois, without giving effect to any principles of conflicts of law.
              </p>

              <h3 className="terms-subsection-title">13.2 Dispute Resolution</h3>
              <p className="terms-text">
                Any dispute arising from or relating to this Agreement shall be resolved in the courts located in Illinois.
              </p>

              <h3 className="terms-subsection-title">13.3 Entire Agreement</h3>
              <p className="terms-text">
                This Agreement constitutes the entire agreement between Service Provider and Tidyzon regarding the subject matter hereof.
              </p>

              <h3 className="terms-subsection-title">13.4 Modifications</h3>
              <p className="terms-text">
                Tidyzon reserves the right to modify this Agreement at any time. Continued use of the Platform after such modifications constitutes acceptance of the modified Agreement.
              </p>

              <h3 className="terms-subsection-title">13.5 Severability</h3>
              <p className="terms-text">
                If any provision of this Agreement is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that this Agreement will otherwise remain in full force and effect.
              </p>

              <h3 className="terms-subsection-title">13.6 Assignment</h3>
              <p className="terms-text">
                Service Provider may not assign this Agreement without Tidyzon's prior written consent. Tidyzon may assign this Agreement without Service Provider's consent.
              </p>

              <h3 className="terms-subsection-title">13.7 No Waiver</h3>
              <p className="terms-text">
                Tidyzon's failure to enforce any right or provision of this Agreement will not be considered a waiver of such right or provision.
              </p>

              <h3 className="terms-subsection-title">13.8 Notices</h3>
              <p className="terms-text">
                All notices under this Agreement shall be in writing and delivered via email to the address provided by each party.
              </p>

              <h3 className="terms-subsection-title">13.9 Survival</h3>
              <p className="terms-text">
                The provisions of this Agreement that by their nature should survive termination of this Agreement shall survive.
              </p>
            </div>

            {/* Conclusion */}
            <div className="terms-section">
              <p className="terms-text">
                By creating a service provider account on the Tidyzon Platform, Service Provider acknowledges that they have read, understood, and agree to be bound by this Service Provider Agreement.
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

export default ServiceProviderAgreementPage
