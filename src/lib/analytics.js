import posthog from 'posthog-js'

export const DEFAULT_SERVICE_LOCATION = '1205 W. Home Ave, Chicago, IL 60932'

export function getFromValue(pathname) {
  if (!pathname || pathname === '/') return 'Home'
  if (pathname.startsWith('/services')) return 'Services'
  if (pathname.startsWith('/contact')) return 'Contact'
  if (pathname.startsWith('/provider')) return 'Provider'
  if (pathname.startsWith('/get-started')) return 'GetStarted'
  return pathname.replace('/', '') || 'Unknown'
}

export function captureEvent(eventName, properties = {}) {
  try {
    posthog.capture(eventName, properties)
  } catch (err) {
    console.warn('PostHog capture failed:', err)
  }
}

export function trackSignupProvider(from) {
  captureEvent('signup_provider', { from })
}

export function trackSignupCustomer(from) {
  captureEvent('signup_customer', { from })
}

export function trackInitiateMessage(from) {
  captureEvent('initiate_message', { from })
}

export function trackRequestSchedule({ from, serviceLocation, fullName, email, phone, subject }) {
  const payload = { from }

  if (serviceLocation) payload.service_location = serviceLocation
  if (fullName) payload.full_name = fullName
  if (email) payload.email = email
  if (phone) payload.phone = phone
  if (subject) payload.subject = subject

  captureEvent('request_schedule', payload)
}
