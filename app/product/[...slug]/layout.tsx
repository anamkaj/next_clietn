import React from 'react'
import { IProduct } from '@/src/shared/reused-type/product'
import { Metadata } from 'next'
import { getSingleProduct } from '@/src/shared/api'


type PropGenerateMetadata = {
  params: { slug: string[] }
}

export async function generateMetadata({
  params,
}: PropGenerateMetadata): Promise<Metadata> {
  const { slug } = params

  const product: IProduct[] = await getSingleProduct(Number(slug[2]))

  const desc =
    product[0].descriptionOne.length !== 0
      ? product[0].descriptionOne.slice(0, 170)
      : ''

  return {
    title: product[0].title,
    description: desc,
  }
}

export default async function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
