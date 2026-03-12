import React, { useEffect } from 'react'
import { Loader2 } from 'lucide-react'
import './PageLoader.css'

const PageLoader = () => {
  // Prevent scrolling when loader is active
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="page-loader">
      <div className="loader-content">
        <div className="loader-spinner-container">
          <Loader2 className="loader-spinner" />
        </div>
        
        <div className="loader-text">
          <h3 className="loader-title">Loading</h3>
          <div className="loader-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        
        <div className="loader-bar">
          <div className="loader-bar-fill"></div>
        </div>
      </div>
      
      {/* Background Animation */}
      <div className="loader-bg-animation">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </div>
  )
}

export default PageLoader

