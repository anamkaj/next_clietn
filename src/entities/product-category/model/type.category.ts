export interface ICategory {
  imgFolder: any
  id: number
  name: string
  parentCategoryId: number
  description: string
  img: string
  slug: string
  folderImg: string
}

export type PropsSubCategory = {
  category: ICategory[]
  categoryId: string
}

export type PropBreadCrumbs = {
  categoryId: string
  category: ICategory[]
}

export type PriceProp = {
  length: number
  maxPrice: number
  minPrice: number
}
