import { useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../contexts/DataContext'

function ViewProfile(user_id) {

    const {setData } = useContext(DataContext);
    const navigate = useNavigate();

    const viewProfileButtomHandler = () => {
        setData(user_id);
        navigate('/otherprofile')
    }
    return <>
        <div className="verPerfil">
            <button onClick={viewProfileButtomHandler}><h6>Ver Perfil</h6></button>
        </div>
    </>
}

export default ViewProfile