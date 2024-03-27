import { Backend_URL } from '@/src/shared/lib/const/backend/url'
import NextAuth, { Session, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials, req) {
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
          console.log(res.statusText)
          return null
        }
        const user: User = await res.json()
        return user
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: { token: any; user: User }) {
      console.log('Tokken', token)
      if (user) return { ...token, ...user }
      return token
    },
    async session({ token, session }: { token: any; session: Session }) {
      session.user = token.user
      session.backendTokens = token.backendTokens

      return session
    },
  },
}
export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
