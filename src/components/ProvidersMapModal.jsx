import React, { useState, useEffect } from 'react'
import { X, MapPin, Star, Clock } from 'lucide-react'
import DownloadModal from './DownloadModal'
import './ProvidersMapModal.css'

const ProvidersMapModal = ({ isOpen, onClose, location }) => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const [selectedProvider, setSelectedProvider] = useState(null)

  // All providers for map markers - spread across different locations
  const allProviders = [
    {
      id: 1,
      name: "Speed Wash",
      rating: 4.9,
      distance: "0.3 miles",
      services: ["Exterior hand wash", "Clean all windows", "Towel dry"],
      availability: "Available Now",
      lat: 41.7503,
      lng: -88.1536,
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
      lat: 41.7702,
      lng: -88.1398,
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
      lat: 41.7205,
      lng: -88.1890,
      price: "$199.99",
      duration: "4hrs 30mins",
      showInList: false
    },
    {
      id: 4,
      name: "Elite Detail",
      rating: 5.0,
      distance: "0.5 miles",
      services: ["Exterior hand wash", "Clean all windows", "Towel dry"],
      availability: "Available Now",
      lat: 41.7856,
      lng: -88.1123,
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
      lat: 41.7321,
      lng: -88.1456,
      price: "$39.99",
      duration: "25mins",
      showInList: false
    },
    {
      id: 6,
      name: "Pro Detail",
      rating: 4.9,
      distance: "1.3 miles",
      services: ["Full detailing", "Leather care", "Engine bay"],
      availability: "Available Now",
      lat: 41.7689,
      lng: -88.1723,
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
            <div className="custom-map">
              {/* Custom realistic map background */}
              <div className="map-background">
                {/* Streets */}
                <div className="street street-main street-1"></div>
                <div className="street street-main street-2"></div>
                <div className="street street-secondary street-3"></div>
                <div className="street street-secondary street-4"></div>
                <div className="street street-secondary street-5"></div>
                <div className="street street-tertiary street-6"></div>
                <div className="street street-tertiary street-7"></div>
                <div className="street street-tertiary street-8"></div>
                <div className="street street-tertiary street-9"></div>
                <div className="street street-tertiary street-10"></div>
                
                {/* Buildings */}
                <div className="building building-1"></div>
                <div className="building building-2"></div>
                <div className="building building-3"></div>
                <div className="building building-4"></div>
                <div className="building building-5"></div>
                <div className="building building-6"></div>
                <div className="building building-7"></div>
                <div className="building building-8"></div>
                
                {/* Parks/Green areas */}
                <div className="park park-1"></div>
                <div className="park park-2"></div>
                <div className="park park-3"></div>
                
                {/* Water features */}
                <div className="water water-1"></div>
                <div className="water water-2"></div>
              </div>
              
              {/* Custom car markers positioned on roads */}
              {allProviders.map((provider, index) => {
                // Define road positions and directions
                const roadPositions = [
                  { left: 50, top: 30, direction: Math.random() > 0.5 ? 'right' : 'left' }, // Main horizontal street
                  { left: 50, top: 15, direction: Math.random() > 0.5 ? 'right' : 'left' }, // Secondary horizontal
                  { left: 50, top: 60, direction: Math.random() > 0.5 ? 'right' : 'left' }, // Secondary horizontal
                  { left: 25, top: 50, direction: Math.random() > 0.5 ? 'up' : 'down' },    // Main vertical street
                  { left: 75, top: 40, direction: Math.random() > 0.5 ? 'up' : 'down' },   // Secondary vertical
                  { left: 50, top: 45, direction: Math.random() > 0.5 ? 'right' : 'left' }, // Tertiary horizontal
                  { left: 50, top: 75, direction: Math.random() > 0.5 ? 'right' : 'left' }, // Tertiary horizontal
                ]
                
                // Add some random variation to road positions
                const roadPos = roadPositions[index % roadPositions.length]
                const randomVariation = (Math.random() - 0.5) * 20 // ±10% variation
                const left = Math.max(10, Math.min(90, roadPos.left + randomVariation))
                const top = Math.max(10, Math.min(90, roadPos.top + randomVariation))
                
                return (
                  <button
                    key={provider.id}
                    className={`provider-marker car-${roadPos.direction}`}
                    style={{
                      left: `${left}%`,
                      top: `${top}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onClick={() => handleProviderClick(provider)}
                    title={`${provider.name} - ${provider.price}`}
                  >
                    <img 
                      src="/assets/car.png" 
                      alt={`${provider.name} location`}
                      className="car-marker-icon"
                    />
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
