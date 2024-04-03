import { authOptions } from '@/src/shared/lib/config/credentials'
import NextAuth from 'next-auth'

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
