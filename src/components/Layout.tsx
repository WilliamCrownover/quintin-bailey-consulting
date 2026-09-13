import { NavLink, Outlet } from 'react-router-dom'
import { PsychologyTodaySeal } from './PsychologyTodaySeal'
import { siteMeta } from '../content/siteContent'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/publications', label: 'Publications & Media' },
  { to: '/consultation', label: 'Consultation' },
  { to: '/clinical', label: 'Clinical' },
  { to: '/contact', label: 'Contact' },
]

export function Layout() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className="site-header">
        <div className="container nav-shell">
          <NavLink className="brand" to="/">
            <span className="brand-name">Quintin Bailey</span>
            <span className="brand-cred">PsyD, ABPP</span>
          </NavLink>
          <nav aria-label="Primary">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'nav-link nav-link-active' : 'nav-link'
                    }
                    to={link.to}
                    end={link.to === '/'}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <NavLink className="button button-small" to="/contact">
            Contact Quintin
          </NavLink>
        </div>
      </header>

      <main id="main-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-shell">
          <div>
            <h2 className="footer-title">{siteMeta.title}</h2>
            <p className="footer-copy">{siteMeta.licenses}</p>
          </div>
          <div className="footer-actions">
            <PsychologyTodaySeal />
          </div>
        </div>
      </footer>
    </>
  )
}
