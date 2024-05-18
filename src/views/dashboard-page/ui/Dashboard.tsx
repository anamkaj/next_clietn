
import { authOptions } from '@/src/shared/lib/config/credentials'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return redirect('/signin')
  }

  if (session.user.role !== 'ADMIN') {
    return redirect('/profile')
  }
  return (
    <div className='container mx-auto'>
      <div>Dashboard</div>
    </div>
  )
}
