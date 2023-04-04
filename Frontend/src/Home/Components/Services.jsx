import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Services.css';
import Slider from 'react-slick'

function Services() {

  const navigate = useNavigate()
  const [data,setData] = useState(["name","name","name","name","name"])

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/profession/verified',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
    .catch(error => {
      console.log(error);
    });
  },[])

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
          data.map((item) => {
            return (
              <button className='card srvc' onClick={() => navigate('/consumer/service')}>
                <img className="sim" src="" alt='none'/>
                <h1>{item.professionname}</h1>
                <h5>{item.postedById.email}</h5>
                <p>Thisi sis me HIanshidn d and d I cann do anything I want Thisi I cann do anything I want Thisi</p>
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
