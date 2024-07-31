import { useState, useEffect } from 'react'
import { useWindowSize } from './useWindowSize'

type CountSlider = {
  w768: number
  w1024: number
  wm1024: number
}

export const useSlider = (defaultSlide: number, countCart: CountSlider) => {
  const [slide, setSlide] = useState<number>(defaultSlide)
  const { width } = useWindowSize()

  useEffect(() => {
    if (width <= 768) {
      setSlide(countCart.w768)
    } else if (width <= 1024) {
      setSlide(countCart.w1024)
    } else if (width >= 1024) {
      setSlide(countCart.wm1024)
    }
  }, [width])

  return { slide }
}
