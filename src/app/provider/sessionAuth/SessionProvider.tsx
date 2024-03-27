'use client'
import React, { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

const ProviderAuth = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default ProviderAuth
