// Отправка заявки из "Быстрый Заказ"

import { SubmitHandler } from 'react-hook-form'
import { Person } from '@/src/shared/reused-type/form-type/form-person'
import { useState } from 'react'
import { IProduct } from '@/src/shared/reused-type/product'
import { postSingleProduct } from '../../api/post-one-product'
import { IFormOneProductPost } from '../../model/type/form-type'

type PropFormHook = {
  product?: IProduct
  price?: number
}

export const useFormRequest = ({ product, price }: PropFormHook) => {
  const [response, setResponse] = useState<
    | {
        data: any
        status: number
        state: string
      }
    | { state: string; data?: undefined; status?: undefined }
  >()

  const sendOneProduct = (oneProduct: IFormOneProductPost) => {
    const status = postSingleProduct(oneProduct).then((data) =>
      setResponse(data),
    )
  }

  //Отправка быстрой покупки одного товара
  const onSubmitFastOrder: SubmitHandler<Person> = (data: Person) => {
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
