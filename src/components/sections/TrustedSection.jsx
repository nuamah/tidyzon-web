import React from 'react'
import { CheckCircle, Users, Shield, Star } from 'lucide-react'
import ResponsivePicture from '../ResponsivePicture'
import './TrustedSection.css'

const TrustedSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "10,000+ Happy Customers",
      description: "Join thousands of satisfied customers who trust Tidyzon for their cleaning needs"
    },
    {
      icon: Shield,
      title: "Verified Professionals",
      description: "All service providers are background-checked and highly rated by our community"
    },
    {
      icon: Star,
      title: "4.9/5 Average Rating",
      description: "Consistently high ratings from customers across all our service areas"
    },
    {
      icon: CheckCircle,
      title: "Quality Guaranteed",
      description: "100% satisfaction guarantee or we'll make it right. Your happiness is our priority"
    }
  ]

  return (
    <section className="trusted-section">
      <div className="container">
        <div className="trusted-content">
          {/* Text Content - Left Side */}
          <div className="trusted-text">
            <div className="section-badge">
              <CheckCircle className="badge-icon" />
              <span>Trusted by Thousands</span>
            </div>
            
            <h2 className="section-title">
              Why Customers Choose
              <span className="gradient-text"> Tidyzon</span>
            </h2>
            
            <p className="section-description">
              We've built our reputation on delivering exceptional cleaning services 
              that exceed expectations. Our commitment to quality and customer satisfaction 
              has made us the preferred choice for thousands of customers nationwide.
            </p>

            <div className="benefits-list">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="benefit-item">
                    <div className="benefit-icon">
                      <IconComponent className="icon" />
                    </div>
                    <div className="benefit-content">
                      <h3 className="benefit-title">{benefit.title}</h3>
                      <p className="benefit-description">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Image Content - Right Side */}
          <div className="trusted-image">
            <div className="image-container">
              <ResponsivePicture
                webpSrcSet="/assets/tidyzon_cleaner_01-606.webp 606w, /assets/tidyzon_cleaner_01-1212.webp 1212w"
                fallbackSrcSet="/assets/tidyzon_cleaner_01-606.jpg 606w, /assets/tidyzon_cleaner_01-1212.jpg 1212w"
                fallbackSrc="/assets/tidyzon_cleaner_01-606.jpg"
                alt="Professional cleaning service in action"
                className="main-image"
                width={606}
                height={404}
                sizes="(max-width: 768px) 100vw, 606px"
                loading="lazy"
                decoding="async"
              />
              <div className="image-overlay">
                <div className="floating-card card-1">
                  <div className="card-icon">
                    <Star className="icon" />
                  </div>
                  <div className="card-content">
                    <div className="card-value">4.9/5</div>
                    <div className="card-label">Rating</div>
                  </div>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">
                    <Users className="icon" />
                  </div>
                  <div className="card-content">
                    <div className="card-value">10K+</div>
                    <div className="card-label">Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedSection
