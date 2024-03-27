'use client'
import React from 'react'
import { ProviderStor } from '@/src/app/provider'
import { useAppSelector } from '@/src/app/Redux/storeHook'
import AddedProducts from './AddedProducts'
import EmptyBasket from './EmptyBasket'
import HeaderCartPay from './HeaderCartPay'
import { FormOrder } from '@/src/entities/form-order-page'

export default function PageCart() {
  const data = useAppSelector((state) => state.cartReducer.cart)
  return (
    <div className='container mx-auto p-2'>
      <HeaderCartPay />
      {data.length < 1 ? (
        <EmptyBasket />
      ) : (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>
          <div className=' col-span-1 lg:col-span-2 xl:col-span-3'>
            <ProviderStor>
              <AddedProducts data={data} />
            </ProviderStor>
          </div>
          <div>
            <FormOrder />
          </div>
        </div>
      )}
    </div>
  )
}
