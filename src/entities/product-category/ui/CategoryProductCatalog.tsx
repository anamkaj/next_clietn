import { ICategory } from '../model/type.category'
import BreadCrumbs from './bread-crumbs/BreadCrumbs'
import Description from './description/Description'
import SubCategory from './sub-category/SubCategory'
import { getAllCategory } from '@/src/shared/api'

export default async function CategoryProductCatalog({
  categoryId,
}: {
  categoryId: string
}) {
  const category: ICategory[] = await getAllCategory(categoryId)

  return (
    <>
      <SubCategory category={category} categoryId={categoryId} />
      <Description category={category} categoryId={categoryId} />
      <BreadCrumbs category={category} categoryId={categoryId} />
    </>
  )
}
