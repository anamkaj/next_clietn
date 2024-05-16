import { ServiceProfile } from '@/src/pages/profile-page/api/get-profile'
import { UserType } from '@/src/shared/reused-type/user-type/user-info'

type userData = {
  accessesToken: string
  email: string
}

export const getUserProfile = async ({
  accessesToken,

  email,
}: userData) => {
  try {
    const data: UserType = await ServiceProfile.getInfoUser(
      accessesToken,
      email,
    )

    return data
  } catch (error) {}
}
