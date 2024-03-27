import React, { useState } from 'react'
import { IProduct } from '@/src/shared/reused-type/product'
import { FormPerson } from '@/src/entities/form-person'

type PropProduct = {
  product: IProduct
  setFastOrderModel: React.Dispatch<React.SetStateAction<boolean>>
}

export const FormFastOrder = ({ product, setFastOrderModel }: PropProduct) => {
  const [status, setStatus] = useState(true)
  const price = Math.round(product.price / (product.discount * 0.11))

  return (
    <>
      <div className=' mb-4 w-[350px] lg:w-[400px]'>
        <p className=' font-bold text-center text-xl mt-4'>Данные покупателя</p>
        <div className=' flex justify-between items-center mt-4 gap-4'>
          <label className='flex items-center justify-between gap-2'>
            <input
              onClick={() => setStatus(true)}
              defaultChecked
              name='radio-1'
              type='radio'
              defaultValue='Физическое Лицо'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 '
            />
            Физическое Лицо
          </label>
          <label className='flex items-center justify-between gap-2'>
            <input
              onClick={() => setStatus(false)}
              name='radio-1'
              type='radio'
              defaultValue='Юридическое Лицо'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 '
            />
            Юридическое Лицо
          </label>
        </div>
        <FormPerson
          price={price}
          status={status}
          product={product}
          setFastOrderModel={setFastOrderModel}
        />
      </div>
    </>
  )
}
