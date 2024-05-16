'use client'
import React, { useState } from 'react'
import { ContinueShopping, LinkToCart } from './Button'
import { IProduct } from '@/src/shared/reused-type/product'
import { CounterProduct } from '@/src/entities/count-product-add'
import { useSumCount } from '../lib/hook/sum-count'

type PropPopup = {
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  product: IProduct
}

export const PopupAddToStore = ({ setActive, product }: PropPopup) => {
  const { sumProductInStore, totalStore } = useSumCount()
  const [countPopupProduct, setCountPopupProduct] = useState(1)
  return (
    <div className='flex flex-col justify-center items-center my-2 mx-4 gap-2 '>
      <div className=' flex flex-col items-center justify-center'>
        <img
          className=' w-[15vh]'
          src={`https://tmk-v.ru:8081/img/${product.imgFolder}/${product.imgLink[0]}`}
          alt={product.altImg}
        />

        <div className=' flex flex-col justify-center items-center'>
          <h2 className=' text-center'>
            {product.title.length > 50
              ? product.title.slice(0, 50) + '...'
              : product.title}
          </h2>
          <div className=' mt-2'>
            <p className=' text-sm'>
              {Math.round(
                product.price * (product.discount / 11),
              ).toLocaleString('ru')}{' '}
              ₽
            </p>
          </div>

          <CounterProduct
            setCountPopupProduct={setCountPopupProduct}
            countPopupProduct={countPopupProduct}
            product={product}
          />
        </div>
      </div>
      <div>
        <div className=' flex flex-col'>
          <LinkToCart />
          <ContinueShopping setActive={setActive} />
        </div>
        <div className='  w-[250px] font-light px-2  mt-4 text-center '>
          <p>
            В вашей корзине
            <span className=' font-bold'> {`${sumProductInStore}`} </span>
            товара на сумму{' '}
            <span className=' font-bold'>{`${totalStore.toLocaleString(
              'ru',
            )}`}</span>{' '}
            ₽.
          </p>
        </div>
      </div>
    </div>
  )
}
