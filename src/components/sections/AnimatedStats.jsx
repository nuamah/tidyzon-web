import React, { useState, useEffect, useRef } from 'react'
import { Users, Star, Clock, Award } from 'lucide-react'
import './AnimatedStats.css'

const AnimatedStats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    customers: 0,
    rating: 0,
    services: 0,
    experience: 0
  })
  const statsRef = useRef(null)

  const statsData = [
    {
      id: 'customers',
      icon: Users,
      endValue: 10000,
      suffix: '+',
      label: 'Happy Customers',
      color: 'rgb(82, 136, 40)'
    },
    {
      id: 'rating',
      icon: Star,
      endValue: 4.9,
      suffix: '/5',
      label: 'Average Rating',
      color: 'rgb(88, 99, 197)'
    },
    {
      id: 'services',
      icon: Clock,
      endValue: 50000,
      suffix: '+',
      label: 'Services Completed',
      color: 'rgb(82, 136, 40)'
    },
    {
      id: 'experience',
      icon: Award,
      endValue: 5,
      suffix: '+',
      label: 'Years Experience',
      color: 'rgb(88, 99, 197)'
    }
  ]

  // Intersection Observer for scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  // Animate counters when visible
  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60 // 60 steps for smooth animation
    const stepDuration = duration / steps

    statsData.forEach(stat => {
      const startValue = 0
      const endValue = stat.endValue
      const increment = (endValue - startValue) / steps
      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++
        const currentValue = Math.min(startValue + (increment * currentStep), endValue)
        
        setCounts(prev => ({
          ...prev,
          [stat.id]: parseFloat(currentValue.toFixed(stat.id === 'rating' ? 1 : 0))
        }))

        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, stepDuration)
    })
  }, [isVisible])

  return (
    <section className="animated-stats-section" ref={statsRef}>
      <div className="container">
        <div className="stats-header">
          <h2 className="stats-title">
            Trusted by Thousands
            <span className="gradient-text">Across the Nation</span>
          </h2>
          <p className="stats-subtitle">
            Our numbers speak for themselves - join the community of satisfied customers
          </p>
        </div>

        <div className="stats-grid">
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div 
                key={stat.id} 
                className="stat-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="stat-icon" style={{ color: stat.color }}>
                  <IconComponent className="icon" />
                </div>
                <div className="stat-content">
                  <div className="stat-number" style={{ color: stat.color }}>
                    {counts[stat.id]}{stat.suffix}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
                <div className="stat-glow" style={{ background: stat.color }}></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AnimatedStats
