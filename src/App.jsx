import React, { Suspense, lazy } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import PostHogAutoCapture from './components/PostHogAutoCapture'
import PostHogInit from './components/PostHogInit'
import ScrollToTop from './components/ScrollToTop'
import Home from './components/Home'
import RouteSEO from './components/RouteSEO'
import './App.css'

const AboutPage = lazy(() => import('./pages/AboutPage'))
const CaliforniaPrivacyPage = lazy(() => import('./pages/CaliforniaPrivacyPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const CustomerServiceAgreementPage = lazy(() => import('./pages/CustomerServiceAgreementPage'))
const DoNotSellPage = lazy(() => import('./pages/DoNotSellPage'))
const GetStartedPage = lazy(() => import('./pages/GetStartedPage'))
const LimitSPIPage = lazy(() => import('./pages/LimitSPIPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const OpenPositionsPage = lazy(() => import('./pages/OpenPositionsPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const PrivacyRequestsPage = lazy(() => import('./pages/PrivacyRequestsPage'))
const ProviderPage = lazy(() => import('./pages/ProviderPage'))
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'))
const ServiceProviderAgreementPage = lazy(() => import('./pages/ServiceProviderAgreementPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const TeamsPage = lazy(() => import('./pages/TeamsPage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))
const SupportOptOutPage = lazy(() => import('./pages/SupportOptOutPage'))

const RouteFallback = () => (
  <div className="route-fallback" aria-busy="true" aria-live="polite" />
)

const App = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
      <div className="App">
        <PostHogInit />
        <RouteSEO />
        <PostHogAutoCapture />
        <Header />
        <main>
          <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/provider" element={<ProviderPage />} />
            <Route path="/get-started" element={<GetStartedPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/open-positions" element={<OpenPositionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/help" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/support/opt-out" element={<SupportOptOutPage />} />
            <Route path="/support/otp-out" element={<Navigate to="/support/opt-out" replace />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/privacy/requests" element={<PrivacyRequestsPage />} />
            <Route path="/privacy/do-not-sell-or-share" element={<DoNotSellPage />} />
            <Route path="/privacy/limit-sensitive-info" element={<LimitSPIPage />} />
            <Route path="/california-privacy" element={<CaliforniaPrivacyPage />} />
            <Route path="/customer-service-agreement" element={<CustomerServiceAgreementPage />} />
            <Route path="/service-provider-agreement" element={<ServiceProviderAgreementPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          </Suspense>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
      </HelmetProvider>
    </BrowserRouter>
  )
}

export default App
