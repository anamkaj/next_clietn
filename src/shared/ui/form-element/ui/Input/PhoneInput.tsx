'use client'
import React from 'react'
import { Person } from '@/src/shared/reused-type/form-type/form-person'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import ErrorInput from './ErrorInput'


type InputName = {
  register: UseFormRegister<Person>
  errors: FieldErrors<Person>
}

const mobilePhoneRegexp = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/

export const PhoneInput = ({ register, errors }: InputName) => {
  const objError = {
    name: 'phone',
    type: errors.phone?.type.toString(),
  }

  return (
    <div>
      <input
        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
        {...register('phone', {
          required: true,
          pattern: mobilePhoneRegexp,
        })}
        placeholder='Телефон (обязательное поле)'
        type='number'
      />

      <ErrorInput errors={objError} />
    </div>
  )
}
