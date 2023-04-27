import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../Styles/Appointments.css'

function Appointments() {

  const navigate = useNavigate()
  const [data,setData] = useState([])

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://advisely-mini.onrender.com/booking/appointment',
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

  const handleUnbook = (_id) => {
    axios({
      method: 'delete',
      url: 'https://advisely-mini.onrender.com/booking/unbook',
      data: {
        _id
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem("profjwt")}`,
      }
    })
    .then(res => {
      // console.log(res.data)
      confirm("Reject the request?")
      window.location.reload()
    })
    .catch(error => {
      console.log(error);
    })
  }

  const handleAccept = (_id) => {
    axios({
      method: 'put',
      url: 'https://advisely-mini.onrender.com/booking/accept',
      data: {
        _id
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem("profjwt")}`,
      }
    })
    .then(res => {
      // console.log(res.data)
       alert("Accepted the appointment request.")
       navigate('/professional/confirmed')
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <div className='card appt'>

      {
        data.map(item => {
          return(
            <div className='card apt' style={{width:'100%'}}>
        
              <div className='card aaimg' style={{width:'30%'}}>
                <img className='aimg' src={item.professionId.document} alt="service Image" />
              </div>

              <div className='card bd'>
                <h3>{item.professionId.professionname}</h3>
                <br />
                <h5>Booked By : {item.consumerId.name}</h5>
                <h5>Date : {item.appointmenttime.substring(0,10)}</h5>
                <h5>Time : {item.appointmenttime.substring(11,19)}</h5>
                <br />
                <h5>Reson : {item.request}</h5>
                <br />
                <button className='btn' style={{margin:'5px'}} onClick={() => handleAccept(item._id)}>Accept</button>
                <button className='rejbtn' onClick={() => handleUnbook(item._id)}>Reject</button>
              </div>

            </div>
          )
        })
      }

    </div>
  )
}

export default Appointments
