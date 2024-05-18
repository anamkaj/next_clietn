'use client'

import Image from 'next/image'
import { useAtom } from 'jotai'
import { requestConsultationBtn } from '@/src/shared/store/jotai/modal'

export default function MainDisplay() {
  const [_, setRequestConsultation] = useAtom(requestConsultationBtn)
  //   const titleForm = 'Вызвать инженера'
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 p-4 absolute  items-center'>
      <div className='w-full flex justify-center'>
        <Image
          height={768}
          width={1366}
          src={'https://tmk-v.ru:8081/img/landing_page_imag/baner(4).webp'}
          className='w-[500px] xl:w-full'
          alt='Установка видеонаблюдения в Краснодаре'
        />
      </div>
      <div className=' mt-5 '>
        <h1 className='text-4xl xl:text-6xl font-semibold uppercase tracking-tight'>
          УСТАНОВКА СИСТЕМ ВИДЕОНАБЛЮДЕНИЯ <br />
        </h1>
        <h2 className=' mt-0 lg:mt-4 text-2xl xl:text-4xl font-semibold uppercase tracking-tight '>
          <span>
            <mark className=' bg-yellow-300'>«ПОД КЛЮЧ»</mark>
          </span>{' '}
          В КРАСНОДАРЕ{' '}
        </h2>
        <p className=' uppercase mt-4 md:mt-2 lg:mt-6 text-xl lg:text-2xl font-medium'>
          с гарантией до 2 лет
        </p>
        <ul className=' mt-8 md:mt-4 lg:mt-8 font-thin uppercase text-sm xl:text-xl list-disc md:ml-10 xl:ml-20'>
          <li>
            <span className=' font-bold'>Бесплатно</span> приедем к Вам для
            осмотра
          </li>
          <li>
            <span className=' font-bold'>Установим</span> профессиональное
            оборудование
          </li>
          <li>
            {' '}
            <span className=' font-bold'>Дадим гарантию</span> по договору до 2
            лет
          </li>
        </ul>
        <button
          onClick={() => setRequestConsultation(true)}
          className=' bg-indigo-500 mt-5 text-white font-medium  rounded-lg px-10 py-2.5 text-center mr-2 mb-2 text-sm xl:text-xl cursor-pointer uppercase shadow-xl'
        >
          Заказать обратный звонок
        </button>
      </div>
    </div>
  )
}
