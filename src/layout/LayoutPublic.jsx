import { Outlet, Navigate } from 'react-router-dom';
import { PublicNavbar } from '../shared/PublicNavbar';
import { PublicFooter } from '../shared/PublicFooter';
import useAuth from '../hooks/useAuth';

export const LayoutPublic = () => {
    const { auth, cargando } = useAuth();
    
    if(cargando) return 'Cargando...'
    
    console.log('PUBLIC LAYOUT: ')
    return (
        <>
            { !auth._id ? 
            (<>
                <PublicNavbar />
                    <Outlet />
                <PublicFooter />
            </>
            ) : <Navigate to="/dashboard" />
            }
        </>
    )
}
