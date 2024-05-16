import { useAppSelector } from '@/src/app/Redux/storeHook'
import { addCartStore } from '@/src/shared/reused-type/redax'
import { useEffect, useState } from 'react'

type PriceProp = {
  data: addCartStore[]
}

export const useCalcPriceProduct = ({ data }: PriceProp) => {
  const totalCart = useAppSelector((state) => state.cart.total)
  const [totalCartPrice, setTotalCartPrice] = useState<number>(0)
  const [totalSale, setTotalSale] = useState<number>(0)

  useEffect(() => {
    setTotalCartPrice(totalCart)
    const totalSale = data.reduce((prev: number, curr: addCartStore) => {
      return (curr.price / curr.sale) * curr.totalCount
    }, 0)

    setTotalSale(totalSale)
  }, [totalCart])

  return { totalCartPrice, totalSale }
}
