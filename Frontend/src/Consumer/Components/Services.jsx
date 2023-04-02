import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Services() {

  const [data,setData] = useState([])

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

  const handleBook = (_id,postedById) => {
    axios({
      method: 'post',
      url: 'http://localhost:3000/booking/book',
      data: {
        professionId:_id,
        postedById
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem("conjwt")}`,
      }
    })
    .then(res => {
      console.log(res.data)
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <div className='card verified'>

      <h2>Services</h2>
      <br />
      
      {
        data.map(item => {
          return (
            <div className='card ver'>
        
              <div className='card simg'>
                <img className='img' src="https://media.istockphoto.com/id/1331029732/photo/close-up-of-a-male-doctor-hand-hold-a-silver-pen-and-showing-pad-in-hospital-doctor-giving.jpg?b=1&s=170667a&w=0&k=20&c=86i9uwpHBolC0pjotbCFSrOJbV_EYFN8atFRAH2DMuM=" alt="service Image" />
              </div>
      
              <div className='card desc'>
                <h2>{item.professionname}</h2>
                <h6>{item.postedById.email}</h6>
                <br />
                <h4>This is the description. This is the description This is the description This is the description.</h4>
                <br />
                <button className='btn' onClick={() => handleBook(item._id,item.postedById._id)}>Book</button>
              </div>
      
            </div>
          )
        })
      }

    </div>
  )
}

export default Services
