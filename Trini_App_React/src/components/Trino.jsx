import { apiURL } from "../config"
import DeleteTrino from "./DeleteTrino"
import { useState } from "react";

function Trino({ trino, user, timeAgo, authUser, isAuthenticated, handleDeleteTrino, likeTrinoHandler}) {
    
    
    const likeButtonHandler = () => {
        likeTrinoHandler(trino.id);
    }

    return <section className="trinos_posted">
        <article className="trinos_article">
            <div className="feed-trini-details">
                <div className="trini-detais">
                    <div className="trini-detais-info">
                        <img className="profile_picture" src="src/image/trini_purple.png" alt="" />
                        <h2>{user.data.name}</h2>
                        <h3>{trino.email}</h3>
                        
                    </div>
                    <p className="trino_date">Trinado {timeAgo.format(new Date(trino.created_at))}</p>
                    {isAuthenticated && user.data.id === authUser.data.id && (
                <>
                <DeleteTrino trino={trino} handleDeleteTrino={handleDeleteTrino}/>
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
