import { SearchServices } from '@/src/features/search-product/api/get-search'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getSearchResult = createAsyncThunk(
  'searchData',
  async (input: string) => {
    try {
      const data = await SearchServices.dataSearch(input)
      return data
    } catch (error) {
      console.log('Error: ', error)
    }
  },
)
