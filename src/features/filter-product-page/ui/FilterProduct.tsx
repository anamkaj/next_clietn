'use client'
import React, { useState } from 'react'
import MainComponentFilter from './MainComponentFilter'
import MobileFilter from './Mobile/MobileFilter'
import { useWindowSize } from '../../../shared/hook/useWindowSize'
import { IFilterProductProp } from '../model/type/type'

export default function FilterProduct({
  filterPrice,
  paramFilterProduct,
  categoryId,
}: IFilterProductProp) {
  const { sumProduct } = paramFilterProduct
  const [activeFilter, setActiveFilter] = useState(true)

  const { width } = useWindowSize()
  const resize = width > 1023 ? true : false

  return (
    <div>
      {resize ? (
        <div>
          <MainComponentFilter
            paramFilterProduct={paramFilterProduct}
            filterPrice={filterPrice}
            categoryId={categoryId}
          />
        </div>
      ) : (
        <div>
          <MobileFilter
            countProductMobile={sumProduct}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            paramFilterProduct={paramFilterProduct}
            filterPrice={filterPrice}
            categoryId={categoryId}
          />
        </div>
      )}
    </div>
  )
}
