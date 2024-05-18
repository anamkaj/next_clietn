
import Image from 'next/image'
import { imgBanner } from '../api/get.image'

export default function BannerMain() {
  return (
    <>
      {/* <div className=' hidden xl:w-[310px] xl:block'></div> */}
      <div className=' rounded-lg '>
        <Image
          height={768}
          width={1366}
          src={imgBanner}
          className='h-full w-full '
          alt='Монтаж видеонаблюдения в Краснодаре'
        />
      </div>
    </>
  )
}
