import {
  Like,
  ReviewsType,
  SendReviews,
} from '@/src/shared/reused-type/reviews'
import axios from 'axios'

export const ReviewsServices = {
  // Запрос всех групп отзывов о товаре для Tab

  async getReviews(id: number) {
    const { data } = await axios.get<ReviewsType[]>(
      `https://tmk-v.ru:8080/api/reviews`,
      {
        params: {
          id: id,
        },
      },
    )

    return data
  },

  async sendReviews(params: SendReviews) {
    try {
      const { data, status } = await axios.post(
        `https://tmk-v.ru:8080/api/reviews`,
        {
          data: params,
        },
      )
      return { data, status }
    } catch (error) {
      throw new Error('Сообщение об ошибке')
    }
  },

  async incLike(params: Like) {
    const { data, status } = await axios.post(
      `https://tmk-v.ru:8080/api/likeInc`,
      {
        data: params,
      },
    )

    return { data, status }
  },

  async incDislike(params: Like) {
    const { data, status } = await axios.post(
      `https://tmk-v.ru:8080/api/likeDec`,
      {
        data: params,
      },
    )

    return { data, status }
  },
}
