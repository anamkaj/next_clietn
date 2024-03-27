import React from 'react'
import dynamic from 'next/dynamic'
import FilterLoader from './pre-loaded/FilterLoader'
import { FilterServices } from '../api/get-filter'
import { FilterProp, ParamFilterProduct, PriceProp } from '../model/type/type'


const FilterProduct = dynamic(() => import('./FilterProduct'), {
  loading: () => <FilterLoader />,
  ssr: false,
})

export default async function FilterComponent({
  categoryId,
  searchParams,
}: FilterProp) {
  const paramFilterProduct: ParamFilterProduct =
    await FilterServices.getFilterParamsProduct(categoryId, searchParams)

  const filterPrice: PriceProp = await FilterServices.getAllProductNotFilter(
    categoryId,
  )

  return (
    <div>
      <FilterProduct
        paramFilterProduct={paramFilterProduct}
        filterPrice={filterPrice}
        categoryId={categoryId}
      />
    </div>
  )
}
