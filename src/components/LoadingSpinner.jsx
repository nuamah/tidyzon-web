import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-light-gray">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-light-green rounded-full"></div>
          <div className="absolute inset-0 border-4 border-accent-green border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h2 className="text-2xl font-bold text-primary-green mb-2">Tidyzon</h2>
        <p className="text-gray">Loading your experience...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner
