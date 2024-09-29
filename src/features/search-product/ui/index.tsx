'use client'
import React, { useState } from 'react'
import { MdClear } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import SearchMobile from './Mobile'
import { useWindowSize } from '@/src/shared/hook/useWindowSize'
import { useSearch } from '../lib/hook/get-search-product'
import { useValidate } from '../lib/hook/validate-input'
import ProductList from './ProductList'

export default function Search() {
  const { width } = useWindowSize()
  const [active, setActive] = useState<boolean>(false)
  const { input, setInput, handleSearch } = useValidate()
  const { category, product } = useSearch(input)

  if (width <= 768) {
    return (
      <>
        <SearchMobile
          handleSearch={handleSearch}
          product={product}
          category={category}
          input={input}
        />
      </>
    )
  }

  return (
    <>
      <div className='relative w-full'>
        <div className=' flex items-center '>
          <input
            value={input}
            onClick={() => setActive(true)}
            onChange={(e) => handleSearch(e.target.value)}
            className=' bg-white rounded-lg border-2 border-slate-300 hover:border-slate-300 py-2 px-2 leading-tight focus:outline-none font-thin w-full text-lg z-20 '
            type='text'
            placeholder={!active ? 'Поиск по товарам' : 'Введите запрос'}
          />
          <div className='relative '>
            <div className='z-20 absolute right-8 top-[-10px] '>
              {active ? (
                <MdClear
                  onClick={() => setInput('')}
                  className=' cursor-pointer h-5 w-5 '
                />
              ) : (
                <BsSearch type='submit' className=' cursor-pointer h-5 w-5 ' />
              )}
            </div>
          </div>
        </div>
        {active && (
          <div>
            <ProductList
              product={product}
              category={category}
              
              setActive={setActive}
            />
          </div>
        )}
      </div>

      {/* Темный фон для поиска */}
      {active && (
        <div
          onClick={() => setActive(false)}
          className='z-10 fixed top-0 opacity-30 left-0 min-h-full min-w-full bg-gray-800'
        ></div>
      )}
    </>
  )
}
