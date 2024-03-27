import React from 'react'
import { CatalogProductPage } from '@/src/pages/product-catalog-page'

type PropCategoryUpLevel = {
  params: { slug: string[] }
  searchParams: { [key: string]: string }
}

export default async function CatalogProductCart({
  params,
  searchParams,
}: PropCategoryUpLevel) {
  return (
    <>
      <CatalogProductPage params={params} searchParams={searchParams} />
    </>
  )
}
