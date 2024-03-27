import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { postFormFeedback } from '../../api/form-open'
import { OpenFormProp } from '@/src/shared/reused-type/form-type/form-person'

export const useOpenForm = () => {
  const [response, setResponse] = useState<
    | {
        data: any
        status: number
        state: string
      }
    | { state: string; data?: undefined; status?: undefined }
  >()

  const sendForm = (form: OpenFormProp) => {
    const status = postFormFeedback(form).then((data) => setResponse(data))
  }

  const onSubmitOpenForm: SubmitHandler<OpenFormProp> = (
    data: OpenFormProp,
  ) => {
    if (data) {
      const form = {
        phone: Number(data.phone),
        name: data.name,
      }
      sendForm(form)
    }
  }

  return { onSubmitOpenForm, response }
}
