import React from "react";
import "./Testimonials.css";
import { Data } from "./Data";

// Swiper React components
import { Navigation, Pagination, EffectFlip, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-flip";

const Testimonials = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section_title">Client Sayings</h2>
      <span className="section_subtitle">Testimonial</span>

      <Swiper
        className="testimonial_container"
        modules={[Navigation, Pagination, EffectFlip, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500
        }}
        pagination={{ clickable: true }}
        effect="flip"
      >
        {Data &&
          Data.map((review, index) => {
            return (
              <SwiperSlide className="testimonial_card" key={index}>
                <img src={review.image} alt="" className="testimonial_img" />
                <h3 className="testimonial_name">{review.title}</h3>
                <p className="testimonial_desc">{review.description}</p>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
