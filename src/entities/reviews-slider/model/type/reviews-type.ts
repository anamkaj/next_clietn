export type ReviewsType = {
  id: number
  createdAt: Date
  text: string
  productId: number
  categoryId: number
  userId: number
  rating: number
  like: number
  dislike: number
}

export interface IProduct {
  id: number
  title: string
  type: string
  price: number
  descriptionOne: string
  imgLink: string[]
  altImg: string
  tag: string[]
  rating: number
  watchProduct: number
  inStock: boolean
  quantity: number
  discount: number
  brand: string
  article: number
  categoryId: number
  other: any[]
  warranty: number
  imgFolder: string
  countReviews: number
  buyAlready: number
  brandImg: null
  FullParam: Param[]
  ShortParam: Param[]
}

interface Param {
  id: number
  key: string
  value: string
  productId: number
}
