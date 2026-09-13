import { publications } from '../content/siteContent'

export function PublicationsPage() {
  return (
    <>
      <section className="page-hero page-hero-plain">
        <div className="container stack">
          <p className="eyebrow">Publications, media, and creative offerings</p>
          <h1>Scholarship and public work.</h1>
          <p>
            Writing and media work center psychoanalytic thought, trans identity development,
            and institutional transformation through clinically grounded scholarship.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container stack">
          <h2>Publications</h2>
          <div className="resource-grid">
            {publications.papers.map((paper) => (
              <a
                className="resource-card resource-card-link"
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                key={paper.title}
              >
                <h3>{paper.title}</h3>
                <p className="resource-source">{paper.source}</p>
                <span className="resource-link-text">Read here</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container stack">
          <h2>Media</h2>
          <div className="resource-grid">
            {publications.media.map((item) => (
              <a
                className="resource-card resource-card-link"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={item.title}
              >
                <h3>{item.title}</h3>
                <p className="resource-source">{item.source}</p>
                <span className="resource-link-text">Read here</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container stack">
          <h2>Creative offerings</h2>
          <div className="resource-grid">
            {publications.creative.map((item) => (
              <a
                className="resource-card resource-card-link"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={item.title}
              >
                <h3>{item.title}</h3>
                <p className="resource-source">{item.source}</p>
                <span className="resource-link-text">Read here</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
