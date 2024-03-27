'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { useWindowSize } from '@/src/shared/hook/useWindowSize'
import { BannerSlider } from './BannerImages'

export default function BrandBanner() {
  const [slide, setSlide] = useState<number>(3)
  const { width } = useWindowSize()

  const imgPopularBrand = [
    '7381.600.jpg',
    'Dahuog.png',
    'polivision.png',
    'trasit.jpg',
    'slinex.png',
    'Seagate.png',
  ]

  useEffect(() => {
    if (width <= 768) {
      setSlide(2)
    } else if (width <= 1024) {
      setSlide(3)
    } else if (width >= 1024) {
      setSlide(4)
    }
  }, [width])
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
