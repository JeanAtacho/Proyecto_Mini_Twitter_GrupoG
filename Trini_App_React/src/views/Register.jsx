import { useNavigate } from 'react-router-dom'
import useServer from '../hooks/useServer.js'
import { toast } from 'react-toastify';

function Register() {
    const { post, get } = useServer()
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()

        const credentials = Object.fromEntries(new FormData(e.target))
        const { data } = await post({ url: '/user', body: credentials })
        console.log(credentials)
        if (data.status === 'ok') toast.success('Ya eres parte de Trini ;)')
        if (data) return navigate('/login')
    }

    return (
        <div main className="allForms">
            <form onSubmit={handleSubmit} className="form">
                <img className="logo_trini" src="src/image/Logo_Trini_redi.png" alt="Logo_Trini" />

                <div className="inputContainer">
                    <label htmlFor="name" className="label">Nombre</label>
                </div>
                <div className="inputContainer">
                    <input type="text" name="name" id="name" className="input" placeholder="Juan Alvarez"  />
                </div>

                <div className="inputContainer">
                    <label htmlFor="email" className="label">Correo</label>
                </div>
                <div className="inputContainer">
                    <input type="text" name="email" id="email" className="input" placeholder="juan@example.com" required />
                </div>

                <div className="inputContainer">
                    <label htmlFor="password" className="label">Contraseña</label>
                </div>
                <div className="inputContainer">
                    <input type="password" name="password" id="password" className="input" placeholder="123456" required />
                </div>

                <input type="submit" className="submitBtn" value="Registrar Usuario" />
            </form>
        </div>
    )
}

export default Register