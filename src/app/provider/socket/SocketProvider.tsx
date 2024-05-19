'use client'

import {
  MessagesArrayType,
  ResponseMessagesSocket,
} from '@/src/widgets/chat/model/type/messages-type'
import { NewUser } from '@/src/widgets/chat/model/type/new-user'
import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Socket, io } from 'socket.io-client'
import { RootState } from '../../Redux/configStor'
import { time } from '@/src/widgets/chat/lib/utils/time-function'

type ProviderType = {
  socket: Socket | undefined
  chat: MessagesArrayType[]
  setChat: React.Dispatch<React.SetStateAction<MessagesArrayType[]>>
  user: NewUser
}

const emptyData: NewUser = {
  chat: {
    chatId: 0,
    createdAt: '',
  },
  user: {
    id: 0,
    name: '',
    createdAt: '',
    role: '',
    chatsChatId: 0,
    auth: false,
  },
}

const Hello = () => {
  return (
    <>
      <span>Привет 👋</span> <br />
      <p>Нужна помощь? Мы всегда онлайн, можете задать вопрос.</p>
    </>
  )
}

export const WebSocketProvider = createContext<ProviderType>({
  socket: undefined,
  chat: [],
  setChat: () => {},
  user: emptyData,
})

export default function SocketContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const user = useSelector((state: RootState) => state.chat)
  const [socket, setSocket] = useState<Socket | undefined>(undefined)
  const [chat, setChat] = useState<MessagesArrayType[]>([])
  const addNewMessagesChat = (event: ResponseMessagesSocket) => {
    if (user) {
      setChat((chat) => {
        return [
          ...chat,
          {
            name: 'ADMIN',
            id: event.userId,
            messages: event.messages,
            room: event.chatsChatId,
            role: event.role,
            time: time(),
          },
        ]
      })
    }
  }

  useEffect(() => {
    if (user.user.id !== 0) {
      const socket = io('https://tmk-v.ru:5011', {})
      setSocket(socket)

      socket.on('newMessages', (event: ResponseMessagesSocket) => {
        addNewMessagesChat(event)
      })

      socket.on('connect', () => {
        console.log('')
      })
      socket.on('disconnect', () => {
        console.log('')
      })
    }
  }, [user])

  useEffect(() => {
    window.onbeforeunload = () => {
      const socketId = socket?.id
      socket?.emit('ping', { messages: `${socketId}`, status: false })
      socket?.disconnect()
    }

    return () => {}
  }, [socket])

  useEffect(() => {
    if (user.messages !== undefined && user.messages.length !== 0) {
      const messages: MessagesArrayType[] = user.messages.map((msg) => ({
        name: user.user.name,
        id: user.user.id,
        messages: msg.messages,
        room: msg.chatsChatId,
        role: msg.role,
        time: time(),
      }))

      setChat(messages)
    }
    if (user.user.id !== 0 && user.messages?.length == 0) {
      setChat((chat) => [
        ...chat,
        {
          name: user.user.name,
          id: user.user.id,
          messages: <Hello />,
          room: user.chat.chatId,
          role: 'ADMIN',
          time: time(),
        },
      ])
    }
  }, [user])

  return (
    <WebSocketProvider.Provider value={{ socket, chat, setChat, user }}>
      {children}
    </WebSocketProvider.Provider>
  )
}
