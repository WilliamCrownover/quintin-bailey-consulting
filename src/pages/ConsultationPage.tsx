import { consultationContent } from '../content/siteContent'

export function ConsultationPage() {
  return (
    <>
      <section className="page-hero page-hero-plain">
        <div className="container stack">
          <h1>{consultationContent.heading}</h1>
        </div>
      </section>

      <section className="section section-light">
        <div className="container stack">
          <article className="stack">
            <h2>{consultationContent.complexHeading}</h2>
            <p>{consultationContent.complexCases}</p>
            <ul className="specialty-list">
              {consultationContent.complexCaseBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container stack">
          <article className="stack">
            <h2>{consultationContent.transInclusiveHeading}</h2>
            <p>{consultationContent.transInclusive}</p>
          </article>
        </div>
      </section>

      <section className="section section-light">
        <div className="container split-text">
          <article className="stack">
            <h2>{consultationContent.trainingsHeading}</h2>
            <ul className="specialty-list">
              {consultationContent.trainings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="stack">
            <h2>{consultationContent.additionalHeading}</h2>
            <ul className="specialty-list">
              {consultationContent.additional.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  )
}
