import {
  decrementCounter,
  incrementCounter,
} from '@/src/app/Redux/Product/cartSliсe'
import { useAppDispatch } from '@/src/app/Redux/storeHook'
import { IProduct } from '@/src/shared/reused-type/product'

type PropCount = {
  setCountPopupProduct: React.Dispatch<React.SetStateAction<number>>
  countPopupProduct: number
  product: IProduct
}

export const useCountProductStore = ({
  setCountPopupProduct,
  countPopupProduct,
  product,
}: PropCount) => {
  const dispatch = useAppDispatch()

  const incrementProduct = () => {
    dispatch(
      incrementCounter({
        id: product.id,
        totalCount: countPopupProduct,
      }),
    )
    setCountPopupProduct((prev) => prev + 1)
  }
  const decrementProduct = () => {
    dispatch(
      decrementCounter({
        id: product.id,
        totalCount: countPopupProduct,
      }),
    )
    setCountPopupProduct((prev) => prev - 1)
  }

  return { incrementProduct, decrementProduct }
}
