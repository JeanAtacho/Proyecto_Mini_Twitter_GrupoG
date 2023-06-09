import { apiURL } from "../config"
import DeleteTrino from "./DeleteTrino"
import ViewProfile from "./ViewProfile"

function Trino({ trino, user, timeAgo, authUser, isAuthenticated, handleDeleteTrino, likeTrinoHandler, showUserProfile }) {

    const likeButtonHandler = () => {
        likeTrinoHandler(trino.id);
    }

    return <section className="trinos_posted">
        <article className="trinos_article">
            <div className="feed-trini-details">
                <div className="trini-detais">
                    <div className="trini-detais-info">
                        {user.data && user.data.avatar != null && (<>
                            <img
                                className="profile_pictureUserTrino"
                                src={`${apiURL}/uploads/${user.data.avatar}`}
                            />
                        </>)}
                        {user.data && user.data.avatar === null && (<>
                            <img
                                className="profile_pictureUserTrino"
                                src="/image/trini_purple.png" />
                        </>)}
                        {/* Aqui se debe aplicar la logica que permita que aparezca "ver perfil" en otros perfiles, solo si el user esta loggeado */}
                        {isAuthenticated && showUserProfile && authUser.id != user.data.id && (
                            <>
                                <ViewProfile user_id={user.data.id} />
                            </>
                        )
                        }
                        <h2>{user.data.name}</h2>
                        <h3>{trino.email}</h3>

                        <p className="trino_date">Trinado {timeAgo.format(new Date(trino.created_at))}</p>
                    </div>

                    {/*Aqui podemos reservar la accion de eliminar un trino, solo si el usuario ha iniciado sesion*/}
                    {isAuthenticated && user.data.id === authUser.id && (
                        <>
                            <DeleteTrino trino={trino} handleDeleteTrino={handleDeleteTrino} />
                        </>
                    )}
                </div>
                <p className="trino_phrase">{trino.text}</p>
                <figure className="trino_image">
                    <img src={`${apiURL}/uploads/${trino.image}`} alt="" />
                </figure>

                <button className={`likeTrino ${trino.likes > 0 ? 'icon-heart' : ''}`} onClick={likeButtonHandler}>
                    <i className="fa fa-heart"></i>
                    <span>{trino.likes > 0 ? trino.likes : ''}</span>
                </button>
            </div>
        </article>
    </section>
}

export default Trino
