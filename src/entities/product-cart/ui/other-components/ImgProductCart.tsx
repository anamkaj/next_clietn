
import Link from 'next/link'
import Image from 'next/image'
import slug from 'slug'
import { IProduct } from '@/src/shared/reused-type/product'

interface imgProps {
  product: IProduct
  url: string
}
export default function ImgProductCart({ product, url }: imgProps) {
  return (
    <>
      <Link
        scroll={true}
        href={{
          pathname: `/product/${url}/${slug(product.title)}/${product.id}`,
        }}
        className='mb-4 w-[150px] h-[150px]'
      >
        <Image
          height={250}
          width={250}
          src={`https://tmk-v.ru:8081/img/${product.imgFolder}/${product.imgLink[0]}`}
          alt={product.altImg}
        />
      </Link>
    </>
  )
}
