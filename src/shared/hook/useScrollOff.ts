import { useEffect } from 'react'

export const useScrollDisable = (state: boolean) => {
  const scrollChange = () => {
    if (state == true) {
      const scrollOn = (document.body.style.overflow = 'hidden')
    }
  }

  useEffect(() => {
    scrollChange()
    return () => {
      const scrollOff = (document.body.style.overflow = '')
    }
  }, [state])
}
