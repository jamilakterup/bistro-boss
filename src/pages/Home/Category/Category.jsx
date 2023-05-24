// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Category = () => {
    return (
        <section>
            <SectionTitle subHeading='---From 11:00am to 10:00pm---' heading='ORDER ONLINE' />
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-20"
            >
                <SwiperSlide className="relative"><img className="w-[400px]" src={slide1} alt="" />
                    <h2 className="text-4xl text-white absolute bottom-8 left-1/2 -translate-x-1/2 uppercase">Salad</h2></SwiperSlide>
                <SwiperSlide className="relative"><img className="w-[400px]" src={slide2} alt="" />
                    <h2 className="text-4xl text-white absolute bottom-8 left-1/2 -translate-x-1/2 uppercase">Pizza</h2></SwiperSlide>
                <SwiperSlide className="relative"><img className="w-[400px]" src={slide3} alt="" />
                    <h2 className="text-4xl text-white absolute bottom-8 left-1/2 -translate-x-1/2 uppercase">Soup</h2></SwiperSlide>
                <SwiperSlide className="relative"><img className="w-[400px]" src={slide4} alt="" />
                    <h2 className="text-4xl text-white absolute bottom-8 left-1/2 -translate-x-1/2 uppercase">Cake</h2></SwiperSlide>
                <SwiperSlide className="relative"><img className="w-[400px]" src={slide5} alt="" />
                    <h2 className="text-4xl text-white absolute bottom-8 left-1/2 -translate-x-1/2 uppercase">Salad</h2></SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;