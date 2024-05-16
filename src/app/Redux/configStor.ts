import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cart } from './Product/cartSliсe'
import { userChatReducer, userData } from './Chat/chatSlice'

const rootReducer = combineReducers({
  cart: cart,
  chat: userChatReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
