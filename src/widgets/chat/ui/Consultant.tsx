'use client'
import React, { useContext, useState } from 'react'
import Input from './Input'
import Body from './Body'
import AuthChat from './auth/AuthChat'
import { WebSocketProvider } from '@/src/app/provider/socket/SocketProvider'
import { Online, StatusChat } from '@/src/shared/ui/chat-ui/ConsultantUi'
import { AnimatePresence, motion } from 'framer-motion'
import { useWindowSize } from '@/src/shared/hook/useWindowSize'

export default function Consultant() {
  const { socket, chat, setChat, user } = useContext(WebSocketProvider)
  const [active, setActive] = useState<boolean>(false)
  const { width } = useWindowSize()

  if (!active) {
    return (
      <motion.div
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: '0%' }}
        exit={{ opacity: 0, x: '-100%' }}
        transition={{ duration: 0.8 }}
        className='  fixed right-5 bottom-8 shadow-2xl p-2 bg-slate-100 rounded-full z-30'
      >
        <button onClick={() => setActive(true)}>
          <span className='animate-ping right-2 bottom-3 w-[60px] h-[60px] absolute inline-flex rounded-full bg-sky-400 opacity-75'></span>

          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='64'
              height='64'
              viewBox='0 0 32 32'
            >
              <g fill='none' fillRule='evenodd'>
                <circle cx='16' cy='16' r='16' fill='#1c98f7' />
                <path
                  fill='#fff'
                  d='M16.28 23.325a11.45 11.45 0 0 0 2.084-.34a5.696 5.696 0 0 0 2.602.17a.627.627 0 0 1 .104-.008c.31 0 .717.18 1.31.56v-.625a.61.61 0 0 1 .311-.531c.258-.146.498-.314.717-.499c.864-.732 1.352-1.708 1.352-2.742c0-.347-.055-.684-.159-1.006c.261-.487.472-.999.627-1.53A4.59 4.59 0 0 1 26 19.31c0 1.405-.654 2.715-1.785 3.673a5.843 5.843 0 0 1-.595.442v1.461c0 .503-.58.792-.989.493a15.032 15.032 0 0 0-1.2-.81a2.986 2.986 0 0 0-.368-.187c-.34.051-.688.077-1.039.077c-1.412 0-2.716-.423-3.743-1.134zm-7.466-2.922C7.03 18.89 6 16.829 6 14.62c0-4.513 4.258-8.12 9.457-8.12c5.2 0 9.458 3.607 9.458 8.12c0 4.514-4.259 8.121-9.458 8.121c-.584 0-1.162-.045-1.728-.135c-.245.058-1.224.64-2.635 1.67c-.511.374-1.236.013-1.236-.616v-2.492a9.27 9.27 0 0 1-1.044-.765m4.949.666c.043 0 .087.003.13.01c.51.086 1.034.13 1.564.13c4.392 0 7.907-2.978 7.907-6.589c0-3.61-3.515-6.588-7.907-6.588c-4.39 0-7.907 2.978-7.907 6.588c0 1.746.821 3.39 2.273 4.62c.365.308.766.588 1.196.832c.241.136.39.39.39.664v1.437c1.116-.749 1.85-1.104 2.354-1.104m-2.337-4.916c-.685 0-1.24-.55-1.24-1.226c0-.677.555-1.226 1.24-1.226c.685 0 1.24.549 1.24 1.226c0 .677-.555 1.226-1.24 1.226m4.031 0c-.685 0-1.24-.55-1.24-1.226c0-.677.555-1.226 1.24-1.226c.685 0 1.24.549 1.24 1.226c0 .677-.555 1.226-1.24 1.226m4.031 0c-.685 0-1.24-.55-1.24-1.226c0-.677.555-1.226 1.24-1.226c.685 0 1.24.549 1.24 1.226c0 .677-.555 1.226-1.24 1.226'
                />
              </g>
            </svg>
          </span>
        </button>
      </motion.div>
    )
  }

  return (
    <>
      {active && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0%' }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className={
              width < 425
                ? 'fixed h-full bottom-0 w-full bg-white z-50 flex flex-col item-center'
                : 'fixed right-5 bottom-10 bg-white z-50 flex flex-col item-center shadow-xl w-[380px] h-[550px]'
            }
          >
            <button
              onClick={() => setActive(false)}
              className='absolute right-[5px] top-[5px] bg-slate-100 rounded-full'
            >
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 20 20'
                  className='text-slate-700'
                >
                  <path
                    fill='currentColor'
                    d='M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07m1.41-1.41A8 8 0 1 0 15.66 4.34A8 8 0 0 0 4.34 15.66m9.9-8.49L11.41 10l2.83 2.83l-1.41 1.41L10 11.41l-2.83 2.83l-1.41-1.41L8.59 10L5.76 7.17l1.41-1.41L10 8.59l2.83-2.83z'
                  />
                </svg>
              </span>
            </button>
            <div className='w-full rounded-t-xl p-4 bg-indigo-500 flex flex-col items-center'>
              <div className='flex gap-2 items-center'>
                <StatusChat />
                <p className='text-white text-xl'>Чат поддержки</p>
              </div>
              <div className='flex gap-2 items-center'>
                <Online />
                <span className='text-white font-normal'> Мы на связи</span>
              </div>
            </div>
            {user?.user.name == '' && <AuthChat />}
            <Body chat={chat} />
            {user.user.name != '' && (
              <Input socket={socket} setChat={setChat} user={user} />
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </>
  )
}
