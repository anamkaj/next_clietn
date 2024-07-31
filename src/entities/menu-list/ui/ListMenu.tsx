'use client'
import Link from 'next/link'
import { useGetCategoryMobile } from '../lib/hook/get.category.mobile'
import { BsCaretRight } from 'react-icons/bs'
import { useAtom } from 'jotai'
import { AnimatePresence, motion } from 'framer-motion'
import { variants1 } from '../../../shared/animation/category'
import { mobileLeftBar } from '../model/store/store'

export default function ListMenu() {
  const { category, isLoading } = useGetCategoryMobile()
  const [_, setActive] = useAtom(mobileLeftBar)
  return (
    <div className=' absolute z-30 w-full'>
      <div className=' bg-slate-50 opacity-100  p-2 lg:p-4 rounded-b-xl lg:hover:shadow-2xl'>
        <ul className=' flex flex-col items-start mb-2 '>
          <AnimatePresence>
            {category?.map((x) => {
              return (
                <motion.li
                  initial='hidden'
                  animate='visible'
                  variants={variants1}
                  exit={'hidden'}
                  custom={x.id}
                  key={x.id}
                  className=' font-light text-lg md:text-xs lg:text-sm hover:font-normal hover:bg-white cursor-pointer w-full p-1 flex space-x-2 items-center  '
                >
                  <BsCaretRight className=' w-2 h-2' />
                  <Link
                    href={{
                      pathname: `/category/${x.slug}/${x.id}`,
                      query: { filter: 'popularity_desc' },
                    }}
                    onClick={() => setActive(false)}
                  >
                    {x.name}
                  </Link>
                </motion.li>
              )
            })}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  )
}
