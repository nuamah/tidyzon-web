import React, { useState } from 'react'

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  loading = 'lazy',
  decoding = 'async',
  fallback = '/assets/placeholder.jpg',
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(src)
  const [imageRef, setImageRef] = useState(null)

  const handleError = () => {
    setImageSrc(fallback)
  }

  const handleLoad = () => {
    if (imageRef) {
      imageRef.style.opacity = 1
    }
  }

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      onError={handleError}
      onLoad={handleLoad}
      style={{
        opacity: 0,
        transition: 'opacity 0.3s ease-in-out'
      }}
      {...props}
    />
  )
}

export default OptimizedImage
