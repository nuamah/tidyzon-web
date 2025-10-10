import React, { useState, useEffect, useRef } from 'react'
import { X, Smartphone, Users, Apple } from 'lucide-react'
import QRCode from 'qrcode'
import './DownloadModal.css'

const DownloadModal = ({ isOpen, onClose, activeTab: initialActiveTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab === 1 ? 'provider' : 'user')
  const userIosQRRef = useRef(null)
  const userAndroidQRRef = useRef(null)
  const providerIosQRRef = useRef(null)
  const providerAndroidQRRef = useRef(null)

  // Update activeTab when prop changes
  useEffect(() => {
    setActiveTab(initialActiveTab === 1 ? 'provider' : 'user')
  }, [initialActiveTab])

  // App Store URLs (placeholder - replace with your actual URLs)
  const appLinks = {
    user: {
      ios: 'https://apps.apple.com/app/tidyzon-user',
      android: 'https://play.google.com/store/apps/details?id=com.tidyzon.user'
    },
    provider: {
      ios: 'https://apps.apple.com/app/tidyzon-provider',
      android: 'https://play.google.com/store/apps/details?id=com.tidyzon.provider'
    }
  }

  // Generate QR Codes
  useEffect(() => {
    if (isOpen) {
      // Determine QR code size based on screen width
      const isMobile = window.innerWidth < 768
      const qrSize = isMobile ? 100 : 120

      // User App QR Codes
      if (userIosQRRef.current) {
        QRCode.toCanvas(userIosQRRef.current, appLinks.user.ios, {
          width: qrSize,
          margin: 1,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        })
      }
      if (userAndroidQRRef.current) {
        QRCode.toCanvas(userAndroidQRRef.current, appLinks.user.android, {
          width: qrSize,
          margin: 1,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        })
      }
      // Provider App QR Codes
      if (providerIosQRRef.current) {
        QRCode.toCanvas(providerIosQRRef.current, appLinks.provider.ios, {
          width: qrSize,
          margin: 1,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        })
      }
      if (providerAndroidQRRef.current) {
        QRCode.toCanvas(providerAndroidQRRef.current, appLinks.provider.android, {
          width: qrSize,
          margin: 1,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        })
      }
    }
  }, [isOpen, appLinks.user.ios, appLinks.user.android, appLinks.provider.ios, appLinks.provider.android])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-container">
        {/* Close Button */}
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X className="close-icon" />
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <h2 className="modal-title">
            Download <span className="gradient-text-modal">Tidyzon App</span>
          </h2>
          <p className="modal-subtitle">
            Choose your app and start experiencing premium cleaning services today
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="tab-switcher">
          <button
            className={`tab-button ${activeTab === 'user' ? 'active' : ''}`}
            data-tab="user"
            onClick={() => setActiveTab('user')}
          >
            <Smartphone className="tab-icon" />
            <span>For Users</span>
          </button>
          <button
            className={`tab-button ${activeTab === 'provider' ? 'active' : ''}`}
            data-tab="provider"
            onClick={() => setActiveTab('provider')}
          >
            <Users className="tab-icon" />
            <span>For Service Providers</span>
          </button>
          <div className={`tab-indicator ${activeTab === 'provider' ? 'right provider' : ''}`}></div>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'user' ? (
            <div className="app-section animate-fade-in">
              <div className="app-info">
                <div className="app-icon user-icon">
                  <Smartphone className="icon-large" />
                </div>
                <h3 className="app-title">Tidyzon User App</h3>
              </div>

              {/* Download Buttons with QR Codes */}
              <div className="download-section">
                {/* iOS */}
                <div className="store-section">
                  <div className="qr-code-wrapper">
                    <canvas ref={userIosQRRef} className="qr-canvas"></canvas>
                    <p className="qr-label">Scan for iOS</p>
                  </div>
                  <a href={appLinks.user.ios} className="download-btn ios-btn" target="_blank" rel="noopener noreferrer">
                    <Apple className="store-icon" />
                    <div className="store-text">
                      <span className="store-label">Download on the</span>
                      <span className="store-name">App Store</span>
                    </div>
                  </a>
                </div>

                {/* Android */}
                <div className="store-section">
                  <div className="qr-code-wrapper">
                    <canvas ref={userAndroidQRRef} className="qr-canvas"></canvas>
                    <p className="qr-label">Scan for Android</p>
                  </div>
                  <a href={appLinks.user.android} className="download-btn android-btn" target="_blank" rel="noopener noreferrer">
                    <svg className="store-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="store-text">
                      <span className="store-label">GET IT ON</span>
                      <span className="store-name">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="app-section animate-fade-in">
              <div className="app-info">
                <div className="app-icon provider-icon">
                  <Users className="icon-large" />
                </div>
                <h3 className="app-title">Tidyzon Service Provider App</h3>
              </div>

              {/* Download Buttons with QR Codes */}
              <div className="download-section">
                {/* iOS */}
                <div className="store-section">
                  <div className="qr-code-wrapper">
                    <canvas ref={providerIosQRRef} className="qr-canvas"></canvas>
                    <p className="qr-label">Scan for iOS</p>
                  </div>
                  <a href={appLinks.provider.ios} className="download-btn ios-btn" target="_blank" rel="noopener noreferrer">
                    <Apple className="store-icon" />
                    <div className="store-text">
                      <span className="store-label">Download on the</span>
                      <span className="store-name">App Store</span>
                    </div>
                  </a>
                </div>

                {/* Android */}
                <div className="store-section">
                  <div className="qr-code-wrapper">
                    <canvas ref={providerAndroidQRRef} className="qr-canvas"></canvas>
                    <p className="qr-label">Scan for Android</p>
                  </div>
                  <a href={appLinks.provider.android} className="download-btn android-btn" target="_blank" rel="noopener noreferrer">
                    <svg className="store-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="store-text">
                      <span className="store-label">GET IT ON</span>
                      <span className="store-name">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DownloadModal