import { useAppSelector } from '@/src/app/Redux/storeHook'

export const useSumCount = () => {
  const cartStore = useAppSelector((state) => state.cartReducer.cart)
  const totalStore = useAppSelector((state) => state.cartReducer.total)
  const sumProductInStore = cartStore.reduce(
    (acc, curr) => acc + curr.totalCount,
    0,
  )

  return { sumProductInStore, totalStore }
}
