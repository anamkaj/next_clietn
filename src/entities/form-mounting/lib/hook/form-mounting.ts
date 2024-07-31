import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { postFormFeedback } from '../../api/form-mounting'
import { FormCall } from '../../model/type'

type Response1 = {
  data: any
  status: number
  state: string
}
type Response2 = { state: string; data?: undefined; status?: undefined }

const form = {
  phone: NaN,
  name: '',
  email: '',
}

export const useFormMounting = () => {
  const [response, setResponse] = useState<Response1 | Response2>()

  const sendForm = async () => {
    const resp = await postFormFeedback(form)
    setResponse(resp)
  }

  const onSubmitFormContact: SubmitHandler<FormCall> = (data: FormCall) => {
    form.phone = Number(data.phone)
    form.email = data.email
    form.name = data.name
    console.log(form)

    sendForm()
  }

  return {
    response,
    onSubmitFormContact,
  }
}
