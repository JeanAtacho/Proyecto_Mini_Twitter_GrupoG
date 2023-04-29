import { apiURL } from "../config"

function Trino({ trino, user, timeAgo }) {
    return <section className="trinos_posted">
        <article className="trinos_article">
            <img className="profile_picture" src="src/image/trini_purple.png" alt="" />
            <h2>@Usuario_Trini</h2>
            <h3>Nombre_Apellido</h3>
            <p className="trino_phrase">{trino.text}</p>
            <figure className="trino_image">
                <img src={`${apiURL}/uploads/${trino.image}`} alt="" />
            </figure>
            <p>{timeAgo.format(new Date(trino.created_at))}</p>
        </article>
    </section>
}

export default Trino
