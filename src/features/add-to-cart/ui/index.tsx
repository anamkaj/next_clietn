'use client'
import { useAppSelector } from '@/src/app/Redux/storeHook'
import React from 'react'
import AddProductToStor from './AddProductToStor'
import RemoveProductToStor from './RemoveProductToStor'
import { IProduct } from '@/src/shared/reused-type/product'
import { addStorButton } from '@/src/shared/store/jotai/modal'
import { useAtom } from 'jotai'

type PropCartPrise = {
  product: IProduct
  price: number
}

export default function AddProductStore({ product }: PropCartPrise) {
  const [_, setAddStoreForm] = useAtom(addStorButton)
  const store = useAppSelector((state) => state.cartReducer.cart)
  const checkCartStore =
    store.length > 0 ? store.find((e) => e.id === product.id) : undefined

  return (
    <div className='w-full'>
      {checkCartStore == undefined ? (
        <AddProductToStor
          product={product}
          setActive={setAddStoreForm}
          price={product.price}
        />
      ) : (
        <RemoveProductToStor product={product} />
      )}
    </div>
  )
}
