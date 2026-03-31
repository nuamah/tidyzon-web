import React, { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import './Footer.css'

const FooterQr = lazy(() => import('./FooterQr'))

const Footer = () => {
  return (
    <footer className="modern-footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img 
                src="/assets/logo.png" 
                alt="Tidyzon Logo" 
                className="footer-logo-image"
                width={186}
                height={67}
                decoding="async"
              />
            </div>
            <p className="footer-description">
              Your trusted partner for premium home and car cleaning services. Making your life cleaner, one service at a time.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook className="social-icon" />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter className="social-icon" />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram className="social-icon" />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin className="social-icon" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-list">
              <li><Link to="/services">Car Cleaning</Link></li>
              <li><Link to="/services">Bin Sanitization</Link></li>
              <li><Link to="/services">All Services</Link></li>
            </ul>
          </div>

              {/* Company */}
              <div className="footer-links">
                <h4 className="footer-heading">Company</h4>
                <ul className="footer-list">
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/teams">Team</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/get-started">Get Started</Link></li>
                  <li><Link to="/provider">Become a Provider</Link></li>
                  <li><Link to="/terms">Terms & Conditions</Link></li>
                  <li><Link to="/privacy">Privacy Policy</Link></li>
                  <li><Link to="/customer-service-agreement">Customer Service Agreement</Link></li>
                  <li><Link to="/service-provider-agreement">Service Provider Agreement</Link></li>
                </ul>
              </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4 className="footer-heading">Get in Touch</h4>
            <ul className="contact-list">
              <li>
                <Mail className="contact-icon" />
                <span>support@tidyzon.com</span>
              </li>
              <li>
                <Phone className="contact-icon" />
                <span>(815) 608-1632</span>
              </li>
              <li>
                <MapPin className="contact-icon" />
                <span>708 Saybrook Ct. Romeoville IL 60446</span>
              </li>
            </ul>

            <Suspense fallback={null}>
              <FooterQr />
            </Suspense>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 Tidyzon. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/customer-service-agreement">Customer Agreement</Link>
            <Link to="/service-provider-agreement">Provider Agreement</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer