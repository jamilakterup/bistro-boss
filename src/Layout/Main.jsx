import {Outlet, ScrollRestoration} from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </div>
    );
};

export default Main;