import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import SliderOneImg from "../assets/img/banner/banner-1.jpg";
import SliderTwoImg from "../assets/img/banner/banner-2.jpg";

const Hero = () => {
  return (
    <section className="section-1">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div
            className="content"
            style={{ backgroundImage: `url(${SliderOneImg})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="content"
            style={{ backgroundImage: `url(${SliderTwoImg})` }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
