import { useState } from 'react'
import axios from 'axios'
import '../src/App.css'

function BagIcon({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
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

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [notice, setNotice] = useState('')

 

 async function handleLogin(event) {
    event.preventDefault()
    let isValidated = 1

    if(username == ""){

      isValidated = 0;

    }

    if(isValidated){
      const result = await axios.post("http://localhost:3000/api/login", { withCredentials: true})
      console.log(result)

    }else{

    }

    setNotice('Your sign-in form is ready to connect to your account.')
  }

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="/" aria-label="Shopikart home">
          <span className="brand-mark">
            <BagIcon />
          </span>
          <span>shopi<span className="brand-accent">kart</span></span>
        </a>
        <p className="topbar-copy">Your next favorite thing is waiting.</p>
      </header>

      <section className="login-layout" aria-label="Sign in to Shopikart">
        <aside className="welcome-panel">
          <div className="welcome-copy">
            <span className="eyebrow"><span /> THE GOOD STUFF, ALL IN ONE PLACE</span>
            <h1>Little things.<br />Big <em>happy.</em></h1>
            <p>
              Find the things you love, at prices that make you love them even
              more.
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
              <span><strong>Free shipping</strong><small>on your first order</small></span>
            </div>
          </div>

          <div className="welcome-footer">
            <span className="avatar-stack" aria-hidden="true">
              <span>J</span><span>M</span><span>A</span><span>+</span>
            </span>
            <span>Loved by <strong>2,000+</strong> happy shoppers</span>
          </div>
        </aside>

        <div className="form-panel">
          <div className="form-heading">
            <div className="mobile-brand">``
              <span className="brand-mark"><BagIcon /></span>
              <span>shopi<span className="brand-accent">kart</span></span>
            </div>
            <span className="welcome-pill"><span /> WELCOME BACK</span>
            <h2>Sign in</h2>
            <p>Pick up right where you left off.</p>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            <label htmlFor="username">Username</label>
            <div className="input-wrap">
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                <rect x="2.5" y="4" width="15" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="m3.5 5.5 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <input
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                id="username"
                name="username"
                placeholder="Enter your username"
                required
                type="text"
              />
            </div>

            <div className="password-label">
              <label htmlFor="password">Password</label>
              <button
                className="text-button"
                onClick={() => setNotice('Password reset is available once your account is connected.')}
                type="button"
              >
                Forgot password?
              </button>
            </div>
            <div className="input-wrap">
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                <rect x="3.5" y="8.5" width="13" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6.5 8.5V6a3.5 3.5 0 0 1 7 0v2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="10" cy="12.8" r="1" fill="currentColor" />
              </svg>
              <input
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                id="password"
                name="password"
                placeholder="Enter your password"
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

            <label className="remember-option">
              <input type="checkbox" name="remember" />
              <span className="custom-checkbox" />
              Keep me signed in
            </label>

            <button className="submit-button" type="submit">
              Sign in <span aria-hidden="true">→</span>
            </button>
            <p aria-live="polite" className="form-notice">{notice}</p>
          </form>

          <div className="form-divider"><span>or continue with</span></div>
          <div className="social-buttons">
            <button
              onClick={() => setNotice('Google sign-in will be available once authentication is connected.')}
              type="button"
            >
              <svg aria-hidden="true" viewBox="0 0 20 20">
                <path fill="#4285F4" d="M18.4 10.2c0-.6-.1-1.2-.2-1.8H10v3.4h4.7a4 4 0 0 1-1.8 2.6v2.2h2.9c1.7-1.6 2.6-3.8 2.6-6.4Z" />
                <path fill="#34A853" d="M10 18.7c2.4 0 4.4-.8 5.8-2.1l-2.9-2.2c-.8.5-1.8.8-2.9.8-2.2 0-4.1-1.5-4.8-3.5H2.2v2.2a8.8 8.8 0 0 0 7.8 4.8Z" />
                <path fill="#FBBC05" d="M5.2 11.7a5.3 5.3 0 0 1 0-3.4V6.1H2.2a8.8 8.8 0 0 0 0 7.8l3-2.2Z" />
                <path fill="#EA4335" d="M10 4.8c1.3 0 2.4.4 3.3 1.3l2.5-2.5A8.3 8.3 0 0 0 10 1.3a8.8 8.8 0 0 0-7.8 4.8l3 2.2c.7-2 2.6-3.5 4.8-3.5Z" />
              </svg>
              Google
            </button>
            <button
              onClick={() => setNotice('Apple sign-in will be available once authentication is connected.')}
              type="button"
            >
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                <path d="M14.7 10.6c0-2 1.6-3 1.7-3.1a3.7 3.7 0 0 0-2.9-1.6c-1.2-.1-2.4.7-3 .7-.7 0-1.6-.7-2.6-.7a3.9 3.9 0 0 0-3.3 2c-1.4 2.4-.4 6 1 8 .7 1 1.5 2 2.5 1.9 1-.1 1.3-.6 2.5-.6 1.1 0 1.5.6 2.5.6s1.7-1 2.4-2a9 9 0 0 0 1.1-2.2 3.5 3.5 0 0 1-2-3Zm-2-5.9a3.7 3.7 0 0 0 .9-2.6 3.8 3.8 0 0 0-2.4 1.2 3.5 3.5 0 0 0-.9 2.5 3.2 3.2 0 0 0 2.4-1.1Z" />
              </svg>
              Apple
            </button>
          </div>

          <p className="signup-copy">New to Shopikart? <a className="text-button" href="/register">Create an account</a></p>
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

export default Login
