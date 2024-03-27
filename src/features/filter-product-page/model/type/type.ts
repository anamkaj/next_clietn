export type ElementArray = {
  parent: number
  children: number
  state: boolean
}

export type ProductParamFilterProps = {
  listParam: ElementArray[][]
  parentActive: boolean[]
  setListParams: React.Dispatch<React.SetStateAction<ElementArray[][]>>
  setParentActive: React.Dispatch<React.SetStateAction<boolean[]>>
  paramFilter: React.MutableRefObject<{
    [key: string]: string[]
  }>
  changeUrlParamFilter: () => void
  loading: () => void
  data: Some[]
}

export type ISliderRangeProps = {
  min: number
  max: number
  changeUrlParamFilter: () => void
  valuePriceFilter: React.MutableRefObject<number[]>
}

export type PropBrandFilter = {
  brand: { [key: string]: number }
  filterBrand: React.MutableRefObject<string[]>
  changeUrlParamFilter: () => void
  brandState: boolean[]
  setBrandsState: React.Dispatch<React.SetStateAction<boolean[]>>
  loading: () => void
}

export type PriceProp = {
  length: number
  maxPrice: number
  minPrice: number
}

export interface IFilterProductProp {
  filterPrice: PriceProp
  paramFilterProduct: ParamFilterProduct
  categoryId: string
}
export interface IHeaderFilterProp {
  categoryId: string
}

export type ListParamProps = {
  parentActive: boolean[]
  changeCheckbox: (
    childrenName: string,
    parentId: number,
    childrenId: number,
    parentName: string,
  ) => void
  listParam: ElementArray[][]
  params: FilterParam
  index: number
  product: IFilterProduct[]
  urlParam: string | null
  paramProduct: string[]
}

export interface ParamFilterProduct {
  all: All[]
  some: Some[]
  brand: Brand
  sumProduct: number
}

export type All = {
  id: number
  key: string
  value: string[]
}

export type Some = {
  id: number
  key: string
  value: string[]
}
export type Brand = {
  [key: string]: number
}

export type MobileFilterProp = {
  filterPrice: PriceProp
  paramFilterProduct: ParamFilterProduct
  categoryId: string
  activeFilter: boolean
  setActiveFilter: React.Dispatch<React.SetStateAction<boolean>>
  countProductMobile: number
}

interface IFilterProduct {
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

type FilterParam = {
  id: number
  key: string
  value: string[]
}


export type FilterProp = {
  categoryId: string
  searchParams: {
    [key: string]: string
  }
}