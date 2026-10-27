import { useAuth } from '@/features/auth/context/AuthContext'

export function ProfilePage() {
  const { user } = useAuth()

  return (
    <section className="page">
      <h1>Profile</h1>
      <dl className="detail-list">
        <div>
          <dt>Name</dt>
          <dd>{user?.name}</dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd>{user?.email}</dd>
        </div>
        <div>
          <dt>Role</dt>
          <dd>{user?.role}</dd>
        </div>
      </dl>
    </section>
  )
}
