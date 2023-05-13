import { useEffect, useState, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../contexts/DataContext'
import HeaderOtherProfile from "../components/HeaderOtherProfile.jsx"
import Trino from '../components/Trino.jsx'

import useAuth from '../hooks/useAuth.js'
import useServer from '../hooks/useServer.js'

import Aside from './Aside.jsx'

import TimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'

TimeAgo.addDefaultLocale(es)
const timeAgo = new TimeAgo('es-ES')

function UserOtherProfile() {
    const { get, post } = useServer()
    const [trinos, setTrinos] = useState([])
    const [otherUser, setOtherUser] = useState({})
    const [unmounted, setUnmounted] = useState(false)
    const { isAuthenticated, user } = useAuth()
    const navigate = useNavigate()
    const { data } = useContext(DataContext);


    const likeTrinoHandler = async (id) => {
        const response = await post({ url: `/tweet/${id}/like` })
        fetchSingleUser(true)
    }

    

    async function fetchSingleUser(isUpdated) {
        const otherUserData = await get({ url: `/user/${data.user_id}` })
        setOtherUser(otherUserData.data)
        if (otherUserData.data) {
            fetchUserTrinos(otherUserData.data.data.id, isUpdated)
        }
    }

    useEffect(() => {
        if (isAuthenticated === false) return navigate('/')
        fetchSingleUser(false)
    }, [])

    async function fetchUserTrinos(user_id, isUpdated) {
        try {
            const otherUserTrinosData = await get({ url: `/user/${user_id}/tweets` })
            if (!unmounted) {
                setTrinos(otherUserTrinosData.data.data.reverse())
            }
            if (isUpdated) {
                setTrinos(otherUserTrinosData.data.data.reverse())
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
        <HeaderOtherProfile user={otherUser} />
        <Aside />

        <main className="mainPofile">

            {trinos && trinos.map(trino => {
                if (otherUser) {
                    return <Trino key={trino.id} trino={trino} user={otherUser} timeAgo={timeAgo} authUser={user} isAuthenticated={isAuthenticated} likeTrinoHandler={likeTrinoHandler} showUserProfile={false}/>
                } else {
                    return null
                }
            })}
        </main>
    </>
}

export default UserOtherProfile