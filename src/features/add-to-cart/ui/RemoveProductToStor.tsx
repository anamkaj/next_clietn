import React from 'react'
import { removeToCart } from '@/src/app/Redux/Product/cartSlise'
import { useAppDispatch } from '@/src/app/Redux/storeHook'
import { RemoveCartType } from '../model/type/button-type'

export default function RemoveProductToStor({ product }: RemoveCartType) {
  const dispatch = useAppDispatch()
  const removeProduct = () => {
    dispatch(
      removeToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        img: product.imgLink[0],
        imgFolder: product.imgFolder,
        totalCount: 1,
        sale: product.discount,
      }),
    )
  }
  return (
    <button
      className='w-full uppercase mt-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-100 font-medium rounded-lg text-sm lg:text-base px-5 py-3 text-center '
      onClick={() => removeProduct()}
    >
      Удалить товар из корзины
    </button>
  )
}
