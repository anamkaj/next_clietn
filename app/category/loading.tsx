'use client'

import dynamic from 'next/dynamic'

const PageCategoryLoader = dynamic(() =>
  import('@/src/views/category-page').then((mod) => mod.PageCategoryLoader),
)

export default function loading() {
  return (
    <div>
      <PageCategoryLoader />
    </div>
  )
}
