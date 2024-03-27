import React from 'react'
import Cart from './Cart'
import Pagination from './pagination/Pagination'
import { IProduct } from '@/src/shared/reused-type/product'
import { ProductServices } from '../api/get-product'

interface ProductCartProps {
  categoryId: string
  page: string
  searchParams: { [key: string]: string }
  slug: string
}

export default async function ProductCart({ ...data }: ProductCartProps) {
  const product: IProduct[] = await ProductServices.getProductFilterHead(
    data.categoryId,
    data.page,
    data.searchParams,
  )
  return (
    <>
      <div className=' col-span-4 grid grid-cols-2 gap-1 lg:gap-2 md:grid-cols-3 xl:grid-cols-4'>
        <Cart product={product} slug={data.slug} />
      </div>
      <div className=' justify-center flex items-center col-span-5'>
        <Pagination page={data.page} product={product} />
      </div>
    </>
  )
}
