import React from 'react'

export default function Price({ price }: { price: number }) {
  return (
    <>
      <p className='flex items-center mt-5 font-bold text-3xl '>
        {price.toLocaleString('ru')}₽
      </p>
    </>
  )
}
