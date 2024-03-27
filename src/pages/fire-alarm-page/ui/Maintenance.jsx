'use client'
import React from 'react'
import Image from 'next/image'
import { useAtom } from 'jotai'
import { requestConsultationBtn } from '@/src/shared/store/jotai/modal'
import { FiPhoneCall } from 'react-icons/fi'
import Button from '../ui/Button/Button'

export default function Maintenance() {
  const [_, setRequestConsultation] = useAtom(requestConsultationBtn)

  const openPopup = () => {
    setRequestConsultation(true)
  }
  return (
    <div className='mt-10'>
      <h2 className='text-black text-2xl xl:text-4xl text-center font-semibold uppercase tracking-tight '>
        ОБСЛУЖИВАНИЕ ПОЖАРНОЙ СИГНАЛИЗАЦИИ (АПС)
      </h2>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 items-center mt-10 gap-4 p-4'>
        <Image
          src={`https://tmk-v.ru:8080/img/landing_page_imag/ohrana-pojarka/fire-alarm-systems-installation-service.jpg`}
          alt=''
          quality={90}
          width={700}
          height={700}
          className='rounded-xl'
        />

        <div className='flex flex-col h-full'>
          <h3 className=' text-slate-800 mt-2 text-lg font-bold'>
            Компания «ТМК Вектор» производит обслуживание пожарной сигнализации
            в Краснодаре и Краснодарском крае.
          </h3>
          <p className='font-normal text-black mt-6'>
            Основываясь на богатом опыте и имея отработанные схемы организации
            работ, мы консультируем, рассчитываем, проектируем, устанавливаем и
            в дальнейшем сопровождаем системы безопасности любой сложности.
          </p>
          <h2 className='text-xs text-slate-800 mt-8 md:text-lg font-bold '>
            Наша компания - это команда профессионалов, специализирующихся на
            обеспечении безопасности объектов любой сложности, таких как:
            промышленные предприятия, торговые центры, жилые комплексы и
            государственные учреждения.
          </h2>
          <div className='mt-10 md:mt-auto'>
            <Button
              action={openPopup}
              text='Заказать обратный звонок'
              icon={<FiPhoneCall className=' h-4 w-4 md:h-6 md:w-6' />}
              styleBtn='flex items-center gap-4 justify-center bg-indigo-500 text-white font-medium rounded-lg px-10 py-2.5 text-center mr-2 text-sm xl:text-xl cursor-pointer uppercase border-2 w-full hover:bg-indigo-400'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
