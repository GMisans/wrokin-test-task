import React from "react";
// Import Swiper React components
import SwiperCore, { Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";
// install Swiper components
SwiperCore.use([Pagination, EffectFade, Autoplay]);

const Header = () => {
  return (
    <header className="header" id="header">
      <nav className="header__navigation">
        <div className="container">
          <div className="nav-wrap">
            <div className="burger">
              <div className="wrapper-menu">
                <div className="line-menu half start"></div>
                <div className="line-menu"></div>
                <div className="line-menu half end"></div>
              </div>
            </div>
            <div className="social-header">
              <a href="/" className="social-header__link" target="_blank">
                facebook-f
              </a>
              <a href="/" className="social-header__link" target="_blank">
                twitter
              </a>
              <a href="/" className="social-header__link" target="_blank">
                instagram
              </a>
            </div>
            <div className="first-small-menu">
              <a href="/" className="first-small-menu__link">
                Shop
              </a>
              <a href="/" className="first-small-menu__link">
                Plan My Kitchen
              </a>
            </div>
            <a href="/" className="nav-wrap__logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="84"
                height="34"
                viewBox="0 0 84 34"
              >
                <g>
                  <g clipPath="url(#clip-f0ba8c0e-d469-4d14-9e3b-95d0f422ed28)">
                    <path
                      fill="#fff"
                      d="M57.258 7.02v19.485c0 3.759-.366 4.814 2.017 5.455v.78H49.74v-.78c1.238-.458 1.1-1.696 1.1-5.455v-8.757H39.746v8.757c0 3.759-.183 4.997 1.1 5.455v.78h-9.58v-.78c2.428-.641 2.062-1.696 2.062-5.455V7.02c0-3.53.137-5.364-2.063-5.776v-.78h9.581v.78c-1.283.412-1.1 2.246-1.1 5.776v9.81H50.84v-9.81c0-3.53.184-5.364-1.1-5.776v-.78h9.535v.78c-2.155.412-2.017 2.246-2.017 5.776"
                    />
                  </g>
                  <g>
                    <path
                      fill="#fff"
                      d="M83.929 31.96v.78h-7.244c-4.86 0-5.96-1.33-10.773-8.298a284.63 284.63 0 0 0-4.63-6.373l6.326-7.655s7.885-8.986-.275-9.17V.466h15.129v.78c-3.071 0-6.28.091-16.183 12.79C77.006 28.384 77.465 28.98 77.465 28.98c2.246 2.98 5.226 2.98 6.464 2.98"
                    />
                  </g>
                  <g>
                    <path
                      fill="#fff"
                      d="M8.079 21.193c0-.028-.086-2.33-.113-3.088a.248.248 0 0 0-.25-.239.248.248 0 0 0-.25.234c-.04.753-.167 3.066-.167 3.097-.012.837-.29 10.763-6.876 10.763v.78h13.89v-.78c-6.068 0-6.231-9.955-6.234-10.767"
                    />
                  </g>
                  <g clipPath="url(#clip-e8f0f4b7-1e2c-4bb7-87cf-bc0e2649ce08)">
                    <path
                      fill="#fff"
                      d="M28.71 15.242a.212.212 0 0 0-.279.114l-1.561 3.04c-1.355 2.637-2.773 3.75-4.336.715v.001L13.671.465H2.12v.78c1.146.091 3.438.091 5.18 3.163l13.616 28.744h.78l.731-1.825 6.4-15.813a.212.212 0 0 0-.117-.272"
                    />
                  </g>
                </g>
              </svg>
            </a>
            <div className="second-small-menu">
              <a href="/" className="second-small-menu__link">
                About Us
              </a>
              <a href="/" className="second-small-menu__link">
                Gallery
              </a>
            </div>
            <a href="/" className="cart">
              <span className="cart__text">My ORder</span>
              <span className="cart__icon">shopping-cart</span>
            </a>
          </div>
        </div>
      </nav>
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        tag="div"
        wrapperTag="ul"
        autoplay={{ delay: 10000 }}
        effect="fade"
      >
        <SwiperSlide tag="li">
          <div className="container">
            <div className="header-slide">
              <p className="header-slide__uppertitle">
                Design and order your new kitchen online today
              </p>
              <h1 className="header-slide__title">
                Bespoke & made to measure handmade kitchen design
              </h1>
              <a href="/" className="header-slide__link main-btn-style">
                Order now
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide tag="li">
          <div className="container">
            <div className="header-slide">
              <p className="header-slide__uppertitle">
                Design and order your new kitchen online today
              </p>
              <h1 className="header-slide__title">
                Bespoke & made to measure handmade kitchen design
              </h1>
              <a href="/" className="header-slide__link main-btn-style">
                Order now
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide tag="li">
          <div className="container">
            <div className="header-slide">
              <p className="header-slide__uppertitle">
                Design and order your new kitchen online today
              </p>
              <h1 className="header-slide__title">
                Bespoke & made to measure handmade kitchen design
              </h1>
              <a href="/" className="header-slide__link main-btn-style">
                Order now
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </header>
  );
};

export default Header;
