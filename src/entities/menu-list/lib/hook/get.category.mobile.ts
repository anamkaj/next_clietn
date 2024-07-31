import useSWR from 'swr'
import { MenuServices } from '../../api/get-category-menu'
import { ICategory } from '@/src/shared/reused-type/category'

export const useGetCategoryMobile = () => {
  const { data, isLoading } = useSWR<ICategory[]>('categoryCatalog', () =>
    MenuServices.getMainCategory(),
  )
  const category = data?.filter((e) => e.parentCategoryId == null)
  return { category, isLoading }
}
