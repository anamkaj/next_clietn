'use client'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function AuthBtn() {
  const { data: session } = useSession()
  
  if (session) {
    return (
      <>
        Профиль для входа {session.user.name} <br />
        <button onClick={() => signOut()}>Выход</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Вход</button>
    </>
  )
}
