import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import DownloadModal from './DownloadModal'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Mobile Navigation Overlay - Outside header for global scope */}
      {isMenuOpen && (
        <div className="mobile-nav-overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}

      {/* Mobile Navigation Drawer - Outside header for global scope */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        {/* Header Section */}
        <div className="mobile-nav-header">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img 
              src="/assets/logo.png" 
              alt="Tidyzon Logo" 
              className="mobile-nav-logo"
            />
          </Link>
          <button
            className="mobile-close-btn"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="close-icon" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="mobile-nav-content">
          <Link to="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/services" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <Link to="/about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/teams" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            Teams
          </Link>
          <Link to="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/terms" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            Terms
          </Link>
          <Link to="/privacy" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            Privacy
          </Link>
          <div className="mobile-cta-buttons">
            <Link to="/get-started" className="btn-mobile-cta btn-mobile-user" onClick={() => setIsMenuOpen(false)}>
              User
            </Link>
            <Link to="/provider" className="btn-mobile-cta btn-mobile-provider" onClick={() => setIsMenuOpen(false)}>
              Provider
            </Link>
          </div>
        </div>

      </div>

      <header className={`modern-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          {/* Logo */}
          <Link to="/" className="header-logo">
            <img 
              src="/assets/logo.png" 
              alt="Tidyzon Logo" 
              className="logo-image"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/teams" className="nav-link">Teams</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/terms" className="nav-link">Terms</Link>
            <Link to="/privacy" className="nav-link">Privacy</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="header-cta">
            <Link to="/get-started" className="btn-header-cta btn-user">User</Link>
            <Link to="/provider" className="btn-header-cta btn-provider">Provider</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="menu-icon" />
            ) : (
              <Menu className="menu-icon" />
            )}
          </button>
        </div>
      </header>
    </>
  )
}

export default Header