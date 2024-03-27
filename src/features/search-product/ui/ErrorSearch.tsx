import React from 'react'
import { FcFinePrint } from 'react-icons/fc'

export default function ErrorSearch({ text }: { text: string }) {
  return (
    <div className='absolute z-20 flex items-center gap-2 bg-white p-2 rounded-b-xl mt-1 w-full'>
      <div>
        <FcFinePrint className=' h-10 w-10' />
      </div>
      <div>
        <h4 className='font-thin text-sm text-red-500 mb-4'>{text}</h4>
      </div>
    </div>
  )
}
