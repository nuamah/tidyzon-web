import React from 'react'
import { Link } from 'react-router-dom'
import './CaliforniaPrivacyPage.css'

const CaliforniaPrivacyPage = () => {
  return (
    <div className="california-privacy-page">
      {/* Hero Section */}
      <section className="california-privacy-hero">
        <div className="container">
          <div className="california-privacy-hero-content">
            <h1 className="california-privacy-hero-title">California Privacy Policy</h1>
            <p className="california-privacy-hero-subtitle">Effective Date: Nov 1, 2025</p>
            <p className="california-privacy-hero-subtitle-small">
              California Notice at Collection & Privacy Policy (CCPA/CPRA)
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="california-privacy-content">
        <div className="container">
          <div className="california-privacy-wrapper">
            
            {/* Overview & Scope */}
            <div className="california-privacy-section">
              <h2 className="california-privacy-section-title">1. Overview & Scope</h2>
              <p className="california-privacy-text">
                This Policy explains how Tidyzon collects, uses, discloses, "sells," and "shares" Personal Information (as the CCPA/CPRA defines those terms), our retention practices, and California residents' rights. If you are a service provider (independent contractor) using the Tidyzon platform to receive and perform jobs ("Provider"), please also review Section 13 (Provider-Specific Disclosures).
              </p>
              <p className="california-privacy-text">
                We provide an on-demand marketplace for residential services (e.g., mobile car washes and trash bin cleaning). To enable immediate and scheduled jobs, we use location data to match customers with nearby eligible Providers and to route and coordinate Services.
              </p>
            </div>

            {/* Notice at Collection */}
            <div className="california-privacy-section">
              <h2 className="california-privacy-section-title">2. Notice at Collection: Categories, Purpose, Retention, and Disclosure</h2>
              <p className="california-privacy-text">
                We collect the following categories of Personal Information from or about California consumers, for the purposes and retention periods summarized below. We may disclose these categories to the third parties indicated, for the business purposes described in Section 4. We do not collect or process Personal Information for purposes materially incompatible with those disclosed without providing additional notice.
              </p>

              <h3 className="california-privacy-subsection-title">A. Categories Collected</h3>
              
              <div className="privacy-table-wrapper">
                <table className="privacy-table">
                  <thead>
                    <tr>
                      <th>Category (CCPA/CPRA)</th>
                      <th>Examples Collected by Tidyzon</th>
                      <th>Source(s)</th>
                      <th>Business / Commercial Purpose(s)</th>
                      <th>Disclosed To</th>
                      <th>Sold or Shared for CCBA?</th>
                      <th>Retention</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Identifiers</strong></td>
                      <td>Name, email, phone number, home or business address, vehicle details (make, model, color, license plate), user ID, device ID, IP address, geolocation data (if enabled), payment reference (e.g., last 4 digits, transaction ID), and images associated with booked services (e.g., before/after wash photos). For Providers: driver's license number.</td>
                      <td>You; your devices; Providers</td>
                      <td>Account creation, authentication, communications, fraud prevention, customer support</td>
                      <td>Infrastructure vendors; fraud/abuse tools; support tools</td>
                      <td>Not sold; may be shared for CCBA (ads/retargeting/analytics) unless you opt out</td>
                      <td>For life of account + up to 3 years after last activity, unless longer for legal/compliance</td>
                    </tr>
                    <tr>
                      <td><strong>Customer Records</strong><br />(Cal. Civ. Code §1798.80)</td>
                      <td>Billing address; for Providers: bank account last 4 via payout processor; service history (date, time, provider, vehicle details, package purchased); photos or service documentation (before/after images, damage notes); loyalty or discount data (promo codes, referral credits); refund/chargeback records</td>
                      <td>You; payment/payout processors; service providers; booking platform</td>
                      <td>Provide Services; process payments; maintain accounting; manage disputes; administer loyalty programs</td>
                      <td>Payment processors (e.g., Stripe); accountants; scheduling software providers</td>
                      <td>Not sold; not shared for CCBA</td>
                      <td>Transaction and service records retained 7 years (tax/audit); service photos and preferences retained 1–3 years or until account deletion</td>
                    </tr>
                    <tr>
                      <td><strong>Protected Classifications</strong><br />(optional/rare)</td>
                      <td>Only if voluntarily disclosed (e.g., language preferences, accessibility notes, veteran/senior status for discount eligibility)</td>
                      <td>You</td>
                      <td>Improve service accessibility; support eligibility for offers</td>
                      <td>Support vendors (as needed)</td>
                      <td>No</td>
                      <td>Until preference changed or account deletion</td>
                    </tr>
                    <tr>
                      <td><strong>Commercial Information</strong></td>
                      <td>Service requests, jobs scheduled/completed, transaction history, purchased packages or add-ons (e.g., machine wax, interior detail), subscription or loyalty data, promo or referral code usage, customer feedback and ratings</td>
                      <td>You; in-app activity</td>
                      <td>Provide and improve services; analytics; loyalty and retention management</td>
                      <td>Cloud/analytics vendors; customer support; CRM tools</td>
                      <td>May be shared for CCBA (ads/retargeting/analytics) unless you opt out</td>
                      <td>Life of account + 3 years after last activity</td>
                    </tr>
                    <tr>
                      <td><strong>Internet / Network Activity</strong></td>
                      <td>App/website interactions, logs, cookies, crash logs, device type, operating system, app version, GPS or IP-based location data, clickstream activity, push notification logs, referral source (ads, campaigns)</td>
                      <td>Your device/browser; in-app activity</td>
                      <td>Operate and secure the app; perform analytics; improve UX; optimize routes and marketing</td>
                      <td>Analytics and security vendors; crash reporting tools; marketing platforms</td>
                      <td>May be shared for CCBA (ads/retargeting/analytics) unless you opt out or send GPC</td>
                      <td>24 months (typical); aggregated or anonymized thereafter</td>
                    </tr>
                    <tr>
                      <td><strong>Audio/Visual Information</strong></td>
                      <td>Customer support call recordings (where permitted/notice given); service photos or videos (before/after washes, damage documentation, quality checks); provider training or onboarding videos (vehicle service demonstrations); voluntary promotional photos or testimonials</td>
                      <td>You; service providers</td>
                      <td>Quality assurance, compliance, dispute resolution, training, marketing (if consented)</td>
                      <td>Call recording and training platforms; quality-assurance vendors; marketing platforms (for consented media only)</td>
                      <td>No</td>
                      <td>24 months unless longer for disputes or compliance (app features may degrade if disabled)</td>
                    </tr>
                    <tr>
                      <td><strong>Geolocation Data</strong></td>
                      <td>Precise location when app in use (customer & Provider)</td>
                      <td>Your mobile device (with permission)</td>
                      <td>Match/dispatch nearby Providers; route optimization; proof of service</td>
                      <td>Maps/geo vendors; fraud prevention</td>
                      <td>Not sold; not shared for CCBA</td>
                      <td>Only as needed for job; logs kept up to 18 months; precise location disabled if you opt out of location permissions (app features may degrade)</td>
                    </tr>
                    <tr>
                      <td><strong>Inferences</strong></td>
                      <td>Service preferences; predicted demand; wash frequency; preferred service times; vehicle and package choices; responsiveness to offers; location-based demand patterns; provider performance analytics</td>
                      <td>Derived from booking activity, app interactions, and historical service data</td>
                      <td>Personalize experience; improve scheduling and promotions; optimize provider routing and service quality</td>
                      <td>Analytics vendors; CRM and marketing tools</td>
                      <td>May be shared for CCBA (ads/retargeting/analytics) unless you opt out</td>
                      <td>24 months; aggregated or anonymized thereafter</td>
                    </tr>
                    <tr>
                      <td><strong>Sensitive Information</strong></td>
                      <td>Payment information (e.g., cardholder name, last 4 digits, transaction ID); account credentials (login email, hashed password); driver's license or ID (for providers); precise service location (for mobile dispatch)</td>
                      <td>You; service providers; payment processors</td>
                      <td>Authenticate users; process payments; verify providers; deliver mobile services</td>
                      <td>Payment processors (e.g., Stripe); authentication vendors; insurance/verification providers</td>
                      <td>Not sold; may be shared for CCBA (analytics/ads) unless you opt out</td>
                      <td>Retained for life of account + up to 3 years after last activity or as required for legal/compliance</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="california-privacy-text">
                <strong>Note on Payment Cards.</strong> We use third-party payment processors (e.g., Stripe). Tidyzon does not receive full card numbers; we receive tokens and limited transaction metadata.
              </p>
            </div>

            {/* Sources of Personal Information */}
            <div className="california-privacy-section">
              <h2 className="california-privacy-section-title">3. Sources of Personal Information</h2>
              <ul className="california-privacy-list">
                <li>Directly from you (account registration, job requests, messages, calls).</li>
                <li>Your devices and browsers (app telemetry, cookies, SDKs, logs).</li>
                <li>Providers (e.g., job status updates, service notes, photos).</li>
                <li>Third parties (identity verification, background checks for Providers, fraud prevention, analytics, advertising partners, and social platforms if you engage with our campaigns).</li>
              </ul>
            </div>

            {/* How We Use Personal Information */}
            <div className="california-privacy-section">
              <h2 className="california-privacy-section-title">4. How We Use Personal Information</h2>
              <p className="california-privacy-text">We use Personal Information to:</p>
              <ul className="california-privacy-list">
                <li>Provide and operate the Services (create accounts; enable discovery/matching; schedule and route jobs; process payments and payouts; send confirmations, receipts, and updates).</li>
                <li>Facilitate safety and trust (identity verification; background checks for Providers; fraud prevention; dispute resolution; enforcing terms).</li>
                <li>Communicate with you (service messages, support, in-app and push notifications, SMS—carrier rates may apply—email).</li>
                <li>Improve and develop the Services (analytics, debugging, personalization, research, and product development).</li>
                <li>Marketing and advertising (including cross-context behavioral advertising, unless you opt out; see Section 7).</li>
                <li>Comply with legal obligations (tax, accounting, regulatory requests, law enforcement, and to exercise or defend legal claims).</li>
              </ul>
              <p className="california-privacy-text">
                We do not use or disclose Sensitive Personal Information for purposes other than those permitted by the CPRA (e.g., providing the Services, security, short-term transient use) unless we provide you with a "Right to Limit" choice where required (see Section 8).
              </p>
            </div>

            {/* Disclosures of Personal Information */}
            <div className="california-privacy-section">
              <h2 className="california-privacy-section-title">5. Disclosures of Personal Information (Business Purposes)</h2>
              <p className="california-privacy-text">We disclose Personal Information to the following categories of recipients for the above purposes:</p>
              <ul className="california-privacy-list">
                <li>Service Providers / Contractors (cloud hosting, data storage, analytics, customer support tools, communications, mapping/geolocation, fraud prevention, background screening for Providers, payment processing).</li>
                <li>Business Partners (if you initiate a relationship, integration, or referral).</li>
                <li>Advertising/Analytics Partners (for measurement and CCBA; see Section 7).</li>
                <li>Transaction Parties (in the event of a merger, acquisition, financing, or sale).</li>
                <li>Legal/Compliance Recipients (law enforcement, regulators, courts, and counsel when required).</li>
              </ul>
              <p className="california-privacy-text">
                We impose contractual obligations on Service Providers/Contractors that are consistent with the CPRA (e.g., purpose limitation, security, no secondary use).
              </p>
            </div>

            {/* Sale and Sharing */}
            <div className="california-privacy-section">
              <h2 className="california-privacy-section-title">6. "Sale" and "Sharing" (Cross-Context Behavioral Advertising)</h2>
              <p className="california-privacy-text">
                <strong>Sale:</strong> Tidyzon does not sell Personal Information for monetary consideration.
              </p>
              <p className="california-privacy-text">
                <strong>Sharing (CCBA):</strong> We may share specific identifiers, commercial, internet activity, or inference data with advertising/analytics partners for CCBA. California residents may opt out at any time (see Section 8). We honor browser-based Global Privacy Control (GPC) signals as a valid opt-out.
              </p>
              <p className="california-privacy-text">
                <strong>Minors under 16:</strong> We do not knowingly sell or share Personal Information of consumers we know are under 16. If we learn a user is under 16, we will not sell/share their Personal Information absent the requisite opt-in (ages 13–15) or verified parental consent (under 13).
              </p>
            </div>

            {/* Cookies, SDKs, and Tracking */}
            <div className="california-privacy-section">
              <h2 className="california-privacy-section-title">7. Cookies, SDKs, and Tracking</h2>
              <p className="california-privacy-text">
                We and our partners use cookies, SDKs, pixels, and similar technologies to operate the Services, remember preferences, perform analytics, and deliver/measure advertising. You can adjust in-app permissions, device settings, and browser settings, and you may exercise the CPRA opt-out of sharing (Section 8). Some features may not function without certain cookies or location permissions.
              </p>
            </div>

            {/* Your California Privacy Rights */}
            <div className="california-privacy-section">
              <h2 className="california-privacy-section-title">8. Your California Privacy Rights</h2>
              <p className="california-privacy-text">
                Subject to exceptions, California residents have the following rights. We will not discriminate against you for exercising any rights.
              </p>
              <ul className="california-privacy-list">
                <li><strong>Right to Know / Access</strong> - the categories and specific pieces of Personal Information we collected, the sources, purposes, and categories of third-party disclosures.</li>
                <li><strong>Right to Delete</strong> - Personal Information we collected from you.</li>
                <li><strong>Right to Correct</strong> - Inaccurate Personal Information.</li>
                <li><strong>Right to Opt-Out of Sale/Sharing for CCBA.</strong> We honor GPC signals.</li>
                <li><strong>Right to Limit Use and Disclosure of Sensitive Personal Information</strong> (where SPI is used beyond service delivery/exempt purposes).</li>
                <li><strong>Right to Portability</strong> (receive certain information in a portable format).</li>
                <li><strong>Shine the Light</strong> (Cal. Civ. Code §1798.83): You may request information about our disclosure of Personal Information to third parties for their direct marketing in the prior calendar year.</li>
                <li><strong>California Minors' Eraser Right</strong> (Bus. & Prof. Code §22581): Eligible minors may request removal of publicly posted content they created.</li>
              </ul>

              <h3 className="california-privacy-subsection-title">How to Exercise Your Rights</h3>
              <ul className="california-privacy-list">
                <li><strong>Web Form:</strong> <Link to="/privacy/requests" className="privacy-link">Privacy Request Portal</Link> / "<Link to="/privacy/do-not-sell-or-share" className="privacy-link">Do Not Sell or Share My Personal Information</Link>"</li>
                <li><strong>Email:</strong> <a href="mailto:privacy@tidyzon.com" className="privacy-link">privacy@tidyzon.com</a></li>
                <li><strong>Mail:</strong> Tidyzon, Inc., 708 Saybrook Ct. Romeoville IL 60446</li>
              </ul>
              <p className="california-privacy-text">
                We will verify your request (which may include matching identifying information). You may authorize an agent to submit a request; we may require proof of authorization and verification of your identity. Household requests may require additional verification.
              </p>
            </div>

            {/* Data Security */}
            <div className="california-privacy-section">
              <h2 className="california-privacy-section-title">9. Data Security</h2>
              <p className="california-privacy-text">
                We employ administrative, technical, and physical safeguards appropriate to the nature of the Personal Information we process (e.g., encryption in transit, access controls, least-privilege, monitoring). No system is 100% secure; you are responsible for safeguarding your account credentials. If we detect a security incident involving your information, we will notify you and regulators as required by law.
              </p>
            </div>

            {/* Data Retention */}
            <div className="california-privacy-section">
              <h2 className="california-privacy-section-title">10. Data Retention</h2>
              <p className="california-privacy-text">
                We retain Personal Information for as long as necessary to fulfill the purposes described above, including providing the Services, complying with legal, accounting, or reporting obligations, resolving disputes, and enforcing agreements, then securely delete or de-identify it. Typical periods are specified in the table in Section 2; when a fixed period is not feasible, we use criteria such as account status, legal limitation periods, and data sensitivity.
              </p>
            </div>

            {/* International Data Transfers */}
            <div className="california-privacy-section">
              <h2 className="california-privacy-section-title">11. International Data Transfers</h2>
              <p className="california-privacy-text">
                Our systems and vendors are primarily located in the United States. If Personal Information is transferred, stored, or processed outside your state or country, we will take steps to ensure an adequate level of protection consistent with applicable law.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="california-privacy-section">
              <h2 className="california-privacy-section-title">12. Children's Privacy</h2>
              <p className="california-privacy-text">
                The Services are not directed to children under 13. We do not knowingly collect Personal Information from children under 13 without verifiable parental consent. If you believe a child under 13 has provided Personal Information to Tidyzon, contact us so we may delete it.
              </p>
            </div>

            {/* Provider-Specific Disclosures */}
            <div className="california-privacy-section">
              <h2 className="california-privacy-section-title">13. Provider-Specific Disclosures (Independent Contractors)</h2>
              <p className="california-privacy-text">
                If you apply to, onboard with, or provide services through Tidyzon as a Provider, we may collect additional information, including:
              </p>
              <h3 className="california-privacy-subsection-title">Eligibility & Screening</h3>
              <p className="california-privacy-text">
                Government identifiers (e.g., driver's license), date of birth, SSN (via background screening vendor), right-to-work status, insurance details, equipment photos, training assessments, and onboarding videos.
              </p>
              <h3 className="california-privacy-subsection-title">Payouts & Tax</h3>
              <p className="california-privacy-text">
                Banking details (tokenized/limited), EIN/SSN for tax reporting (via payment processor), Form 1099 information.
              </p>
              <h3 className="california-privacy-subsection-title">Operations</h3>
              <p className="california-privacy-text">
                Location data during active jobs; job progress photos; communications with customers and support.
              </p>
              <p className="california-privacy-text">
                Purposes include verifying identity/eligibility, safety and compliance, dispatch/operations, payouts and tax reporting, dispute resolution, and legal compliance. We do not sell or share Provider SPI for CCBA. Provider data is retained in accordance with legal/tax/safety requirements (typically 5–7 years after the last activity or as required by law).
              </p>
            </div>

            {/* Third-Party Links and Services */}
            <div className="california-privacy-section">
              <h2 className="california-privacy-section-title">14. Third-Party Links and Services</h2>
              <p className="california-privacy-text">
                Our Services may link to third-party sites or integrate third-party SDKs (e.g., maps, analytics, payments). Those parties' privacy practices are governed by their own policies. We encourage you to review them (e.g., payment processors such as Stripe).
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="california-privacy-section">
              <h2 className="california-privacy-section-title">15. Changes to This Policy</h2>
              <p className="california-privacy-text">
                We may update this Policy from time to time. The "Effective Date" will reflect the latest version. Material changes will be notified via the Services or by other reasonable means. Your continued use after an update signifies acceptance.
              </p>
            </div>

            {/* How to Contact Us */}
            <div className="california-privacy-section">
              <h2 className="california-privacy-section-title">16. How to Contact Us</h2>
              <p className="california-privacy-text">
                Questions or concerns may be sent to <a href="mailto:privacy@tidyzon.com" className="privacy-link">privacy@tidyzon.com</a>. If you have an unresolved privacy concern regarding the handling of Personal Information, you may also contact your state attorney general or privacy regulator.
              </p>
            </div>

            {/* California Do Not Sell or Share and Limit SPI Controls */}
            <div className="california-privacy-section">
              <h2 className="california-privacy-section-title">17. California "Do Not Sell or Share" and "Limit SPI" Controls</h2>
              <p className="california-privacy-text">To exercise your rights:</p>
              <ul className="california-privacy-list">
                <li>
                  <strong>Do Not Sell or Share My Personal Information:</strong> <Link to="/privacy/do-not-sell-or-share" className="privacy-link">[Click here to opt out]</Link>
                </li>
                <li>
                  <strong>Limit the Use of My Sensitive Personal Information:</strong> <Link to="/privacy/limit-sensitive-info" className="privacy-link">[Click here to limit]</Link>
                </li>
              </ul>
              <p className="california-privacy-text">
                <strong>Global Privacy Control (GPC):</strong> We recognize and honor GPC signals as an opt-out of sharing for CCBA in our browser web experiences.
              </p>
            </div>

            {/* Accessibility */}
            <div className="california-privacy-section">
              <h2 className="california-privacy-section-title">18. Accessibility</h2>
              <p className="california-privacy-text">
                We are committed to ensuring this Policy is accessible. If you need this Policy in an alternative format, contact <a href="mailto:privacy@tidyzon.com" className="privacy-link">privacy@tidyzon.com</a>.
              </p>
            </div>

            {/* Plain-Language Summary */}
            <div className="california-privacy-section">
              <h2 className="california-privacy-section-title">Plain-Language Summary (Non-Contractual)</h2>
              <ul className="california-privacy-list">
                <li>We collect information you give us (name, contact, address), information your device provides (location, app interactions), and information about jobs and payments.</li>
                <li>We use it to run Tidyzon (match you with Providers, process payments, improve the app, keep it safe), and to advertise unless you opt out.</li>
                <li>You can ask us to show you your data, delete it, correct it, or stop sharing it for ads. We honor GPC.</li>
                <li>We don't sell your data for money. We may share certain data with ad/analytics partners unless you opt out.</li>
                <li>Providers have additional screening and payout data processed for safety and compliance.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default CaliforniaPrivacyPage

