'use client'
import React from 'react'
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form'
import { EmailInput } from './Input/EmailInput'
import { NameInput } from './Input/NameInput'
import { PhoneInput } from './Input/PhoneInput'
import { CheckBox } from './CheckBox/CheckBox'
import { Person } from '@/src/shared/reused-type/form-type/form-person'
import { useRouter } from 'next/navigation'

type PropAllInput = {
  handleSubmit: UseFormHandleSubmit<Person>
  onSubmit: SubmitHandler<Person>
  register: UseFormRegister<Person>
  errors: FieldErrors<Person>
  status?: boolean
  specialist?: boolean
}

export const AllInput = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  status,
  specialist,
}: PropAllInput) => {
  const router = useRouter()

  const handelGoToThank = () => {
    router.push('/thanks')
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=' flex flex-col gap-2'>
          {specialist && <CheckBox register={register} errors={errors} />}
          <NameInput register={register} errors={errors} />
          <PhoneInput register={register} errors={errors} />
          {!status && <EmailInput register={register} errors={errors} />}
          <button
            onClick={() => handelGoToThank()}
            className=' w-full border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline'
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  )
}
