// Отправка заявки из "Быстрый Заказ"

import { Person } from '@/src/shared/reused-type/form-type/form-person'
import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { postFormFeedback } from '../../api/send-form-specialist'

export const useFormCallSpecialist = () => {
  const [response, setResponse] = useState<
    | {
        data: any
        status: number
        state: string
      }
    | { state: string; data?: undefined; status?: undefined }
  >()

  const sendForm = (form: Person) => {
    const status = postFormFeedback(form).then((data) => setResponse(data))
  }

  const onSubmitFormContact: SubmitHandler<Person> = (data: Person) => {
    if (data) {
      const form = {
        phone: Number(data.phone),
        name: data.name,
        email: data.email,
        objectCity: data.objectCity,
        internetTrue: data.internetTrue,
      }
      sendForm(form)
    }
  }

  return { onSubmitFormContact, response }
}
