import { apiURL } from "../config"
import Trino from "./Trino"

function Profile() {
    return <section className="trinos_posted">
        <article className="trinos_article">
            <img className="profile_picture" src="src/image/trini_purple.png" alt="" />
            <h2>@Usuario_Trini</h2>
            <h3>Nombre_Apellido</h3>
        </article>

        <article className="trinos_article">
            <Trino/>
        </article>
    </section>
}

export default Profile