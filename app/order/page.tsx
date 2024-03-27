import React from 'react'
import { ProviderStor } from '@/src/app/provider'
import { PageCart } from '@/src/pages/order-page'

export default function ShopCardPage() {
  return (
    <div className='container mx-auto p-2'>
      <ProviderStor>
        <PageCart />
      </ProviderStor>
    </div>
  )
}
