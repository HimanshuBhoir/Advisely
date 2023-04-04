import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Bookings() {

  const navigate = useNavigate()
  const [data,setData] = useState([])

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/booking/consumerbooking',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem("conjwt")}`,
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
        'Authorization': `${localStorage.getItem("conjwt")}`,
      }
    })
    .then(res => {
      console.log(res.data)
    })
    .catch(error => {
      console.log(error);
    })
  }

  const handleStart = (id) => {
    navigate(`/meet/${meetId}`)
  }

  return (
    <div className='card appt'>

      {
        data.map(item => {
          return (
            <div className='card apt'>
        
              <div className='card aaimg'>
                <img className='aimg' src="https://media.istockphoto.com/id/1331029732/photo/close-up-of-a-male-doctor-hand-hold-a-silver-pen-and-showing-pad-in-hospital-doctor-giving.jpg?b=1&s=170667a&w=0&k=20&c=86i9uwpHBolC0pjotbCFSrOJbV_EYFN8atFRAH2DMuM=" alt="service Image" />
              </div>

              <div className='card bd'>
                <h2>{item.professionId.professionname}</h2>
                <h6>{item.professionId._id}</h6>
                <br />
                <h5>Time : 08.45 26/03/2023</h5>
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
      }

    </div>
  )
}

export default Bookings
