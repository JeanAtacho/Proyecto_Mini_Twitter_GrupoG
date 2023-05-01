import Trino from '../components/Trino.jsx'
import Aside from './aside.jsx'
import useAuth from '../hooks/useAuth.js'
import useServer from '../hooks/useServer.js'
import { useEffect, useState } from "react"

import TimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'
TimeAgo.addDefaultLocale(es)
const timeAgo = new TimeAgo('es-ES')

function HomeUser() {
    const { get, post } = useServer()
    const [trinos, setTrinos] = useState([])
    const [users, setUsers] = useState({})
    const [unmounted, setUnmounted] = useState(false)
    const { isAuthenticated, token } = useAuth()

    async function createTrino(e) {
        e.preventDefault()

        const dataForm = new FormData(e.target)
        const { data: { data: trino } } = await post({ url: '/', body: dataForm, hasImage: true })
        setTrinos([trino, ...trinos])
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
            console.log("este es mi usuario" + token + isAuthenticated)
        }
    }, [])

    useEffect(() => {
        fetchTrinos()
    }, [])

    return <>
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
                const user = users[trino.user_id]
                if (user) {
                    return <Trino key={trino.id} trino={trino} user={user} timeAgo={timeAgo} />
                } else {
                    return null
                }
            })}
        </main>
    </>
}

export default HomeUser