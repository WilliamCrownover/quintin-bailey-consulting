import { useState } from 'react'
import type { FormEvent } from 'react'
import { contactContent, siteMeta } from '../content/siteContent'

export function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorText, setErrorText] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [messageCount, setMessageCount] = useState(0)
  const [nameTouched, setNameTouched] = useState(false)
  const [emailTouched, setEmailTouched] = useState(false)

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const showNameError = nameTouched && name.trim().length === 0
  const showEmailError = emailTouched && (email.trim().length === 0 || !emailIsValid)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    setErrorText('')
    setNameTouched(true)
    setEmailTouched(true)

    if (name.trim().length === 0 || email.trim().length === 0 || !emailIsValid) {
      setStatus('error')
      setErrorText('Please enter a valid name and email before submitting.')
      return
    }

    const formElement = event.currentTarget
    const formData = new FormData(formElement)
    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      subject: String(formData.get('subject') ?? ''),
      message: String(formData.get('message') ?? ''),
      _captcha: 'false',
      _template: 'table',
      _subject: 'Website contact form: Quintin Bailey',
    }

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(siteMeta.contactEmail)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        },
      )

      const result = (await response.json()) as { success?: string; message?: string }

      if (!response.ok) {
        throw new Error('Unable to send right now. Please try again shortly.')
      }

      if (result.success !== 'true') {
        throw new Error(
          result.message ??
            'This form needs activation. Please check the FormSubmit activation email.',
        )
      }

      formElement.reset()
      setName('')
      setEmail('')
      setMessageCount(0)
      setNameTouched(false)
      setEmailTouched(false)
      setStatus('sent')
    } catch (error) {
      setStatus('error')
      setErrorText(error instanceof Error ? error.message : 'Unable to send the message.')
    }
  }

  return (
    <>
      <section className="page-hero page-hero-plain">
        <div className="container stack">
          <h1>{contactContent.heading}</h1>
          <p>
            To inquire about consultation services, media requests, or for other questions,
            please reach out via the contact form below. Quintin typically replies to
            messages within 24-48 business hours.
          </p>
          <p className="clinical-routing-note">
            If you are interested in clinical services, such as individual psychotherapy,
            please reach out via{' '}
            <a href={siteMeta.psychologyTodayUrl} target="_blank" rel="noopener noreferrer">
              Psychology Today
            </a>
            .
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container stack">
          <h2>Contact Quintin</h2>
          <div className="form-wrap" role="region" aria-label="Contact form">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name *</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                required
                value={name}
                onChange={(event) => setName(event.currentTarget.value)}
                onBlur={() => setNameTouched(true)}
                className={showNameError ? 'input-error' : ''}
                aria-invalid={showNameError}
              />

              <label htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.currentTarget.value)}
                onBlur={() => setEmailTouched(true)}
                className={showEmailError ? 'input-error' : ''}
                aria-invalid={showEmailError}
              />

              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" required />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={7}
                maxLength={1000}
                required
                onInput={(event) => setMessageCount(event.currentTarget.value.length)}
              />
              <div className="message-count-row">
                <span className="message-count">{messageCount}/1000</span>
              </div>

              <button type="submit" className="button" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              <p className="required-note">* Required</p>

              <p className="form-note" role="status" aria-live="polite">
                {status === 'sent' && 'Message sent successfully. Thank you for reaching out.'}
                {status === 'error' && errorText}
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
