import { LoginForm } from '@/features/auth/components/LoginForm'

export function LoginPage() {
  return (
    <section className="page page--narrow">
      <h1>Sign in</h1>
      <p>Use any email and password to create a local demo session.</p>
      <LoginForm />
    </section>
  )
}
