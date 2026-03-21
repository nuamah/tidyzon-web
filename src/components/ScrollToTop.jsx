import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'

/** Paths that handle their own scroll position (e.g. privacy content at an anchor) */
const SKIP_SCROLL_TO_TOP = new Set(['/support/otp-out'])

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { pathname, hash } = useLocation()

  // Scroll to hash target (e.g. /terms#sms-terms) or top on route change
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.replace(/^#/, ''))
      const scrollToTarget = () => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
      const raf = requestAnimationFrame(scrollToTarget)
      const t1 = setTimeout(scrollToTarget, 150)
      const t2 = setTimeout(scrollToTarget, 350)
      return () => {
        cancelAnimationFrame(raf)
        clearTimeout(t1)
        clearTimeout(t2)
      }
    }
    if (!SKIP_SCROLL_TO_TOP.has(pathname)) {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-btn"
          aria-label="Scroll to top"
        >
          <ArrowUp className="scroll-icon" />
        </button>
      )}
    </>
  )
}

export default ScrollToTop
