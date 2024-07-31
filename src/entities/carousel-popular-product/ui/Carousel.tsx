'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { CarouselService } from '../api/get-product'
import useSWR from 'swr'
import { PopularProduct } from './CartProduct'
import { IProduct } from '@/src/shared/reused-type/product'
import { useSlider } from '@/src/shared/hook/useSlider'

const countSlide = {
  w768: 2,
  w1024: 3,
  wm1024: 5,
}

export default function CarouselProduct() {
  const { data: product } = useSWR<IProduct[]>('productCarousel', () =>
    CarouselService.popularProduct(),
  )

  const { slide } = useSlider(5, countSlide)

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
