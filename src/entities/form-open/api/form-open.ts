import { FormReq } from '@/src/shared/reused-type/form-type/form-short'
import axios from 'axios'

export const postFormFeedback = async (params: FormReq) => {
  try {
    const { data, status } = await axios.post(
      `https://tmk-v.ru:8080/api/form/order`,
      {
        data: params,
      },
    )
    console.log(status)
    return { data, status, state: 'Форма успешно отправленна' }
  } catch (error) {
    return { state: 'Ошибка отправки формы ' }
  }
}
