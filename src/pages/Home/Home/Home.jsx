import Banner from "../Banner/Banner";
import Call from "../Call/Call";
import Category from "../Category/Category";
import Featured from "../Fetured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Call></Call>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;