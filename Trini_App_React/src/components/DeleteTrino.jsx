import useServer from '../hooks/useServer.js'
import { useState } from 'react';
import { toast } from 'react-toastify';

function DeleteTrino({trino, handleDeleteTrino}) {

    const { delete: destroy } = useServer()
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault()
        
        const { data } = await destroy({ url: '/tweet/' + trino.id})
        handleDeleteTrino()
        if (data.status === 'ok') toast.success('El Trino ha sido eliminado satisfactoriamente')
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
        <img  className="trini-img-punto" src="/image/puntos.svg" alt="Borrar" />
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