'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Logo({ white }: { white: number }) {
  return (
    <div className=' flex gap-4 items-center justify-center'>
      <Link href={'/'}>
        <Image
          src={require('../../../../shared/images/component_img/Header/logo.png')}
          alt='ТМА Вектор'
          className={` w-[${white}px]`}
        />
      </Link>
    </div>
  )
}
