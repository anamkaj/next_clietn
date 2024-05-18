'use client'

import { useForm } from 'react-hook-form'
import { useOpenForm } from '../lib/hook/send-form'
import { useGoalYandexMetrika } from '@/src/shared/hook/goal.metrika'
import { PhoneInput } from '@/src/shared/ui/form-element/ui/Input/PhoneInput'
import { NameInput } from '@/src/shared/ui/form-element/ui/Input/NameInput'
import { OpenFormProp } from '@/src/shared/reused-type/form-type/form-person'

type OpenFormContactType = {
  style?: string
}

export default function OpenFormContact({ style }: OpenFormContactType) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<OpenFormProp>()
  const { onSubmitOpenForm, response } = useOpenForm()
  const { sendGoal } = useGoalYandexMetrika({ isValid, reset })

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitOpenForm)} className={style}>
        <NameInput register={register} errors={errors} />
        <PhoneInput register={register} errors={errors} />

        <>
          <button
            onClick={() => sendGoal('Event_25')}
            className='w-full text-white bg-indigo-500 font-medium rounded-lg  px-10 py-2.5 text-center mr-2 mb-2 text-sm  cursor-pointer uppercase border-2 border-indigo-600'
          >
            Отправить
          </button>
        </>
      </form>
    </>
  )
}
