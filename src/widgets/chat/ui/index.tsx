import React, { ReactNode } from 'react'
import Consultant from './Consultant'
import { SocketProvider } from '@/src/app/provider'

export default function Chat({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}

      <SocketProvider>
        <Consultant />
      </SocketProvider>
    </div>
  )
}
