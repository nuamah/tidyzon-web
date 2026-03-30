import React from 'react'
import ReactDOM from 'react-dom/client'
import { PostHogProvider } from '@posthog/react'
import App from './App.jsx'
import './index.css'

const posthogOptions = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  defaults: '2026-01-30',
}

const posthogToken = import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {posthogToken ? (
      <PostHogProvider apiKey={posthogToken} options={posthogOptions}>
        <App />
      </PostHogProvider>
    ) : (
      <App />
    )}
  </React.StrictMode>,
)

