
import { BsGear } from 'react-icons/bs'
import Price from './Price'
import { IProduct } from '@/src/shared/reused-type/product'
import { DiscountBadges, InStock } from '@/src/shared/ui/badges-product'

type PropCartPrise = {
  product: IProduct
}

export default function CartPrice({ product }: PropCartPrise) {
  const price = Math.round(product.price / (product.discount * 0.11))
  //поиск по корзине , добавлен ли товар ранее в карзину , тогда стиль кнопки меняется

  return (
    <div className='flex flex-wrap gap-6'>
      <div className='flex flex-col mt-5 w-full'>
        <>
          <InStock product={product} />
          <div className=' flex gap-1 items-center justify-end'>
            <BsGear className=' h-3 w-3' />
            <p className=' text-xs '>Производитель: {product.brand}</p>
          </div>
        </>

        {/*Цена со скидкой*/}
        <DiscountBadges product={product} />
        {/* <WholeSaleBadges product={product} /> */}
        <Price price={price} />
      </div>
    </div>
  )
}
