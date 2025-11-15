import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import AIChatbot from './components/AIChatbot'
import BottomNav from './components/BottomNav'
// import PageLoader from './components/PageLoader'
// import usePageLoader from './hooks/usePageLoader'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ReviewsPage from './pages/ReviewsPage'
import ContactPage from './pages/ContactPage'
import GetStartedPage from './pages/GetStartedPage'
import ProviderPage from './pages/ProviderPage'
import TeamsPage from './pages/TeamsPage'
import OpenPositionsPage from './pages/OpenPositionsPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import CaliforniaPrivacyPage from './pages/CaliforniaPrivacyPage'
import DoNotSellPage from './pages/DoNotSellPage'
import LimitSPIPage from './pages/LimitSPIPage'
import PrivacyRequestsPage from './pages/PrivacyRequestsPage'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'

function App() {
  // const isLoading = usePageLoader() // Disabled for now

  return (
    <Router>
      <div className="App">
        {/* {isLoading && <PageLoader />} */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/provider" element={<ProviderPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/open-positions" element={<OpenPositionsPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/california-privacy" element={<CaliforniaPrivacyPage />} />
          <Route path="/privacy/do-not-sell-or-share" element={<DoNotSellPage />} />
          <Route path="/privacy/limit-sensitive-info" element={<LimitSPIPage />} />
          <Route path="/privacy/requests" element={<PrivacyRequestsPage />} />
          {/* Catch-all route for 404 pages */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
        <AIChatbot />
        <BottomNav />
      </div>
    </Router>
  )
}

export default App