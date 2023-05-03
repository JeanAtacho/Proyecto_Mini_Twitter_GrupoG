import useServer from '../hooks/useServer.js'
import useAuth from '../hooks/useAuth.js'
import { useState } from 'react';

function EditProfile({handleEditClick}) {

    const { put } = useServer()
    const { isAuthenticated, token } = useAuth()
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault()
        if(isAuthenticated){
            const credentials = Object.fromEntries(new FormData(e.target))
            if(credentials.name && credentials.email){
                const { userData } = await put({ url: '/user/', token: token, body: credentials})
            }
            if(credentials.password){       
                const { userPass } = await put({ url: '/user/password', token: token, body: credentials})
            }
            if(credentials.avatar){
                const formData = new FormData();
                formData.append('avatar', credentials.avatar);
                const headers = { 'Content-Type': 'multipart/form-data' };
                const { userAvatar } = await put({ url: '/user/avatar', token: token, body: formData, headers})
                console.log(userAvatar)
            }
            setShowModal(false);
            handleEditClick()
        }
    }

    const handleEditProfile = e => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleModalCancel = e => {
        e.preventDefault();
        setShowModal(false);
    };




    return <>
        <button type="submit" className="editeProfile-btn" onClick={handleEditProfile} >
            <i class="fa-solid fa-user-pen">Editar Perfil</i>
        </button>
        {showModal && (
            <div className="modal">
                <div>

                    <div main >
                        <form onSubmit={handleSubmit} className="formEditProfile">

                            <div className="inputContainer">
                                <label htmlFor="avatar" className="label">Avatar</label>
                            </div>
                            <div className="inputContainer">
                                <input type="file" name="avatar" id="avatar" accept="image/*" encType="multipart/form-data" className="input" />
                            </div>

                            <div className="inputContainer">
                                <label htmlFor="name" className="label">Nombre</label>
                            </div>
                            <div className="inputContainer">
                                <input type="text" name="name" id="name" className="input" placeholder="Juan Alvarez" required />
                            </div>

                            <div className="inputContainer">
                                <label htmlFor="email" className="label">Correo</label>
                            </div>
                            <div className="inputContainer">
                                <input type="text" name="email" id="email" className="input" placeholder="juan@example.com" required />
                            </div>

                            <div className="inputContainer">
                                <label htmlFor="password" className="label">Contraseña</label>
                            </div>
                            <div className="inputContainer">
                                <input type="password" name="password" id="password" className="input" placeholder="123456" />
                            </div>

                            <input type="submit" className="submitBtn" value="Guardar" />
                            <input type="button" className="submitBtn" value="Cancelar" onClick={handleModalCancel} />
                        </form>
                    </div>
                </div>
            </div>
)}
    </>
}


export default EditProfile