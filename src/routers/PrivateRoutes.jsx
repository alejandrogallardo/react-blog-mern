import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio } from '../pages/Inicio';
import { MainPage } from '../pages/MainPage';
import { Nosotros } from '../pages/Nosotros';
export const PrivateRoutes = () => {
    return (
        <Routes>
            <Route element={ <MainPage />}>
                <Route index element={ <Inicio /> } />
                <Route path="nosotros" element={ <Nosotros /> } />
            </Route>
        </Routes>
    );
};
