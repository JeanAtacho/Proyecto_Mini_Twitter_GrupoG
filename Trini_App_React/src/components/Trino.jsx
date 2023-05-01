import { apiURL } from "../config"

function Trino({ trino, user, timeAgo }) {

    return <section className="trinos_posted">
        <article className="trinos_article">
            <div className="feed-trini-details">
                <div className="trini-detais">
                    <div className="trini-detais-info">
                        <img className="profile_picture" src="src/image/trini_purple.png" alt="" />
                        <h2>{user.data.email}</h2>
                        <h3>{trino.email}</h3>
                        <p className="trino_date">Trinado {timeAgo.format(new Date(trino.created_at))}</p>
                    </div>
                    <img src="src/image/puntos.svg" alt="" class="trini-img-punto" />
                </div>
                <p className="trino_phrase">{trino.text}</p>
                <figure className="trino_image">
                    <img src={`${apiURL}/uploads/${trino.image}`} alt="" />
                </figure>
                <div className="trini-icons">
                    <img src="src/image/heart.svg" alt="heart" class="trini-heart" />
                </div>
            </div>
        </article>
    </section>
}

Trino.defaultProps = {
    user: { data: {name: "Unknown author" }},
    timeAgo: null,
  };

export default Trino
