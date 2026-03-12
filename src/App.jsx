import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './components/Home'
import AboutPage from './pages/AboutPage'
import CaliforniaPrivacyPage from './pages/CaliforniaPrivacyPage'
import DoNotSellPage from './pages/DoNotSellPage'
import GetStartedPage from './pages/GetStartedPage'
import LimitSPIPage from './pages/LimitSPIPage'
import NotFoundPage from './pages/NotFoundPage'
import OpenPositionsPage from './pages/OpenPositionsPage'
import PrivacyRequestsPage from './pages/PrivacyRequestsPage'
import ProviderPage from './pages/ProviderPage'
import ReviewsPage from './pages/ReviewsPage'
import ServicesPage from './pages/ServicesPage'
import TeamsPage from './pages/TeamsPage'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/provider" element={<ProviderPage />} />
            <Route path="/get-started" element={<GetStartedPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/open-positions" element={<OpenPositionsPage />} />
            <Route path="/privacy" element={<PrivacyRequestsPage />} />
            <Route path="/privacy/requests" element={<PrivacyRequestsPage />} />
            <Route path="/privacy/do-not-sell-or-share" element={<DoNotSellPage />} />
            <Route path="/privacy/limit-sensitive-info" element={<LimitSPIPage />} />
            <Route path="/california-privacy" element={<CaliforniaPrivacyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  )
}

export default App
