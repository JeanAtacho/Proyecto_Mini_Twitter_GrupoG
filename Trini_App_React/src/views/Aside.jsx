import { Link } from 'react-router-dom'

import useAuth from '../hooks/useAuth'

import Creditos from '../components/creditos'

function Aside() {
    const { isAuthenticated, logout } = useAuth()

    const handleLogout = () => {
        // Borrar todos los datos almacenados en localStorage
        localStorage.clear();
        // Llamar a la función logout para cerrar la sesión en la aplicación
        logout();
    };

    return <>
        <aside className="sidebar">
            <img className="logo_view" src="/image/Logo_Trini_redi.png" />

            <nav className="navBar_btn_home">
                <div>
                    {!isAuthenticated && <Link to="./login" className="login_btn">Iniciar Sesión</Link>}
                </div>

                <div>
                    {!isAuthenticated && <Link to="./register" className="login_btn">Registrar Usuario</Link>}
                </div>

                <div>
                    {isAuthenticated && <Link to="/homeUser" className="login_btn">Inicio</Link>}
                </div>

                <div>
                    {isAuthenticated && <Link to="/profile" className="login_btn">Perfil</Link>}
                </div>

                <div>
                    {isAuthenticated && <Link to="/#" className="login_btn" onClick={handleLogout}>Cerrar sesión</Link>}
                </div>

            </nav>

            <footer className="footer">
                <img className="navyBird" src="/image/trini_purple.png" alt="" />

                <h4>@2023 Trini, Inc.</h4>
                <div className="developedBy">
                    <Creditos />
                </div>
            </footer>
        </aside>
    </>
}

export default Aside
