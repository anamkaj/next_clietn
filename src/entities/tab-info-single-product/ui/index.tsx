'use client'
import React from 'react'
import { tab } from '../lib/tab-name'
import TabReviewsPostForm from './TabReviewsPostForm'
import TabReviews from './TabReviews'
import { DescriptionMobile } from './mobile/DescriptionMobile'
import { MobileTableParams } from './mobile/MobileTableParams'
import { IProduct } from '@/src/shared/reused-type/product'
import { TableParamsProduct } from '@/src/entities/table-param-single-prod'
import { useAtom } from 'jotai'
import { stateTab } from '@/src/shared/store/jotai/tab-single-product'

export default function TabSingleCart({ product }: { product: IProduct }) {
  const [activeTab, setActiveTab] = useAtom(stateTab)

  // стили активный таб
  const styleActive =
    'uppercase text-gray-600 text-xs md:text-base py-4 px-6 hover:text-blue-500 focus:outline-none' +
    ' text-blue-500 border-b-2 font-medium border-blue-500 whitespace-nowrap'
  const styleDisable =
    'uppercase text-gray-600 text-xs md:text-base py-4 px-6 hover:text-blue-500 focus:outline-none whitespace-nowrap'

  const description = product.descriptionOne.split('. ')

  return (
    <div>
      <nav className='flex item-center'>
        {tab.map((e) => {
          return (
            <button
              className={activeTab === e.id ? styleActive : styleDisable}
              key={e.id}
              onClick={() => {
                setActiveTab(e.id)
              }}
            >
              {e.title}
            </button>
          )
        })}
      </nav>
      <div id={'tab'} className=' mt-4'>
        {activeTab == 1 && (
          <>
            <div className=' md:hidden'>
              <DescriptionMobile description={description} />
            </div>
            <div className=' hidden md:block'>
              {description.map((x, index) => {
                return (
                  <div key={index}>
                    <span className=' font-thin text-lg tracking-normal antialiased '>
                      {x.trim() + '.'}
                    </span>
                    <br />
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>
      <div id={'tab'} className=' mt-4'>
        {activeTab == 2 && (
          <>
            <div className=' md:hidden'>
              <MobileTableParams product={product} />
            </div>
            <div className=' hidden md:block'>
              <TableParamsProduct product={product} />
            </div>
          </>
        )}
      </div>
      <div className=' mt-4'>
        {activeTab == 3 && (
          <div>
            {/* <TabReviewsPostForm product={product} /> */}
            <TabReviews id={product.id} />
          </div>
        )}
      </div>
    </div>
  )
}
