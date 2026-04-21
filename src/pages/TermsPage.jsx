import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './TermsPage.css'

const TermsPage = () => {
  const { t } = useTranslation('terms')
  return (
    <div className="terms-page">
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="container">
          <div className="terms-hero-content">
            <h1 className="terms-hero-title">{t('hero.title')}</h1>
            <p className="terms-hero-subtitle">{t('hero.lastUpdated')}</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="terms-content">
        <div className="container">
          <div className="terms-wrapper">

            {/* Introduction */}
            <div className="terms-section">
              <h2 className="terms-section-title">{t('sections.intro.title')}</h2>
              <p className="terms-text">
                {t('sections.intro.p1')}
              </p>
              <p className="terms-text">
                {t('sections.intro.p2Prefix')}
                <a href="#sms-terms" className="terms-inline-link">{t('sections.intro.p2LinkText')}</a>
                {t('sections.intro.p2Suffix')}
              </p>
              <p className="terms-text">
                {t('sections.intro.p3')}
              </p>
            </div>

            {/* Platform Description */}
            <div className="terms-section">
              <h2 className="terms-section-title">{t('sections.platform.title')}</h2>
              <p className="terms-text">
                {t('sections.platform.p1')}
              </p>
            </div>

            {/* Eligibility */}
            <div className="terms-section">
              <h2 className="terms-section-title">{t('sections.eligibility.title')}</h2>
              <p className="terms-text">
                {t('sections.eligibility.p1')}
              </p>
            </div>

            {/* Account Registration */}
            <div className="terms-section">
              <h2 className="terms-section-title">{t('sections.account.title')}</h2>
              <p className="terms-text">
                {t('sections.account.p1')}
              </p>
            </div>

            {/* User Conduct */}
            <div className="terms-section">
              <h2 className="terms-section-title">{t('sections.conduct.title')}</h2>
              <p className="terms-text">{t('sections.conduct.lead')}</p>
              <ul className="terms-list">
                {t('sections.conduct.items', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Service Requests */}
            <div className="terms-section">
              <h2 className="terms-section-title">{t('sections.serviceRequests.title')}</h2>
              
              <h3 className="terms-subsection-title">{t('sections.serviceRequests.requestingTitle')}</h3>
              <p className="terms-text">
                {t('sections.serviceRequests.requestingText')}
              </p>

              <h3 className="terms-subsection-title">{t('sections.serviceRequests.cancellationsTitle')}</h3>
              <p className="terms-text">
                {t('sections.serviceRequests.cancellationsText')}
              </p>

              <h3 className="terms-subsection-title">{t('sections.serviceRequests.providerSelectionTitle')}</h3>
              <p className="terms-text">
                {t('sections.serviceRequests.providerSelectionText')}
              </p>

              <h3 className="terms-subsection-title">{t('sections.serviceRequests.refundsTitle')}</h3>
              <p className="terms-text">
                {t('sections.serviceRequests.refundsText')}
              </p>

              <h3 className="terms-subsection-title">{t('sections.serviceRequests.backgroundTitle')}</h3>
              <p className="terms-text">
                {t('sections.serviceRequests.backgroundText')}
              </p>
            </div>

            {/* SMS Terms */}
            <div id="sms-terms" className="terms-section">
              <h2 className="terms-section-title">{t('sections.sms.title')}</h2>
              <p className="terms-text">
                <strong>{t('sections.sms.effectiveDate')}</strong>
              </p>
              <p className="terms-text">
                {t('sections.sms.p1')}
              </p>

              <h3 className="terms-subsection-title">{t('sections.sms.whatReceiveTitle')}</h3>
              <p className="terms-text">{t('sections.sms.whatReceiveLead')}</p>
              <ul className="terms-list">
                {t('sections.sms.whatReceiveItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h3 className="terms-subsection-title">{t('sections.sms.optInTitle')}</h3>
              <p className="terms-text">{t('sections.sms.optInLead')}</p>
              <ul className="terms-list">
                {t('sections.sms.optInItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="terms-text">
                <strong>{t('sections.sms.consentRulesTitle')}</strong>
              </p>
              <ul className="terms-list">
                {t('sections.sms.consentRulesItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h3 className="terms-subsection-title">{t('sections.sms.frequencyTitle')}</h3>
              <p className="terms-text">
                {t('sections.sms.frequencyText')}
              </p>

              <h3 className="terms-subsection-title">{t('sections.sms.costsTitle')}</h3>
              <p className="terms-text">
                {t('sections.sms.costsText')}
              </p>

              <h3 className="terms-subsection-title">{t('sections.sms.optOutTitle')}</h3>
              <p className="terms-text">{t('sections.sms.optOutText1')}</p>
              <p className="terms-text">{t('sections.sms.optOutText2')}</p>
              <p className="terms-text">
                <strong>{t('sections.sms.afterOptOutTitle')}</strong>
              </p>
              <ul className="terms-list">
                {t('sections.sms.afterOptOutItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h3 className="terms-subsection-title">{t('sections.sms.optBackInTitle')}</h3>
              <p className="terms-text">{t('sections.sms.optBackInLead')}</p>
              <ul className="terms-list">
                {t('sections.sms.optBackInItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h3 className="terms-subsection-title">{t('sections.sms.helpTitle')}</h3>
              <p className="terms-text">{t('sections.sms.helpLead')}</p>
              <ul className="terms-list">
                {t('sections.sms.helpItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h3 className="terms-subsection-title">{t('sections.sms.carrierTitle')}</h3>
              <p className="terms-text">
                {t('sections.sms.carrierText')}
              </p>

              <h3 className="terms-subsection-title">{t('sections.sms.changesTitle')}</h3>
              <p className="terms-text">
                {t('sections.sms.changesText')}
              </p>

              <h3 className="terms-subsection-title">{t('sections.sms.privacyTitle')}</h3>
              <p className="terms-text">
                {t('sections.sms.privacyText')}
              </p>

              <h3 className="terms-subsection-title">{t('sections.smsPrivacyPolicy.title')}</h3>
              <p className="terms-text">{t('sections.smsPrivacyPolicy.intro')}</p>

              <h4 className="terms-subsection-subtitle">{t('sections.smsPrivacyPolicy.collectTitle')}</h4>
              <ul className="terms-list">
                {t('sections.smsPrivacyPolicy.collectItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h4 className="terms-subsection-subtitle">{t('sections.smsPrivacyPolicy.useTitle')}</h4>
              <ul className="terms-list">
                {t('sections.smsPrivacyPolicy.useItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h4 className="terms-subsection-subtitle">{t('sections.smsPrivacyPolicy.sharingTitle')}</h4>
              <p className="terms-text">{t('sections.smsPrivacyPolicy.sharingLead')}</p>
              <ul className="terms-list">
                {t('sections.smsPrivacyPolicy.sharingItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="terms-text">{t('sections.smsPrivacyPolicy.sharingNote')}</p>

              <h4 className="terms-subsection-subtitle">{t('sections.smsPrivacyPolicy.noSellingTitle')}</h4>
              <ul className="terms-list">
                {t('sections.smsPrivacyPolicy.noSellingItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h4 className="terms-subsection-subtitle">{t('sections.smsPrivacyPolicy.retentionTitle')}</h4>
              <p className="terms-text">{t('sections.smsPrivacyPolicy.retentionLead')}</p>
              <ul className="terms-list">
                {t('sections.smsPrivacyPolicy.retentionItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h4 className="terms-subsection-subtitle">{t('sections.smsPrivacyPolicy.choicesTitle')}</h4>
              <ul className="terms-list">
                {t('sections.smsPrivacyPolicy.choicesItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h4 className="terms-subsection-subtitle">{t('sections.smsPrivacyPolicy.rightsTitle')}</h4>
              <p className="terms-text">{t('sections.smsPrivacyPolicy.rightsLead')}</p>
              <ul className="terms-list">
                {t('sections.smsPrivacyPolicy.rightsItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="terms-text">{t('sections.smsPrivacyPolicy.requestsNote')}</p>

              <h4 className="terms-subsection-subtitle">{t('sections.smsPrivacyPolicy.changesTitle')}</h4>
              <p className="terms-text">{t('sections.smsPrivacyPolicy.changesText')}</p>
            </div>

            {/* Payment Terms */}
            <div className="terms-section">
              <h2 className="terms-section-title">{t('sections.payment.title')}</h2>
              
              <h3 className="terms-subsection-title">{t('sections.payment.pricingTitle')}</h3>
              <p className="terms-text">
                {t('sections.payment.pricingText')}
              </p>

              <h3 className="terms-subsection-title">{t('sections.payment.processingTitle')}</h3>
              <p className="terms-text">
                {t('sections.payment.processingText')}
              </p>

              <h3 className="terms-subsection-title">{t('sections.payment.refundsTitle')}</h3>
              <p className="terms-text">
                {t('sections.payment.refundsText')}
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="terms-section">
              <h2 className="terms-section-title">{t('sections.liability.title')}</h2>
              <p className="terms-text">
                {t('sections.liability.p1')}
              </p>
              <p className="terms-text">
                {t('sections.liability.p2')}
              </p>
            </div>

            {/* Disclaimer of Warranties */}
            <div className="terms-section">
              <h2 className="terms-section-title">{t('sections.warranties.title')}</h2>
              <p className="terms-text">
                {t('sections.warranties.p1')}
              </p>
            </div>

            {/* Indemnification */}
            <div className="terms-section">
              <h2 className="terms-section-title">{t('sections.indemnification.title')}</h2>
              <p className="terms-text">
                {t('sections.indemnification.p1')}
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="terms-section">
              <h2 className="terms-section-title">{t('sections.thirdParty.title')}</h2>
              <p className="terms-text">
                {t('sections.thirdParty.p1')}
              </p>
            </div>

            {/* Data Collection and Privacy */}
            <div className="terms-section">
              <h2 className="terms-section-title">{t('sections.dataPrivacy.title')}</h2>
              <p className="terms-text">
                {t('sections.dataPrivacy.p1')}
              </p>
            </div>

            {/* Modifications to Terms */}
            <div className="terms-section">
              <h2 className="terms-section-title">{t('sections.modifications.title')}</h2>
              <p className="terms-text">
                {t('sections.modifications.p1')}
              </p>
            </div>

            {/* Termination */}
            <div className="terms-section">
              <h2 className="terms-section-title">{t('sections.termination.title')}</h2>
              <p className="terms-text">
                {t('sections.termination.p1')}
              </p>
            </div>

            {/* Governing Law */}
            <div className="terms-section">
              <h2 className="terms-section-title">{t('sections.law.title')}</h2>
              <p className="terms-text">
                {t('sections.law.p1')}
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="terms-section">
              <h2 className="terms-section-title">{t('sections.disputes.title')}</h2>
              <p className="terms-text">
                {t('sections.disputes.p1')}
              </p>
            </div>

            {/* Severability */}
            <div className="terms-section">
              <h2 className="terms-section-title">{t('sections.severability.title')}</h2>
              <p className="terms-text">
                {t('sections.severability.p1')}
              </p>
            </div>

            {/* Entire Agreement */}
            <div className="terms-section">
              <h2 className="terms-section-title">{t('sections.entire.title')}</h2>
              <p className="terms-text">
                {t('sections.entire.p1')}
              </p>
            </div>

            {/* Contact Information */}
            <div className="terms-section">
              <h2 className="terms-section-title">{t('sections.contact.title')}</h2>
              <p className="terms-text">
                {t('sections.contact.p1')}
              </p>
              <p className="terms-text">
                {t('sections.contact.p2')}
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsPage
