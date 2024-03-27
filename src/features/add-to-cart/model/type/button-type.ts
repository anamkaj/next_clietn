import { IProduct } from '@/src/shared/reused-type/product'

export type AddToCartType = {
  product: IProduct
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  price: number
}

export type RemoveCartType = {
  product: IProduct
}
