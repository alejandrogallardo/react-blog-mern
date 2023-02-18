import { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Contacto } from '../pages/Contacto';
import { Home } from '../pages/Home';
import { IniciarSesion } from '../pages/IniciarSesion';
import { Registro } from '../pages/Registro';
import { Inicio } from '../pages/Inicio';
import { Nosotros } from '../pages/Nosotros';

import {AuthProvider} from '../context/AuthProvider'

import { LayoutPrivate } from '../layout/LayoutPrivate';
import { LayoutPublic } from '../layout/LayoutPublic';
import { PrivateRoutes } from './PrivateRoutes';

export const AppRouter = () => {

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    
                    <Route path="/" element={<LayoutPublic /> }>
                        <Route index element={ <Home /> } /> 
                        <Route path="contacto" element={ <Contacto /> } /> 
                        <Route path="login" element={ <IniciarSesion /> } />
                        <Route path="registro" element={ <Registro /> } /> 
                        <Route path="*" element={ <h1>No hay nada</h1>} /> 
                    </Route>
                    
                    {/* <Route path="/" element={<LayoutPublic /> }>
                        <Route path="login" element={ <IniciarSesion /> } />
                        <Route path="registro" element={ <Registro /> } />
                    </Route> */}
                    
                    <Route path="/dashboard" element={ <LayoutPrivate /> }>
                        <Route index element={ <Inicio /> } />
                        <Route path="nosotros" element={ <Nosotros /> } />
                    </Route>

                    
                    {/* <Route element={ <PrivateRoutes /> } /> */}

                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
};
