'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type WorksType = {
  data: {
    id: number
    images: string
    alt: string
    title: string
  }[]
}

export default function OurWorks({ data }: WorksType) {
  const [isUp, setIsDown] = useState(() =>
    data.map((x) => ({ id: x.id, state: false })),
  )

  const handleOnFocus = (event: number) => {
    setIsDown((array) =>
      array.map((x) => ({
        id: x.id,
        state: x.id == event ? !x.state : x.state,
      })),
    )
  }

  const animateText = {
    focus: {
      opacity: 1,
      y: '-50%',
    },
    focusOff: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  }

  return (
    <div className='container mx-auto'>
      <h2 className='text-black text-2xl xl:text-4xl text-center font-semibold uppercase tracking-tight mt-10'>
        НА ОБЪЕКТАХ ЛЮБОЙ СЛОЖНОСТИ
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  items-center mt-10 gap-2 p-2'>
        {data.map((x, index) => {
          return (
            <motion.div
              key={x.id}
              className='p-2 relative flex items-center justify-center'
              initial={{ opacity: 0, x: '-100%' }}
              animate={{ opacity: 1, x: '0' }}
              transition={{ duration: 0.8 }}
              onMouseEnter={() => handleOnFocus(x.id)}
              onMouseLeave={() => handleOnFocus(x.id)}
            >
              <img src={x.images} alt={x.alt} />

              <div className='absolute'>
                <motion.div
                  className='bg-amber-500 p-2 rounded-md uppercase font-semibold'
                  variants={animateText}
                  animate={isUp[index].state ? 'focus' : 'focusOff'}
                >
                  {x.title}
                </motion.div>

                <AnimatePresence>
                  {isUp[index].state && (
                    <motion.div
                      initial={{ opacity: 0, y: '300%' }}
                      animate={{ opacity: 1, y: '-10' }}
                      exit={{ opacity: 0, y: '-300%' }}
                      transition={{ duration: 0.8 }}
                    >
                      <hr className='w-full h-1 bg-white' />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
