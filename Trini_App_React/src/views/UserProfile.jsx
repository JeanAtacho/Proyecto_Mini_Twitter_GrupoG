import Trino from '../components/Trino.jsx'
import Aside from './aside.jsx'
import useAuth from '../hooks/useAuth.js'
import useServer from '../hooks/useServer.js'
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import HeaderProfile from "../components/HeaderProfile.jsx"

import TimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'
import { toast } from 'react-toastify';

TimeAgo.addDefaultLocale(es)
const timeAgo = new TimeAgo('es-ES')

function UserProfile() {
    const { get, post } = useServer()
    const [trinos, setTrinos] = useState([])
    const [user, setAuthUser] = useState({})
    const [unmounted, setUnmounted] = useState(false)
    const { isAuthenticated, token } = useAuth()
    const navigate = useNavigate()
    const [trinoText, setTrinoText] = useState('')

    const likeTrinoHandler = async (id) => {
    const response = await post({url:`/tweet/${id}/like`})
    fetchSingleUser(true)
    }

    
    async function createTrino(e) {
        e.preventDefault()

        const dataForm = new FormData(e.target)
        if(!isFormDataEmpty(dataForm)){
        const { data: { data: trino } } = await post({ url: '/', body: dataForm, hasImage: true })
        setTrinos([trino, ...trinos])
        setTrinoText('')
        if (trino) toast.success('Tu Trino ha sido publicado :)')   
        }     
    }
    //Validacion para que detecte si existe un arhivo y/o texto valido para hacer un trino.
    const isFormDataEmpty = (formData) => {
        let isEmpty = true;
      
        for (let [key, value] of formData.entries()) {
          if (value instanceof File) {
            if (value.size > 0) {
              isEmpty = false;
              break;
            }
          } else if (value && value.toString().trim() !== '') {
            isEmpty = false;
            break;
          }
        }
      
        return isEmpty;
      };

    async function fetchSingleUser(isUpdated) {
        const userData = await get({ url: '/user/', token: token })
        setAuthUser(userData.data)
            if (userData.data) {
                fetchUserTrinos(userData.data.data.id, isUpdated)
            }
    }
    const handleDeleteTrino = () => {
        fetchSingleUser(true)
    };
    const handleEditClick = () => {
        fetchSingleUser(true)
    };

        useEffect(() => {
            if (isAuthenticated === false) return navigate('/')
            fetchSingleUser(false)
    }, [])

    async function fetchUserTrinos(user_id, isUpdated) {
        try {
            const userTrinosData = await get({ url: '/user/' + user_id +'/tweets'})
            if (!unmounted) {
                setTrinos(userTrinosData.data.data.reverse())
            }
            if(isUpdated){
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
        <HeaderProfile user={user} handleEditClick={handleEditClick}/>  
        <Aside />
        
        <main className="main">
            <section className="boxTrinar">
                <form onSubmit={createTrino}>
                    <textarea name="text" className="input-trino" placeholder="Escribe tu trino aquí..." value={trinoText} onChange={(e) => setTrinoText(e.target.value)}></textarea>
                    <div className="new-trini-actions">
                        <label htmlFor="image-upload">
                            <i className="fa fa-upload"></i>
                        </label>
                        <input type="file" name="image" id="image-upload" />
                        <button className="btn-trinar" type="submit">Trinar</button>
                    </div>
                </form>

            </section>
            {trinos && trinos.map(trino => {
                if (user) {
                    return <Trino key={trino.id} trino={trino} user={user} timeAgo={timeAgo} authUser={user} isAuthenticated={isAuthenticated} handleDeleteTrino={handleDeleteTrino} likeTrinoHandler={likeTrinoHandler}/>
                } else {
                    return null
                }
            })}
        </main>
    </>
}

export default UserProfile