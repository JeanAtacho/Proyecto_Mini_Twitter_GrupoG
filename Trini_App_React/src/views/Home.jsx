import Trino from '../components/Trino.jsx'
import Header from '../components/Header.jsx'
import Aside from './aside.jsx'
import useAuth from '../hooks/useAuth.js'
import useServer from '../hooks/useServer.js'
import { useEffect, useState } from "react"

import TimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'
TimeAgo.addDefaultLocale(es)
const timeAgo = new TimeAgo('es-ES')

function Home() {
    const { get } = useServer()
    const { user } = useAuth()
    const [trinos, setTrinos] = useState([])


    async function fetchTrinos() {
        const trinosData = await get({ url: '/' })
        setTrinos(trinosData.data.data)
    }

    useEffect(() => {
        fetchTrinos()
    }, [])

    return <>
      <Header />
      <Aside />
      <main className="main">
        {trinos && trinos.map(trino => <Trino key={trino.id} trino={trino} user={user} timeAgo={timeAgo} />)}
      </main>
    </>
}

export default Home
