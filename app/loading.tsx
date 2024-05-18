'use client'

import { LazyLoad } from '@/src/shared/ui/pre-loader'

export default function loading() {
  return (
    <div className='mt-[20vh] mb-[80vh]'>
      <LazyLoad />
    </div>
  )
}
