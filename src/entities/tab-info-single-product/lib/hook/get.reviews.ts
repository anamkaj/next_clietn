import { ReviewsType } from '@/src/shared/reused-type/reviews'

import useSWR from 'swr'
import { ReviewsServices } from '../../api/reviews'

// получение отзывов о товаре

export function useGetReviews(id: number) {
  const {
    data: reviews,
    error,
    isLoading,
  } = useSWR<ReviewsType[]>('getReviews', () => ReviewsServices.getReviews(id))

  return { reviews, error, isLoading }
}
