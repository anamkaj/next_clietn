// Эффект загрузки при выборе параметров фильтра


import { useAtom } from 'jotai'
import { loader } from '../store/jotai/loader'

export const useLoading = () => {
  const [blockUi, setBlockUi] = useAtom(loader)

  const loading = () => {
    setBlockUi(true)
    const timer = setTimeout(() => {
      setBlockUi(false)
    }, 2500)
    const clear = () => clearTimeout(timer)
  }
  return { blockUi, loading }
}
