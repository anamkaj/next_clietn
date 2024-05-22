'use client'
import React, { useEffect, useState } from 'react'
import { MdAlternateEmail } from 'react-icons/md'
import { FaWhatsappSquare } from 'react-icons/fa'
import Link from 'next/link'
import { ButtonMain } from '../../button/button-header'
import { useWindowSize } from '@/src/shared/hook/useWindowSize'

export default function Contact() {
  const [active, setActive] = useState<boolean>(false)
  const { width, heightDynamic } = useWindowSize()

  const openContact = () => setActive((state) => !state)
  const widthWindows = width < 768

  useEffect(() => {
    if (heightDynamic > 3) {
      setActive(false)
    }
  }, [heightDynamic])

  return (
    <>
      <div>
        <ButtonMain
          text={'Контакты'}
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='36'
              height='36'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M11 21v-2h8v-7.1q0-2.925-2.037-4.962T12 4.9q-2.925 0-4.962 2.038T5 11.9V18H2v-5.725h1l.075-1.325q.2-1.7.988-3.15t1.975-2.525Q7.225 4.2 8.762 3.6T12 3q1.7 0 3.225.6t2.725 1.663q1.2 1.062 1.975 2.512t1 3.15l.075 1.35h1V18h-1v3zm-2-7q-.425 0-.712-.288T8 13q0-.425.288-.712T9 12q.425 0 .713.288T10 13q0 .425-.288.713T9 14m6 0q-.425 0-.712-.288T14 13q0-.425.288-.712T15 12q.425 0 .713.288T16 13q0 .425-.288.713T15 14m-8.975-1.55Q5.85 9.8 7.625 7.9T12.05 6q2.225 0 3.913 1.412T18 11.026Q15.725 11 13.813 9.8t-2.938-3.25q-.4 2-1.687 3.563T6.025 12.45'
              />
            </svg>
          }
          action={openContact}
          style='flex items-center gap-2 rounded md:px-4 py-1 border bg-slate-100'
          styleIcon='text-slate-600'
          textStyle='uppercase text-black'
        />
        {active && (
          <div className='relative z-10'>
            <div
              className={
                widthWindows
                  ? 'absolute left-[-130px] bg-slate-100 rounded-lg p-2 mt-2 shadow-lg space-y-4'
                  : 'absolute  bg-slate-100 rounded-lg p-2 mt-2 shadow-lg space-y-4'
              }
            >
              <div className='flex whitespace-nowrap flex-col '>
                <div className=' flex gap-2 items-center '>
                  <MdAlternateEmail className=' text-amber-600 w-5 h-5' />
                  <h4 className='text-lg'>info@tmk-v.ru</h4>
                </div>

                <div className='flex gap-2 items-center'>
                  <FaWhatsappSquare className=' text-green-500 w-5 h-5' />
                  <Link
                    href='https://wa.me/79002689360'
                    className=' font-medium underline text-sm'
                  >
                    Напишите нам
                  </Link>
                </div>
                <div className=' flex gap-2 items-center'>
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      className=' text-blue-600'
                    >
                      <path
                        fill='currentColor'
                        d='M21.579 6.855c.14-.465 0-.806-.662-.806h-2.193c-.558 0-.813.295-.953.619c0 0-1.115 2.719-2.695 4.482c-.51.513-.743.675-1.021.675c-.139 0-.341-.162-.341-.627V6.855c0-.558-.161-.806-.626-.806H9.642c-.348 0-.558.258-.558.504c0 .528.79.65.871 2.138v3.228c0 .707-.127.836-.407.836c-.743 0-2.551-2.729-3.624-5.853c-.209-.607-.42-.852-.98-.852H2.752c-.627 0-.752.295-.752.619c0 .582.743 3.462 3.461 7.271c1.812 2.601 4.363 4.011 6.687 4.011c1.393 0 1.565-.313 1.565-.853v-1.966c0-.626.133-.752.574-.752c.324 0 .882.164 2.183 1.417c1.486 1.486 1.732 2.153 2.567 2.153h2.192c.626 0 .939-.313.759-.931c-.197-.615-.907-1.51-1.849-2.569c-.512-.604-1.277-1.254-1.51-1.579c-.325-.419-.231-.604 0-.976c.001.001 2.672-3.761 2.95-5.04'
                      />
                    </svg>
                  </span>
                  <Link href={'https://vk.com/tmkvektor'} className='text-lg'>
                    tmkvektor
                  </Link>
                </div>
              </div>

              <div className='flex flex-col whitespace-nowrap '>
                <div className='flex items-center gap-2'>
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='18'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fill='currentColor'
                        d='M18.35 14.85L16.9 13.4q.3-.275.463-.637t.162-.763q0-.4-.162-.763T16.9 10.6l1.45-1.45q.575.575.875 1.313t.3 1.537q0 .8-.3 1.538t-.875 1.312m2.45 2.45l-1.4-1.4q.775-.775 1.2-1.775T21.025 12q0-1.125-.425-2.125T19.4 8.1l1.4-1.4q1.075 1.05 1.65 2.425T23.025 12q0 1.5-.575 2.875T20.8 17.3M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v4h-2V6H7v12h10v-1h2v4q0 .825-.587 1.413T17 23zm0-3v1h10v-1zM7 4h10V3H7zm0 0V3zm0 16v1z'
                      />
                    </svg>
                  </span>
                  <a
                    href='tel:+79002689360'
                    className='text-black text-normal font-bold'
                  >
                    8 (861) 298-34-28
                  </a>
                </div>
                <div className='flex items-center gap-2'>
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='18'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fill='currentColor'
                        d='M18.35 14.85L16.9 13.4q.3-.275.463-.637t.162-.763q0-.4-.162-.763T16.9 10.6l1.45-1.45q.575.575.875 1.313t.3 1.537q0 .8-.3 1.538t-.875 1.312m2.45 2.45l-1.4-1.4q.775-.775 1.2-1.775T21.025 12q0-1.125-.425-2.125T19.4 8.1l1.4-1.4q1.075 1.05 1.65 2.425T23.025 12q0 1.5-.575 2.875T20.8 17.3M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v4h-2V6H7v12h10v-1h2v4q0 .825-.587 1.413T17 23zm0-3v1h10v-1zM7 4h10V3H7zm0 0V3zm0 16v1z'
                      />
                    </svg>
                  </span>
                  <a
                    href='tel:+79002689360'
                    className='text-black text-normal font-bold'
                  >
                    8 (900) 268-93-60
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
