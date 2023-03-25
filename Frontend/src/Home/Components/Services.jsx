import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Services.css';
import Slider from 'react-slick'

function Services() {

  const navigate = useNavigate()
  const arr = ["one","two","three","four","five","six"]

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear"
    };
  return (
    <div className='services' id='services'>
      <br />
      <h3>Expert advice just a click away - Consult with professionals online</h3>
      <br />
      <Slider {...settings}>
        {
          arr.map((item) => {
            return (
              <button className='card srvc' onClick={() => navigate('/consumer/service')}>
                <img className="sim" src="" alt='none'/>
                <h1>{item}</h1>
                <p>{item}{item}{item}Thisi sis me HIanshidn d and d I cann do anything I want Thisi I cann do anything I want Thisi</p>
              </button>
            );
          })
        }
      </Slider>
      {/* <br /> */}
    </div>
  );
}

export default Services;
