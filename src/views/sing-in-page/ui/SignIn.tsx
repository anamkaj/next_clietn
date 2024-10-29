import { FormAuth } from '@/src/entities/form-auth'
import { Logo } from '@/src/shared/ui/logo'

export default async function SignIn() {
  return (
    <div className='container mx-auto p-2 min-h-full'>
      <h2 className='font-bold text-2xl text-center mt-10'>
        Вход для пользователей
      </h2>
      <div className='flex justify-center items-center mt-4'>
        <div className='w-[350px] border  p-4 rounded-xl '>
          <div className='w-full mt-10 mb-4'>
            <Logo white={150} />
          </div>
          <div className='mt-8'>
            <FormAuth />
          </div>
        </div>
      </div>
    </div>
  )
}
