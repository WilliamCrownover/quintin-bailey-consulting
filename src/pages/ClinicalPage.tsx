import { PsychologyTodaySeal } from '../components/PsychologyTodaySeal'
import { clinicalContent, siteMeta } from '../content/siteContent'

export function ClinicalPage() {
  return (
    <>
      <section className="page-hero page-hero-plain">
        <div className="container stack">
          <h1>{clinicalContent.heading}</h1>
          <p>{clinicalContent.intro}</p>
          <div className="hero-actions">
            <PsychologyTodaySeal />
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container stack">
          <article className="stack">
            <h2>Practice and approach</h2>
            <p>{clinicalContent.approach}</p>
            <p>{clinicalContent.relationship}</p>
          </article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container stack">
          <h2>Areas of specialization</h2>
          <ul className="specialty-list specialty-list-columns">
            {clinicalContent.specializations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="license-line">{siteMeta.licenses}</p>
        </div>
      </section>
    </>
  )
}
