import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import DownloadModal from "./DownloadModal";
import "./Header.css";
import { LocalizationModal } from "./LocalizationModal";

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <DownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Mobile Navigation Overlay - Outside header for global scope */}
      {isMenuOpen && (
        <div
          className="mobile-nav-overlay"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Navigation Drawer - Outside header for global scope */}
      <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
        {/* Header Section */}
        <div className="mobile-nav-header">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img
              src="/assets/logo.png"
              alt="Tidyzon Logo"
              className="mobile-nav-logo"
              width={186}
              height={67}
              decoding="async"
            />
          </Link>
          <button
            className="mobile-close-btn"
            onClick={() => setIsMenuOpen(false)}
            aria-label={t("header.aria.closeMenu")}
          >
            <X className="close-icon" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="mobile-nav-content">
          <Link
            to="/"
            className="mobile-nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("header.nav.home")}
          </Link>
          <Link
            to="/services"
            className="mobile-nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("header.nav.services")}
          </Link>
          <Link
            to="/about"
            className="mobile-nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("header.nav.about")}
          </Link>
          <Link
            to="/teams"
            className="mobile-nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("header.nav.team")}
          </Link>
          <Link
            to="/contact"
            className="mobile-nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("header.nav.contact")}
          </Link>
          <Link
            to="/terms"
            className="mobile-nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("header.nav.terms")}
          </Link>
          <Link
            to="/privacy"
            className="mobile-nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("header.nav.privacy")}
          </Link>
          <div className="mobile-cta-buttons">
            <Link
              to="/get-started"
              className="btn-mobile-cta btn-mobile-user"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.cta.user")}
            </Link>
            <Link
              to="/provider"
              className="btn-mobile-cta btn-mobile-provider"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.cta.provider")}
            </Link>
          </div>
        </div>
      </div>

      <header className={`modern-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container header-container">
          {/* Logo */}
          <Link to="/" className="header-logo">
            <img
              src="/assets/logo.png"
              alt="Tidyzon Logo"
              className="logo-image"
              width={186}
              height={67}
              decoding="async"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link to="/" className="nav-link">
              {t("header.nav.home")}
            </Link>
            <Link to="/services" className="nav-link">
              {t("header.nav.services")}
            </Link>
            <Link to="/about" className="nav-link">
              {t("header.nav.about")}
            </Link>
            <Link to="/teams" className="nav-link">
              {t("header.nav.team")}
            </Link>
            <Link to="/contact" className="nav-link">
              {t("header.nav.contact")}
            </Link>
            <Link to="/terms" className="nav-link">
              {t("header.nav.terms")}
            </Link>
            <Link to="/privacy" className="nav-link">
              {t("header.nav.privacy")}
            </Link>
          </nav>
          <LocalizationModal />

          {/* CTA Buttons */}
          <div className="header-cta">
            <Link to="/get-started" className="btn-header-cta btn-user">
              {t("header.cta.user")}
            </Link>
            <Link to="/provider" className="btn-header-cta btn-provider">
              {t("header.cta.provider")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label={t("header.aria.toggleMenu")}
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
  );
};

export default Header;
