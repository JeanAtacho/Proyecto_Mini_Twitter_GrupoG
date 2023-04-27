import {Link} from 'react-router-dom'

function Aside() {
    return <>
        <div className="grid-container">
        <header className="header">
            <h1>¡Sal de tu nido y comienza a trinar!</h1>
        </header>
    
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
                        <p>Developed by: Jean | Marie |Olha. Program: &#123; Powercoders &#125; - Hack a boss.</p>
                    </div>
            </footer>
        </aside>
    
        <main className="main">
            <section className="trinos_posted">
                <article className="trinos_article">
                    <img className="profile_picture" src="src/image/trini_purple.png" alt="" />
                    <h2>@Usuario_Trini</h2>
                    <h3>Nombre_Apellido</h3>
                    <p className="trino_phrase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, delectus? Iste in nulla, exercitationem aspernatur aliquid repellendus delectus quae dicta. Dolor fugit obcaecati error impedit iste esse, odio nisi corporis.</p>
                    <figure className="trino_image">
                        <img src="src/image/imagenTrinoEjemplo.jpg" alt="" />
                    </figure>
                </article>
            </section>
            <section className="trinos_posted">
                <article className="trinos_article">
                    <img className="profile_picture" src="src/image/trini_purple.png" alt="" />
                    <h2>@Usuario_Trini</h2>
                    <h3>Nombre_Apellido</h3>
                    <p className="trino_phrase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, delectus? Iste in nulla, exercitationem aspernatur aliquid repellendus delectus quae dicta. Dolor fugit obcaecati error impedit iste esse, odio nisi corporis.</p>
                    <figure className="trino_image">
                        <img src="src/image/imagenTrinoEjemplo.jpg" alt="" />
                    </figure>
                </article>
            </section>
            <section className="trinos_posted">
                <article className="trinos_article">
                    <img className="profile_picture" src="src/image/trini_purple.png" alt="" />
                    <h2>@Usuario_Trini</h2>
                    <h3>Nombre_Apellido</h3>
                    <p className="trino_phrase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, delectus? Iste in nulla, exercitationem aspernatur aliquid repellendus delectus quae dicta. Dolor fugit obcaecati error impedit iste esse, odio nisi corporis.</p>
                    <figure className="trino_image">
                        <img src="src/image/imagenTrinoEjemplo.jpg" alt="" />
                    </figure>
                </article>
            </section>

        </main>
    </div>
    </>    
}

export default Aside
