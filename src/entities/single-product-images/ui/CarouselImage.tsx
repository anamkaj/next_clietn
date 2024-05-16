'use client'
import React, { useEffect, useState } from 'react'
import FsLightbox from 'fslightbox-react'
import { IProduct } from '@/src/shared/reused-type/product'

export default function CarouselImage({ product }: { product: IProduct }) {
  const [img, setImg] = useState({ id: 0, url: '' })
  const [toggler, setToggler] = useState(false)
  const handleClick = (index: number, url: string) => {
    setImg({ id: index, url: url })
  }
  useEffect(() => {
    setImg({
      id: 0,
      url: `https://tmk-v.ru:8081/img/${product.imgFolder}/${product.imgLink[0]}`,
    })
  }, [product])
  return (
    <div className=' flex flex-col box-border  mt-5 gap-2 p-4'>
      {
        <img
          src={img.url}
          alt={product.altImg}
          onClick={() => {
            setToggler(!toggler)
          }}
        />
      }
      <FsLightbox toggler={toggler} sources={[img.url]} key={img.id} />
      <div className={'flex gap-4 '}>
        {product.imgLink?.map((data, index) => {
          return (
            <div
              className={
                index === img.id
                  ? ' w-[80px] h-[80px] box-border border-2 border-gray-400'
                  : ' w-[80px] h-[80px] box-border border-2 border-gray-100 '
              }
              key={index}
            >
              <img
                src={`https://tmk-v.ru:8081/img/${product.imgFolder}/${data}`}
                alt={product.altImg}
                key={index}
                onClick={() => {
                  handleClick(
                    index,
                    `https://tmk-v.ru:8081/img/${product.imgFolder}/${data}`,
                  )
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
