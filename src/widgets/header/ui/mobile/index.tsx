import React from 'react'
import { BsPerson } from 'react-icons/bs'
import { FiPhoneCall } from 'react-icons/fi'
import { TfiAlignJustify } from 'react-icons/tfi'
import MobileMenu from './MobileMenu'
import { ProviderStor } from '@/src/app/provider'
import { useWindowSize } from '@/src/shared/hook/useWindowSize'
import { ButtonMain } from '@/src/shared/ui/button/button-header'
import { Search } from '@/src/features/search-product'
import { mobileLeftBar } from '@/src/entities/menu-list/model/store/store'
import { useAtom } from 'jotai'
import { Logo } from '@/src/shared/ui/logo'
import { ShopCardHeader } from '@/src/entities/shop-cart'
import { requestConsultationBtn } from '@/src/shared/store/jotai/modal'

export default function MobileHeader() {
  const [active, setActive] = useAtom(mobileLeftBar)
  const [requestConsultation, setRequestConsultation] = useAtom(
    requestConsultationBtn,
  )
  const linkCatalogBtn = () => setActive(true)
  const consulBtn = () => setRequestConsultation(true)

  const { width } = useWindowSize()
  const widthWindows = width > 768
  return (
    <div className='p-2 bg-white mt-2' hidden={widthWindows}>
      <div className=' flex gap-2 justify-between items-center'>
        <div className=' flex items-center gap-2'>
          <ButtonMain
            text={'Каталог'}
            icon={<TfiAlignJustify className=' w-5 h-5' />}
            action={linkCatalogBtn}
            style='flex px-2 md:px-6 py-2 gap-2 items-center rounded bg-indigo-500 hover:bg-indigo-600'
            styleIcon='text-white'
            textStyle='uppercase text-white'
          />

          <Search />
        </div>

        <Logo />

        <div className='flex items-center gap-2'>
          <ButtonMain
            text={'Заказать звонок'}
            icon={<FiPhoneCall className=' w-5 h-5 text-slate-600' />}
            action={consulBtn}
            style='rounded px-2 md:px-6 py-2 border bg-slate-100 flex gap-2 items-center'
            styleIcon=''
            textStyle='uppercase text-black'
          />
          <ButtonMain
            text={'Вход'}
            icon={<BsPerson className=' w-5 h-5 text-slate-600' />}
            style='rounded px-2 md:px-6 py-2 border bg-slate-100 flex gap-2 items-center'
            styleIcon=''
            textStyle='uppercase text-black'
          />
        </div>
      </div>
      <MobileMenu />
      <ProviderStor>
        <ShopCardHeader />
      </ProviderStor>
    </div>
  )
}
