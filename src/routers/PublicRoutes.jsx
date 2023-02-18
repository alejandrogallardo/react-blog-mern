import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../layout/Home';
import { Contacto } from '../layout/Contacto';
import { IniciarSesion } from '../layout/IniciarSesion';
import { Layout } from '../layout/Layout';
import { Registro } from '../layout/Registro';
import useAuth from '../hooks/useAuth'

export const PublicRoutes = () => {
    const { auth, cargando } = useAuth();
    return (
        <Routes>
            <Route element={ <Layout /> }>
                <Route index element={ <Home /> } /> 
                <Route path="contacto" element={ <Contacto /> } /> 
                {/* <Route path="login" element={ <IniciarSesion /> } />  */}
                {/* <Route path="login" render={() => { return false ? <IniciarSesion /> : <Navigate to="/" state={{ from: location }} replace />}} />  */}
                {/* <Route path="login" { false ? <IniciarSesion /> : <Navigate to="/" /> } /> */}
                {/* { false ? <IniciarSesion /> : <Navigate to="/" /> }  */}
                <Route path="registro" element={ <Registro /> } /> 
            </Route>
        </Routes>
    );
};
