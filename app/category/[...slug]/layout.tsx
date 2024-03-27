import React from 'react'
import { ICategory } from '@/src/shared/reused-type/category'
import { Metadata } from 'next'
import { getAllCategory } from '@/src/shared/api/api-category/get-category'

type PropGenerateMetadata = {
  params: { slug: string[] }
}

export async function generateMetadata({
  params,
}: PropGenerateMetadata): Promise<Metadata> {
  const { slug } = params
  const category: ICategory[] = await getAllCategory(slug[1])
  const desc = category[0].description
    ? category[0].description.slice(0, 170)
    : ''

  return {
    title: category[0].name,
    description: desc,
  }
}

export default async function SubCategoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
