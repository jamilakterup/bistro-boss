import {Helmet} from "react-helmet-async";
import Banner from "../Banner/Banner";
import BitroBoss from "../BotroBoss/BitroBoss";
import Call from "../Call/Call";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro-Boss/Home</title>
            </Helmet>
            <Banner />
            <Category />
            <BitroBoss />
            <PopularMenu />
            <Call />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;