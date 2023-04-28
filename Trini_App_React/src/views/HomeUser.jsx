import { Link } from "react-router-dom"
import useServer from '../hooks/useServer.js'
import { useEffect, useState } from "react"

function HomeUser() {
    const { get } = useServer()
    const [trinos, setTrinos] = useState([])
    useEffect(() => {
        async function fetchTrinos() {
            const { todosTrino } = await get({ url: '/' })
            setTrinos(todosTrino.data)
        }
        fetchTrinos()
    }, [])


    return <>
        <main className="main">
            <section class="boxTrinar">
                <form>
                    <textarea class="input-trino" placeholder="Escribe tu trino aquí..."></textarea>
                    <button class="btn-trinar" type="submit">Trinar</button>
                </form>
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
    </>
}

export default HomeUser