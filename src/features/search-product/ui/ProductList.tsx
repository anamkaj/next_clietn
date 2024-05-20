'use client'
import ProductSearchList from './ProductSearchList'
import CategoryList from './CategoryList'
import { ProductListProp } from '../model/type/search-type'

export default function ProductList({
  product,
  category,
  setActive,
}: ProductListProp) {
  return (
    <>
      {product?.length !== 0 && (
        <div className='absolute z-20 flex bg-white p-2 rounded-b-xl mt-1 w-full'>
          <div className=' flex flex-col w-full'>
            <>
              <div className='overflow-y-auto h-[600px]'>
                <ProductSearchList product={product} setActive={setActive} />
              </div>

              <div className='mt-6 mb-4'>
                {category?.length !== 0 && (
                  <>
                    <span className='font-extralight text-xs '>
                      {' '}
                      Группы товаров{' '}
                    </span>
                    <CategoryList category={category} setActive={setActive} />
                  </>
                )}
              </div>
            </>
          </div>
        </div>
      )}
    </>
  )
}
