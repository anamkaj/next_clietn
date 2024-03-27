'use client'
import { LazyLoad } from '@/src/shared/ui/pre-loader'
import React from 'react'

export default function loading() {
  return (
    <div className='mt-[20vh] mb-[40vh]'>
      <LazyLoad />
    </div>
  )
}
