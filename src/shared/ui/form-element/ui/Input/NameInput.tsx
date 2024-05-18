'use client'
import { Person } from '@/src/shared/reused-type/form-type/form-person'

import { FieldErrors, UseFormRegister } from 'react-hook-form'
import ErrorInput from './ErrorInput'

type InputName = {
  register: UseFormRegister<Person>
  errors: FieldErrors<Person>
}

export const nameReg = /^[А-ЯЁ\s]+$/i

export const NameInput = ({ register, errors }: InputName) => {
  const objError = {
    name: 'name',
    type: errors.name?.type.toString(),
  }

  return (
    <div>
      <input
        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
        placeholder='Имя'
        {...register('name', {
          required: true,
          pattern: nameReg,
          maxLength: 25,
          minLength: 3,
        })}
      />
      <ErrorInput errors={objError} />
    </div>
  )
}
