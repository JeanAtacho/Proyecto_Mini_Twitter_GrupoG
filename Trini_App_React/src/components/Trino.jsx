import { apiURL } from "../config"

function Trino({ trino, user, timeAgo }) {
    return <section className="trinos_posted">
        <article className="trinos_article">
            <div className="feed-trini-details">
                <div className="trini-detais">
                    <div className="trini-detais-info">
                        <img className="profile_picture" src="src/image/trini_purple.png" alt="" />
                        <h2>@Usuario_Trini</h2>
                        <h3>Nombre_Apellido</h3>
                        <p className="trino_date">Trinado {timeAgo.format(new Date(trino.created_at))}</p>
                    </div>
                    <img src="src/image/puntos.svg" alt="" class="trini-img-punto" />
                </div>
                <p className="trino_phrase">{trino.text}</p>
                <figure className="trino_image">
                    <img src={`${apiURL}/uploads/${trino.image}`} alt="" />
                </figure>
                <div class="trini-icons">
                    <img src="src/image/heart.svg" alt="heart" class="trini-heart" />
                </div>
            </div>
        </article>
    </section>
}

export default Trino
