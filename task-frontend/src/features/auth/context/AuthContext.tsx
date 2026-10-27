import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react'
import type {
  AuthSession,
  AuthUser,
  LoginCredentials,
} from '@/features/auth/types'
import {
  clearSession,
  readSession,
  writeSession,
} from '@/features/auth/lib/session'

type AuthContextValue = {
  user: AuthUser | null
  isAuthenticated: boolean
  login: (credentials: LoginCredentials) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

function createDemoSession(email: string): AuthSession {
  const localPart = email.split('@')[0] || 'user'
  return {
    token: `demo.${btoa(email)}.${Date.now()}`,
    user: {
      id: crypto.randomUUID(),
      name: localPart,
      email,
      role: 'user',
    },
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(() =>
    readSession(),
  )

  const login = ({ email, password }: LoginCredentials) => {
    if (!email.trim() || !password) {
      throw new Error('Email and password are required')
    }
    const next = createDemoSession(email.trim())
    writeSession(next)
    setSession(next)
  }

  const logout = () => {
    clearSession()
    setSession(null)
  }

  const value: AuthContextValue = {
    user: session?.user ?? null,
    isAuthenticated: Boolean(session?.token),
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return ctx
}
