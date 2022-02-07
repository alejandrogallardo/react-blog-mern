import { Outlet } from 'react-router-dom';
import { Navbar } from '../shared/Navbar';
import { Footer } from '../shared/Footer';

export const MainPage = () => {
    return (
        <>
            <Navbar />    
                <Outlet />
            <Footer />    
        </>
    );
};
