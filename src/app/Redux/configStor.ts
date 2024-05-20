import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cart } from './Product/cartSliсe'
import { userChatReducer, userData } from './Chat/chatSlice'
import { searchReducer, searchResult } from './Search/SearchSlice'

const rootReducer = combineReducers({
  cart: cart,
  chat: userChatReducer,
  search: searchReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
