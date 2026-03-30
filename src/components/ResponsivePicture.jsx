import React from 'react'

/**
 * WebP + JPEG with optional responsive srcset (1× / 2× widths).
 */
export default function ResponsivePicture({
  webpSrcSet,
  fallbackSrcSet,
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
    srcSet: fallbackSrcSet,
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
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img {...imgProps} />
    </picture>
  )
}
