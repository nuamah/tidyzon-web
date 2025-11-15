import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './AnimatedStats.css'

const AnimatedStats = () => {
  return (
    <section className="animated-stats-section">
      <div className="container">
        <div className="image-text-layout image-right">
          <div className="content-section">
            <h2 className="section-title">
              Your journey as a provider
              <span className="gradient-text"> starts today</span>
            </h2>
            <p className="section-description">
              Your journey as a provider starts today. Signup to make good money with good tips.
            </p>
            <div className="section-buttons">
              <Link to="/get-started" className="section-btn btn-user">
                <span>Sign up as User</span>
                <ArrowRight className="btn-arrow" />
              </Link>
              <Link to="/provider" className="section-btn btn-provider">
                <span>Sign up as Provider</span>
                <ArrowRight className="btn-arrow" />
              </Link>
            </div>
          </div>
          <div className="image-section">
            <img 
              src="/assets/ttd.jpg" 
              alt="Join Tidyzon as a provider" 
              className="section-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnimatedStats
