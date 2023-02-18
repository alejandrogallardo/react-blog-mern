import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'
import { Footer } from "../shared/Footer";
import { Navbar } from "../shared/Navbar";

export const LayoutPrivate = () => {

    const { auth, cargando } = useAuth();
    if(cargando) return 'Cargando...'
    console.log('Private template: ')

    return (
        <>
            { auth._id ? 
                (<>
                    <Navbar />
                        <Outlet />
                    <Footer />          
                </>
                ) : <Navigate to="/" />
            }
        </>
    )
}
