import { Link } from 'react-router-dom'
import { homePreviews, media, siteMeta } from '../content/siteContent'

export function HomePage() {
  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `linear-gradient(rgba(14, 35, 46, 0.5), rgba(14, 35, 46, 0.62)), url("${media.heroBackground}")` }}
      >
        <div className="container hero-inner animate-rise">
          <h1>{siteMeta.title}</h1>
          <p className="hero-tagline">{siteMeta.tagline}</p>
          <p className="hero-subtitle">{siteMeta.subtitle}</p>
          <p className="hero-note">{siteMeta.certificationNote}</p>
          <div className="hero-actions">
            <Link className="button" to="/contact">
              Contact Quintin
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="preview-grid">
            {homePreviews.map((item) => (
              <Link
                className="preview-card preview-card-link"
                key={item.title}
                to={item.href}
              >
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  style={{ objectPosition: item.imagePosition ?? '50% 50%' }}
                />
                <div className="preview-card-body">
                  <h3>{item.title}</h3>
                  <span className="preview-card-action">{item.cta} {'>'}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
