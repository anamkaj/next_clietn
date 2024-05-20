import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getSearchResult } from './api/get-search-result'
import { DataType } from '@/src/features/search-product/model/type/search-type'

const initialState: DataType = {
  product: [],
  category: [],
}

export const searchResult = createSlice({
  name: 'userData',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(
      getSearchResult.fulfilled,
      (state: DataType, action: PayloadAction<DataType>) => {
        return {
          ...state,
          category: action.payload.category,
          product: action.payload.product,
        }
      },
    )
  },
})

export const searchReducer = searchResult.reducer
export const {} = searchResult.actions
