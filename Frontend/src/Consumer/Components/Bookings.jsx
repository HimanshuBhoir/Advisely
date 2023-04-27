import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Bookings() {

  const navigate = useNavigate()
  const [data,setData] = useState([])

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://advisely-mini.onrender.com/booking/consumerbooking',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem("conjwt")}`,
      }
    })
    .then(res => {
      // console.log(res.data)
      setData(res.data)
    })
    .catch(error => {
      console.log(error);
    });
  },[])

  const handleUnbook = (_id) => {
    axios({
      method: 'delete',
      url: 'https://advisely-mini.onrender.com/booking/unbook',
      data: {
        _id
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem("conjwt")}`,
      }
    })
    .then(res => {
      // console.log(res.data)
      confirm('Really want to cancel appointment?')
      window.location.reload()
    })
    .catch(error => {
      console.log(error);
    })
  }

  const handleStart = (meetId) => {
    navigate(`/meet/${meetId}`)
  }

  return (
    <div className='card appt'>

      {
        data ?
        data.map(item => {
          return (
            <div className='card apt'>
        
              <div className='card aaimg'>
                <img className='aimg' src={item.professionId.document} alt="service Image" />
              </div>

              <div className='card bd'>
                <h3>{item.professionId.professionname}</h3>
                <h6>{item.professionId.postedById.name}</h6>
                <br />
                <h5>Date : {item.appointmenttime && item.appointmenttime.substring(0,10)}</h5>
                <h5>Time : {item.appointmenttime && item.appointmenttime.substring(11,19)}</h5>
                <br />
                <br />
                {
                  item.confirmed ?
                    <button className='btn' onClick={() => handleStart(item.professionId._id)}>Start</button>
                  :
                    <button className='rejbtn' onClick={()=>handleUnbook(item._id)}>Cancel</button>
                }
                
              </div>

            </div>
          )
        })
        :
        <h1>Loading</h1>
      }

    </div>
  )
}

export default Bookings
