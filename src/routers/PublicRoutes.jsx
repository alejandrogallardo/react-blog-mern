import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../layout/Home';
import { Contacto } from '../layout/Contacto';
import { IniciarSesion } from '../layout/IniciarSesion';
import { Layout } from '../layout/Layout';
import { Registro } from '../layout/Registro';

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route element={ <Layout /> }>
                <Route index element={ <Home /> } /> 
                <Route path="contacto" element={ <Contacto /> } /> 
                <Route path="login" element={ <IniciarSesion /> } /> 
                <Route path="registro" element={ <Registro /> } /> 
            </Route>
        </Routes>
    );
};
