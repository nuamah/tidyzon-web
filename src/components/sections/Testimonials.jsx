import React, { useState } from 'react'
import { Star, Quote } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import DownloadModal from '../DownloadModal'
import './Testimonials.css'

const Testimonials = () => {
  const { t } = useTranslation('home')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const localizedItems = t('testimonials.items', { returnObjects: true })
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Tidyzon has transformed my weekly routine! The car cleaning service is exceptional, and the professionals are always on time. Highly recommend!",
      service: "Car Cleaning"
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "The trash bin sanitization service is a game-changer. My bins have never been cleaner, and the odor is completely gone. Worth every penny!",
      service: "Bin Cleaning"
    },
    {
      name: "Emily Rodriguez",
      role: "Property Manager",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Professional, reliable, and affordable. Tidyzon's home cleaning service has made managing my properties so much easier. The team is outstanding!",
      service: "Home Cleaning"
    },
    {
      name: "David Thompson",
      role: "Family Man",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "As a busy parent, Tidyzon is a lifesaver. Quick booking, great service, and the eco-friendly products give me peace of mind. 10/10!",
      service: "All Services"
    },
    {
      name: "Jessica Williams",
      role: "Entrepreneur",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "The app is incredibly user-friendly and the service quality is unmatched. I've tried other services, but Tidyzon is simply the best!",
      service: "Car Cleaning"
    },
    {
      name: "Robert Martinez",
      role: "Retiree",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Fantastic service from start to finish. The professionals are courteous, thorough, and take pride in their work. Couldn't be happier!",
      service: "Home Cleaning"
    }
  ]
  const translatedTestimonials = testimonials.map((item, idx) => ({
    ...item,
    text: localizedItems?.[idx]?.text || item.text,
  }))

  return (
    <>
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            {t('testimonials.titlePrefix')} <span className="gradient-text-test">{t('testimonials.titleHighlight')}</span> {t('testimonials.titleSuffix')}
          </h2>
          <p className="testimonials-subtitle">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="testimonials-grid">
          {translatedTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-quote-icon">
                  <Quote className="quote-icon" />
                </div>
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="star-icon filled" />
                  ))}
                </div>
              </div>
              
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="testimonials-cta">
          <h3 className="cta-text-test">{t('testimonials.ctaTitle')}</h3>
          <button className="cta-btn-test" onClick={() => setIsModalOpen(true)}>{t('testimonials.ctaButton')}</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Testimonials