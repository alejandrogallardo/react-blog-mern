import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Alerta } from '../components/Alerta';
import clienteAxios from '../config/ClienteAxios';
import useAuth from '../hooks/useAuth';

export const IniciarSesion = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})

    const { setAuth } = useAuth()

    const navigate = useNavigate()

    useEffect(() => {
        
        /*if (true) {
            // navigate('/dashboard')
            const lastPath = localStorage.getItem('localPath') || '/';
            history.replace(lastPath);
        }*/
    
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
    
        if([email, password].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            });
            return
        }
        
        try {
            const { data }  = await clienteAxios.post( '/login', { email, password} )
            setAlerta({})
            localStorage.setItem('token', data.data.token)
            console.log(data.data)
            setAuth(data.data)
            console.log('Inicio de sesion')
            navigate('/dashboard')
        } catch(error) {
            console.log(error)
        }
    
    }
    
    const { msg } = alerta

    return (
        <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto mt-5 mb-5">
            
            <form className="space-y-6" onSubmit={handleSubmit}>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                { msg && <Alerta>{ msg }</Alerta> }
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                        placeholder="name@company.com"
                        value={email}
                        onChange={ e => setEmail(e.target.value)}  
                    />
                    
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="••••••••"
                        value={password}
                        onChange={ e => setPassword(e.target.value)} 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  
                    />
                    
                </div>
                <input 
                    type="submit" 
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    value="Login to your account"
                />
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                </div>
            </form>
            
        </div>
    );
};
