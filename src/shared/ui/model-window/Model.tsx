'use client'
import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

type ChildrenProps = {
  children: React.ReactNode
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  active: boolean
  titleModel: string
}

export const Model = ({
  children,
  setActive,
  active,
  titleModel,
}: ChildrenProps) => {
  return (
    <div hidden={!active}>
      <div
        onClick={() => setActive(false)}
        className='w-full h-full fixed top-0 left-0 z-30 '
        style={{ background: '#00000078' }}
      >
        <div className='flex justify-center items-center h-screen'>
          <div
            onClick={(e) => e.stopPropagation()}
            className='bg-white p-4 rounded-xl'
          >
            <div className='flex justify-between items-center border-b border-gray-200 py-3'>
              <div>
                <p className='text-xl font-bold text-gray-800'>{titleModel}</p>
              </div>

              <AiFillCloseCircle
                className='h-6 w-6 cursor-pointer'
                onClick={() => setActive(() => false)}
              />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
