import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FeturedImg from '../../../assets/home/featured.jpg';
import './Feathured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 mt-16">
            <SectionTitle
            subHeading={"Check it out"}
            heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-400 bg-opacity-50 space-x-10 pb-20 pt-12 px-36">
                <div>
                    <img src={FeturedImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>March 20. 2024</p>
                    <h3 className="text-xl">Where can I get some?</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, quasi. Dicta ipsum perspiciatis quae delectus vero officiis ducimus adipisci tempora in rerum alias harum, deleniti blanditiis eum sint aspernatur numquam esse modi! Animi corporis commodi minima. Cum doloribus culpa placeat explicabo nemo eius odio soluta! Consequatur tempora architecto dolor temporibus.</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;