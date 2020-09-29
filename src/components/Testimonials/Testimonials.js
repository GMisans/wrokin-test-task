import React from "react";
// Import Swiper React components
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
// install Swiper components
SwiperCore.use([Autoplay, Navigation]);

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonial">
          <p className="testimonial__uppertitle">What Our Customers Say</p>
          <h3 className="testimonial__title">
            Over 35 years experience designing handmade kitchens
          </h3>
          <Swiper
            navigation
            spaceBetween={50}
            slidesPerView={1}
            tag="div"
            wrapperTag="ul"
            autoplay={{ delay: 10000 }}
          >
            <SwiperSlide tag="li">
              <p className="testimonial-text">
                Since my first contact I have received a very high level of
                customer service and advice with my kitchen plans. Ben responded
                very quickly to all of my emails and delivery of the kitchen was
                as planned.
              </p>
              <p className="testimonial-author">Jane, Dundee</p>
            </SwiperSlide>
            <SwiperSlide tag="li">
              <p className="testimonial-text">
                Since my first contact I have received a very high level of
                customer service and advice with my kitchen plans. Ben responded
                very quickly to all of my emails and delivery of the kitchen was
                as planned.
              </p>
              <p className="testimonial-author">Jane, Dundee</p>
            </SwiperSlide>
            <SwiperSlide tag="li">
              <p className="testimonial-text">
                Since my first contact I have received a very high level of
                customer service and advice with my kitchen plans. Ben responded
                very quickly to all of my emails and delivery of the kitchen was
                as planned.
              </p>
              <p className="testimonial-author">Jane, Dundee</p>
            </SwiperSlide>
          </Swiper>
          <a href="/" className="testimonial__link main-btn-style">
            Frequently Asked Questions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
