import { toast } from 'sonner'
import httpService from '../services/httpService.js'
import useAuth from './useAuth.js'

function useServer() {
  const { token, setUser } = useAuth()

  const handleResponse = ({ data, loading, error, url }) => {
    
    if (data?.status === 'ok' && url === '/login') {
      setUser({token: data.data})
    }
    //se agrego una validacion para que cuando se trae la informacion de los usuarios
    //de cada trino no actualice al usuario actual de la aplicacion
    //porque cada vez que se ejecuta un get se llama al handleResponse
    //como se usa una peticion para consultar la data de cada usuario por trino
    //y esta peticion tiene un correo, entonces detectaba que tenia un correo y actualizaba
    //al usuario actual, muchas veces, por cada peticion de usuario que tenia un trino.
    const pattern = /^\/user\/[^/]+/;
    if (data?.data?.email  && !pattern.test(url)) {
      setUser({ user: data.data })
    }

    if (error && error.status === "error") {
      toast.error('usuario o contraseña incorrecto')
    } else {
        if (error){
          toast.error(error.message)
        }
    }

    return { data, loading, error }
  }
  
  return {
    get: ({ url }) => httpService({ method: 'GET', url, token }).then(handleResponse),
    post: ({ url, body, hasImage }) => httpService({ method: 'POST', url, token, body, hasImage }).then(handleResponse),
    put: ({ url, body, hasImage }) => httpService({ method: 'PUT', url, token, body, hasImage }).then(handleResponse),
    delete: ({ url }) => httpService({ method: 'DELETE', url, token })
  }
}

export default useServer
