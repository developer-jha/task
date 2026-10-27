import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="page page--centered">
      <h1>Page not found</h1>
      <p>That route does not exist.</p>
      <p>
        <Link to="/">Back home</Link>
      </p>
    </section>
  )
}
