import NextAuth from 'next-auth/next'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      createdAt: string
      rating: string
      level: string
      avatar: string
      role: string
    }
    backendTokens: {
      accessToken: string
      refreshToken: string
      expiresIn: number
    }
  }

  interface User {
    user: {
      id: string
      name: string
      email: string
      createdAt: string
      rating: string
      level: string
      avatar: string
      role: string
    }
    backendTokens: {
      accessToken: string
      refreshToken: string
      expiresIn: number
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: {
      id: string
      name: string
      email: string
      createdAt: string
      rating: string
      level: string
      avatar: string
      role: string
    }
    backendTokens: {
      accessToken: string
      refreshToken: string
      expiresIn: number
    }
  }
}
