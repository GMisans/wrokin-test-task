import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-wrap">
          <div className="about-wrap__left"></div>
          <div className="about-wrap__right about-info">
            <p className="about-info__uppertitle">
              Quality Craftmanship from build to delivery
            </p>
            <h2 className="about-info__title">
              Discover the beauty of a handmade kitchen
            </h2>
            <p className="about-info__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eget est sit amet sapien venenatis maximus vel in urna. Nam mauris
              arcu, feugiat in finibus vitae, sollicitudin id purus. Ut
              imperdiet, magna eu pharetra tincidunt, mauris purus ultrices.
            </p>
            <a href="/" className="about-info__link main-btn-style">
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
