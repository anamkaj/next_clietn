import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
    <div>
      <Link href='/api/auth/login'>Login</Link>
    </div>
  )
}
