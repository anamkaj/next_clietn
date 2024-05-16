import React, { useEffect, useState } from 'react'
import { Socket } from 'socket.io-client'
import { MessagesArrayType } from '../model/type/messages-type'
import { NewUser } from '../model/type/new-user'
import { time } from '../lib/utils/time-function'
import { ImageButton } from '@/src/shared/ui/chat-ui/ConsultantUi'

export default function Input({
  socket,
  setChat,
  user,
}: {
  user: NewUser
  socket: Socket | undefined
  setChat: React.Dispatch<React.SetStateAction<MessagesArrayType[]>>
}) {
  const [input, setInput] = useState<string>('')

  const sendMessages = () => {
    const newMessages = {
      name: user.user.name,
      id: user.user.id,
      messages: input,
      room: user.user.chatsChatId,
      role: user.user.role,
      time: time(),
    }
    socket?.emit('connectChat', newMessages)
    setChat((chat) => [...chat, newMessages])

    setInput('')
  }

  const messages = (text: string) => {
    if (user.user.name !== '') {
      setInput(text)
    }
  }

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      const checkKey = event.code === 'Enter' || event.code === 'NumpadEnter'
      if (checkKey && input !== '') {
        sendMessages()
      }
    }

    document.addEventListener('keydown', keyDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [input])

  return (
    <div className='flex gap-2 items-center w-full p-2 absolute bottom-0 '>
      <input
        onChange={(text) => messages(text.target.value)}
        placeholder='Введите текст'
        type='text'
        value={input}
        className='grow p-2 border rounded-md focus:outline-none  '
      />
      <button
        disabled={input == ''}
        type='submit'
        onClick={() => sendMessages()}
        className=' p-2 bg-indigo-500 uppercase text-white rounded-md '
      >
        <ImageButton />
      </button>
    </div>
  )
}
