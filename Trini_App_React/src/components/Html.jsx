import './'

function Html() {
    return (
        <>
            <aside className="sidebar">
        <img className="logo_view" src="./assets/images/Logo_Trini_redi.png" alt="Logo_Trini_redi" />

        <nav className="navBar_btn_home">

            <div className="loginLogout_btn">
                <a href="http://google.com">Iniciar sesion</a>
            </div>
            <div className="register_btn">
                <a href="http://google.com">Registrarse</a>
            </div>

        </nav>

        <footer className="footer_home">
            <img className="navyBird" src="./assets/images/trini_navy.png" alt="" />

            <h4>@2023 Trini, Inc.</h4>
            <div className="developedBy">
                <p>Developed by: Jean | Marie |Olha. Program: {Powercoders} - Hack a boss.</p>
            </div>
        </footer>
    </aside>

        </>
    )
}

export default Html