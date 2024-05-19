import { NewUser } from '@/src/widgets/chat/model/type/new-user'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getNewUserData } from './api/new-user-api'

const initialState: NewUser = {
  chat: {
    chatId: 0,
    createdAt: '',
  },
  messages: [],
  user: {
    id: 0,
    name: '',
    createdAt: '',
    role: '',
    chatsChatId: 0,
    auth: false,
  },
}

export const userData = createSlice({
  name: 'userData',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(
      getNewUserData.fulfilled,
      (state, action: PayloadAction<NewUser>) => {
        return {
          ...state,
          chat: action.payload.chat,
          user: action.payload.user,
          messages: action.payload.messages || [],
        }
      },
    )
  },
})

export const userChatReducer = userData.reducer
export const {} = userData.actions
