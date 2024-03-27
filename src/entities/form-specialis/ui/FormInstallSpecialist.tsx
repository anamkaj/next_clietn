'use client'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { AgreementForm } from '@/src/shared/ui/privacy-policy'
import { Person } from '@/src/shared/reused-type/form-type/form-person'
import { useAtom } from 'jotai'
import { useGoalYandexMetrika } from '@/src/shared/hook/goal.metrika'
import { requestInstallationBtn } from '@/src/shared/store/jotai/modal'
import {
  CheckBox,
  EmailInput,
  NameInput,
  PhoneInput,
} from '@/src/shared/ui/form-element'
import { useFormCallSpecialist } from '../lib/hook/form-specialist'

// Форма запроса выезда специалиста , кнопка в хедере "Монтаж и Установка"

export const FormInstallSpecialist = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Person>()

  const [_, setInstallation] = useAtom(requestInstallationBtn)

  const { onSubmitFormContact, response } = useFormCallSpecialist()
  // Отправка достижения цели в Яндекс метрику
  const { sendGoal } = useGoalYandexMetrika({ isValid, reset })

  useEffect(() => {
    if (response?.status == 200) {
      setTimeout(() => {
        reset()
        return setInstallation(false)
      }, 2000)
    }
  }, [response])

  return (
    <div className=' mt-4 w-[350px] lg:w-[400px]'>
      <>
        <form onSubmit={handleSubmit(onSubmitFormContact)}>
          <div className=' flex flex-col gap-2'>
            <CheckBox register={register} errors={errors} />
            <NameInput register={register} errors={errors} />
            <PhoneInput register={register} errors={errors} />
            <EmailInput register={register} errors={errors} />
            <button
              onClick={() => sendGoal('Event_23')}
              className=' w-full border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline'
            >
              Отправить
            </button>
          </div>
        </form>
      </>

      {response && (
        <p className=' font-light text-sm mt-3 text-center'>{response.state}</p>
      )}

      <div>
        <AgreementForm />
      </div>
    </div>
  )
}
