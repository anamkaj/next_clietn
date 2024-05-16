'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

export default function UserName() {
  const session = useSession()

  return <div>Клиент - {session.data?.user.name}</div>
}
