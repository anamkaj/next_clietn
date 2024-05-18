
import { PostServices, UserAgreement, PolicyType } from '@/src/entities/policy'

export default async function Politics() {
  const data: PolicyType[] = await PostServices.singlePost(8)
  return (
    <div>
      <UserAgreement data={data} />
    </div>
  )
}
