import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="page-hero page-hero-plain">
      <div className="container stack">
        <p className="eyebrow">Page not found</p>
        <h1>This page is not available.</h1>
        <p>Please use the main navigation to return to the site.</p>
        <Link className="button" to="/">
          Return Home
        </Link>
      </div>
    </section>
  )
}
