import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Confirmed() {

  const navigate = useNavigate()
  const [data,setData] = useState([])

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://advisely-mini.onrender.com/booking/confirmed',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem("profjwt")}`,
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

  const handleStart = (meetId) => {
    navigate(`/meet/${meetId}`)
  }

  return (
    <div className='card verified'>

      {
        data.map(item => {
          return (

            <div className='card ver'>
 
              <div className='card simg'>
                <img className='img' src={item.professionId.document} alt="service Image" />
              </div>

              <div className='card desc' style={{ width:'100%' }}>
                <h3>{item.professionId.professionname}</h3>
                <h6>{item.professionId._id}</h6>
                <br />
                <h6>Booked By: {item.consumerId._id}</h6>
                <br />
                <h4>Time: 08.45 25/03/2023</h4>
                <br />
              </div>
              <div style={{display:'flex',alignItems:'center',justifyContent:'right', width:'100%'}}>
              <button className='btn' style={{margin:'20px'}} onClick={() => handleStart(item.professionId._id)}>Start</button>
              </div>

            </div>

          )
        })
      }

      

    </div>
  )
}

export default Confirmed
