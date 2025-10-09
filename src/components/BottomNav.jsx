import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Briefcase, Info, Users, Phone } from 'lucide-react'
import './BottomNav.css'

const BottomNav = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/services', icon: Briefcase, label: 'Services' },
    { path: '/about', icon: Info, label: 'About' },
    { path: '/teams', icon: Users, label: 'Teams' },
    { path: '/contact', icon: Phone, label: 'Contact' },
  ]

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = location.pathname === item.path
        
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`bottom-nav-item ${isActive ? 'active' : ''}`}
          >
            <Icon className="bottom-nav-icon" />
            <span className="bottom-nav-label">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}

export default BottomNav

