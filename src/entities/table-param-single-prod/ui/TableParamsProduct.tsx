'use client'
import { motion } from 'framer-motion'

import {
  variants,
  variantsTableParams,
} from '../../../shared/animation/category'
import { IProduct } from '@/src/shared/reused-type/product'

export default function TableParamsProduct({ product }: { product: IProduct }) {
  return (
    <table className='min-w-full text-left text-sm font-light mt-4 '>
      <motion.tbody initial='hidden' animate='visible' variants={variants}>
        {product.FullParam.map((item, index) => {
          return (
            <motion.tr
              custom={index}
              variants={variantsTableParams}
              key={index}
              className=' hover:bg-gray-100 '
            >
              <th className=' text-sm font-light  border-b border-neutral-300 items-center whitespace-nowrap mobile:whitespace-normal'>
                {item.key}
              </th>
              <td className=' text-sm font-light border-b border-neutral-300 mobile:whitespace-normal '>
                {item.value}
              </td>
            </motion.tr>
          )
        })}
      </motion.tbody>
    </table>
  )
}
