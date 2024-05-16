export interface NewUser {
  chat: Chat
  user: User
  messages?: Messages[]
}

export interface Chat {
  chatId: number
  createdAt: string
}

export interface User {
  id: number
  name: string
  createdAt: string
  role: string
  chatsChatId: number
  auth: boolean
}

export interface Messages {
  messagesId: number
  userId: number
  messages: string
  sendAt: Date
  role: string
  chatsChatId: number
  idTgMessages: number
}
