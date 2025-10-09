import React from 'react'
import { Zap, Shield, Clock, Users, Award, HeartHandshake } from 'lucide-react'
import './Features.css'

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Booking",
      description: "Book services in seconds with our intuitive mobile app. No waiting, no hassle."
    },
    {
      icon: Shield,
      title: "Verified Professionals",
      description: "All service providers are background-checked and highly rated by our community."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Choose times that work for you. Same-day service available in most areas."
    },
    {
      icon: Users,
      title: "Trusted by 10K+",
      description: "Join thousands of satisfied customers who trust Tidyzon for their cleaning needs."
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "100% satisfaction guarantee or we'll make it right. Your happiness is our priority."
    },
    {
      icon: HeartHandshake,
      title: "Eco-Friendly",
      description: "We use environmentally safe products that are tough on dirt, gentle on nature."
    }
  ]

  return (
    <section className="features-section">
      <div className="features-bg-pattern"></div>
      
      <div className="container">
        <div className="features-header">
          <h2 className="features-title">
            Why Choose <span className="gradient-text-feat">Tidyzon</span>
          </h2>
          <p className="features-subtitle">
            Experience the difference with our premium cleaning services designed for modern living
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="feature-card">
                <div className="feature-icon-container">
                  <div className="feature-icon-bg"></div>
                  <IconComponent className="feature-icon" />
                </div>
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-description">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Stats Bar */}
        <div className="stats-bar">
          <div className="stat-box">
            <div className="stat-value">10,000+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">500+</div>
            <div className="stat-label">Service Providers</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">50,000+</div>
            <div className="stat-label">Services Completed</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">4.9/5</div>
            <div className="stat-label">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features