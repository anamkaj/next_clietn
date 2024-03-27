'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const SingleProductLoader = dynamic(() =>
  import('@/src/pages/single-product-page').then(
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
