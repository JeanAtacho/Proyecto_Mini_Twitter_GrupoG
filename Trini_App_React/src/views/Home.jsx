import { useEffect, useState } from "react"

import useAuth from '../hooks/useAuth.js'
import useServer from '../hooks/useServer.js'

import Trino from '../components/Trino.jsx'
import Header from '../components/Header.jsx'
import Aside from './aside.jsx'

import TimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'
TimeAgo.addDefaultLocale(es)
const timeAgo = new TimeAgo('es-ES')

function Home() {
    const { get } = useServer()
    const [trinos, setTrinos] = useState([])
    const [users, setUsers] = useState({})
    const [unmounted, setUnmounted] = useState(false)
    const { isAuthenticated, userAuth } = useAuth()

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
            console.log("este es mi usuario" + userAuth + isAuthenticated)
        }
    }, [])

    useEffect(() => {
        fetchTrinos()
    }, [])

    return <>
        <Header />
        <Aside />
        <main className="main">
            {trinos && trinos.map(trino => {
                const user = users[trino.user_id]
                if (user) {
                    return <Trino key={trino.id} trino={trino} user={user} timeAgo={timeAgo} authUser={null}
                    isAuthenticated={isAuthenticated} />
                } else {
                    return null
                }
            })}
        </main>
    </>
}

export default Home
