import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Call from "../Call/Call";
import Category from "../Category/Category";
import Featured from "../Fetured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from 'react-helmet-async';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home </title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
            <Call></Call>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;