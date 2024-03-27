import React from 'react'
import ReactMarkdown from 'react-markdown'
import { PolicyType } from '../model/types/type.policy'

export default async function PrivacyPolicy({ data }: { data: PolicyType[] }) {
  return (
    <div className=' container mx-auto'>
      <h2 className=' font-thin mt-6'>
        {data?.map((x) => {
          return (
            <div>
              <ReactMarkdown className=' font-semibold text-4xl'>
                {x.title}
              </ReactMarkdown>
              <div className=' mt-8 mb-10'>
                <ReactMarkdown className='reactMarkDown'>
                  {x.post}
                </ReactMarkdown>
              </div>
            </div>
          )
        })}
      </h2>
    </div>
  )
}
