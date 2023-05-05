import { useNavigate } from 'react-router-dom'
import useServer from '../hooks/useServer.js'
import useAuth from '../hooks/useAuth.js'
import { useEffect } from 'react'
import { toast } from 'react-toastify';

function Login() {
  const { token } = useAuth()
  const { post, get } = useServer()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    const credentials = Object.fromEntries(new FormData(e.target))
    const data = await post({ url: '/login', body: credentials })
    if (data.data.status === 'ok') toast.success('Inicio de sesión exitoso ;)')
    if (data.data.status === 'error') toast.error('Usuario o contraseña incorrecto :(')
  }

  useEffect(() => {
    if (!token) return

    (async () => {
      const { data } = await get({ url: '/user/' })
      console.log(data)
      if (data.status == 'ok') return navigate('/homeUser')
    })()
  }, [token])

  return (
    <div main className="allForms">
      <form onSubmit={handleSubmit} className="form">
        <img className="logo_trini" src="src/image/Logo_Trini_redi.png" alt="Logo_Trini" />

        <div className="inputContainer">
          <label htmlFor="email" className="label">Correo</label>
        </div>
        <div className="inputContainer">
          <input type="email" name="email" id="email" className="input" placeholder="juan@example.com" required />
        </div>

        <div className="inputContainer">
          <label htmlFor="password" className="label">Contraseña</label>
        </div>
        <div className="inputContainer">
          <input type="password" name="password" id="password" className="input" placeholder="123456" required />
        </div>

        <input type="submit" className="submitBtn" value="Iniciar Sesion" />
      </form>
    </div>
  )
}

export default Login
