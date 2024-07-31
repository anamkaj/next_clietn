import { useWindowSize } from '@/src/shared/hook/useWindowSize'
import { usePathname } from 'next/navigation'

export const useVisibleCartProduct = (countProductCart: number) => {
  const path = usePathname()

  const { heightDynamic } = useWindowSize()

  const hiddenCart = path == '/order' || countProductCart == 0
  const position = heightDynamic > 200

  return { hiddenCart, position }
}
