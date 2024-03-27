'use client'
import React from 'react'
import { MdAlternateEmail } from 'react-icons/md'
import { FaWhatsappSquare } from 'react-icons/fa'
import Link from 'next/link'
import { useWindowSize } from '@/src/shared/hook/useWindowSize'


export default function Contact() {
  const { width } = useWindowSize()

  return (
    <>
      <div className='flex gap-4 items-center mobile:flex-wrap '>
        {width > 1366 && (
          <div className=' flex flex-col'>
            <div className=' flex gap-2 items-center '>
              <MdAlternateEmail className=' text-amber-600 w-5 h-5' />
              <h4 className='text-lg'>info@tmk-v.ru</h4>
            </div>

            <div className=' flex gap-2 items-center '>
              <FaWhatsappSquare className=' text-green-500 w-5 h-5' />
              <Link
                href='https://wa.me/79002689360'
                className=' font-medium underline text-sm'
              >
                Напишите нам
              </Link>
            </div>
          </div>
        )}
        {width > 500 && (
          <div className=' flex flex-col'>
            <div>
              <a
                href='tel:+79002689360'
                className='flex items-center gap-2 text-black text-normal font-medium xl:whitespace-nowrap'
              >
                8 (861) 298-34-28
              </a>
            </div>
            <div>
              <a
                href='tel:+79002689360'
                className='flex items-center gap-2 text-black text-normal font-medium xl:whitespace-nowrap'
              >
                8 (900) 268-93-60
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
