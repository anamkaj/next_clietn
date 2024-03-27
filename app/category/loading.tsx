'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const PageCategoryLoader = dynamic(() =>
  import('@/src/pages/category-page').then((mod) => mod.PageCategoryLoader),
)

export default function loading() {
  return (
    <div>
      <PageCategoryLoader />
    </div>
  )
}
