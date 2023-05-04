import Trino from '../components/Trino.jsx'
import Aside from './aside.jsx'
import useAuth from '../hooks/useAuth.js'
import useServer from '../hooks/useServer.js'
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

import TimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'
import { toast } from 'react-toastify';
import { useRef } from 'react'
TimeAgo.addDefaultLocale(es)
const timeAgo = new TimeAgo('es-ES')

function HomeUser() {
    const { get, post } = useServer()
    const [trinos, setTrinos] = useState([])
    const [users, setUsers] = useState({})
    const [unmounted, setUnmounted] = useState(false)
    const { isAuthenticated, token } = useAuth()
    const [authUser, setAuthUser] = useState({})
    const navigate = useNavigate()
    const [trinoText, setTrinoText] = useState('')
    const [file, setFile] = useState(null);
    const fileRef = useRef();

    const likeTrinoHandler = async (id) => {
        const response = await post({ url: `/tweet/${id}/like` })
        fetchTrinos()
    }

    async function createTrino(e) {
        e.preventDefault()
        const dataForm = new FormData(e.target)
        if (isFormDataValid(dataForm)) {
            const { data: { data: trino } } = await post({ url: '/', body: dataForm, hasImage: true })
            setTrinos([trino, ...trinos])
            setTrinoText('')
            fileRef.current.value = '';
            setFile(null)
            if (trino) toast.success('Tu Trino ha sido publicado :)')
        }
    }

    //Validacion para que detecte si existe un arhivo y/o texto valido para hacer un trino.
    const isFormDataValid = (formData) => {
        let hasText = false;
        let hasImage = false;

        for (let [key, value] of formData.entries()) {
            if (value instanceof File) {
                if (value.size > 0) {
                    hasImage = true;
                }
            } else if (value && value.toString().trim() !== '') {
                hasText = true;
            }
        }

        // Si hay una imagen sin texto, no es válido
        if (hasImage && !hasText) {
            return false;
        }

        // Si no hay texto ni imagen, no es válido
        if (!hasText && !hasImage) {
            return false;
        }

        return true;
    };


    const handleDeleteTrino = () => {
        fetchTrinos()
    }

    async function fetchTrinos() {
        const trinosData = await get({ url: '/' })
        setTrinos(trinosData.data.data)
        trinosData.data.data.forEach(trino => {
            if (!users[trino.user_id]) {
                fetchUserTrino(trino.user_id)
            }
        })
    }
    async function fetchSingleUser() {
        const userData = await get({ url: '/user/', token: token })
        setAuthUser(userData.data)
    }
    async function fetchUserTrino(user_id) {
        try {
            const userData = await get({ url: '/user/' + user_id })
            if (!unmounted) {
                setUsers(prevState => ({ ...prevState, [user_id]: userData.data }))
            }
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        return () => {
            setUnmounted(true)
        }
    }, [])
    useEffect(() => {
        if (isAuthenticated === false) return navigate('/')
        fetchTrinos()
        fetchSingleUser()
    }, [])

    return <>
        <Aside />

        <main className="main">
            <section className="boxTrinar">
                <form onSubmit={createTrino}>
                    <textarea name="text" className="input-trino" placeholder="Escribe tu trino aquí..." value={trinoText} onChange={(e) => setTrinoText(e.target.value)}></textarea>
                    <div className="new-trini-actions">
                        <label htmlFor="image-upload">
                            <i className="fa fa-upload"></i>
                        </label>
                        <input type="file" name="image" id="image-upload" ref={fileRef}
                            onChange={e => setFile(e.target.files[0])} />
                        <button className="btn-trinar" type="submit">Trinar</button>
                    </div>
                </form>
            </section>
            {trinos && trinos.map(trino => {
                const user = users[trino.user_id]
                if (user) {
                    return <Trino key={trino.id} trino={trino} user={user} timeAgo={timeAgo} authUser={authUser} isAuthenticated={isAuthenticated} handleDeleteTrino={handleDeleteTrino} likeTrinoHandler={likeTrinoHandler} />
                } else {
                    return null
                }
            })}
        </main>
    </>
}

export default HomeUser