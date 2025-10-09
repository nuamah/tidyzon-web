import React, { useState } from 'react'
import { Star, Quote, ThumbsUp, Filter } from 'lucide-react'
import DownloadModal from '../components/DownloadModal'
import './ReviewsPage.css'

const ReviewsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filter, setFilter] = useState('all')

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "2 days ago",
      service: "Car Cleaning",
      text: "Absolutely phenomenal service! My car has never looked better. The team was professional, punctual, and went above and beyond. They even cleaned areas I didn't expect. Highly recommend Tidyzon!",
      helpful: 24
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "1 week ago",
      service: "Bin Cleaning",
      text: "The trash bin sanitization service is incredible. My bins are spotless and odor-free. The monthly plan is worth every penny. Great job, Tidyzon team!",
      helpful: 18
    },
    {
      name: "Emily Rodriguez",
      role: "Property Manager",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "1 week ago",
      service: "Home Cleaning",
      text: "Managing multiple properties, I needed a reliable cleaning service. Tidyzon delivers consistently excellent results. The app makes booking so easy, and the cleaners are always professional.",
      helpful: 32
    },
    {
      name: "David Thompson",
      role: "Family Man",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "2 weeks ago",
      service: "Car Cleaning",
      text: "As a busy parent, Tidyzon is a lifesaver! The mobile car cleaning service means I don't have to waste time driving to a car wash. Plus, the eco-friendly products give me peace of mind.",
      helpful: 15
    },
    {
      name: "Jessica Williams",
      role: "Entrepreneur",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "3 weeks ago",
      service: "Home Cleaning",
      text: "The attention to detail is impressive. Every corner of my home was spotless. The booking process was seamless, and the customer service team was very responsive.",
      helpful: 21
    },
    {
      name: "Robert Martinez",
      role: "Retiree",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "1 month ago",
      service: "Home Cleaning",
      text: "Outstanding service from start to finish. The professionals are courteous, thorough, and take pride in their work. I've recommended Tidyzon to all my friends.",
      helpful: 28
    },
    {
      name: "Amanda Foster",
      role: "Healthcare Professional",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "1 month ago",
      service: "Car Cleaning",
      text: "Working long shifts, I don't have time for car maintenance. Tidyzon's mobile service is perfect. They come to my workplace and my car is spotless when I'm done. Brilliant!",
      helpful: 19
    },
    {
      name: "James Wilson",
      role: "Tech Professional",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "1 month ago",
      service: "Bin Cleaning",
      text: "The bin cleaning service exceeded my expectations. No more dealing with gross, smelly bins. The subscription model is convenient and affordable.",
      helpful: 16
    },
    {
      name: "Lisa Anderson",
      role: "Teacher",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "2 months ago",
      service: "Home Cleaning",
      text: "Tidyzon has made my life so much easier. Coming home to a clean house after a long day of teaching is priceless. The team is reliable and trustworthy.",
      helpful: 25
    }
  ]

  const filterOptions = [
    { value: 'all', label: 'All Reviews' },
    { value: 'car', label: 'Car Cleaning' },
    { value: 'bin', label: 'Bin Cleaning' },
    { value: 'home', label: 'Home Cleaning' }
  ]

  const filteredReviews = filter === 'all' ? reviews : reviews.filter(review => {
    if (filter === 'car') return review.service === 'Car Cleaning'
    if (filter === 'bin') return review.service === 'Bin Cleaning'
    if (filter === 'home') return review.service === 'Home Cleaning'
    return true
  })

  return (
    <>
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div className="reviews-page">
        {/* Hero Section */}
        <section className="reviews-hero">
          <div className="reviews-hero-bg"></div>
          <div className="container">
            <div className="reviews-hero-content">
              <h1 className="reviews-hero-title">
                Customer <span className="gradient-text">Reviews</span>
              </h1>
              <p className="reviews-hero-subtitle">
                See what our happy customers are saying about Tidyzon
              </p>
              <div className="reviews-stats">
                <div className="review-stat-item">
                  <div className="stat-number-lg">4.9/5</div>
                  <div className="stat-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="star-filled" />
                    ))}
                  </div>
                  <div className="stat-label-lg">Average Rating</div>
                </div>
                <div className="review-stat-item">
                  <div className="stat-number-lg">10,000+</div>
                  <div className="stat-label-lg">Happy Customers</div>
                </div>
                <div className="review-stat-item">
                  <div className="stat-number-lg">50,000+</div>
                  <div className="stat-label-lg">Services Completed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="filter-section">
          <div className="container">
            <div className="filter-bar">
              <div className="filter-label">
                <Filter className="filter-icon" />
                <span>Filter by service:</span>
              </div>
              <div className="filter-buttons">
                {filterOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`filter-btn ${filter === option.value ? 'active' : ''}`}
                    onClick={() => setFilter(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="reviews-grid-section">
          <div className="container">
            <div className="reviews-grid">
              {filteredReviews.map((review, index) => (
                <div key={index} className="review-card-detailed">
                  <div className="review-header">
                    <div className="reviewer-info">
                      <img src={review.avatar} alt={review.name} className="reviewer-avatar" />
                      <div>
                        <h3 className="reviewer-name">{review.name}</h3>
                        <p className="reviewer-role">{review.role}</p>
                      </div>
                    </div>
                    <div className="review-meta">
                      <div className="review-stars">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="star-filled-small" />
                        ))}
                      </div>
                      <span className="review-date">{review.date}</span>
                    </div>
                  </div>

                  <div className="review-service-tag">
                    {review.service}
                  </div>

                  <div className="review-quote-icon">
                    <Quote className="quote-svg" />
                  </div>

                  <p className="review-text">{review.text}</p>

                  <div className="review-footer">
                    <button className="helpful-btn">
                      <ThumbsUp className="thumbs-icon" />
                      <span>Helpful ({review.helpful})</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="reviews-cta-section">
          <div className="container">
            <div className="reviews-cta-card">
              <h2 className="cta-title">Ready to Join Our Happy Customers?</h2>
              <p className="cta-subtitle">Experience the Tidyzon difference today</p>
              <button className="btn-cta-white" onClick={() => setIsModalOpen(true)}>
                Get Started Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ReviewsPage
