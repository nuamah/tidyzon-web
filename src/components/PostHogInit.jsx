import { useEffect } from 'react'

/**
 * Loads posthog-js after first paint so analytics is not on the critical path
 * (avoids Lighthouse NO_FCP on slow networks when PostHog would block the main bundle).
 */
export default function PostHogInit() {
  useEffect(() => {
    const token = import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN
    if (!token) return

    let cancelled = false

    import('posthog-js').then((posthog) => {
      if (cancelled) return
      const client = posthog.default
      if (client.__loaded) return

      client.init(token, {
        api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
        defaults: '2026-01-30',
      })
    })

    return () => {
      cancelled = true
    }
  }, [])

  return null
}
