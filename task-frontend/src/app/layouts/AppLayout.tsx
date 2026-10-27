import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '@/features/auth/context/AuthContext'
import { Button } from '@/shared/components/ui/Button'

const navItems = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/settings', label: 'Settings' },
  { to: '/profile', label: 'Profile' },
] as const

export function AppLayout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <div className="shell shell--app">
      <aside className="sidebar">
        <LinkBrand />
        <nav className="sidebar__nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link--active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar__footer">
          <p className="sidebar__user">{user?.email}</p>
          <Button variant="secondary" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </aside>
      <main className="shell__main">
        <Outlet />
      </main>
    </div>
  )
}

function LinkBrand() {
  return (
    <NavLink to="/" className="brand brand--sidebar">
      VFRS
    </NavLink>
  )
}
