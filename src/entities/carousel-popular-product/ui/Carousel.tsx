'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { useWindowSize } from '@/src/shared/hook/useWindowSize'
import { CarouselService } from '../api/get-product'
import useSWR from 'swr'
import { PopularProduct } from './CartProduct'
import { IProduct } from '@/src/shared/reused-type/product'

export default function CarouselProduct() {
  const { data: product } = useSWR<IProduct[]>('productCarousel', () =>
    CarouselService.popularProduct(),
  )

  const [slide, setSlide] = useState<number>(5)
  const { width } = useWindowSize()

  useEffect(() => {
    if (width <= 768) {
      setSlide(2)
    } else if (width <= 1024) {
      setSlide(3)
    } else if (width >= 1024) {
      setSlide(5)
    }
  }, [width])

  return (
    <div className=' relative shadow-lg'>
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
        {product?.map((cart) => {
          return (
            <SwiperSlide key={cart.id}>
              <PopularProduct cart={cart} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
