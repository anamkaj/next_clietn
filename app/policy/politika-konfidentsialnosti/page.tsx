import React from 'react'
import {
  PostServices,
  PolicyType,
  PrivacyPolicy,
} from '@/src/entities/policy/index'

export default async function Politics() {
  const data: PolicyType[] = await PostServices.singlePost(7)
  return (
    <div>
      <PrivacyPolicy data={data} />
    </div>
  )
}
