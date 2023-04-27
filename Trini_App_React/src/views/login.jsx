import { useNavigate } from 'react-router-dom'
import useServer from '../hooks/useServer.js'
import Creditos from '../components/creditos.jsx'

function Login() {
  const { post, get } = useServer()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    const credentials = Object.fromEntries(new FormData(e.target))
    const { data } = await post({ url: '/login', body: credentials })
    const usr = data && await get({ url: '/user/' })
    console.log({ user: usr })
    if (usr) return navigate('/')
  }

  return (
      <main className="allForms">
        <form onSubmit={handleSubmit} className="form">
            <img className="logo_trini" src="./assets/Images/Logo_Trini_redi.png" alt="Logo_Trini" />

            <div className="inputContainer">
                <input type="text" name="email" id="email" className="input" placeholder="juan@example.com" required />
                <label htmlFor="email" className="label">Correo</label>
            </div>
            <div className="inputContainer">
                <input type="password" name="password" id="password" className="input" placeholder="123456" required />
                <label htmlFor="password" className="label">Contraseña</label>
            </div>
            <hr /> 
            <input type="submit" className="submitBtn" value="Ingresar" />


            <h3 className="btnTitle">¿Ya eres usuario <span>Trini</span>?</h3>

            <h3 className="btnTitle">¿Aún no eres usuario <span>Trini</span>?</h3>
            <input type="submit" className="submitBtn" value="Registrar" />

            <h3 className="btnTitle">¿Quieres saber de que va <span>Trini</span> <br /> como anónimo?</h3>
            <input type="submit" className="submitBtn" value="Explorar" />
        </form>

        <img className="logoTriniBlanco" src="./assets/Images/Logo_Trini_Blanco.png" alt="Logo_trini_blanco" />

    </main>
  )
}

export default Login
