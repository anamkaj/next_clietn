import React from 'react'
import { BannerMain } from '@/src/entities/banner-main-page'
import { BrandBanner } from '@/src/entities/banner-slider'
import { ReviewsCarousel } from '@/src/entities/reviews-slider'
import { Services } from '@/src/entities/serviсe-main-page'
import { Advantages } from '@/src/widgets/advantages'
import { CarouselPopularProduct } from '@/src/widgets/carousel-product'
import { ExtraBenefit } from '@/src/widgets/extra-benefit'

export default async function MainPage() {
  return (
    <div className='container mx-auto p-2'>
      <div className=' w-full flex mt-4 lg:mt-0 justify-center '>
        <BannerMain />
      </div>
      <>
        <ExtraBenefit />
      </>
      <>
        <div className=' mt-12 mb-6'>
          <p className=' font-bold text-xl lg:text-2xl text-slate-600 uppercase'>
            Товары месяца
          </p>
        </div>
        <div className='mt-5'>
          <CarouselPopularProduct />
        </div>
      </>
      <>
        <div className=' mt-10 mb-2 '>
          <h2 className='font-bold text-xl lg:text-2xl text-slate-600 uppercase'>
            Топовые бренды{' '}
          </h2>
        </div>
        <BrandBanner />
      </>
      <>
        <Services />
      </>

      <>
        <div className=' mt-10 mb-2 '>
          <h2 className='font-bold text-xl lg:text-2xl text-slate-600 uppercase'>
            Отзывы
          </h2>
        </div>
        <ReviewsCarousel />
      </>
      <>
        <Advantages />
      </>
    </div>
  )
}
