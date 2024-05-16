'use client'
import React, { ReactNode } from 'react'
import ContactWidget from './ContactWidget'
import { useWindowSize } from '@/src/shared/hook/useWindowSize'

export default function Widgets({ children }: { children: ReactNode }) {
  const { width } = useWindowSize()

  return (
    <div>
      {children}
      {width > 768 && <ContactWidget />}
    </div>
  )
}
