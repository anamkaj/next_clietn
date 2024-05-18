'use client'

import { useAtom } from 'jotai'
import Image from 'next/image'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Button from './Button/Button'
import { BsFillSendCheckFill } from 'react-icons/bs'
import { requestConsultationBtn } from '@/src/shared/store/jotai/modal'

type ServicesType = {
  data: {
    id: number
    images: string
    alt: string
    title: string
    desc: string
    textBtn: string
  }[]
}

export default function TypesServices({ data }: ServicesType) {
  const [_, setRequestConsultation] = useAtom(requestConsultationBtn)

  const openPopup = () => {
    setRequestConsultation(true)
  }
  return (
    <div className='relative'>
      <Image
        src={`https://tmk-v.ru:8081/img/landing_page_imag/ohrana-pojarka/background/blog2.jpg`}
        alt=''
        quality={90}
        fill={true}
        className='absolute z-[-1] opacity-30 w-full right-0 left-0 blur-sm'
      />

      <div className=' container mx-auto p-2 mt-10 z-10'>
        <h2 className='text-black text-2xl xl:text-4xl text-center font-semibold uppercase tracking-tight mt-10'>
          ВИДЫ РАБОТ, КОТОРЫЕ МЫ ВЫПОЛНЯЕМ
        </h2>
        <div className='w-full flex flex-wrap md:flex-nowrap mt-10 gap-2 mb-4 '>
          {data.map((x) => {
            return (
              <div
                key={x.id}
                className=' flex flex-col items-center border border-slate-300 p-4 shadow-lg bg-slate-100'
              >
                <div className=' p-2 h-[240px] md:h-[150px] lg:h-[200px] xl:h-[300px]'>
                  <img src={x.images} alt={x.alt} />
                </div>
                <h2 className=' font-bold uppercase text-center text-sm xl:text-lg'>
                  {x.title}
                </h2>

                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  className='font-thin mt-4 p-4 mb-8 text-sm lg:text-lg text-center'
                >
                  {x.desc}
                </ReactMarkdown>
                <Button
                  action={openPopup}
                  text={x.textBtn}
                  icon={<BsFillSendCheckFill className=' h-6 w-6' />}
                  styleBtn='flex items-center gap-4 text-xs bg-indigo-500 text-white font-thine rounded-lg px-4 py-2.5 text-center mt-auto xl:text-sm cursor-pointer mb-4 border-2 hover:bg-indigo-400'
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
