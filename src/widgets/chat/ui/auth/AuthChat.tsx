import { getNewUserData } from '@/src/app/Redux/Chat/api/new-user-api'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { z } from 'zod'
import { ErrorObject, ObjError } from '../../model/type/error-type'
import { PatternFormat } from 'react-number-format'

const userSchema = z.object({
  name: z.string().min(3),
  tel: z
    .string()
    .min(10)
    .regex(/^(7|8)/),
})
type ValidationUser = z.infer<typeof userSchema>

export default function AuthChat() {
  const dispatch = useDispatch()
  const [data, setData] = useState<ValidationUser>({
    name: '',
    tel: '',
  })
  const [error, setError] = useState<ObjError>({})
  const result = userSchema.safeParse(data)
  const newUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!result.success) {
      const objError: ObjError = {}
      const err: any = result.error.issues
      err.forEach((error: ErrorObject) => {
        error.path.forEach((name: string) => {
          objError[name] = error.code
        })
      })

      setError(objError)
    } else {
      dispatch(
        getNewUserData({ name: data.name, tel: data.tel.slice(1) }) as any,
      )
    }
  }

  const changeName = (newName: string) => {
    setData((prevState) => ({ ...prevState, name: newName }))
  }

  const changeTel = (newTel: string) => {
    setData((prevState) => ({ ...prevState, tel: newTel }))
  }

  return (
    <div className=''>
      <div className='bg-slate-200 p-4'>
        <p>Как мы можем к вам обращаться ? </p>
        <form
          className='flex flex-col gap-2 mt-4 '
          onSubmit={(event) => newUser(event)}
        >
          <input
            type='text'
            required
            placeholder='Имя'
            className='p-2 rounded-md focus:outline-none'
            onChange={(e) => changeName(e.target.value)}
            name='name'
          />
          {Object.keys(error).includes('name') && (
            <p className='font-thin text-slate-900'>
              Имя слишком короткое (Минимум: 3 симв.).
            </p>
          )}

          <PatternFormat
            format='# (###) ###-####'
            value={data.tel}
            onValueChange={(values) => {
              changeTel(values.value)
            }}
            valueIsNumericString={true}
            placeholder='7 (###) ###-####'
            className='p-2 rounded-md focus:outline-none'
            required
          />
          {Object.keys(error).includes('tel') && (
            <p className='font-thin text-slate-900'>
              Проверьте правильность введенного номера
            </p>
          )}
          <button
            type='submit'
            className=' w-full bg-indigo-500 px-4 py-2 text-white rounded-lg uppercase mt-5'
          >
            Отправить
          </button>
        </form>
      </div>

      <div className='text-center mt-20'>Войдите, чтобы продолжить чат</div>
    </div>
  )
}
