'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { CategoryListProp } from '../model/type/search-type'


export default function CategoryList({
  category,
  setActive,
}: CategoryListProp) {
  return (
    <div className=' grid grid-cols-2 gap-2 mb-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500'>
      {category?.map((x) => {
        if (x.parentCategoryId !== null)
          return (
            <Link
              onClick={() => setActive(false)}
              href={{
                pathname: `/category/${x.slug}/${x.id}`,
              }}
              key={x.id}
              className=' w-full flex flex-col p-2 hover:border-double hover:border-slate-500 text-center justify-center border items-center shadow-sm rounded-md  '
            >
              <Image
                height={40}
                width={40}
                src={`https://tmk-v.ru:8080/img/${x.folderImg}/${x.img}`}
                alt={x.name}
              />
              {x.name.length > 20 ? (
                <h2 className=' text-xs font-light lg:text-sm whitespace-pre-wrap '>
                  {`${x.name.slice(0, 19)}...`}
                </h2>
              ) : (
                <h2 className=' text-xs font-light lg:text-sm whitespace-pre-wrap '>
                  {x.name}
                </h2>
              )}
            </Link>
          )
      })}
    </div>
  )
}
