import React from 'react'
import { SingleProduct } from '@/src/pages/single-product-page'

export default async function SingleProductCart({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params

  return (
    <>
      <SingleProduct slug={slug} />
    </>
  )
}
