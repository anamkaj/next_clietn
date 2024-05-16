export type MessagesArrayType = {
  name: string
  time: string
  id: number
  messages: string | React.JSX.Element
  room: number
  role: string
}

export interface ResponseMessagesSocket {
  chat: Chat
  messagesId: number
  userId: number
  messages: string
  sendAt: Date
  role: string
  chatsChatId: number
  idTgMessages: number
}

export interface Chat {
  chatId: number
  createdAt: Date
}
