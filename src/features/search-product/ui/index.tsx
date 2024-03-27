'use client'
import React, { useState } from 'react'
import { MdClear } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import ScrollList from './ProductList'
import SearchMobile from './Mobile'
import ErrorSearch from './ErrorSearch'
import { useWindowSize } from '@/src/shared/hook/useWindowSize'
import { useSearch } from '../lib/hook/get-search-product'

export default function Search() {
  const [input, setInput] = useState<string>('')
  const [active, setActive] = useState<boolean>(false)
  const { errorData, category, product } = useSearch(input)
  const { width } = useWindowSize()
  // const isMobileScreen = useMediaQuery({ query: '(max-width: 480px)' })

  return (
    <>
      {width >= 768 ? (
        <div className='relative w-[25vw]'>
          <div className=' flex items-center '>
            <input
              value={input}
              onClick={() => setActive(true)}
              onChange={(e) => setInput(e.target.value)}
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
                  <BsSearch
                    type='submit'
                    className=' cursor-pointer h-5 w-5 '
                  />
                )}
              </div>
            </div>
          </div>
          {active &&
            (errorData !== undefined ? (
              <ErrorSearch
                text={'Ошибка поиска. Мы уже решаем эту проблему.'}
              />
            ) : (
              <div>
                <ScrollList
                  product={product}
                  category={category}
                  active={active}
                  setActive={setActive}
                  input={input}
                />
              </div>
            ))}
        </div>
      ) : (
        <div>
          <SearchMobile
            setInput={setInput}
            data={product}
            category={category}
            input={input}
          />
        </div>
      )}

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
