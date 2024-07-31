// Отправка заявки из "Быстрый Заказ"

import { SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import { IProduct } from '@/src/shared/reused-type/product'
import { postSingleProduct } from '../../api/post-one-product'
import { SendOneProductForm } from '../../model/type/form-type'

type PropFormHook = {
  product?: IProduct
  price?: number
}

type Response1 = {
  data: any
  status: number
  state: string
}
type Response2 = { state: string; data?: undefined; status?: undefined }

export const useFormRequest = ({ product, price }: PropFormHook) => {
  const [response, setResponse] = useState<Response1 | Response2>()

  const sendOneProduct = async (oneProduct: SendOneProductForm) => {
    const resp = await postSingleProduct(oneProduct)
    setResponse(resp)
  }

  //Отправка быстрой покупки одного товара
  const onSubmitFastOrder: SubmitHandler<SendOneProductForm> = (
    data: SendOneProductForm,
  ) => {
    if (product) {
      const oneProduct = {
        article: product.article,
        title: product.title,
        price: price || NaN,
        phone: Number(data.phone),
        name: data.name,
        email: data.email || '',
        id: product.id,
      }
      sendOneProduct(oneProduct)
    }
  }

  return { onSubmitFastOrder, response }
}
