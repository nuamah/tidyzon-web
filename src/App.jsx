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
import TeamsPage from './pages/TeamsPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
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
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
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