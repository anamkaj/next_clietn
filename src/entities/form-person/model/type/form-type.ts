import { FormReq } from '@/src/shared/reused-type/form-type/form-short'

export interface IFormOneProductPost extends FormReq {
  article: number
  title: string
  price: number
  id: number
}
