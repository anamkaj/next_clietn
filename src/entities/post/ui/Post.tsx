import React from 'react'
import ReactMarkdown from 'react-markdown'
import { PostType } from '../model/types/type.post'

export default function PostComponent({ data }: { data: PostType[] }) {
  return (
    <div className=' mx-auto container mt-4'>
      {data?.map((x) => (
        <div key={x.id} className=' mt-8 flex flex-col items-center'>
          <div className=' mt-4 mb-4 w-[30%] '>
            <img
              className=' rounded-lg shadow-sm'
              src={`https://tmk-v.ru:8080/img/post/${x.img}`}
              alt=''
            />
          </div>
          <div className=' mt-10'>
            <ReactMarkdown className=' font-semibold text-4xl'>
              {x.title}
            </ReactMarkdown>
          </div>
          <div className=' mt-8 mb-10'>
            <ReactMarkdown className='reactMarkDown'>{x.post}</ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  )
}
