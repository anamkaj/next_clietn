'use client'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { AgreementForm } from '@/src/shared/ui/privacy-policy'
import { Person } from '@/src/shared/reused-type/form-type/form-person'
import { useAtom } from 'jotai'
import { requestConsultationBtn } from '@/src/shared/store/jotai/modal'
import { useGoalYandexMetrika } from '@/src/shared/hook/goal.metrika'
import { EmailInput, NameInput, PhoneInput } from '@/src/shared/ui/form-element'
import { useFormMounting } from '../lib/hook/form-mounting'

// Форма запроса выезда специалиста , кнопка в хедере "Заказать обратный звонок"

export const FormMounting = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Person>()
  const [_, setRequestConsultation] = useAtom(requestConsultationBtn)

  const { onSubmitFormContact, response } = useFormMounting()
  const { sendGoal } = useGoalYandexMetrika({ isValid, reset })

  useEffect(() => {
    if (response?.status == 200) {
      setTimeout(() => {
        return setRequestConsultation(false)
      }, 2000)
    }
  }, [response])

  return (
    <div className=' mt-4 w-[350px] lg:w-[400px]'>
      <div>
        <form onSubmit={handleSubmit(onSubmitFormContact)}>
          <div className=' flex flex-col gap-2'>
            <NameInput register={register} errors={errors} />
            <PhoneInput register={register} errors={errors} />
            <EmailInput register={register} errors={errors} />
            <button
              onClick={() => sendGoal('Event_22')}
              className=' w-full border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline'
            >
              Отправить
            </button>
          </div>
        </form>
      </div>

      {response && (
        <p className=' font-light text-sm mt-3 text-center'>{response.state}</p>
      )}

      <div>
        <AgreementForm />
      </div>
    </div>
  )
}
