import React from 'react'
import { authOptions } from '@/src/shared/lib/config/credentials'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

export default async function Profile() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return redirect('/signin')
  }

  return <div>{session.user.name}</div>
}
