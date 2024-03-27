'use client'
import React from 'react'
import { ProviderStor } from '@/src/app/provider'
import { FormInstallSpecialist } from '@/src/entities/form-specialis'
import { PopupAddToStore } from '@/src/features/popup-fom-add-product'
import { IProduct } from '@/src/shared/reused-type/product'
import {
  addStorButton,
  fastOrderButton,
  callSpecialistButton,
} from '@/src/shared/store/jotai/modal'
import { FastOrderCart } from '@/src/widgets/fast-order-popup'
import { useAtom } from 'jotai'
import { Model } from '@/src/shared/ui/model-window'


export default function ModelLayout({ product }: { product: IProduct }) {
  //Состаяние модальных окон
  const [addStoreForm, setAddStoreForm] = useAtom(addStorButton)
  const [fastOrderModel, setFastOrderModel] = useAtom(fastOrderButton)
  const [specialist, setSpecialist] = useAtom(callSpecialistButton)
  return (
    <>
      <Model
        setActive={setAddStoreForm}
        active={addStoreForm}
        titleModel={'Товар добавлен в корзину'}
      >
        <ProviderStor>
          <PopupAddToStore setActive={setAddStoreForm} product={product} />
        </ProviderStor>
      </Model>

      {/*Модальное окно/ Быстрый заказ */}

      <Model
        setActive={setFastOrderModel}
        active={fastOrderModel}
        titleModel={'Заявка на покупку товара'}
      >
        <FastOrderCart
          setFastOrderModel={setFastOrderModel}
          product={product}
        />
      </Model>

      {/*Заявкаа на выезд специалиста  */}

      <Model
        setActive={setSpecialist}
        active={specialist}
        titleModel={'Спецификация обьета'}
      >
        <FormInstallSpecialist />
      </Model>
    </>
  )
}
