'use client'
import React from 'react'
import { useAppSelector } from '@/src/app/Redux/storeHook'
import Link from 'next/link'
import VisibleCartProduct from './VisibleCartProduct'

export default function ShopCardHeader() {
  const countProductCart = useAppSelector((state) => state.cart.cart).length

  return (
    <>
      <div className=' hidden md:block'>
        <Link href={'/order'}>
          <div className='flex justify-center items-center'>
            <div className='relative rounded bg-slate-100 px-1 py-1 text-slate-800'>
              <div className=' bottom-6 absolute left-7'>
                <p className='flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white'>
                  {countProductCart}
                </p>
              </div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='36'
                height='36'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='M4 22V6h4q0-1.65 1.175-2.825T12 2q1.65 0 2.825 1.175T16 6h4v16zm6-16h4q0-.825-.587-1.412T12 4q-.825 0-1.412.588T10 6m-2 5h2V8H8zm6 0h2V8h-2z'
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>
      <VisibleCartProduct countProductCart={countProductCart} />
    </>
  )
}
