import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="
            relative
            w-full
            flex flex-wrap
            items-center
            justify-between
            py-4
            bg-gray-100
            text-gray-500
            hover:text-gray-700
            focus:text-gray-700
            shadow-lg
            navbar navbar-expand-lg navbar-light
        ">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                    <ul className="navbar-nav flex flex-row pl-0 list-style-none mr-auto">
                        <li className="nav-item p-2">
                            <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="" >Dashboard</Link>
                        </li>
                        <li className="nav-item p-2">
                            <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="nosotros" >Team</Link>
                        </li>
                        <li className="nav-item p-2">
                            <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="projects">Projects</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center relative">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded">Logout</button>
                </div>
            </div>
        </nav>
    );
};
