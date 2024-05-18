
import MobileMenu from './MobileMenu'
import { useWindowSize } from '@/src/shared/hook/useWindowSize'
import { ButtonMain } from '@/src/shared/ui/button/button-header'
import { Search } from '@/src/features/search-product'
import { mobileLeftBar } from '@/src/entities/menu-list/model/store/store'
import { useAtom } from 'jotai'
import { Logo } from '@/src/shared/ui/logo'
import { ShopCardHeader } from '@/src/entities/shop-cart'
import { requestConsultationBtn } from '@/src/shared/store/jotai/modal'
import { useRouter } from 'next/navigation'
import { Contact } from '@/src/shared/ui/contact-info'

export default function MobileHeader() {
  const router = useRouter()
  const [active, setActive] = useAtom(mobileLeftBar)
  const [requestConsultation, setRequestConsultation] = useAtom(
    requestConsultationBtn,
  )
  const signIn = () => router.push('/signin')
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

          <Search />
        </div>

        <Logo white={80} />

        <div className='flex items-center gap-2'>
          <ButtonMain
            text={'Заказать звонок'}
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='text-slate-600'
              >
                <path
                  fill='currentColor'
                  d='M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3'
                />
              </svg>
            }
            action={consulBtn}
            style='rounded px-2 md:px-6 py-2 border bg-slate-100 flex gap-2 items-center'
            styleIcon=''
            textStyle='uppercase text-black'
          />
          {/* <ButtonMain
            text={'Вход'}
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='text-slate-600'
              >
                <path
                  fill='currentColor'
                  d='M12 12q-1.275 0-2.137-.862T9 9q0-1.25.863-2.125T12 6q1.25 0 2.125.875T15 9q0 1.275-.875 2.138T12 12m-6 5v-.9q0-.525.263-.987t.712-.738q1.15-.675 2.413-1.025T12 13q1.35 0 2.613.35t2.412 1.025q.45.275.713.738T18 16.1v.9q0 .425-.288.713T17 18H7q-.425 0-.712-.288T6 17m-2 5q-.825 0-1.412-.587T2 20v-3q0-.425.288-.712T3 16q.425 0 .713.288T4 17v3h3q.425 0 .713.288T8 21q0 .425-.288.713T7 22zM2 7V4q0-.825.588-1.412T4 2h3q.425 0 .713.288T8 3q0 .425-.288.713T7 4H4v3q0 .425-.288.713T3 8q-.425 0-.712-.288T2 7m18 15h-3q-.425 0-.712-.288T16 21q0-.425.288-.712T17 20h3v-3q0-.425.288-.712T21 16q.425 0 .713.288T22 17v3q0 .825-.587 1.413T20 22m0-15V4h-3q-.425 0-.712-.288T16 3q0-.425.288-.712T17 2h3q.825 0 1.413.588T22 4v3q0 .425-.288.713T21 8q-.425 0-.712-.288T20 7'
                />
              </svg>
            }
            action={signIn}
            style='rounded px-2 md:px-6 py-2 border bg-slate-100 flex gap-2 items-center'
            styleIcon=''
            textStyle='uppercase text-black'
          /> */}

          <Contact />
        </div>
      </div>
      <MobileMenu />
      
        <ShopCardHeader />
      
    </div>
  )
}
