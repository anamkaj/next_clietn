import { DataCart } from './form-person'

export type FormReq = {
  phone: number
  name: string
  email?: string
  objectCity?: boolean
  internetTrue?: boolean
}

export interface IFormReq extends FormReq {
  surname?: string
  data: DataCart[]
}
