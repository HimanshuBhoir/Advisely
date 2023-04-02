import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../Styles/Appointments.css'

function Appointments() {

  const [data,setData] = useState([])

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/booking/appointment',
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
      url: 'http://localhost:3000/booking/unbook',
      data: {
        _id
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem("profjwt")}`,
      }
    })
    .then(res => {
      console.log(res.data)
    })
    .catch(error => {
      console.log(error);
    })
  }

  const handleAccept = (_id) => {
    axios({
      method: 'put',
      url: 'http://localhost:3000/booking/accept',
      data: {
        _id
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem("profjwt")}`,
      }
    })
    .then(res => {
      console.log(res.data)
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
            <div className='card apt'>
        
              <div className='card aaimg'>
                <img className='aimg' src="https://media.istockphoto.com/id/1331029732/photo/close-up-of-a-male-doctor-hand-hold-a-silver-pen-and-showing-pad-in-hospital-doctor-giving.jpg?b=1&s=170667a&w=0&k=20&c=86i9uwpHBolC0pjotbCFSrOJbV_EYFN8atFRAH2DMuM=" alt="service Image" />
              </div>

              <div className='card bd'>
                <h2>{item.professionId.professionname}</h2>
                <h6>{item.postedById}</h6>
                <br />
                <h5>Booked By : {item.consumerId._id}</h5>
                <h5>Time : 08.45 26/03/2023</h5>
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
