import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  DEFAULT_SERVICE_LOCATION,
  captureEvent,
  getFromValue,
  trackInitiateMessage,
  trackRequestSchedule,
  trackSignupCustomer,
  trackSignupProvider,
} from '../lib/analytics'

function getElementLabel(el) {
  const explicitLabel = el.getAttribute('data-analytics-label')
  if (explicitLabel) return explicitLabel

  const ariaLabel = el.getAttribute('aria-label')
  if (ariaLabel) return ariaLabel

  const text = (el.textContent || '').trim().replace(/\s+/g, ' ')
  return text || 'unnamed'
}

const PostHogAutoCapture = () => {
  const location = useLocation()

  useEffect(() => {
    const handleClick = (event) => {
      if (!(event.target instanceof Element)) return
      const interactiveEl = event.target.closest('a, button, [role="button"]')
      if (!interactiveEl) return

      const from = getFromValue(location.pathname)
      const isLink = interactiveEl.tagName.toLowerCase() === 'a'
      const href = isLink ? (interactiveEl.getAttribute('href') || '') : ''
      const label = getElementLabel(interactiveEl)
      const className = typeof interactiveEl.className === 'string' ? interactiveEl.className : ''

      // Generic event for every button/link in the site.
      captureEvent('ui_interaction', {
        from,
        element_type: isLink ? 'link' : 'button',
        element_label: label,
        destination: href || undefined,
      })

      if (href.includes('/provider')) {
        trackSignupProvider(from)
      } else if (href.includes('/get-started')) {
        trackSignupCustomer(from)
      }

      if (
        className.includes('request-arrow-btn') ||
        className.includes('select-provider-btn') ||
        className.includes('main-cta-btn') ||
        className.includes('service-button') ||
        className.includes('pricing-cta-btn') ||
        /request service/i.test(label)
      ) {
        const locationInput = document.querySelector('.location-input')
        const serviceLocation =
          (locationInput && locationInput.value && locationInput.value.trim()) || DEFAULT_SERVICE_LOCATION

        trackRequestSchedule({
          from,
          serviceLocation,
        })
      }

      if (className.includes('ai-chat-button-merged')) {
        trackInitiateMessage(from)
      }
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [location.pathname])

  return null
}

export default PostHogAutoCapture
