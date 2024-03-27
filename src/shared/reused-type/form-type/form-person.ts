export type Person = {
  name: string
  phone: number
  email?: string
  surname?: string
  objectCity?: boolean
  internetTrue?: boolean
}

export type OpenFormProp = {
  name: string
  phone: number
}

export interface IFormCartPage extends Person {
  price: number
  data: DataCart[]
}

export interface IFormOneProduct extends Person {
  article: number
  title: string
  price: number
  id: number
}

export type DataCart = {
  title: string
  price: number
  count: number
  sale: number
}
