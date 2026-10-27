export type AuthUser = {
  id: string
  name: string
  email: string
  role: 'user' | 'admin'
}

export type AuthSession = {
  token: string
  user: AuthUser
}

export type LoginCredentials = {
  email: string
  password: string
}
