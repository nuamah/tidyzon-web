import React, { useState, useRef, useEffect } from 'react'
import { ArrowRight, Play, Sparkles, MapPin, Navigation } from 'lucide-react'
import DownloadModal from '../DownloadModal'
import ProvidersMapModal from '../ProvidersMapModal'
import ResponsivePicture from '../ResponsivePicture'
import './Hero.css'

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isProvidersModalOpen, setIsProvidersModalOpen] = useState(false)
  const [location, setLocation] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [isGettingLocation, setIsGettingLocation] = useState(false)
  const inputRef = useRef(null)
  const heroRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)

  // Predefined list of cities and ZIP codes for autocomplete
  const locationData = [
    'Los Angeles, CA',
    'New York, NY',
    'Chicago, IL',
    'Houston, TX',
    'Phoenix, AZ',
    'Philadelphia, PA',
    'San Antonio, TX',
    'San Diego, CA',
    'Dallas, TX',
    'San Jose, CA',
    'Austin, TX',
    'Jacksonville, FL',
    'Fort Worth, TX',
    'Columbus, OH',
    'Charlotte, NC',
    'San Francisco, CA',
    'Indianapolis, IN',
    'Seattle, WA',
    'Denver, CO',
    'Washington, DC',
    'Boston, MA',
    'El Paso, TX',
    'Nashville, TN',
    'Detroit, MI',
    'Oklahoma City, OK',
    'Portland, OR',
    'Las Vegas, NV',
    'Memphis, TN',
    'Louisville, KY',
    'Baltimore, MD',
    'Milwaukee, WI',
    'Albuquerque, NM',
    'Tucson, AZ',
    'Fresno, CA',
    'Sacramento, CA',
    'Mesa, AZ',
    'Kansas City, MO',
    'Atlanta, GA',
    'Long Beach, CA',
    'Colorado Springs, CO',
    'Raleigh, NC',
    'Miami, FL',
    'Virginia Beach, VA',
    'Omaha, NE',
    'Oakland, CA',
    'Minneapolis, MN',
    'Tulsa, OK',
    'Arlington, TX',
    'Tampa, FL',
    'New Orleans, LA',
    // ZIP codes
    '90210',
    '10001',
    '60601',
    '77001',
    '85001',
    '19101',
    '78201',
    '92101',
    '75201',
    '95101',
    '78701',
    '32201',
    '76101',
    '43201',
    '28201',
    '94101',
    '46201',
    '98101',
    '80201',
    '20001',
    '02101',
    '79901',
    '37201',
    '48201',
    '73101',
    '97201',
    '89101',
    '38101',
    '40201',
    '21201',
    '53201',
    '87101',
    '85701',
    '93701',
    '95801',
    '85201',
    '64101',
    '30301',
    '90801',
    '80901',
    '27601',
    '33101',
    '23451',
    '68101',
    '94601',
    '55401',
    '74101',
    '76001',
    '33601',
    '70112'
  ]

  // Filter suggestions based on input
  const handleLocationChange = (value) => {
    console.log('Input value:', value)
    setLocation(value)
    if (value.length > 1) {
      const filtered = locationData.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 8) // Show max 8 suggestions
      console.log('Filtered suggestions:', filtered)
      setSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
      setSuggestions([])
    }
  }

  // Handle suggestion selection
  const handleSuggestionSelect = (suggestion) => {
    setLocation(suggestion)
    setShowSuggestions(false)
    inputRef.current?.focus()
  }

  // Get current location using geolocation
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by this browser.')
      return
    }

    setIsGettingLocation(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        
        // Use a simple reverse geocoding approach with known cities
        // In a real app, you'd use a geocoding service
        const nearbyCities = [
          'Los Angeles, CA',
          'New York, NY',
          'Chicago, IL',
          'Houston, TX',
          'Phoenix, AZ',
          'San Francisco, CA',
          'Seattle, WA',
          'Denver, CO',
          'Miami, FL',
          'Boston, MA'
        ]
        
        // Simple logic to pick a city based on coordinates
        // This is a simplified version - in reality you'd use proper geocoding
        const cityIndex = Math.abs(latitude + longitude) % nearbyCities.length
        const detectedCity = nearbyCities[cityIndex]
        
        setLocation(detectedCity)
        setIsGettingLocation(false)
      },
      (error) => {
        console.error('Error getting location:', error)
        alert('Unable to get your location. Please enter it manually.')
        setIsGettingLocation(false)
      }
    )
  }

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    <section id="home" className="hero-section" ref={heroRef}>
      {/* Parallax Background Layers */}
      <div className="hero-background">
        {/* Parallax layers */}
        <div 
          className="parallax-layer parallax-bg" 
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div 
          className="parallax-layer parallax-shapes" 
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div 
          className="parallax-layer parallax-particles" 
          style={{ transform: `translateY(${scrollY * 0.7}px)` }}
        ></div>
        
        {/* Original animated orbs */}
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <Sparkles className="badge-icon" />
            <span>Trusted by Happy Customers</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title-simple">
            Quality services at your doorstep
          </h1>

          {/* Request/Schedule Component */}
          <div className="hero-request-section">
            <h2 className="request-title">Request / Schedule</h2>
            <div className="request-form">
              <div className="location-input-container" ref={inputRef}>
                <input 
                  type="text" 
                  placeholder="Enter service location"
                  className="location-input"
                  value={location || ''}
                  onChange={(e) => handleLocationChange(e.target.value)}
                  onFocus={() => location && location.length > 1 && setShowSuggestions(true)}
                />
                <button 
                  className="location-icon-btn"
                  onClick={getCurrentLocation}
                  disabled={isGettingLocation}
                  title="Use current location"
                >
                  {isGettingLocation ? (
                    <div className="loading-spinner"></div>
                  ) : (
                    <Navigation className="location-icon" />
                  )}
                </button>
                
                {/* Autocomplete Suggestions */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="suggestions-dropdown">
                    {suggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        className="suggestion-item"
                        onClick={() => handleSuggestionSelect(suggestion)}
                      >
                        <MapPin className="suggestion-icon" />
                        <span>{suggestion}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button 
                className="request-arrow-btn" 
                onClick={() => setIsProvidersModalOpen(true)}
                disabled={!location || !location.trim()}
                type="button"
                aria-label="Request service providers for this location"
              >
                <ArrowRight className="arrow-icon" />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image/Illustration */}
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <ResponsivePicture
              webpSrcSet="/assets/heroImage-665.webp 665w, /assets/heroImage-1330.webp 1330w"
              fallbackSrcSet="/assets/heroImage-665.jpg 665w, /assets/heroImage-1330.jpg 1330w"
              fallbackSrc="/assets/heroImage-665.jpg"
              alt="Tidyzon Vehicle Cleaning"
              className="hero-image"
              width={665}
              height={443}
              sizes="(max-width: 768px) 100vw, 665px"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            {/* Floating Cards */}
            <div className="floating-card card-1">
              <div className="card-icon">🚗</div>
              <div className="card-text">
                <div className="card-title">Car Cleaning</div>
                <div className="card-subtitle">Professional detailing</div>
              </div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">⭐</div>
              <div className="card-text">
                <div className="card-title">5-Star Service</div>
                <div className="card-subtitle">Highly rated</div>
              </div>
            </div>
          </div>
          
          {/* Skip the car wash line */}
          <div className="hero-convenience-text">
            <span className="bullet-text">
              Skip the car wash line! No need to drive out!<br />
              We come to you!
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse"></div>
      </div>
    </section>

    {/* Providers Map Modal */}
    <ProvidersMapModal 
      isOpen={isProvidersModalOpen} 
      onClose={() => setIsProvidersModalOpen(false)}
      location={location || 'Los Angeles, CA'}
    />
    </>
  )
}

export default Hero