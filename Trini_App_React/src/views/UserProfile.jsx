import Trino from '../components/Trino.jsx'
import useAuth from '../hooks/useAuth.js'
import useServer from '../hooks/useServer.js'
import { useEffect, useState } from "react"

import TimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'
TimeAgo.addDefaultLocale(es)
const timeAgo = new TimeAgo('es-ES')

function UserProfile() {
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
      <section>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint libero, dolore quam accusamus dicta consectetur placeat illo corporis quis rerum, natus vel laboriosam dolorem earum repellendus sequi eligendi, excepturi ad.</p>
      </section>
      <section className="main">
          {trinos && trinos.map(trino => <Trino key={trino.id} trino={trino} user={user} timeAgo={timeAgo} />)}
      </section>
    </>
}

export default UserProfile
// {trinos && trinos.map(trino => <Trino key={trino.id} trino={trino} user={user} timeAgo={timeAgo} />)}