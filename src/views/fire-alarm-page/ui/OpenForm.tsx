'use client'


import { SlSettings } from 'react-icons/sl'
import { BsCalendarWeek } from 'react-icons/bs'
import { FaUserCheck } from 'react-icons/fa'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { OpenFormContact } from '@/src/entities/form-open'

export default function OpenForm() {
  const styleDiv = {
    div: 'w-full flex flex-col items-center p-2 bg-slate-50 border border-slate-300 rounded-lg text-center hover:shadow-lg ',
    h3: 'font-bold text-slate-800 mt-2 text-sm',
    p: 'font-thin text-black text-center mt-4',
  }

  return (
    <div className='relative mt-10 p-8'>
      <Image
        src={`https://tmk-v.ru:8081/img/landing_page_imag/ohrana-pojarka/background/out.png`}
        alt=''
        quality={90}
        fill={true}
        className='absolute z-[-1] opacity-15 w-full right-0 left-0 blur-lg '
      />
      <h2 className='text-black text-2xl xl:text-4xl text-center font-semibold uppercase tracking-tight '>
        Мы гарантируем
      </h2>

      <div className='container mx-auto grid grid-cols-1 xl:grid-cols-3 mt-10 justify-items-center'>
        <div className='w-full flex flex-col items-center gap-2'>
          <motion.div
            className={styleDiv.div}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0' }}
            transition={{ duration: 1.1 }}
          >
            <SlSettings className='h-16 w-16 ' />
            <h3 className={styleDiv.h3}>ГАРАНТИЯ РАБОТОСПОСОБНОСТИ СИСТЕМЫ</h3>
            <p className={styleDiv.p}>
              Мы гарантируем, что ваши системы всегда будут в рабочем состоянии
              и защитят Вас от пожара в любое время.
            </p>
          </motion.div>
          <motion.div
            className={styleDiv.div}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0' }}
            transition={{ duration: 0.95 }}
          >
            <BsCalendarWeek className='h-16 w-16 ' />
            <h3 className={styleDiv.h3}>ГАРАНТИЯ СОБЛЮДЕНИЯ СРОКОВ</h3>
            <p className={styleDiv.p}>
              Все работы по установке систем сдаются в оговоренные договором
              сроки, работы по обслуживанию проводятся регулярно в срок.
            </p>
          </motion.div>
          <motion.div
            className={styleDiv.div}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0' }}
            transition={{ duration: 0.7 }}
          >
            <FaUserCheck className='h-16 w-16 ' />
            <h3 className={styleDiv.h3}>ГАРАНТИЯ ПРОХОЖДЕНИЯ ПРОВЕРКИ МЧС</h3>
            <p className={styleDiv.p}>
              Работоспособная система и правильно оформленные документы,
              гарантируют успешное прохождение проверки органами Госпожнадзора.
            </p>
          </motion.div>
        </div>

        <motion.div
          className='p-4 items-center justify-center '
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: '0' }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={`https://tmk-v.ru:8081/img/landing_page_imag/ohrana-pojarka/background/rabform-1.png`}
            height={300}
            width={300}
            alt='Vladimir-vector'
            className='hidden xl:flex'
          />
        </motion.div>

        <div className=' flex flex-col justify-end mt-10 xl:mt-0 '>
          <div className='mb-auto flex flex-col items-center'>
            <Image
              src={`https://tmk-v.ru:8081/img/landing_page_imag/ohrana-pojarka/system.png`}
              height={400}
              width={400}
              alt='Vladimir-vector'
            />
            <p className='font-bold uppercase text-center text-lg mt-2'>
              Заполните форму ниже <br />{' '}
              <span className='rounded-full px-4 p-1 bg-amber-500 text-white text-sm xl:text-lg'>
                и получите в виде бонуса
              </span>
            </p>
            <ul className=' mt-4 font-serif text-lg list-disc'>
              <li>Бесплатный выезд специалиста</li>
              <li>
                Бесплатный аудит вашего объекта на соответствие требованиям
                пожарной безопасности
              </li>
              <li>Рекомендации по обслуживанию</li>
            </ul>
          </div>

          <OpenFormContact style='flex flex-col gap-4 mt-4 md:mx-[150px] xl:mx-0' />
        </div>
      </div>
    </div>
  )
}
