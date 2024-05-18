'use client'
import { useSession } from 'next-auth/react'


export default function UserName() {
  const session = useSession()

  return <div>Клиент - {session.data?.user.name}</div>
}
