import React from 'react'
import Reviews from './slider'
import { SliderService } from '../api/get-reviews'
import { ReviewsType } from '../model/type/reviews-type'

export default async function ReviewsCarousel({ text }: { text?: string }) {
  const getReviews: ReviewsType[] = await SliderService.getReviewsCarousel()

  return (
    <div className='container mx-auto'>
      <div className=' mt-12 mb-6'>
        <p className=' font-bold text-xl lg:text-2xl text-slate-600 uppercase'>
          {text}
        </p>
      </div>
      <Reviews data={getReviews} />
    </div>
  )
}
