'use client'
import { addToCart, removeToCart } from '@/src/app/Redux/Product/cartSliсe'
import { useAppDispatch, useAppSelector } from '@/src/app/Redux/storeHook'
import { IProduct } from '@/src/shared/reused-type/product'

import { BsFillCartCheckFill } from 'react-icons/bs'
import { BsCartDash } from 'react-icons/bs'

interface BtnProps {
  product: IProduct
}

export function ButtonCart({ product }: BtnProps) {
  const checkCartProduct = useAppSelector((state) => state.cart.cart)
  const dispatch = useAppDispatch()
  const checkCartColorButton =
    checkCartProduct.length > 0
      ? checkCartProduct.find((e: any) => e.id === product.id)
      : undefined
  return (
    <div>
      {checkCartColorButton == undefined ? (
        <button
          onClick={() =>
            dispatch(
              addToCart({
                id: product.id,
                title: product.title,
                price: Number(product.price),
                img: product.imgLink[0],
                imgFolder: product.imgFolder,
                totalCount: 1,
                sale: product.discount,
              }),
            )
          }
        >
          <span>
            <BsFillCartCheckFill className=' w-8 md:w-10 h-8 md:h-10' />
          </span>
        </button>
      ) : (
        <button
          onClick={() =>
            dispatch(
              removeToCart({
                id: product.id,
                title: product.title,
                price: Number(product.price),
                img: product.imgLink[0],
                imgFolder: product.imgFolder,
                totalCount: 1,
                sale: product.discount,
              }),
            )
          }
        >
          <span>
            <BsCartDash className=' w-8 md:w-10 h-8 md:h-10' />
          </span>
        </button>
      )}
    </div>
  )
}
