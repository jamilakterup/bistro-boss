import {Outlet, ScrollRestoration, useLocation} from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            {isLogin || <NavBar />}
            <Outlet />
            {isLogin || <Footer />}
            <ScrollRestoration />
        </div>
    );
};

export default Main;