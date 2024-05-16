import React from 'react'
import Image from 'next/image'
import { OpenFormContact } from '@/src/entities/form-open'

export default function OpenForm() {
  return (
    <div className=' bg-gradient-to-r from-slate-100 rounded-l-lg shadow-l-lg '>
      <div className='flex justify-center mt-20 flex-col items-center'>
        <h2 className='mt-4 text-2xl text-center  font-semibold uppercase tracking-tight'>
          Получите профессиональную консультацию
        </h2>
        <hr className=' w-64 mt-4 bg-slate-200' />
      </div>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-3 items-center'>
        <div className=' col-span-1'>
          <div className=' flex flex-col items-center justify-center'>
            <Image
              height={300}
              width={300}
              src={`https://tmk-v.ru:8081/img/landing_page_imag/wrap__img.jpg`}
              alt='Установка видеонаблюдения в Краснодаре'
              className=' rounded-full md:w-[200px] shadow-md'
            />
            <div className=' mb-4 mt-2 text-center font-thin '>
              <span className='font-semibold'>ВЛАДИМИР</span> <br /> Инженер
              (техник) слаботочных систем <br /> 4 категории
            </div>
          </div>
        </div>
        <div className=' col-span-2 mt-4 md:mt-0 p-4'>
          <p className='text-xl md:text-2xl font-thin whitespace-pre-wrap'>
            Вам перезвонит опытный специалист и ответит на все ваши вопросы,
            далее подберем решение для вашей задачи и составим смету!
          </p>
          <>
            <ul className=' font-semibold mt-4'>
              <li>- Просчитаем детальную смету без дальнейших переплат</li>
              <li>- Подскажем какие камеры лучше и куда поставить</li>
              <li>- Поможем выбрать разрешение и фокусное расстояние камер</li>
            </ul>
          </>

          <OpenFormContact style='grid grid-cols-1 md:grid-cols-3 gap-2 mt-4 item-center' />
        </div>
      </div>
    </div>
  )
}
