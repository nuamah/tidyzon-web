import React from 'react'
import { Briefcase, ArrowLeft, Users, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import './OpenPositionsPage.css'

const OpenPositionsPage = () => {
  return (
    <div className="open-positions-page">
      {/* Hero Section */}
      <section className="positions-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <Link to="/teams" className="back-link">
              <ArrowLeft className="back-icon" />
              Back to Team
            </Link>
            <div className="hero-badge">
              <Briefcase className="badge-icon" />
              <span>Careers</span>
            </div>
            <h1 className="hero-title">
              Open <span className="gradient-text">Positions</span>
            </h1>
            <p className="hero-subtitle">
              Join our team and help us revolutionize the cleaning service industry
            </p>
          </div>
        </div>
      </section>

      {/* No Positions Available Section */}
      <section className="no-positions-section">
        <div className="container">
          <div className="no-positions-content">
            <div className="no-positions-icon">
              <Briefcase className="positions-icon" />
            </div>
            <h2 className="no-positions-title">No positions currently available</h2>
            <p className="no-positions-message">
              We're not hiring at the moment, but we're always looking for exceptional talent. 
              Check back soon for new opportunities to join our growing team.
            </p>
            
            <div className="check-back-info">
              <div className="info-item">
                <Clock className="info-icon" />
                <span>Check back regularly for new openings</span>
              </div>
              <div className="info-item">
                <Users className="info-icon" />
                <span>We're always interested in hearing from great candidates</span>
              </div>
            </div>

            <div className="positions-actions">
              <Link to="/contact" className="contact-btn">
                Get in Touch
                <ArrowLeft className="btn-icon" />
              </Link>
              <Link to="/teams" className="teams-btn">
                Meet Our Team
                <Users className="btn-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OpenPositionsPage
