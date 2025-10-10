import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const usePageLoader = () => {
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Show loader on route change
    setIsLoading(true)

    const startTime = Date.now()
    const minLoadTime = 600 // Minimum loading time in ms

    // Wait for minimum load time to ensure smooth animation
    const timer = setTimeout(() => {
      const elapsedTime = Date.now() - startTime
      const remainingTime = Math.max(0, minLoadTime - elapsedTime)

      setTimeout(() => {
        setIsLoading(false)
      }, remainingTime)
    }, 100)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return isLoading
}

export default usePageLoader

