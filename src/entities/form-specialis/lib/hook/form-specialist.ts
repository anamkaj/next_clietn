// Отправка заявки из "Быстрый Заказ"

import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { postFormFeedback } from '../../api/send-form-specialist'
import { FormType } from '../../model/type'

type Response1 = {
  data: any
  status: number
  state: string
}
type Response2 = { state: string; data?: undefined; status?: undefined }

export const useFormCallSpecialist = () => {
  const [response, setResponse] = useState<Response1 | Response2>()

  const sendForm = async (form: FormType) => {
    const resp = await postFormFeedback(form)
    setResponse(resp)
  }

  const onSubmitFormContact: SubmitHandler<FormType> = (data: FormType) => {
    const form = {
      phone: Number(data.phone),
      name: data.name,
      email: data.email,
      objectCity: data.objectCity,
      internetTrue: data.internetTrue,
    }
    sendForm(form)
  }

  return { onSubmitFormContact, response }
}
