import React, { lazy, Suspense } from 'react'

const DownloadModalContent = lazy(() => import('./DownloadModalContent'))

/**
 * Wrapper only: modal UI + qrcode live in a separate chunk until the modal opens,
 * so the main bundle does not statically preload the qrcode chunk.
 */
const DownloadModal = (props) => {
  if (!props.isOpen) return null
  return (
    <Suspense fallback={null}>
      <DownloadModalContent {...props} />
    </Suspense>
  )
}

export default DownloadModal
