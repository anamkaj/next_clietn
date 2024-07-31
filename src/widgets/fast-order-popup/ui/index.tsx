'use client'
import React, { useState } from 'react'
import { CounterProduct } from '@/src/entities/count-product-add'
import { FormFastOrder } from './FormFastOrder'
import { IProduct } from '@/src/shared/reused-type/product'

type PropPopup = {
  product: IProduct
  setFastOrderModel: React.Dispatch<React.SetStateAction<boolean>>
}

export const FastOrderCart = ({ product, setFastOrderModel }: PropPopup) => {
  const [countProduct, setCountProduct] = useState(1)
  return (
    <>
      <div className=' flex flex-col items-center '>
        <div className=' '>
          <img
            className=' w-[15vh]'
            src={`https://tmk-v.ru:8081/img/${product.imgFolder}/${product.imgLink[0]}`}
            alt={product.altImg}
          />
        </div>

        <div className=' text-center'>
          <h2>
            {product.title.length > 50
              ? product.title.slice(0, 50) + '...'
              : product.title}
          </h2>
          <div className=' mt-2'>
            <p className=' text-sm'>
              {Math.round(
                product.price * (product.discount / 11) * countProduct,
              ).toLocaleString('ru')}{' '}
              ₽
            </p>
          </div>
          <div className=' flex justify-center'>
            <CounterProduct
              setCountPopupProduct={setCountProduct}
              countPopupProduct={countProduct}
              product={product}
            />
          </div>
        </div>
      </div>

      {/* Форма для быстрого заказа  */}

      <FormFastOrder product={product} setFastOrderModel={setFastOrderModel} />
    </>
  )
}
