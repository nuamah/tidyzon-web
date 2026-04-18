import React, { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, Facebook, Instagram } from 'lucide-react'
import './Footer.css'

const FooterQr = lazy(() => import('./FooterQr'))

function TikTokIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.931.02 0.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-2.96.58-.96.94-1.03 2.65-.02 3.63.76.82 2.03.88 3.03.52.92-.34 1.54-1.21 1.72-2.17.06-.28.07-.58.06-.87.01-2.76 0-5.52 0-8.28z" />
    </svg>
  )
}

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
              <a
                href="https://www.facebook.com/profile.php?id=61587155978706"
                className="social-link"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="social-icon" />
              </a>
              <a
                href="https://www.tiktok.com/@tidyzon/video/7629899973689101598"
                className="social-link"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TikTokIcon className="social-icon" />
              </a>
              <a
                href="https://www.instagram.com/tidyzon/"
                className="social-link"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="social-icon" />
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