import React, { useState, useEffect } from 'react'
import { X, MapPin, Star, Clock } from 'lucide-react'
import DownloadModal from './DownloadModal'
import './ProvidersMapModal.css'

const ProvidersMapModal = ({ isOpen, onClose, location }) => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const [selectedProvider, setSelectedProvider] = useState(null)

  // All providers for map markers
  const allProviders = [
    {
      id: 1,
      name: "Speed Wash",
      rating: 4.9,
      distance: "0.3 miles",
      services: ["Exterior hand wash", "Clean all windows", "Towel dry"],
      availability: "Available Now",
      lat: 34.0522,
      lng: -118.2437,
      price: "$49.99",
      duration: "30mins",
      showInList: true
    },
    {
      id: 2,
      name: "Deluxe Wash",
      rating: 4.8,
      distance: "0.7 miles",
      services: ["Exterior hand wash", "Vacuum", "Dashboard Shine"],
      availability: "Available Now",
      lat: 34.0736,
      lng: -118.2406,
      price: "$155.00",
      duration: "2hrs 30mins",
      showInList: true
    },
    {
      id: 3,
      name: "Premium Wash",
      rating: 4.7,
      distance: "1.1 miles",
      services: ["Complete Detailing", "Vacuum", "Machine wax"],
      availability: "Available Now",
      lat: 34.0195,
      lng: -118.4912,
      price: "$199.99",
      duration: "4hrs 30mins",
      showInList: false
    },
    {
      id: 4,
      name: "Speed Wash",
      rating: 5.0,
      distance: "0.5 miles",
      services: ["Exterior hand wash", "Clean all windows", "Towel dry"],
      availability: "Available Now",
      lat: 34.0844,
      lng: -118.3067,
      price: "$49.99",
      duration: "30mins",
      showInList: false
    },
    {
      id: 5,
      name: "Quick Clean",
      rating: 4.6,
      distance: "0.9 miles",
      services: ["Exterior wash", "Window clean", "Tire shine"],
      availability: "Available Now",
      lat: 34.0452,
      lng: -118.2689,
      price: "$39.99",
      duration: "25mins",
      showInList: false
    },
    {
      id: 6,
      name: "Elite Detail",
      rating: 4.9,
      distance: "1.3 miles",
      services: ["Full detailing", "Leather care", "Engine bay"],
      availability: "Available Now",
      lat: 34.0678,
      lng: -118.2934,
      price: "$249.99",
      duration: "5hrs",
      showInList: false
    }
  ]

  // Only show first 2 providers in the list
  const providers = allProviders.filter(provider => provider.showInList)

  const handleProviderClick = (provider) => {
    setSelectedProvider(provider)
    setIsDownloadModalOpen(true)
  }

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div className="providers-modal-overlay" onClick={onClose}>
        <div className="providers-modal" onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <div className="providers-modal-header">
            <div className="modal-header-content">
              <h2 className="modal-title">Available providers<br />near you</h2>
              <p className="modal-subtitle">in {location || 'Los Angeles, CA'}</p>
            </div>
            <button className="modal-close-btn" onClick={onClose}>
              <X className="close-icon" />
            </button>
          </div>

          {/* Map Container */}
          <div className="map-container">
            <div className="real-map">
              {/* Real map background using OpenStreetMap */}
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-118.5,33.9,-118.2,34.1&layer=mapnik&marker=34.0522,-118.2437"
                width="100%"
                height="100%"
                style={{ border: 'none', borderRadius: '8px' }}
                title="Service Providers Map"
              ></iframe>
              
              {/* Provider markers overlaid on map */}
              {allProviders.map((provider, index) => {
                // Generate random positions within the map bounds
                const randomLeft = 20 + (Math.random() * 60) // 20% to 80%
                const randomTop = 20 + (Math.random() * 60)  // 20% to 80%
                
                return (
                  <button
                    key={provider.id}
                    className="provider-marker"
                    style={{
                      left: `${randomLeft}%`,
                      top: `${randomTop}%`
                    }}
                    onClick={() => handleProviderClick(provider)}
                  >
                    <MapPin className="marker-icon" />
                    <div className="marker-pulse"></div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Providers List */}
          <div className="providers-list">
            <h3 className="providers-list-title">Services Packages</h3>
            <div className="providers-grid">
              {providers.map((provider) => (
                <div key={provider.id} className="provider-card">
                  <div className="provider-header">
                    <div className="provider-info">
                      <h4 className="provider-name">{provider.name}</h4>
                      <div className="provider-rating">
                        <Star className="star-icon filled" />
                        <span>{provider.rating}</span>
                        <span className="rating-text">({provider.distance})</span>
                      </div>
                    </div>
                    <div className="provider-price">{provider.price}</div>
                  </div>
                  
                  <div className="provider-services">
                    {provider.services.map((service, index) => (
                      <span key={index} className="service-tag">{service}</span>
                    ))}
                  </div>
                  
                  <div className="provider-footer">
                    <div className="availability">
                      <Clock className="clock-icon" />
                      <span className="availability-status">{provider.availability}</span>
                    </div>
                    <button 
                      className="select-provider-btn"
                      onClick={() => handleProviderClick(provider)}
                    >
                      Request Service
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Download Modal */}
      <DownloadModal 
        isOpen={isDownloadModalOpen} 
        onClose={() => {
          setIsDownloadModalOpen(false)
          setSelectedProvider(null)
        }}
      />
    </>
  )
}

export default ProvidersMapModal
