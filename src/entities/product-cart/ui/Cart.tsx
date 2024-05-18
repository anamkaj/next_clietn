'use client'

import { ProductCartProp } from '../model/type/type.cart'
import { useLoading } from '@/src/shared/hook/useLoading'
import { ProductLoader } from './pre-loader/Loader'
import CountView from './count-view/CountView'
import ArticleBadges from './badges/ArticleBadges'
import QuantityBadges from './badges/QuantityBadges'
import ImgProductCart from './other-components/ImgProductCart'
import TitleProductCart from './other-components/TitleProductCart'
import { ButtonCart } from './other-components/ButtonCart'

export default function Cart({ product, slug }: ProductCartProp) {
  const { blockUi } = useLoading()

  if (blockUi) {
    return (
      <>
        <ProductLoader />
      </>
    )
  }

  return (
    <>
      {product.map((cart) => {
        return (
          <div
            key={cart.id}
            className='flex flex-col items-center cursor-pointer border +
   border-gray-200 px-4 py-2 rounded-lg shadow-lg bg-white box-border hover:border-1 hover:border-slate-500 h-[360px]'
          >
            <div className=' flex w-full justify-between'>
              <ArticleBadges product={cart} />
              <QuantityBadges product={cart} />
            </div>

            {/* Изображение товара  */}

            <ImgProductCart product={cart} url={slug} />

            <TitleProductCart product={cart} url={slug} />

            {/* Счетчики отзывов  */}

            <CountView key={cart.id} product={cart} />

            {/* <SalesBadges data={data} /> */}

            {/* Блок с ценами и кнопка */}
            <div className='flex w-full items-center mt-auto mb-0 justify-between'>
              <div className='flex space-x-8 md:space-x-6 lg:space-x-2 items-center flex-wrap'>
                <div>
                  <p className=' font-bold text-sm md:text-xl'>
                    {Math.round(
                      cart.price * (cart.discount / 11),
                    ).toLocaleString('ru')}{' '}
                    ₽
                  </p>
                </div>
                <div className=' bg-gray-100 rounded-lg  py-0 p-2'>
                  <span
                    className={'font-light text-sm  md:text-xl line-through'}
                  >
                    {cart.price.toLocaleString('ru')} ₽
                  </span>
                </div>
              </div>

              {/*Добавить в корзину*/}

              <ButtonCart key={cart.id} product={cart} />
            </div>
          </div>
        )
      })}
    </>
  )
}
