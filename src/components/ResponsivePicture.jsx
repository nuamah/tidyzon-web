import React from 'react'

/**
 * AVIF + WebP + JPEG with responsive `w` descriptors.
 */
export default function ResponsivePicture({
  avifSrcSet,
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
      {avifSrcSet ? (
        <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      ) : null}
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img {...imgProps} />
    </picture>
  )
}
