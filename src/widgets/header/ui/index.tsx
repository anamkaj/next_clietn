'use client'
import React from 'react'
import { useAtom } from 'jotai'
import { Metrika } from '@/src/app/provider'
import {
  requestConsultationBtn,
  requestInstallationBtn,
} from '@/src/shared/store/jotai/modal'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './mobile'
import { Widgets } from '@/src/features/widgets-contact'
import { FormInstallSpecialist } from '@/src/entities/form-specialis'
import { FormMounting } from '@/src/entities/form-mounting'
import { Model } from '@/src/shared/ui/model-window'

export default function Header() {
  // Монтаж и Установка - кнопка

  const [installation, setInstallation] = useAtom(requestInstallationBtn)
  // Заказать обратный звонок - кнопка
  const [requestConsultation, setRequestConsultation] = useAtom(
    requestConsultationBtn,
  )

  return (
    <Metrika>
      <Widgets>
        <div className='container mx-auto'>
          <DesktopHeader />
          <MobileHeader />
        </div>

        <div className=' flex items-center justify-center'>
          <div hidden={!installation}>
            <Model
              active={installation}
              setActive={setInstallation}
              titleModel={'Монтаж и Установка'}
            >
              <FormInstallSpecialist />
            </Model>
          </div>
          <div hidden={!requestConsultation}>
            <Model
              active={requestConsultation}
              setActive={setRequestConsultation}
              titleModel={'Заказать обратный звонок'}
            >
              <FormMounting />
            </Model>
          </div>
        </div>
      </Widgets>
    </Metrika>
  )
}
