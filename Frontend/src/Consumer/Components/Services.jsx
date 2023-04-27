import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Services() {

  const navigate = useNavigate()
  const [data,setData] = useState([])

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://advisely-mini.onrender.com/profession/verified',
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

  const handleBook = (_id) => {
    navigate(`/consumer/service/${_id}`)
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
                <img className='img' src={item.document} alt="Image servicing" />
              </div>
      
              <div className='card desc'>
                <h2>{item.professionname}</h2>
                <h6>{item.postedById.name}</h6>
                <br />
                <h4>This is the description. This is the description This is the description This is the description.</h4>
                <br />
                <button className='btn' onClick={() => handleBook(item._id)}>Check On</button>
              </div>
      
            </div>
          )
        })
      }

    </div>
  )
}

export default Services
