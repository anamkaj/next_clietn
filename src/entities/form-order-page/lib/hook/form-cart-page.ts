import { SubmitHandler } from 'react-hook-form'
import { useAppSelector } from '@/src/app/Redux/storeHook'

import { useState } from 'react'
import { postFormCartPage } from '../../api/send-form-order-page'
import { IFormCartPage, Person } from '@/src/shared/reused-type/form-type/form-person'

export const useFormCartPage = () => {
  const storCart = useAppSelector((state) => state.cart.cart)
  const totalPriceCart = useAppSelector((state) => state.cart.total)
  const [response, setResponse] = useState<
    | {
        data: any
        status: number
        state: string
      }
    | { state: string; data?: undefined; status?: undefined }
  >()

  const cart = storCart.map((x) => {
    return {
      title: x.title,
      count: x.totalCount,
      price: x.price,
      sale: x.sale,
    }
  })

  // const mutation = useMutation({
  //   mutationFn: (data: IFormCartPage) => FormServices.postFormCartPage(data),
  //   mutationKey: ['pageCart'],
  // })

  const sendForm = (form: IFormCartPage) => {
    const status = postFormCartPage(form).then((data) => setResponse(data))
  }

  const onSubmitOrderCart: SubmitHandler<Person> = (data: Person) => {
    if (data && storCart) {
      const form = {
        phone: Number(data.phone),
        name: data.name,
        surname: data.surname,
        email: data.email,
        price: totalPriceCart,
        data: cart,
      }
      sendForm(form)
    }
  }
  return { onSubmitOrderCart, response }
}
