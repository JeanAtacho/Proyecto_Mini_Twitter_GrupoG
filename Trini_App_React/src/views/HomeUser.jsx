import { useEffect, useState } from "react"

import Trino from '../components/Trino.jsx'
import Header from "../components/HeaderProfile.jsx"


import useAuth from '../hooks/useAuth.js'
import useServer from '../hooks/useServer.js'


import TimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'
import Aside from "./aside.jsx"
TimeAgo.addDefaultLocale(es)
const timeAgo = new TimeAgo('es-ES')

function HomeUser() {
    const { get, post } = useServer()
    const {isAuthenticated, user} = useAuth()
    const [trinos, setTrinos] = useState([])

    async function fetchTrinos() {
        const trinosData = await get({ url: '/' })
        setTrinos(trinosData.data.data)
    }


    useEffect(() => {
        fetchTrinos()
    }, [])

    // useEffect(() => {
    //     console.log({trinos})
    // }, [trinos])

    async function createTrino(e) {
        e.preventDefault()

        const dataForm = new FormData(e.target)
        const { data: {data: trino} } = await post({ url: '/', body: dataForm, hasImage: true })
        setTrinos([trino, ...trinos])
    }

    return <>
        <Aside/>
        <main className="main">
            <section className="boxTrinar">
                <form onSubmit={createTrino}>
                    <textarea name="text" className="input-trino" placeholder="Escribe tu trino aquí..."></textarea>
                    <input type="file" name="image" id="" />
                    <button className="btn-trinar" type="submit">Trinar</button>
                </form>
            </section>
            {trinos && trinos.map(trino => <Trino key={trino.id} trino={trino} user={user} timeAgo={timeAgo} />)}
        </main>
        </>
}

export default HomeUser
