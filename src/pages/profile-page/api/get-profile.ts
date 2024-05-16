export const ServiceProfile = {
  async getInfoUser(accessesToken: string, email: string) {
    try {
      const data = await fetch(
        'http://localhost:4000/api/user/userProfile?' +
          new URLSearchParams({
            email: email,
          }),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessesToken}`,
          },

          method: 'GET',
        },
      )

      if (!data.ok) {
        throw new Error(`${data.ok}`)
      }
      return data.json()
    } catch (error) {
      return undefined
    }
  },
}
