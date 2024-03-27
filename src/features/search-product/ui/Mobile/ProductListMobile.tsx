'use client'
import React, { useEffect, useState } from 'react'
import ProductSearchList from '../ProductSearchList'
import CategoryList from '../CategoryList'
import { ProductListMobileProp } from '../../../src/features/search-product/model/type/search.type'

export default function ProductListMobile({
  product,
  category,
  setActive,
  input,
}: ProductListMobileProp) {
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
      <div className='mt-4'>
        <h4 className='text-xs font-light text-slate-400'>
          По вашему запросу ничего не найдено.
          <br />
        </h4>
        <h5 className='text-sm text-slate-700 font-light'>
          Попробуйте изменить критерии поиска.
        </h5>
      </div>
    )
  }

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
