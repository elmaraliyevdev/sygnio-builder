import React from "react";
import Swiper from "react-id-swiper";

// Version >= 2.4.0
import "swiper/css/swiper.css";

const Slider = () => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    spaceBetween: 30
  };

  return (
    <Swiper {...params}>
      <div className='swiper-slide'>
        <div className='box'>
          <div className='img-box'>
            <img src='../static/images/cs.jpg' />
          </div>
          <div className='content-box'>
            <span className='box-title'>Coffee shop</span>
            <a href='#'>
              <img src='../static/images/right-arrow.svg' />
            </a>
          </div>
        </div>
      </div>
      <div className='swiper-slide'>
        <div className='box'>
          <div className='img-box'>
            <img src='../static/images/b.jpg' />
          </div>
          <div className='content-box'>
            <span className='box-title'>Bar</span>
            <a href='/'>
              <img src='../static/images/right-arrow.svg' />
            </a>
          </div>
        </div>
      </div>
      <div className='swiper-slide'>
        <div className='box'>
          <div className='img-box'>
            <img src='../static/images/rs.jpg' />
          </div>
          <div className='content-box'>
            <span className='box-title'>Retail Store</span>
            <a href='#'>
              <img src='../static/images/right-arrow.svg' />
            </a>
          </div>
        </div>
      </div>
      <div className='swiper-slide'>
        <div className='box'>
          <div className='img-box'>
            <img src='../static/images/sporting.jpg' />
          </div>
          <div className='content-box'>
            <span className='box-title'>Sporting Goods</span>
            <a href='/'>
              <img src='../static/images/right-arrow.svg' />
            </a>
          </div>
        </div>
      </div>
      <div className='swiper-slide'>
        <div className='box'>
          <div className='img-box'>
            <img src='../static/images/ps.jpg' />
          </div>
          <div className='content-box'>
            <span className='box-title'>Pet Shop</span>
            <a href='/'>
              <img src='../static/images/right-arrow.svg' />
            </a>
          </div>
        </div>
      </div>
      <div className='swiper-slide'>
        <div className='box'>
          <div className='img-box'>
            <img src='../static/images/fd.jpg' />
          </div>
          <div className='content-box'>
            <span className='box-title'>Food & Drink</span>
            <a href='/'>
              <img src='../static/images/right-arrow.svg' />
            </a>
          </div>
        </div>
      </div>
    </Swiper>
  );
};

export default Slider;
