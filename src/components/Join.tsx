import { useState, useRef } from 'react'

function isValidEmail(val: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
}

export function Join() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [nameErr, setNameErr] = useState('')
  const [emailErr, setEmailErr] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  function validate() {
    let ok = true
    if (name.trim().length < 2) {
      setNameErr('Enter your codename (at least 2 characters).')
      nameRef.current?.classList.add('error')
      ok = false
    } else {
      setNameErr('')
      nameRef.current?.classList.remove('error')
    }
    if (!isValidEmail(email.trim())) {
      setEmailErr('Please enter a valid email address.')
      emailRef.current?.classList.add('error')
      ok = false
    } else {
      setEmailErr('')
      emailRef.current?.classList.remove('error')
    }
    return ok
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (validate()) setSubmitted(true)
  }

  return (
    <section id="join" className="join-section">
      <h2>Join the Worm Legion ⚡</h2>
      <p>Mission briefings, exclusive comic previews, and Worm-Man intel &mdash; delivered to your inbox every week.</p>

      {!submitted ? (
        <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <input
              ref={nameRef}
              type="text"
              placeholder="Your codename"
              autoComplete="off"
              value={name}
              onChange={e => setName(e.target.value)}
              onBlur={() => {
                if (name.trim().length < 2 && name.length > 0) {
                  setNameErr('Codename must be at least 2 characters.')
                  nameRef.current?.classList.add('error')
                } else {
                  setNameErr('')
                  nameRef.current?.classList.remove('error')
                }
              }}
            />
            <span className="input-error">{nameErr}</span>
          </div>
          <div className="form-group">
            <input
              ref={emailRef}
              type="email"
              placeholder="your@email.com"
              autoComplete="off"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onBlur={() => {
                if (email.length > 0 && !isValidEmail(email.trim())) {
                  setEmailErr('Please enter a valid email address.')
                  emailRef.current?.classList.add('error')
                } else {
                  setEmailErr('')
                  emailRef.current?.classList.remove('error')
                }
              }}
            />
            <span className="input-error">{emailErr}</span>
          </div>
          <button type="submit" className="subscribe-btn">Enlist Now</button>
        </form>
      ) : (
        <p className="form-success">⚡ Welcome to the Legion, agent. Stay underground.</p>
      )}
    </section>
  )
}
