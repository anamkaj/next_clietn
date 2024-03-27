import React from 'react'
import Image from 'next/image'
import { namaCart } from '../lib/helper/info'

export default async function ProductCartCctv() {
  return (
    <>
      <div className=' flex justify-center mt-[200px] md:mt-20 lg:mt-60 flex-col items-center'>
        <h2 className=' text-2xl text-center  font-semibold uppercase tracking-tight'>
          <span className=' font-thin text-xl'>КАКИЕ СИСТЕМЫ </span> <br />
          МЫ УСТАНАВЛИВАЕМ ?
        </h2>
        <hr className=' w-64 mt-4 bg-slate-200' />
      </div>
      <div className=' grid grid-cols-2 xl:grid-cols-4 mt-20 gap-y-8'>
        {Object.keys(namaCart).map((cart, index) => {
          return (
            <div className=' flex flex-col items-center ' key={index}>
              <div className=' w-[150px] h-[150px]'>
                <Image
                  height={200}
                  width={200}
                  src={`https://tmk-v.ru:8080/img/landing_page_imag/${namaCart[cart]}`}
                  alt='Установка видеонаблюдения в Краснодаре'
                />
              </div>
              <div className=' mt-8 mb-4 '>
                <h2 className=' font-thin text-center text-lg md:text-xl'>
                  {cart}
                </h2>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
