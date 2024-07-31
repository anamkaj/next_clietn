'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { BannerSlider } from './BannerImages'
import { imgPopularBrand } from '../model/data/images-name'
import { useSlider } from '@/src/shared/hook/useSlider'

const countSlide = {
  w768: 2,
  w1024: 3,
  wm1024: 4,
}

export default function BrandBanner() {
  const { slide } = useSlider(3, countSlide)

  return (
    <div>
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
        {imgPopularBrand.map((x, index) => {
          return (
            <SwiperSlide key={index} style={{ alignSelf: 'center' }}>
              <BannerSlider data={x} key={index} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
