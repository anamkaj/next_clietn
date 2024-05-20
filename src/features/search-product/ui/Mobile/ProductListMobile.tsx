'use client'
import ProductSearchList from '../ProductSearchList'
import CategoryList from '../CategoryList'
import { ProductListMobileProp } from '../../model/type/search-type'

export default function ProductListMobile({
  product,
  category,
  setActive,
}: ProductListMobileProp) {
  return (
    <div className='flex flex-col gap-4 p-2'>
      <div
        className={
          category?.length !== 0
            ? 'flex flex-col overflow-y-auto h-[500px]'
            : 'flex flex-col overflow-y-auto h-[480px]'
        }
      >
        <ProductSearchList product={product} setActive={setActive} />
      </div>
      {category?.length !== 0 && (
        <div>
          <span className=' font-extralight text-xs '> Группы товаров </span>
          <CategoryList category={category} setActive={setActive} />
        </div>
      )}
    </div>
  )
}
