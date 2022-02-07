import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contacto } from '../layout/Contacto';
import { Home } from '../layout/Home';
import { IniciarSesion } from '../layout/IniciarSesion';
import { Layout } from '../layout/Layout';
import { Registro } from '../layout/Registro';
import { Inicio } from '../pages/Inicio';
import { MainPage } from '../pages/MainPage';
import { Nosotros } from '../pages/Nosotros';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={<Layout /> }>
                    <Route index element={ <Home /> } /> 
                    <Route path="contacto" element={ <Contacto /> } /> 
                    <Route path="login" element={ <IniciarSesion /> } />
                    <Route path="registro" element={ <Registro /> } />
                    <Route path="*" element={ <h1>No hay nada</h1>} /> 
                </Route>

                <Route path="/dashboard" element={ <MainPage /> }>
                    <Route index element={ <Inicio /> } />
                    <Route path="nosotros" element={ <Nosotros /> } />
                </Route>

            </Routes>
        </BrowserRouter>
    );
};
