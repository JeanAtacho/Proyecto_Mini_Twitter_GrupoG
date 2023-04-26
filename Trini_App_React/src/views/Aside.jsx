import {Link} from 'react-router-dom'

function Aside() {
    return <>
        <header className="header">
            <h1>¡Sal de tu nido y comienza a trinar!</h1>
        </header>
    
        <aside className="sidebar">
            <img className="logo_view" src="../assets/images/Logo_Trini_redi.png" alt="Logo_Trini_redi" />
    
            <nav className="navBar_btn_home">
                <div className="login_btn">
                    <Link to="/login">Iniciar sesion</Link>
                </div>
                <div className="register_btn">
                    <Link to="http://google.com">Registrarse</Link>
                </div>
            </nav>
    
            <footer className="footer">
                <img className="navyBird" src="./assets/images/trini_navy.png" alt="" />
            
                <h4>@2023 Trini, Inc.</h4>
                    <div className="developedBy">
                        <p>Developed by: Jean | Marie |Olha. Program: &#123; Powercoders &#125; - Hack a boss.</p>
                    </div>
            </footer>
        </aside>
    </>    
}

export default Aside
