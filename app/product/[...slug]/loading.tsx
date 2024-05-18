'use client'

import dynamic from 'next/dynamic'

const SingleProductLoader = dynamic(() =>
  import('@/src/views/single-product-page').then(
    (mod) => mod.SingleProductLoader,
  ),
)

export default function loading() {
  return (
    <div>
      <SingleProductLoader />
    </div>
  )
}
