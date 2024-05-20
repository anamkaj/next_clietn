'use client'
import Link from 'next/link'
import Image from 'next/image'
import slug from 'slug'
import './css/scrollBar.css'
import { PropProductSearchList } from '../model/type/search-type'

export default function ProductSearchList({
  product,
  setActive,
}: PropProductSearchList) {
  return (
    <>
      {product?.map((x) => {
        return (
          <div
            className='border-y border-dotted border-slate-300 hover:border-double hover:shadow-sm hover:border-slate-600'
            key={x.id}
          >
            <Link
              onClick={() => setActive(false)}
              href={{
                pathname: `/product/search/${slug(x.title)}/${x.id}`,
              }}
            >
              <div className=' flex items-center gap-4 '>
                <p className=' font-light text-xs'>Артикул {x.article}</p>
                <span className=' text-sm'>{x.brand}</span>
                {'|'}
                <span className=' text-sm'>{x.price} ₽</span>
              </div>
              <div className=' flex items-center gap-2'>
                <Image
                  height={60}
                  width={60}
                  src={`https://tmk-v.ru:8081/img/${x.imgFolder}/${x.imgLink[0]}`}
                  alt={x.altImg}
                />
                <h2 className=' p-2 font-thin text-sm'> {x.title}</h2>
              </div>
            </Link>
          </div>
        )
      })}
    </>
  )
}
