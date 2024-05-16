import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";


const Testimonials = () => {
    const [review, setReview] = useState([]);
    useEffect( () => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])

    
    return (
        <section className="mt-16">
            <SectionTitle
                subHeading={"What Our Clients Say"}
                heading={"TESTIMONIALS"}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                
                {
                    review.map(review => <SwiperSlide
                    key={review._id}
                    >
                        <div>{review.details}</div>
                        <h3></h3>
                    </SwiperSlide>)
                }
            </Swiper>


        </section>
    );
};

export default Testimonials;