import { authOptions } from '@/src/shared/lib/config/credentials'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import UserName from './UserName'
import { getUserProfile } from '../../../shared/api/profile-page/api/refresh-token'

export default async function Profile() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return redirect('/signin')
  }

  if (session.user.role !== 'USER') {
    return redirect('/dashboard')
  }

  const userData = {
    email: session.user.email,
    accessesToken: session.backendTokens.accessToken,
  }

  const data = await getUserProfile(userData)

  return (
    <div className='container mx-auto'>
      <div>Info USer</div>
      <span>Запрос - {data?.name && data.name}</span>
      <br />
      <span>Сессия - {session && session.user.name}</span>
      <UserName />
    </div>
  )
}
