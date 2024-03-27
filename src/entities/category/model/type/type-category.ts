import { ICategory } from '@/src/shared/reused-type/category'

export interface PropCategory {
  category: ICategory[]
}
export type SubCategoryProps = {
  category: ICategory[]
  id: number
}
