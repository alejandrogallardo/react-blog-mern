import { useState, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import clienteAxios from '../config/clienteAxios'
// import useAuth from '../hooks/useAuth'

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({})
    const [cargando, setCargando] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token')
            
            if(!token){
                console.log('ho hay token');
                setCargando(false)
                return
            }

            /*const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
*/
            try {
                // const { data } = await clienteAxios('/usuarios/perfil', config)
                // setAuth(data)
                setAuth({
                    _id: 'abdcfr',
                    name: 'Alejandro',
                    lastName: 'Gallardo'
                })
                // navigate('/dashboard')

            } catch (error) {
                setAuth({})
            } 

            setCargando(false)

            
        }
        autenticarUsuario()
    }, [])

    const cerrarSesionAuth = () => {
        setAuth({})
    }


    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando,
                cerrarSesionAuth
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { 
    AuthProvider
}

export default AuthContext;