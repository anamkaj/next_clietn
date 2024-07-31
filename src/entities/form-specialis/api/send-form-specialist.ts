import axios from 'axios'
import { FormType } from '../model/type'

export const postFormFeedback = async (params: FormType) => {
  try {
    const { data, status } = await axios.post(
      `https://tmk-v.ru:8080/api/form/order`,
      {
        data: params,
      },
    )

    return { data, status, state: 'Форма успешно отправленна' }
  } catch (error) {
    return { state: 'Ошибка отправки формы ' }
  }
}
