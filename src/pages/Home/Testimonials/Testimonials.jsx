import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {useEffect, useState} from "react";
import {Rating} from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import quot from '../../../assets/home/quote-left 1.png';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="my-20">
            <SectionTitle subHeading='---What Our Clients Say---' heading='TESTIMONIALS' />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="mx-24 my-16 flex flex-col items-center">
                            <Rating
                                style={{maxWidth: 180}}
                                value={review.rating}
                                readOnly
                            />
                            <img className="mt-6" src={quot} alt="" />
                            <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl text-orange-500">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;