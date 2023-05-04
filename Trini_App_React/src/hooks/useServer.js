import { toast } from 'sonner'
import httpService from '../services/httpService.js'
import useAuth from './useAuth.js'

function useServer() {
  const { token, setUser } = useAuth()

  const handleResponse = ({ data, loading, error, url }) => {
    
    if (data?.status === 'ok' && url === '/login') {
      setUser({token: data.data})
    }

    if (data?.data?.email) {
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
