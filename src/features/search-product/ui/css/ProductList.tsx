'use client'
import React, { useEffect, useState } from 'react'
import CategoryList from '../CategoryList'
import ErrorSearch from '../ErrorSearch'
import { ProductListProp } from '../../model/type/search-type'
import ProductSearchList from '../ProductSearchList'

export default function ProductList({
  product,
  active,
  category,
  setActive,
  input,
}: ProductListProp) {
  const [activeError, setActiveError] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input.length !== 0 && product?.length == 0) {
        setActiveError(true)
      }
    }, 2000)
    return () => {
      clearTimeout(timer)
      setActiveError(false)
    }
  }, [product])

  if (activeError) {
    return (
      <ErrorSearch
        text={
          'По вашему запросу ничего не найдено. Попробуйте изменить критерии поиска.'
        }
      />
    )
  }

  return (
    <>
      {product?.length !== 0 && (
        <div className='absolute z-20 flex bg-white p-2 rounded-b-xl mt-1 w-full'>
          <div className=' flex flex-col'>
            {active && (
              <>
                <div className=' overflow-y-auto h-[600px]'>
                  <ProductSearchList product={product} setActive={setActive} />
                </div>

                <div className='mt-6 mb-4'>
                  {category?.length !== 0 && (
                    <>
                      <span className=' font-extralight text-xs '>
                        {' '}
                        Группы товаров{' '}
                      </span>
                      <CategoryList category={category} setActive={setActive} />
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
