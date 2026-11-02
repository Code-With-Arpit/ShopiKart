import { useState } from 'react'
import '../src/App.css'

function BagIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        d="M5.5 8.5h13l1 12h-15l1-12Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M9 9V6a3 3 0 0 1 6 0v3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  )
}

function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [notice, setNotice] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setNotice('Your registration form is ready to connect to your account.')
  }

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="/" aria-label="Shopikart home">
          <span className="brand-mark"><BagIcon /></span>
          <span>Shopi<span className="brand-accent">Kart</span></span>
        </a>
        <p className="topbar-copy">Your next favorite thing is waiting.</p>
      </header>

      <section className="login-layout register-layout" aria-label="Create a Shopikart account">
        <aside className="welcome-panel">
          <div className="welcome-copy">
            <span className="eyebrow"><span /> YOUR NEXT FAVORITE THING STARTS HERE</span>
            <h1>Good finds.<br />Great <em>feeling.</em></h1>
            <p>
              Make your account and keep all your favorite finds in one happy
              place.
            </p>
          </div>

          <div className="shopping-art" aria-hidden="true">
            <div className="art-glow" />
            <div className="sparkle sparkle-one">✦</div>
            <div className="sparkle sparkle-two">✳</div>
            <div className="art-tag">
              <span className="tag-dot" />
              <span><strong>Good finds</strong><small>great prices</small></span>
            </div>
            <div className="art-bag">
              <div className="bag-handle" />
              <span className="bag-logo">s.</span>
              <span className="bag-fold" />
            </div>
            <div className="art-flower flower-one">✿</div>
            <div className="art-flower flower-two">✿</div>
            <div className="art-platform" />
            <div className="shipping-card">
              <span className="shipping-icon">↗</span>
              <span><strong>Made for you</strong><small>your new happy place</small></span>
            </div>
          </div>

          <div className="welcome-footer">
            <span className="avatar-stack" aria-hidden="true">
              <span>J</span><span>M</span><span>A</span><span>+</span>
            </span>
            <span>Join <strong>2,000+</strong> happy shoppers</span>
          </div>
        </aside>

        <div className="form-panel">
          <div className="form-heading">
            <div className="mobile-brand">
              <span className="brand-mark"><BagIcon /></span>
              <span>Shopi<span className="brand-accent">Kart</span></span>
            </div>
            <span className="welcome-pill"><span /> JOIN THE GOOD STUFF</span>
            <h2>Create account</h2>
            <p>Sign up for a little more happy.</p>
          </div>

          <form className="login-form register-form" onSubmit={handleSubmit}>
            <div className="register-fields">
              <div className="register-field">
                <label htmlFor="register-name">Name</label>
                <div className="input-wrap">
                  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="6.5" r="3" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M4.5 17v-1.5a5.5 5.5 0 0 1 11 0V17h-11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                  <input autoComplete="name" id="register-name" name="name" placeholder="Your name" required type="text" />
                </div>
              </div>

              <div className="register-field">
                <label htmlFor="register-email">Email</label>
                <div className="input-wrap">
                  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                    <rect x="2.5" y="4" width="15" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="m3.5 5.5 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <input autoComplete="email" id="register-email" name="email" placeholder="you@example.com" required type="email" />
                </div>
              </div>

              <div className="register-field">
                <label htmlFor="register-username">Username</label>
                <div className="input-wrap">
                  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="6.5" r="3" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M4.5 17v-1.5a5.5 5.5 0 0 1 11 0V17h-11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                  <input autoComplete="username" id="register-username" name="username" placeholder="Choose a username" required type="text" />
                </div>
              </div>

              <div className="register-field">
                <label htmlFor="register-mobile">Mobile</label>
                <div className="input-wrap">
                  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                    <rect x="5.5" y="2" width="9" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8.5 5h3M9 15h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <input autoComplete="tel" id="register-mobile" name="mobile" placeholder="Your mobile number" required type="tel" />
                </div>
              </div>

              <div className="register-field register-field-full">
                <label htmlFor="register-password">Password</label>
                <div className="input-wrap">
                  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                    <rect x="3.5" y="8.5" width="13" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M6.5 8.5V6a3.5 3.5 0 0 1 7 0v2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="10" cy="12.8" r="1" fill="currentColor" />
                  </svg>
                  <input
                    autoComplete="new-password"
                    id="register-password"
                    name="password"
                    placeholder="Create a password"
                    required
                    type={showPassword ? 'text' : 'password'}
                  />
                  <button
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    aria-pressed={showPassword}
                    className="visibility-button"
                    onClick={() => setShowPassword((visible) => !visible)}
                    type="button"
                  >
                    {showPassword ? (
                      <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                        <path d="M2.5 10s2.7-5 7.5-5 7.5 5 7.5 5-2.7 5-7.5 5-7.5-5-7.5-5Z" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
                        <path d="m4 16 12-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                        <path d="M2.5 10s2.7-5 7.5-5 7.5 5 7.5 5-2.7 5-7.5 5-7.5-5-7.5-5Z" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <button className="submit-button" type="submit">
              Create account <span aria-hidden="true">→</span>
            </button>
            <p aria-live="polite" className="form-notice">{notice}</p>
          </form>

          <p className="signup-copy register-signin-copy">
            Already have an account? <a className="text-button" href="/">Sign in</a>
          </p>
          <p className="legal-copy">By continuing, you agree to our <a href="#terms">Terms</a> and <a href="#privacy">Privacy Policy</a>.</p>
        </div>
      </section>

      <footer className="page-footer">
        <span>© {new Date().getFullYear()} Shopikart</span>
        <span className="footer-note"><span /> A little joy, delivered.</span>
        <a href="#help">Need help?</a>
      </footer>
    </main>
  )
}

export default Register