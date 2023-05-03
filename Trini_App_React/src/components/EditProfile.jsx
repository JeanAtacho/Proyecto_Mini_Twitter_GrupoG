import { toast } from 'sonner';
import useAuth from '../hooks/useAuth.js';
import useServer from '../hooks/useServer.js'
import { useEffect, useRef, useState } from 'react';

function EditProfile({}) {
    const { user } = useAuth()
    const { put } = useServer()
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState('')
    const [file, setFile] = useState('')
    const fileRef = useRef()

    /*const handleSubmit = async e => {
        e.preventDefault()

        const credentials = new FormData(e.target)
        if(credentials.name && credentials.email){
            const { userData } = await put({ url: '/user/', body: credentials})
        }
        if(credentials.password){
            const { userPass } = await put({ url: '/user/password', body: credentials})
        }
        if(credentials.avatar){
            const formData = new FormData();
            formData.append('avatar', credentials.avatar);
            const headers = { 'Content-Type': 'multipart/form-data' };
            const { userAvatar } = await put({ url: '/user/avatar', body: formData, headers})
            console.log(userAvatar)
        }
        setShowModal(false);
        handleEditClick()
    }*/
    
    useEffect(() => {
        const timer = setTimeout(async () => {
            const credentials = { name, email }
            const { data } = await put({ url: '/user/', body: credentials})
            //if (data.status === 'ok') toast.success('Nombre o Email han sido actualizados')

        }, 2000);
        return () => clearTimeout(timer);
    }, [name, email])

    useEffect(() => {
        if (!password) return

        const timer = setTimeout(async () => {
            const credentials = { password }
            const { data } = await put({ url: '/user/password', body: credentials})
            //if (data.status === 'ok') toast.success('Contraseña ha sido actualizada')

        }, 2000);
        return () => clearTimeout(timer);
    }, [password])

    useEffect(() => {
        if (!file) return

        (async () => {
            const formData = new FormData(document.forms[0]);
            const { data } = await put({ url: '/user/avatar', body: formData, hasImage: true})
            //if (data.status === 'ok') toast.success('Contraseña ha sido actualizada')
        })()
    }, [file])



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
                                <input type="file" name="avatar" id="avatar" ref={fileRef} onChange={e => setFile(e.target.value)} accept="image/*" className="input" />
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

                            <div className="inputContainer">
                                <label htmlFor="password" className="label">Contraseña</label>
                            </div>
                            <div className="inputContainer">
                                <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} className="input" placeholder="123456" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
)}
    </>
}


export default EditProfile