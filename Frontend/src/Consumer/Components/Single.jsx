import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import '../Styles/Single.css'



function Single() {

  const navigate = useNavigate()
  const {id} = useParams()
  const [data,setData] = useState(null)
  const [appointmenttime, setAppointmenttime] = useState()
  const [request,setRequest] = useState("")

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://advisely-mini.onrender.com/profession/${id}`,
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

  const handleBook = (professionId,postedById) => {
    axios({
      method: 'post',
      url: 'https://advisely-mini.onrender.com/booking/book',
      data: {
        professionId,
        appointmenttime,
        request,
        postedById
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem("conjwt")}`,
      }
    })
    .then(res => {
      // console.log(res.data)
      confirm("Booked appointment, stay connected for the confirmation status!")
      navigate('/consumer/bookings')
    })
    .catch(error => {
      console.log(error);
    });
    setRequest("")
  }

  return (
    <div className='single'>

      {
        data ?
    
            <div className='srv'>
            
              <div className='top'>
                <img className='card simg' src={data.document} alt="none" />
    
                
              </div>


              <div className='middle'>
                <div className='d'>
                    <h2>{data.note}</h2>
                    <br />                    
                    <p>{data.description}</p>
                </div>

                <div className='d'>
                    <h2>{data.professionname}</h2>
                    <h5>{data.postedById}</h5>
                    <br />
                    <input type="datetime-local" value={appointmenttime} onChange={(e) => setAppointmenttime(e.target.value)} />
                    <br />
                    <br />
                    <h5>Explain in short, why you want the service?</h5>
                    <textarea style={{width:"90%"}} value={request} onChange={(e) => setRequest(e.target.value)}/>
                
                    <div className='bottom'>
                    <button className='btn' onClick={()=>handleBook(data._id,data.postedById)}>Book Appointment</button>
              </div>

                </div>


              </div>
    
            </div>
        :
        <h2>Loading</h2>
      }

    </div>
  )
}

export default Single
