export interface SearchMobileProp {
  setInput: React.Dispatch<React.SetStateAction<string>>
  data: ProductType[] | undefined
  category: CategoryType[]
  input: string
}

export interface DataType {
  product: ProductType[]
  category: CategoryType[]
}

export type CategoryType = {
  id: number
  name: string
  img: string
  parentCategoryId: number
  slug: string
  folderImg: string
}

export type ProductType = {
  id: number
  title: string
  article: number
  brand: string
  price: number
  altImg: string
  imgFolder: string
  imgLink: string[]
}

export interface InputMobileProp extends SearchMobileProp {
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ProductListMobileProp {
  product: ProductType[] | undefined
  category: CategoryType[]
  input: string
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

export type ProductListProp = {
  product: ProductType[] | undefined
  category: CategoryType[]
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  input: string
}

export type PropProductSearchList = {
  product: ProductType[] | undefined
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

export type CategoryListProp = {
  category: CategoryType[] | undefined
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}
