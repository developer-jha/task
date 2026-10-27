import { Link } from 'react-router-dom'
import { useAuth } from '@/features/auth/context/AuthContext'

export function HomePage() {
  const { isAuthenticated } = useAuth()

  return (
    <section className="page">
      <h1>VFRS</h1>
      <p>Production-shaped React skeleton with public and private routes.</p>
      {isAuthenticated ? (
        <p>
          You are signed in. Go to the{' '}
          <Link to="/dashboard">dashboard</Link>.
        </p>
      ) : (
        <p>
          <Link to="/login">Sign in</Link> to open the private app shell.
        </p>
      )}
    </section>
  )
}
