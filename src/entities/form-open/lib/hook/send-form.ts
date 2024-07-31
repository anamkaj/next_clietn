import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { postFormFeedback } from '../../api/form-open'
import { OpenFormProp } from '@/src/shared/reused-type/form-type/form-person'


type Response1 = {
  data: any
  status: number
  state: string
}
type Response2 = { state: string; data?: undefined; status?: undefined }

const form = {
  phone: NaN,
  name: '',
}

export const useOpenForm = () => {
  const [response, setResponse] = useState<Response1 | Response2>()

  const sendForm = async () => {
    const resp = await postFormFeedback(form)
    setResponse(resp)
  }

  const onSubmitOpenForm: SubmitHandler<OpenFormProp> = (
    data: OpenFormProp,
  ) => {
    form.phone = Number(data.phone)
    form.name = data.name

    sendForm()
  }

  return { onSubmitOpenForm, response }
}
