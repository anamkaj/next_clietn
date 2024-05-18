'use client'
import { AnimatePresence, motion } from 'framer-motion'

import { BsArrowLeftCircle, BsList } from 'react-icons/bs'
import { useAtom } from 'jotai'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { mobileLeftBar } from '@/src/entities/menu-list/model/store/store'
import { item } from '@/src/shared/animation/category'
import { ListMenu } from '@/src/entities/menu-list'
import { MobileShopCart } from '@/src/entities/shop-cart'

export default function MobileMenu() {
  const [active, setActive] = useAtom(mobileLeftBar)

  return (
    <>
      <div className=' fixed z-40 right-5 top-7 ' hidden={!active}>
        <AiOutlineCloseCircle
          className='h-6 w-6 bg-white rounded-full'
          onClick={() => setActive(false)}
        />
      </div>
      <div
        onClick={() => setActive(false)}
        className={
          active
            ? ' bg-black absolute top-0 left-0 w-[100%] h-[1000vh] z-10 opacity-50'
            : 'hidden'
        }
      ></div>
      <AnimatePresence>
        {active && (
          <div className='z-40 fixed top-0 left-0 w-[80vw] h-[100%] bg-slate-50 '>
            <motion.div
              initial='hidden'
              animate='visible'
              variants={item}
              exit={'hidden'}
            >
              <div
                className=' p-2 flex gap-2 items-center mt-4 '
                onClick={() => setActive(false)}
              >
                <>
                  <BsArrowLeftCircle className=' w-5 h-5 ' />
                </>
                <h3>Назад</h3>
              </div>

              <div className=' bg-slate-50 flex justify-between items-center mb-2 '>
                <div className=' mt-4 p-2 flex items-center justify-between'>
                  <div className=' flex items-center gap-2'>
                    <BsList className=' w-5 h-5' />
                    <h2 className=' font-semibold text-lg'>Каталог</h2>
                  </div>
                </div>

                <MobileShopCart setSetActive={setActive} />
              </div>

              <ListMenu />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
