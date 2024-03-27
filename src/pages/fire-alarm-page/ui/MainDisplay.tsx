'use client'
import React from 'react'
import Image from 'next/image'
import { useAtom } from 'jotai'

import { BsFire } from 'react-icons/bs'
import Button from './Button/Button'
import { FiPhoneCall } from 'react-icons/fi'
import { FaGift } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { requestConsultationBtn } from '@/src/shared/store/jotai/modal'

export default function MainDisplay() {
  const [_, setRequestConsultation] = useAtom(requestConsultationBtn)

  const openPopup = () => {
    setRequestConsultation(true)
  }

  return (
    <div className='container mx-auto mt-10 mb-16'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 items-center'>
        <div className='flex flex-col items-center'>
          <Image
            height={768}
            width={1366}
            src={
              'https://tmk-v.ru:8080/img/landing_page_imag/ohrana-pojarka/profyre.png'
            }
            className='w-[500px] xl:w-full rounded-lg p-2'
            alt='Установка пожарной сигнализации в Краснодаре'
          />
          <motion.div
            className='flex items-end gap-4 mt-6 '
            initial={{ opacity: 0, x: '-300%' }}
            animate={{ opacity: 1, x: '0' }}
            transition={{ duration: 1.6 }}
          >
            <FaGift className='h-12 w-12 text-red-600' />
            <p className='font-normal text-xs md:text-lg'>
              При заказе монтажных услуг, получите{' '}
              <span className=' font-bold'>
                комплект исполнительной документации в подарок.
              </span>
            </p>
          </motion.div>
        </div>
        <div>
          <motion.div
            className='flex items-end'
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: '0' }}
            transition={{ duration: 1.2 }}
          >
            <h1 className='text-4xl xl:text-6xl font-semibold uppercase tracking-tight'>
              ПОЖАРНАЯ БЕЗОПАСНОСТЬ <br />
            </h1>
            <span>
              <BsFire className=' hidden mobile:block h-20 w-20 text-red-500 mr-0 lg:mr-[130px] ' />
            </span>
          </motion.div>

          <h2 className=' text-2xl xl:text-4xl font-semibold uppercase tracking-tight '>
            <span>
              <mark className='rounded-lg bg-yellow-300'>«ПОД КЛЮЧ»</mark>
            </span>{' '}
            <span className=' underline'>В КРАСНОДАРЕ </span>
          </h2>

          <div className='mt-8 md:mt-8 ml-6 md:ml-10 xl:ml-20'>
            <ul className='font-thin uppercase text-sm xl:text-xl list-disc '>
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
                <span className=' font-bold'>Дадим гарантию</span> по договору
                до 2 лет
              </li>
            </ul>
          </div>
          <div className='mt-8 md:mt-2 lg:mt-20  '>
            <mark className='bg-amber-400 rounded-lg px-4 uppercase text-black text-xl lg:text-2xl font-bold'>
              от 100 руб/м²
            </mark>
          </div>
          <Button
            action={openPopup}
            text='Заказать обратный звонок'
            icon={<FiPhoneCall className=' h-4 w-4 md:h-6 md:w-6' />}
            styleBtn='w-full md:w-full lg:w-3/4 xl:w-2/3 flex items-center gap-4 texxt-center bg-indigo-500 mt-5 text-white font-medium rounded-lg px-10 py-2.5 text-center mr-2 mb-2 text-sm xl:text-xl cursor-pointer uppercase border-2 hover:bg-indigo-400'
          />
        </div>
      </div>
    </div>
  )
}
