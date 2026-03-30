import React from 'react'

/**
 * WebP with JPEG/PNG fallback for smaller transfer + LCP (mobile).
 */
export default function ResponsivePicture({
  webpSrc,
  fallbackSrc,
  alt,
  className,
  width,
  height,
  sizes,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
}) {
  const imgProps = {
    src: fallbackSrc,
    alt,
    className,
    width,
    height,
    sizes,
    loading,
    decoding,
  }
  if (fetchPriority) imgProps.fetchPriority = fetchPriority

  return (
    <picture>
      <source type="image/webp" srcSet={webpSrc} sizes={sizes} />
      <img {...imgProps} />
    </picture>
  )
}
