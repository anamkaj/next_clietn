import { atom } from 'jotai'

export type TypeFilter = {
  id: string
  param: string
}

// Сохранение параметров фильтров
export const valueHeaderFilter = atom<TypeFilter[]>([])
