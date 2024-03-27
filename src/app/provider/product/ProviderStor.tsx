'use client'
import React, { ReactNode } from 'react'
import { store } from '@/src/app/Redux/configStor'
import { Provider } from 'react-redux'

export default function ProviderStor({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}
