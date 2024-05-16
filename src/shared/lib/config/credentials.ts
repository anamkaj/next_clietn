import { Backend_URL } from '@/src/shared/lib/const/backend/url'
import { Session, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import CredentialsProvider from 'next-auth/providers/credentials'

async function refreshToken(token: JWT): Promise<JWT> {
  try {
    const res = await fetch(Backend_URL + '/auth/refresh', {
      method: 'POST',
      headers: {
        authorization: `Refresh ${token.backendTokens.refreshToken}`,
      },
    })
    const response: User = await res.json()

    return {
      ...token,
      backendTokens: response.backendTokens,
    }
  } catch (error) {
    throw new Error(`Ошибка обновления refreshToken ${error}`)
  }
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        const { email, password } = credentials
        const res = await fetch(Backend_URL + '/auth/login', {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
          }),
          headers: { 'Content-Type': 'application/json' },
        })

        if (res.status == 401) {
          return null
        }
        const user: User = await res.json()
        return user
      },
    }),
  ],
  pages: { signIn: '/signin', signOut: '/' },

  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User }) {
      if (user) return { ...token, ...user }

      if (new Date().getTime() < token.backendTokens.expiresIn) {
        return token
      }

      return await refreshToken(token)
    },
    async session({ token, session }: { token: JWT; session: Session }) {
      session.user = token.user
      session.backendTokens = token.backendTokens

      return session
    },
  },
}
