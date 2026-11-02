import Login from '../components/Login.jsx'
import Register from '../components/Register.jsx'

function App() {
  const isRegisterPage = window.location.pathname.replace(/\/+$/, '') === '/register'

  if (isRegisterPage) {
    return <Register />
  }

  return <Login />
}

export default App
