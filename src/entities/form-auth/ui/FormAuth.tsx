'use client'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { EmailInput } from '@/src/shared/ui/form-element'
import { Person } from '@/src/shared/reused-type/form-type/form-person'
import { signIn, useSession } from 'next-auth/react'
import Password from '@/src/shared/ui/form-element/ui/Input/Password'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'

const schema = z.object({
  password: z.string().min(8).max(8),
  email: z.string().email().min(5).max(35),
})

export default function FormAuth() {
  const router = useRouter()
  const session = useSession()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Person>({
    resolver: zodResolver(schema),
  })

  const sign = async (data: Person) => {
    await signIn('credentials', {
      email: data.email,
      password: data.password,
    })
  }

  useEffect(() => {
    if (session.data?.user?.role === 'ADMIN') {
      router.push('/dashboard')
    }

    if (session.data?.user?.role === 'USER') {
      router.push('/profile')
    }
  }, [session])

  return (
    <>
      <form
        onSubmit={handleSubmit(sign)}
        className='flex flex-col gap-4 item-center w-full'
      >
        <EmailInput errors={errors} register={register} required={true} />
        <Password errors={errors} register={register} />

        <button className='w-full text-white bg-indigo-500 font-medium rounded-xl  px-10 py-2.5 text-center mr-2 mb-2 text-sm  cursor-pointer uppercase '>
          Отправить
        </button>
      </form>
      <div className='mt-10 '>
        {session.status == 'unauthenticated' && (
          <div className='flex items-center gap-2 justify-center text-lg font-thin'>
            <span className=''>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='M4 22q-.825 0-1.412-.587T2 20v-4h2v4h4v2zM2 8V4q0-.825.588-1.412T4 2h4v2H4v4zm14 14v-2h4v-4h2v4q0 .825-.587 1.413T20 22zm4-14V4h-4V2h4q.825 0 1.413.588T22 4v4zm-8 4q-1.275 0-2.137-.862T9 9q0-1.25.863-2.125T12 6q1.25 0 2.125.875T15 9q0 1.275-.875 2.138T12 12m-6 6v-1.9q0-.525.263-.987t.712-.738q1.15-.675 2.413-1.025T12 13q1.35 0 2.613.35t2.412 1.025q.45.275.713.738T18 16.1V18z'
                />
              </svg>
            </span>
            <p>Вы еще не авторизированны</p>
          </div>
        )}
      </div>
    </>
  )
}
