import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LayoutPrivate } from '../layout/LayoutPrivate';
import { Inicio } from '../pages/Inicio';
// import { MainPage } from '../pages/MainPage';
import { Nosotros } from '../pages/Nosotros';

export const PrivateRoutes = ({isAuthenticated}) => {
    return (
        /*<Routes>
            { false ?
            (<Route element={ <MainPage />}>
                <Route index element={ <Inicio /> } />
                <Route path="nosotros" element={ <Nosotros /> } />
            </Route>)
            : <Navigate to="/login" />}
        </Routes>*/
        <Route element={ <LayoutPrivate /> }>
            <Route index element={ <Inicio /> } />
            <Route path="nosotros" element={ <Nosotros /> } />
        </Route>        
    );
};
