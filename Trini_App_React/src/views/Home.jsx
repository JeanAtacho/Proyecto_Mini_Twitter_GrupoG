import { Link } from "react-router-dom"

function Home() {

  return <>
    <main className="main">
      <section className="trinos_posted">
        <article className="trinos_article">
          <div className="feed-trini-details">
            <div className="trini-detais">
              <div className="trini-detais-info">
                <img className="profile_picture" src="./assets/images/trini_purple.png" alt="" />
                <h2>@Usuario_Trini</h2>
                <h3>Nombre_Apellido</h3>
                <p className="trini-handler">Trinado hace 1 hora</p>
              </div>
              <img src="./assets/Images/puntos.svg" alt="" className="trini-img-punto" />
            </div>
            <p className="trino_phrase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
              delectus? Iste in nulla, exercitationem aspernatur aliquid repellendus delectus quae dicta.
              Dolor fugit obcaecati error impedit iste esse, odio nisi corporis.</p>
            <figure className="trino_image">
              <img src="src/image/imagenTrinoEjemplo.jpg" alt="" />
            </figure>
            <div className="trini-icons">
              <img src="./assets/images/heart.svg" alt="heart" className="trini-heart" />
            </div>
          </div>
        </article>
      </section>
      <section className="trinos_posted">
        <article className="trinos_article">

          <div className="feed-trini-details">
            <div className="trini-detais">
              <div className="trini-detais-info">
                <img className="profile_picture" src="./assets/images/trini_purple.png" alt="" />
                <h2>@Usuario_Trini</h2>
                <h3>Nombre_Apellido</h3>
                <p className="trini-handler">Trinado hace 2 hora</p>
              </div>
              <img src="./assets/Images/puntos.svg" alt="" className="trini-img-punto" />
            </div>
            <p className="trino_phrase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
              delectus? Iste in nulla, exercitationem aspernatur aliquid repellendus delectus quae dicta.
              Dolor fugit obcaecati error impedit iste esse, odio nisi corporis.</p>
            <figure className="trino_image">
              <img src="./assets/images/imagenTrinoEjemplo.jpg" alt="" />
            </figure>
            <div className="trini-icons">
              <Link to="!#"><img src="./assets/images/heart.svg" alt="heart" className="trini-heart" /></Link>
            </div>
          </div>
        </article>
      </section>
      <section className="trinos_posted">
        <article className="trinos_article">

          <div className="feed-trini-details">
            <div className="trini-detais">
              <div className="trini-detais-info">
                <img className="profile_picture" src="./assets/images/trini_purple.png" alt="" />
                <h2>@Usuario_Trini</h2>
                <h3>Nombre_Apellido</h3>
                <p className="trini-handler">Trinado hace 3 hora</p>
              </div>
              <img src="./assets/Images/puntos.svg" alt="" className="trini-img-punto" />
            </div>
            <p className="trino_phrase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
              delectus? Iste in nulla, exercitationem aspernatur aliquid repellendus delectus quae dicta.
              Dolor fugit obcaecati error impedit iste esse, odio nisi corporis.</p>
            <figure className="trino_image">
              <img src="./assets/images/imagenTrinoEjemplo.jpg" alt="" />
            </figure>
            <div className="trini-icons">
              <Link to="!#"><img src="./assets/images/heart.svg" alt="heart" className="trini-heart" /></Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  </>
}

export default Home
