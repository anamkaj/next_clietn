import { useAppSelector } from '@/src/app/Redux/storeHook'
import { useDispatch } from 'react-redux'
import { getSearchResult } from '@/src/app/Redux/Search/api/get-search-result'

export const useSearch = (input: string) => {
  const dispatch = useDispatch()
  const data = useAppSelector((state) => state.search)

  const getResult = () => {
    dispatch(getSearchResult(input) as any)
  }

  const { category = [], product = [] } = data || {}

  return { getResult, category, product }
}
