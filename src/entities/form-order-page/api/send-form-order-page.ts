import { IFormReq } from '@/src/shared/reused-type/form-type/form-short'
import axios from 'axios'

export const postFormCartPage = async (params: IFormReq) => {
  try {
    const { data, status } = await axios.post(
      `https://tmk-v.ru:8080/api/form/order/cart`,
      {
        data: params,
      },
    )

    return { data, status, state: 'Корзина успешно отправленна' }
  } catch (error) {
    return { state: 'Ошибка отправки корзины ' }
  }
}
