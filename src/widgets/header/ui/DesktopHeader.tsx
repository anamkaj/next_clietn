'use client'
import React from 'react'
import { ProviderStor } from '@/src/app/provider'
import { ButtonMain } from '@/src/shared/ui/button/button-header'
import { Search } from '@/src/features/search-product'
import { ShopCardHeader } from '@/src/entities/shop-cart'
import { useWindowSize } from '@/src/shared/hook/useWindowSize'
import { useRouter } from 'next/navigation'
import { useAtom } from 'jotai'
import { Logo } from '@/src/shared/ui/logo'
import { Contact } from '@/src/shared/ui/contact-info'
import { requestConsultationBtn } from '@/src/shared/store/jotai/modal'

import { signOut, useSession } from 'next-auth/react'

export default function DesktopHeader() {
  const session = useSession()
  const router = useRouter()
  const [requestConsultation, setRequestConsultation] = useAtom(
    requestConsultationBtn,
  )
  const signIn = () => router.push('/signin')
  const exit = () => signOut()

  const linkCatalogBtn = () => router.push('/category')
  const consulBtn = () => setRequestConsultation(true)

  const { width } = useWindowSize()
  const widthWindows = width > 768
  return (
    <div className='p-2 bg-white ' hidden={!widthWindows}>
      <div className=' flex gap-2 justify-between items-center flex-wrap '>
        <Logo white={80} />

        <ButtonMain
          text={'Каталог'}
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z'
              />
            </svg>
          }
          action={linkCatalogBtn}
          style='flex px-2 md:px-6 py-2 gap-2 items-center rounded bg-indigo-500 hover:bg-indigo-600'
          styleIcon='text-white'
          textStyle='uppercase text-white'
        />
        <ButtonMain
          text={'Заказать звонок'}
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3'
              />
            </svg>
          }
          action={consulBtn}
          style='rounded px-2 md:px-6 py-2 border bg-slate-100 flex gap-2 items-center'
          styleIcon='text-slate-700'
          textStyle='uppercase text-black'
        />

        <Search />

        <Contact />
        <ProviderStor>
          <ShopCardHeader />
        </ProviderStor>

        {session.status !== 'authenticated' ? (
          <ButtonMain
            text={''}
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='36'
                height='36'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12m-8 6v-.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.587 1.413T18 20H6q-.825 0-1.412-.587T4 18m2 0h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 15q-1.4 0-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2zm6-8q.825 0 1.413-.587T14 8q0-.825-.587-1.412T12 6q-.825 0-1.412.588T10 8q0 .825.588 1.413T12 10m0 8'
                />
              </svg>
            }
            action={signIn}
            style='rounded md:px-1 py-1 border bg-slate-100'
            styleIcon='text-slate-600'
            textStyle=''
          />
        ) : (
          <ButtonMain
            text={''}
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='36'
                height='36'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='M5 21q-.825 0-1.412-.587T3 19v-4h2v4h14V5H5v4H3V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm5.5-4l-1.4-1.45L11.65 13H3v-2h8.65L9.1 8.45L10.5 7l5 5z'
                />
              </svg>
            }
            action={exit}
            style='rounded md:px-1 py-1 border bg-slate-100'
            styleIcon='text-slate-600'
            textStyle=''
          />
        )}
      </div>
    </div>
  )
}
