import React from 'react'
import { CategoryProductCatalog } from '@/src/entities/product-category'
import { SortFilterProduct } from '@/src/features/sort-filter-product'

import { FilterComponent } from '@/src/features/filter-product-page'
import { ProductCart } from '@/src/entities/product-cart'
import { CarouselPopularProduct } from '@/src/widgets/carousel-product'

interface CatalogProductProps {
  searchParams: { [key: string]: string }
  params: { slug: string[] }
}

export default async function CatalogProductPage({
  ...data
}: CatalogProductProps) {
  const { slug } = data.params
  const categoryId = slug[1]
  const categorySlug = slug[0]
  const page = data.searchParams.page || '1'

  return (
    <div className='container mx-auto mt-5 mb-5'>
      <div>
        <CategoryProductCatalog categoryId={categoryId} />
        <SortFilterProduct />
        <div className=' grid grid-cols-4 lg:grid-cols-5 gap-2 p-2 items-start relative'>
          <div className=' col-span-4 lg:col-span-1'>
            <FilterComponent
              searchParams={data.searchParams}
              categoryId={categoryId}
            />
          </div>
          <ProductCart
            categoryId={categoryId}
            page={page}
            searchParams={data.searchParams}
            slug={categorySlug}
          />
        </div>
        <div className='mt-10 p-2'>
          <p className=' font-normal text-xl lg:text-2xl text-slate-600 uppercase'>
            Лидеры продаж
          </p>
          <div className='mt-5'>
            <CarouselPopularProduct />
          </div>
        </div>
      </div>
    </div>
  )
}
