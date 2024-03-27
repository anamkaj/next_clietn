'use client'
import React from 'react'
import CharacteristicsBtn from './CharacteristicsBtn'
import DescriptionBtn from './DescriptionBtn'
import ReviewsBtn from './ReviewsBtn'
import { stateTab } from '@/src/shared/store/jotai/tab-single-product'
import { useAtom } from 'jotai'

export default function TabInformation() {
  const [activeTab, setActiveTab] = useAtom(stateTab)
  return (
    <div className='  mt-2 items-center hidden md:flex'>
      <CharacteristicsBtn setActiveTab={setActiveTab} />
      {/* <ServicesBtn setActiveTab={setActiveTab} /> */}
      <DescriptionBtn setActiveTab={setActiveTab} />
      <ReviewsBtn setActiveTab={setActiveTab} />
    </div>
  )
}
