'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { FaSquareWhatsapp } from 'react-icons/fa6'
import { PiChatCenteredText } from 'react-icons/pi'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { FcAssistant } from 'react-icons/fc'
import Link from 'next/link'
import { IoMdCall } from 'react-icons/io'
import { IoMailSharp } from 'react-icons/io5'
import { IoClose } from 'react-icons/io5'

export default function ContactWidget() {
  const [activeHi, setActiveHi] = useState<boolean>(false)
  const [onText, setOnText] = useState<boolean>(false)

  const variants = {
    init: { opacity: 0, y: '100%' },
    visible: { opacity: 1, y: '-6%' },
    hidden: { opacity: 0, y: '100%' },
  }

  useEffect(() => {
    const t3 = setTimeout(() => {
      setOnText(true)
      const t1 = setTimeout(() => {
        setOnText(false)
        clearTimeout(t1)
      }, 10000)
    }, 4000)

    return () => {
      clearTimeout(t3)
    }
  }, [])

  return (
    <div className=' flex flex-col items-center '>
      <div className=' fixed right-20 bottom-[16vh] z-40'>
        <AnimatePresence>
          {onText && !activeHi && (
            <motion.div
              initial={{ opacity: 0, x: '-100%' }}
              animate={{ opacity: 1, x: '22%' }}
              exit={{ opacity: 0, x: '-100%' }}
              transition={{ duration: 0.8 }}
              className=' mb-4 flex items-center gap-3 bg-slate-100 p-2 rounded-lg shadow-lg '
            >
              <h4 className=' text-lg text-slate-900 '>Мы на связи !!!</h4>
              <span>
                <FcAssistant className=' w-5 h-5' />
              </span>
              <span>
                <IoClose
                  className=' w-5 h-5'
                  onClick={() => setOnText(false)}
                />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className=' fixed right-10 bottom-[8vh] flex items-center flex-col z-40 '>
        <div className=' flex-col items-center flex'>
          <AnimatePresence>
            {activeHi && (
              <div className=' flex flex-col item-center gap-2 '>
                <motion.ul
                  variants={variants}
                  initial={'init'}
                  animate={'visible'}
                  exit={'hidden'}
                  transition={{ duration: 0.4 }}
                >
                  <motion.li
                    initial={{ opacity: 0, y: '-450%', x: '-200%' }}
                    animate={{ opacity: 1, x: '0%', y: '0%' }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link href='mailto:tmk-v.ru@yandex.ru'>
                      <IoMailSharp className='text-amber-400 h-[50px] w-[50px]' />
                    </Link>
                  </motion.li>
                  {/* <motion.li
                    initial={{ opacity: 0, y: '-150%' }}
                    animate={{ opacity: 1, y: '0%' }}
                    exit={{ opacity: 0, x: '-150%' }}
                    transition={{ duration: 0.9 }}
                  >
                    <Link href='tel:+79998887766'>
                      <IoMdCall className=' text-blue-700 h-[50px] w-[50px]' />
                    </Link>
                  </motion.li> */}
                  <motion.li
                    initial={{ opacity: 0, x: '-450%' }}
                    animate={{ opacity: 1, x: '0%' }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link href='https://wa.me/79002689360'>
                      <FaSquareWhatsapp className=' text-green-500 h-[50px] w-[50px]' />
                    </Link>
                  </motion.li>
                </motion.ul>
              </div>
            )}
          </AnimatePresence>

          <button
            className=' shadow-2xl p-2 bg-slate-100 rounded-full'
            onClick={() => setActiveHi((prevActive) => !prevActive)}
          >
            {activeHi ? (
              <IoCloseCircleOutline className=' text-green-500 h-[50px] w-[50px]' />
            ) : (
              <PiChatCenteredText className=' text-green-500 h-[50px] w-[50px] ' />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
