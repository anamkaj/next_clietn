import { createAsyncThunk } from '@reduxjs/toolkit'
import { postNewUserChat } from '@/src/widgets/chat/api/api-chat/new-user'

type User = {
  name: string
  tel: string
}

export const getNewUserData = createAsyncThunk(
  'newUser',
  async (newUser: User) => {
    const data = await postNewUserChat(newUser)
    return data
  },
)
