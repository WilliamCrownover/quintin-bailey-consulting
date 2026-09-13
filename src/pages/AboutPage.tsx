import { aboutSections, media } from '../content/siteContent'

export function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero-about">
        <div className="container split">
          <img
            className="portrait"
            src={media.quintinHeadshot}
            alt="Headshot of Quintin Bailey"
          />
          <div className="about-intro-copy">
            <p className="eyebrow">About Quintin Bailey, PsyD, ABPP</p>
            <h1>{aboutSections.heading}</h1>
            <p>{aboutSections.background}</p>
            <p>{aboutSections.expertise}</p>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container stack">
          <article className="about-section">
            <h2>{aboutSections.researchHeading}</h2>
            <p>{aboutSections.research}</p>
          </article>
          <article className="about-section">
            <h2>{aboutSections.creativeHeading}</h2>
            <p>{aboutSections.creative}</p>
          </article>
        </div>
      </section>
    </>
  )
}
