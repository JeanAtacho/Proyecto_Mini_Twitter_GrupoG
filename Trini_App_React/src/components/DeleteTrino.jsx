import useServer from '../hooks/useServer.js'
import useAuth from '../hooks/useAuth.js'
import { useState } from 'react';

function DeleteTrino({trino, handleDeleteTrino}) {

    const { del } = useServer()
    const { isAuthenticated, token } = useAuth()
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault()
        if(isAuthenticated){
            const { data } = await del({ url: '/tweet/' + trino.id, token: token})
            handleDeleteTrino()
        }
    }

    const handleDeleteClick = e => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleModalConfirm = e => {
        e.preventDefault();
        setShowModal(false);
        handleSubmit(e);
    };

    const handleModalCancel = e => {
        e.preventDefault();
        setShowModal(false);
    };




    return <>
        <button type="submit" className="trini-img-punto-btn" onClick={handleDeleteClick} >
        <img  className="trini-img-punto" src="src/image/puntos.svg" alt="Borrar" />
        </button>
        {showModal && (
    <div className="modal">
        <div className="modal-content">
            <p>¿Está seguro que deseas eliminar este trino permanente?</p>
            <div className="modal-buttons">
                <button className='modalBtn-Si' onClick={handleModalConfirm}>Si</button>
                <button className='modalBtn-No' onClick={handleModalCancel}>No</button>
            </div>
        </div>
    </div>
)}
    </>
}


export default DeleteTrino