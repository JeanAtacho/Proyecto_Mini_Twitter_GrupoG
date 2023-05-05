import useAuth from '../hooks/useAuth.js';
import useServer from '../hooks/useServer.js'
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

function EditProfile({ handleEditClick }) {
    const { user } = useAuth()
    const { put } = useServer()
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState('')
    const [file, setFile] = useState('')
    const fileRef = useRef()

    useEffect(() => {
        const savedData = getFromLocalStorage('user');
        if (name === savedData.user.name) return
        const timer = setTimeout(async () => {
            const credentials = { name, email }
            const { data } = await put({ url: '/user/', body: credentials })
            handleEditClick();
            if (data.status === 'ok') toast.success('Nombre o Email han sido actualizados')
        }, 3000);
        return () => clearTimeout(timer);
    }, [name, email])

    /*
    funcion para el password pero por el error del servio no se va a implementar
    useEffect(() => {
        if (!password) return

        const timer = setTimeout(async () => {
            const credentials = { password }
            const { data } = await put({ url: '/user/password', body: credentials })
            handleEditClick();
            localStorage.removeItem('token')
            if (data.status === 'ok') toast.success('Contraseña ha sido actualizada')
        }, 2000);
        return () => clearTimeout(timer);
    }, [password]) */

        useEffect(() => {
            if (!file) return

            (async () => {
                const formData = new FormData(document.forms[0]);
                const { data } = await put({ url: '/user/avatar', body: formData, hasImage: true })
                handleEditClick();
                if (data.status === 'ok') toast.success('Avatar ha sido actualizado')
            })()
        }, [file])

        const getFromLocalStorage = (key) => {
            try {
                const data = localStorage.getItem(key);
                return data ? JSON.parse(data) : null;
            } catch (error) {
                console.error('Error al leer de localStorage:', error);
                return null;
            }
        };

        const handleEditProfile = e => {
            e.preventDefault();
            setShowModal(true);
        };

        const handleClose = async e => {
            e.preventDefault()
            setShowModal(false);
        }



        return <>
            <button type="submit" className="editeProfile-btn" onClick={handleEditProfile} >
                <i className="fa-solid fa-user-pen">Editar Perfil</i>
            </button>
            {showModal && (
                <div className="modal">
                    <div>

                        <div main >
                            <form className="formEditProfile">

                                <div className="inputContainer">
                                    <label htmlFor="avatar" className="label">Avatar</label>
                                </div>
                                <div className="inputContainer">
                                    <input type="file" name="avatar" id="avatar" ref={fileRef} onChange={e => setFile(e.target.files[0])} accept="image/*" className="input" />
                                </div>

                                <div className="inputContainer">
                                    <label htmlFor="name" className="label">Nombre</label>
                                </div>
                                <div className="inputContainer">
                                    <input type="text" name="name" id="name" className="input" placeholder="Juan Alvarez" value={name} onChange={e => setName(e.target.value)} required />
                                </div>

                                <div className="inputContainer">
                                    <label htmlFor="email" className="label">Correo</label>
                                </div>
                                <div className="inputContainer">
                                    <input type="text" name="email" id="email" className="input" placeholder="juan@example.com" value={email} required onChange={e => setEmail(e.target.value)} />
                                </div>
                                
                                {/*
                                <div className="inputContainer">
                                    <label htmlFor="password" className="label">Contraseña</label>
                                </div>
                                <div className="inputContainer">
                                    <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} className="input" placeholder="123456" />
                                </div> */}
                                <div className="modal-buttons">
                                    <button className='modalBtn-cerrar' onClick={handleClose}>Cerrar</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    }


export default EditProfile