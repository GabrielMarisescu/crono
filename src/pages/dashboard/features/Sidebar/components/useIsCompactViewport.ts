import { useEffect, useState } from 'react'

const compactViewportQuery = '(max-width: 767px)'

function getIsCompactViewport() {
  if (typeof window === 'undefined') {
    return false
  }

  return window.matchMedia(compactViewportQuery).matches
}

export function useIsCompactViewport() {
  const [isCompactViewport, setIsCompactViewport] = useState(
    getIsCompactViewport,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(compactViewportQuery)
    const syncViewport = () => {
      setIsCompactViewport(mediaQuery.matches)
    }

    syncViewport()
    mediaQuery.addEventListener('change', syncViewport)

    return () => {
      mediaQuery.removeEventListener('change', syncViewport)
    }
  }, [])

  return isCompactViewport
}
