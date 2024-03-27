import React, { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
    posY: 0,
  })
  const { width, height, posY: heightDynamic } = size

  useEffect(() => {
    const getWindowDimensions = () => {
      if (typeof window !== 'undefined') {
        const { innerWidth: width, innerHeight: height, scrollY: posY } = window
        return {
          width,
          height,
          posY,
        }
      } else {
        return null
      }
    }

    const updateSize = () => {
      const dimensions = getWindowDimensions()
      if (dimensions) {
        setSize(dimensions)
      }
    }

    window.addEventListener('resize', updateSize)
    window.addEventListener('scroll', updateSize)

    updateSize()

    return () => {
      window.removeEventListener('resize', updateSize)
      window.removeEventListener('scroll', updateSize)
    }
  }, [])

  return { size, width, height, heightDynamic }
}
