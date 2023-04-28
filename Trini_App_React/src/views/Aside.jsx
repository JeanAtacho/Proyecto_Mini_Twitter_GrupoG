import {Link} from 'react-router-dom'
import Creditos from '../components/creditos'

import useAuth from '../hooks/useAuth'

function Aside() {
    const { isAuthenticated, logout } = useAuth()
    return <>
        <aside className="sidebar">
            <img className="logo_view" src="src/image/Logo_Trini_redi.png" />
    
            <nav className="navBar_btn_home">
                <div>
                    {!isAuthenticated && <Link to="./login" className="login_btn">Iniciar sesion</Link>}
                </div>
                <div>
                    {!isAuthenticated && <Link to="./register" className="login_btn">Registrar Usuario</Link>}
                </div>

                <div>
                    {isAuthenticated && <Link to="/#" className="login_btn" onClick={logout}>Cerrar sesión</Link>}
                </div>
            </nav>
    
            <footer className="footer">
                <img className="navyBird" src="src/image/trini_navy.png" alt="" />
            
                <h4>@2023 Trini, Inc.</h4>
                    <div className="developedBy">
                        <Creditos />
                    </div>
            </footer>
        </aside>
    </>    
}

export default Aside
