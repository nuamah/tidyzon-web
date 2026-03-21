import React, { useEffect } from 'react'
import PrivacyPage from './PrivacyPage'

/** Anchor id for Privacy Policy §8.6 Your choices (SMS opt-out: Reply STOP, etc.) */
export const SMS_PRIVACY_YOUR_CHOICES_ID = 'sms-privacy-your-choices'

/**
 * Support URL: /support/otp-out
 * Shows the Privacy Policy with the URL unchanged (not /privacy) and scrolls to §8.6 Your choices.
 */
const SupportOtpOutPage = () => {
  useEffect(() => {
    const scrollToSection = () => {
      document.getElementById(SMS_PRIVACY_YOUR_CHOICES_ID)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    const raf = requestAnimationFrame(scrollToSection)
    const t1 = setTimeout(scrollToSection, 150)
    const t2 = setTimeout(scrollToSection, 400)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return <PrivacyPage />
}

export default SupportOtpOutPage
