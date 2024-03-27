import React from 'react'
import { ReviewsCarousel } from '@/src/entities/reviews-slider'
import { dataLending, dataWorks } from '../lib/helper/data'
import MainDisplay from './MainDisplay'
import OpenForm from './OpenForm'
import OurWorks from './OurWorks'
import TypesServices from './TypesServices'
import Maintenance from './Maintenance'
import { YandexMap } from '@/src/widgets/yandex-map'

export default async function LendingFireAlarm() {
  return (
    <div className=' mb-5 p-2'>
      <MainDisplay />
      <TypesServices data={dataLending} />
      <OurWorks data={dataWorks} />
      <OpenForm />
      <Maintenance />
      <YandexMap />
      <ReviewsCarousel text='Отзывы на наше оборудование' />
    </div>
  )
}
