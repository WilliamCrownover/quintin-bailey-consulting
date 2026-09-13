import { useEffect } from 'react'
import { siteMeta } from '../content/siteContent'

export function PsychologyTodaySeal() {
  useEffect(() => {
    const scriptId = 'psychology-today-verified-seal-script'
    if (document.getElementById(scriptId)) {
      return
    }

    const script = document.createElement('script')
    script.id = scriptId
    script.type = 'text/javascript'
    script.src = 'https://member.psychologytoday.com/verified-seal.js'
    script.setAttribute('data-badge', '14')
    script.setAttribute('data-id', '906011')
    script.setAttribute(
      'data-code',
      'aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy9bQkFER0VdL3Byb2ZpbGUvW1BST0ZJTEVfSURdP2NhbGxiYWNrPXN4Y2FsbGJhY2s=',
    )
    document.body.appendChild(script)
  }, [])

  return (
    <a
      href={siteMeta.psychologyTodayUrl}
      className="sx-verified-seal"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Verified Psychology Today profile"
    >
      <img
        className="verified-pic"
        src="/assets/pt.svg"
        alt="Verified Psychology Today"
      />
    </a>
  )
}
