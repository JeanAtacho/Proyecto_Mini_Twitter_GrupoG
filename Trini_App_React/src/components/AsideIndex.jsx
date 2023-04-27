import Creditos from "./creditos"

function AsideIndex() {
    return <>
            <aside className="sidebar">
            <img className="logo_view" src="src/image/Logo_Trini_redi.png" />
    
            <nav className="navBar_btn_home">
                <div className="login_btn">
                    <Link to="./login.jsx">Iniciar sesion</Link>
                </div>
                <div className="register_btn">
                    <Link to="http://google.com">Registrar Usuario</Link>
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

export default AsideIndex