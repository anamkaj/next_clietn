import React from 'react'
import { ProviderStor } from '@/src/app/provider'
import { FiPhoneCall } from 'react-icons/fi'
import { TfiAlignJustify } from 'react-icons/tfi'
import { ButtonMain } from '@/src/shared/ui/button/button-header'
import { Search } from '@/src/features/search-product'
import { ShopCardHeader } from '@/src/entities/shop-cart'
import { useWindowSize } from '@/src/shared/hook/useWindowSize'
import { useRouter } from 'next/navigation'
import { useAtom } from 'jotai'
import { Logo } from '@/src/shared/ui/logo'
import { Contact } from '@/src/shared/ui/contact-info'
import { requestConsultationBtn } from '@/src/shared/store/jotai/modal'
import { AuthBtn } from '@/src/shared/ui/auth-btn'

export default function DesktopHeader() {
  const [requestConsultation, setRequestConsultation] = useAtom(
    requestConsultationBtn,
  )
  const router = useRouter()
  const linkCatalogBtn = () => router.push('/category')
  const consulBtn = () => setRequestConsultation(true)

  const { width } = useWindowSize()
  const widthWindows = width > 768
  return (
    <div className='p-2 bg-white ' hidden={!widthWindows}>
      <div className=' flex gap-2 justify-between items-center flex-wrap '>
        <Logo />

        <ButtonMain
          text={'Каталог'}
          icon={<TfiAlignJustify className=' w-5 h-5' />}
          action={linkCatalogBtn}
          style='flex px-2 md:px-6 py-2 gap-2 items-center rounded bg-indigo-500 hover:bg-indigo-600'
          styleIcon='text-white'
          textStyle='uppercase text-white'
        />
        <ButtonMain
          text={'Заказать звонок'}
          icon={<FiPhoneCall className=' w-5 h-5 text-slate-600' />}
          action={consulBtn}
          style='rounded px-2 md:px-6 py-2 border bg-slate-100 flex gap-2 items-center'
          styleIcon=''
          textStyle='uppercase text-black'
        />

        <Search />

        <Contact />
        <ProviderStor>
          <ShopCardHeader />
        </ProviderStor>
        <AuthBtn />
      </div>
    </div>
  )
}
