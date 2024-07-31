import { Person } from '@/src/shared/reused-type/form-type/form-person'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import ErrorInput from './ErrorInput'

type InputName = {
  register: UseFormRegister<any>
  errors: FieldErrors<any>
  required?: boolean
}

export const EmailInput = ({ register, errors, required }: InputName) => {
  const objError = {
    name: 'email',
    type: errors.email?.type?.toString(),
  }

  return (
    <div>
      <input
        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
        placeholder='Почта'
        {...register('email', {
          required: required || false,
        })}
      />
      <ErrorInput errors={objError} />
    </div>
  )
}
