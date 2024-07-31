import axios from 'axios'
import { SendOneProductForm } from '../model/type/form-type'

export const postSingleProduct = async (params: SendOneProductForm) => {
  try {
    const { data, status } = await axios.post(
      `https://tmk-v.ru:8080/api/form/order/oneProduct`,
      {
        data: params,
      },
    )

    return { data, status, state: 'Форма успешно отправленна' }
  } catch (error) {
    return { state: 'Ошибка отправки формы ' }
  }
}
