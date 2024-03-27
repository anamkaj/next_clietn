import { IProduct } from '@/src/shared/reused-type/product'

export type ProductCartProp = {
  product: IProduct[]
  slug: string
}

export type FilterParam = {
  id: number
  key: string
  value: string[]
}

export interface IProductCart {
  categoryId: string
  page: string
  searchParams: { [key: string]: string }
  slug: string
}
