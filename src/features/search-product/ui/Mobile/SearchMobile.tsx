'use client'

import { BsArrowLeftCircle } from 'react-icons/bs'
import { MdClear } from 'react-icons/md'
import ProductListMobile from './ProductListMobile'
import { InputMobileProp } from '../../model/type/search-type'
import { useScrollDisable } from '@/src/shared/hook/useScrollOff'

export default function InputMobile({
  handleSearch,
  product,
  category,
  input,
  active,
  setActive,
}: InputMobileProp) {
  const _ = useScrollDisable(active)

  return (
    <div className='z-10 fixed top-0 left-0 w-full h-full bg-white flex flex-col p-2 '>
      <>
        <button
          className=' mt-4 ml-2 flex items-center gap-2'
          onClick={() => setActive(false)}
        >
          <BsArrowLeftCircle className=' w-5 h-5 text-slate-500' />
          Назад
        </button>
      </>
      <>
        <input
          value={input}
          onChange={(e) => handleSearch(e.target.value)}
          className='bg-white rounded-lg border py-2 px-2 leading-tight focus:outline-none font-thin w-full mt-4 '
          type='text'
          placeholder={!active ? 'Поиск по товарам' : 'Введите запрос'}
        />

        <div className=' z-10 absolute top-[75px] right-[30px]'>
          <MdClear
            onClick={() => handleSearch('')}
            className=' cursor-pointer h-5 w-5 '
          />
        </div>
      </>

      <ProductListMobile
        setActive={setActive}
        product={product}
        category={category}
      />
    </div>
  )
}
