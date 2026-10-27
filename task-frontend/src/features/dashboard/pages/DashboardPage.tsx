import { useAuth } from '@/features/auth/context/AuthContext'

export function DashboardPage() {
  const { user } = useAuth()

  return (
    <section className="page">
      <h1>Dashboard</h1>
      <p>
        Private placeholder for {user?.name ?? 'user'}. Replace this with real
        product content.
      </p>
    </section>
  )
}
