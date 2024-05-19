import React, { useEffect, useRef } from 'react'
import { MessagesArrayType } from '../model/type/messages-type'
import { Logo } from '@/src/shared/ui/logo'
import { ImagesChat } from '@/src/shared/ui/chat-ui/ConsultantUi'

export default function Body({ chat }: { chat: MessagesArrayType[] }) {
  const messagesEndRef = useRef<null | HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chat])

  return (
    <div className='w-full bg-white p-4 overflow-y-scroll mb-[60px]'>
      <div className='flex  flex-col item-center'>
        {chat.map((data, index) => {
          return (
            <div
              ref={messagesEndRef}
              key={index}
              className={
                data.role == 'USER'
                  ? 'flex gap-2 items-center p-2 justify-end'
                  : 'flex gap-2 items-center p-2 justify-start'
              }
            >
              {data.role !== 'USER' ? <Logo white={50} /> : <ImagesChat />}

              <span
                className={
                  data.role !== 'USER'
                    ? 'break-all bg-slate-200  p-4 text-sm rounded-lg'
                    : 'break-all bg-blue-600 text-sm p-4 text-white font-normal rounded-lg'
                }
              >
                {data.messages}
              </span>
              <span className='text-slate-400'>{data.time}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
