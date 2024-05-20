'use client'
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import InputMobile from './SearchMobile'
import { ButtonMain } from '@/src/shared/ui/button/button-header'
import { SearchMobileProp } from '../../model/type/search-type'

export default function SearchMobile({
  handleSearch,
  product,
  category,
  input,
}: SearchMobileProp) {
  const [active, setActive] = useState<boolean>(false)
  const activeWindowSearch = () => {
    setActive(true)
  }

  return (
    <>
      {/* Плейсхолдер и икона поиска */}

      <ButtonMain
        action={activeWindowSearch}
        icon={<BsSearch className='w-5 h-5 text-slate-600 ' />}
        style='bg-slate-100 border px-2 py-2 rounded'
      />

      {/* Окно поиска для мобильной версии */}
      {active && (
        <InputMobile
          setActive={setActive}
          product={product}
          active={active}
          input={input}
          handleSearch={handleSearch}
          category={category}
        />
      )}
    </>
  )
}
