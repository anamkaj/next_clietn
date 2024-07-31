'use client'
import React, { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import TitleProductCarousel from './TitleProductCarousel'
import ReviewsStar from './ReviewsStar'
import 'swiper/css'
import 'swiper/css/autoplay'
import { useWindowSize } from '@/src/shared/hook/useWindowSize'
import { ReviewsType } from '../../model/type/reviews-type'
import { useSlider } from '@/src/shared/hook/useSlider'

const ReviewsSlider = ({ data }: { data: ReviewsType }) => {
  return (
    <div className=' border p-4 shadow-lg rounded-lg mb-10 m-3 h-[260px] w-full'>
      <div className=' font-extralight text-xs text-slate-400'>
        {data.createdAt.toString().slice(0, 10)}
      </div>
      <TitleProductCarousel key={data.id} id={data.productId} />
      <div className=' mb-4'>
        <ReviewsStar rating={data.rating} like={data.like} />
      </div>
      <p className=' font-thin'>
        {data.text.length > 100 ? data.text.slice(0, 100) + '...' : data.text}
      </p>
    </div>
  )
}

const countSlide = {
  w768: 1,
  w1024: 3,
  wm1024: 4,
}

export default function Reviews({ data }: { data: ReviewsType[] }) {
  const { slide } = useSlider(3, countSlide)

  return (
    <div className=' relative'>
      <Swiper
        spaceBetween={10}
        slidesPerView={slide}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1000}
        modules={[Autoplay]}
      >
        {data.map((x) => {
          return (
            <SwiperSlide key={x.id}>
              <ReviewsSlider data={x} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
