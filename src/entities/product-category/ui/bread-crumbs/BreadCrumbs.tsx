import { PriceProp, PropBreadCrumbs } from '../../model/type.category'
import { getAllProductNotFilter } from '../../api/get-category'

export default async function BreadCrumbs({
  category,
  categoryId,
}: PropBreadCrumbs) {
  const lengthProductCategory: PriceProp = await getAllProductNotFilter(
    categoryId,
  )
  const crumbs = category.filter((x) => x.id == Number(categoryId))

  return (
    <div className='w-full mt-4 p-2'>
      {crumbs.map((x) => {
        return (
          <div
            key={x.id}
            className=' flex items-center md:space-x-4 space-x-0 flex-wrap md:flex-nowrap justify-between'
          >
            <h2 className=' text-lg'>{x.name}</h2>
            <span className=' font-thin text-slate-700 text-sm md:text-lg'>
              {' '}
              Товаров в каталоге:{' '}
              <span className='font-bold'>
                {lengthProductCategory.length}
              </span>{' '}
              шт.
            </span>
          </div>
        )
      })}
    </div>
  )
}
