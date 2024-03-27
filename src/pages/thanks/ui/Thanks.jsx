import React from 'react'
import { FcOk } from 'react-icons/fc'

export default function Thanks() {
  return (
    <div className=' mx-auto container p-2'>
      <div className=' mt-8 flex flex-col items-center gap-4 bg-gradient-to-r from-gray-50 to-gray-50 shadow-md rounded-lg'>
        <FcOk className=' w-[200px] h-[200px] mt-10' />
        <div>
          <p className=' font-bold text-xl lg:text-3xl'>Спасибо за заявку! </p>
        </div>
        <div className=' text-center'>
          <h2 className=' font-thin text-xl lg:text-2xl'>
            Ценим ваше время, поэтому работает качественно и быстро.
          </h2>
          <h2 className=' font-semibold text-xl lg:text-2xl mt-[40px] mb-[100px]'>
            Спасибо, что выбрали именно нас.
          </h2>
        </div>
      </div>
    </div>
  )
}
