import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '@/features/auth/context/AuthContext'

export function PublicLayout() {
  const { isAuthenticated } = useAuth()

  return (
    <div className="shell shell--public">
      <header className="topbar">
        <Link to="/" className="brand">
          VFRS
        </Link>
        <nav className="topbar__nav">
          {isAuthenticated ? (
            <Link to="/dashboard">Dashboard</Link>
          ) : (
            <Link to="/login">Sign in</Link>
          )}
        </nav>
      </header>
      <main className="shell__main">
        <Outlet />
      </main>
    </div>
  )
}
