import React from 'react'
import Link from 'next/link'
import slug from 'slug'
import { IProduct } from '@/src/shared/reused-type/product'

interface TitleProps {
  product: IProduct
  url: string
}

export default function TitleProductCart({ product, url }: TitleProps) {
  return (
    <>
      <Link
        scroll={true}
        href={{
          pathname: `/product/${url}/${slug(product.title)}/${product.id}`,
        }}
        className=' flex font-light text-black text-sm text-center mb-2 h-8'
      >
        {product.title.length > 50
          ? product.title.slice(0, 44) + '...'
          : product.title}
      </Link>
    </>
  )
}
