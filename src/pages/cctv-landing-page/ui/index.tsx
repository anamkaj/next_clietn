import React from 'react'
import { ReviewsCarousel } from '@/src/entities/reviews-slider'
import { CarouselPopularProduct } from '@/src/widgets/carousel-product'
import AdvantagesCctv from './AdvantagesCctv'
import BannerCctv from './BgBannerCctv'
import MainDisplay from './MainDisplay'
import OpenForm from './OpenForm'
import ProductCartCctv from './ProductCartCctv'
import Remote from './Remote'
import Work from './Work'
import { YandexMap } from '@/src/widgets/yandex-map'


export default function LandingPageCctv() {
    return (
      <div className='container mx-auto mb-5 p-2'>
        <>
          <div className=' relative'>
            <BannerCctv />
          </div>
          <div className=' relative h-[600px] md:h-[400px] xl:md:h-[500px]'>
            <MainDisplay />
          </div>
          <>
            <ProductCartCctv />
          </>
          <>
            <OpenForm />
          </>
          <>
            <Work />
          </>
          <>
            <Remote />
          </>
          <>
            <div className='mt-5'>
              <CarouselPopularProduct text='Товары месяца' />
            </div>
          </>
          <>
            <AdvantagesCctv />
          </>
  
          <ReviewsCarousel />
  
          <YandexMap />
        </>
      </div>
    )
  }
