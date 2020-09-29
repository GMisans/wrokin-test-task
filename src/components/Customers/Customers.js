import React, { useState, useEffect } from "react";
// Import SRLWrapper
import { SRLWrapper } from "simple-react-lightbox";
import gallery1 from "../../Images/gallery1.png";
import gallery2 from "../../Images/gallery2.png";
import gallery3 from "../../Images/gallery3.png";
import gallery4 from "../../Images/gallery4.png";
const Customers = () => {
  const gallery = [
    {
      src: gallery1
    },
    {
      src: gallery2
    },
    {
      src: gallery3
    },
    {
      src: gallery4
    },
    {
      src: gallery3
    },
    {
      src: gallery1
    },
    {
      src: gallery4
    },
    {
      src: gallery2
    }
  ];

  const [postsToShow, setPostsToShow] = useState([]);
  const postsPerPage = 4;
  let arrayForHoldingPosts = [];
  const loopWithSlice = (start, end) => {
    const slicedPosts = gallery.slice(start, end);
    arrayForHoldingPosts = arrayForHoldingPosts.concat(slicedPosts);
    setPostsToShow(arrayForHoldingPosts);
  };
  useEffect(() => {
    // eslint-disable-next-line
    loopWithSlice(0, postsPerPage); // eslint-disable-next-line
    setPostsToShow(arrayForHoldingPosts); // eslint-disable-next-line
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(0, postsPerPage + postsPerPage);
  };

  return (
    <section className="customers" id="customers">
      <div className="container">
        <div className="customers-wrap">
          <h3 className="customers-wrap__title">Customer Gallery</h3>
          <ul className="customers-galery">
            {postsToShow.map((post, index) => (
              <SRLWrapper key={index}>
                <li className="customers-galery__item" data-attribute="SRL">
                  <img
                    className="customers-galery__img"
                    src={post.src}
                    alt=""
                  />
                </li>
              </SRLWrapper>
            ))}
          </ul>
          <button
            className={`customers-wrap__btn main-btn-style ${
              postsToShow.length === 8 ? "hide-btn" : ""
            }`}
            onClick={handleShowMorePosts}
          >
            Load more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Customers;
