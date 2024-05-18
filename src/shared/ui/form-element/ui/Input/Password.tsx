
import { Person } from '@/src/shared/reused-type/form-type/form-person'
import { UseFormRegister, FieldErrors } from 'react-hook-form'
import ErrorInput from './ErrorInput'

type PasswordType = {
  register: UseFormRegister<Person>
  errors: FieldErrors<Person>
}

export default function Password({ register, errors }: PasswordType) {
  const objError = {
    name: 'password',
    type: errors.password?.type.toString(),
  }

  return (
    <div>
      <input
        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
        placeholder='Пароль'
        {...register('password', {
          required: true,
        })}
      />

      <ErrorInput errors={objError} />
    </div>
  )
}
