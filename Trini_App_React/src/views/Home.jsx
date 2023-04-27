import { Link } from "react-router-dom"

function Index() {

  return <>
    <div className="grid-container">


      <header className="header">
        <div id="page-container">
          <div id="dashboard">
            <div id="profile-summary">
              <div className="content">
                <img className='avatar' src="assets/images/cristobal.jpeg" />
                <p className="user">@Usuario</p>
              </div>
            </div>
          </div>
        </div>
          <div>
            <div id="tweet-content">
              <textarea className="tweet-compose" placeholder="Introduce tu mensaje con un máximo de 250 carácteres"></textarea>
              <div id="tweet-controls">
                <button className="trinar_btn" id="trinar-submit">Trinar</button>
              </div>
            </div>
          </div>
      </header>

      <aside className="sidebar">
        <img className="logo_view" src="./assets/images/Logo_Trini_redi.png" alt="Logo_Trini_redi" />

        <nav className="navBar_btn_home">
          <div className="sidebar-menu_item sidebar-menu_item-active">
            <img src="./assets/images/hometrini.svg" alt="" className="sidebar-menu_item-icon" />
            Inicio
          </div>
          <div className="sidebar-menu_item">
            <img src="./assets/images/usertrini.svg" alt="" className="sidebar-menu_item-icon" />
            Perfil
          </div>
          <div className="salir_btn">
            <Link to="http://google.com">Salir</Link>
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

      <main className="main">
        <section className="trinos_posted">
          <article className="trinos_article">
            <img className="profile_picture" src="./assets/images/trini_purple.png" alt="" />
            <h2>@Usuario</h2>
            <p className="trino_phrase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, delectus? Iste in nulla, exercitationem aspernatur aliquid repellendus delectus quae dicta. Dolor fugit obcaecati error impedit iste esse, odio nisi corporis.</p>
            <figure className="trino_image">
              <img src="./assets/images/imagenTrinoEjemplo.jpg" alt="" />
            </figure>
          </article>
        </section>
        <section className="trinos_posted">
          <article className="trinos_article">
            <img className="profile_picture" src="./assets/images/trini_purple.png" alt="" />
            <h2>@Usuario</h2>
            <p className="trino_phrase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, delectus? Iste in nulla, exercitationem aspernatur aliquid repellendus delectus quae dicta. Dolor fugit obcaecati error impedit iste esse, odio nisi corporis.</p>
            <figure className="trino_image">
              <img src="./assets/images/imagenTrinoEjemplo.jpg" alt="" />
            </figure>
          </article>
        </section>
        <section className="trinos_posted">
          <article className="trinos_article">
            <img className="profile_picture" src="./assets/images/trini_purple.png" alt="" />
            <h2>@Usuario</h2>
            <p className="trino_phrase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, delectus? Iste in nulla, exercitationem aspernatur aliquid repellendus delectus quae dicta. Dolor fugit obcaecati error impedit iste esse, odio nisi corporis.</p>
            <figure className="trino_image">
              <img src="./assets/images/imagenTrinoEjemplo.jpg" alt="" />
            </figure>
          </article>
        </section>

      </main>
    </div>
  </>
}

export default Index
