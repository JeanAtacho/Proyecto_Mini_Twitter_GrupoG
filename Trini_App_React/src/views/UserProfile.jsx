import Trino from '../components/Trino.jsx'
import Aside from './aside.jsx'
import useAuth from '../hooks/useAuth.js'
import useServer from '../hooks/useServer.js'
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import HeaderProfile from "../components/HeaderProfile.jsx"

import TimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'
TimeAgo.addDefaultLocale(es)
const timeAgo = new TimeAgo('es-ES')

function UserProfile() {
    const { get, post } = useServer()
    const [trinos, setTrinos] = useState([])
    const [user, setAuthUser] = useState({})
    const [unmounted, setUnmounted] = useState(false)
    const { isAuthenticated, token } = useAuth()
    const navigate = useNavigate()

    async function createTrino(e) {
        e.preventDefault()

        const dataForm = new FormData(e.target)
        const { data: { data: trino } } = await post({ url: '/', body: dataForm, hasImage: true })
        setTrinos([trino, ...trinos])
    }

    async function fetchSingleUser(isBorrado) {
        const userData = await get({ url: '/user/', token: token })
        setAuthUser(userData.data)
            if (userData.data) {
                fetchUserTrinos(userData.data.data.id, isBorrado)
            }
    }
    const handleDeleteTrino = () => {
        fetchSingleUser(true)
      };

        useEffect(() => {
            if (isAuthenticated === false) return navigate('/')
            fetchSingleUser(false)
    }, [])

    async function fetchUserTrinos(user_id, isBorrado) {
        try {
            const userTrinosData = await get({ url: '/user/' + user_id +'/tweets'})
            if (!unmounted) {
                setTrinos(userTrinosData.data.data.reverse())
            }
            if(isBorrado){
                setTrinos(userTrinosData.data.data.reverse())
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


    return <>
        <HeaderProfile user={user}/>  
        <Aside />
        
        <main className="main">
        <section className="boxTrinar">
                <form onSubmit={createTrino}>
                    <textarea name="text" className="input-trino" placeholder="Escribe tu trino aquí..."></textarea>
                    <div className="new-trini-actions">
                        <input type="file" name="image" id="" />
                        <button className="btn-trinar" type="submit">Trinar</button>
                    </div>
                </form>
            </section>
            {trinos && trinos.map(trino => {
                if (user) {
                    return <Trino key={trino.id} trino={trino} user={user} timeAgo={timeAgo} authUser={user} isAuthenticated={isAuthenticated} handleDeleteTrino={handleDeleteTrino}/>
                } else {
                    return null
                }
            })}
        </main>
    </>
}

export default UserProfile