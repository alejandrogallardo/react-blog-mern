import { Outlet } from 'react-router-dom';
import { PublicNavbar } from '../shared/PublicNavbar';
import { PublicFooter } from '../shared/PublicFooter';

export const Layout = () => {
    return (
        <>
            <PublicNavbar />
                <Outlet />
            <PublicFooter />
        </>
    );
};
