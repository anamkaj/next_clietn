import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { ReviewsServices } from '../../api/reviews'

// Отправка на сервер комментария и сброс формы

export const usePostReviewsRating = (id: number) => {
  const [like, setLike] = useState(false)
  const [dislike, setDislike] = useState(false)

  const { mutate: incLike } = useSWR('incLike', () =>
    ReviewsServices.incLike({ commentId: id }),
  )
  const { mutate: decLike } = useSWR('decLike', () =>
    ReviewsServices.incDislike({ commentId: id }),
  )

  useEffect(() => {
    if (like === true) {
      incLike()
    }
  }, [like])

  useEffect(() => {
    if (dislike === true) {
      decLike()
    }
  }, [dislike])

  return { incLike, setLike, like, dislike, setDislike }
}
