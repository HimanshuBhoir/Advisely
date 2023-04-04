import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../Styles/Single.css'



function Single() {

  const {id} = useParams()
  const [data,setData] = useState(null)

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:3000/profession/${id}`,
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
      url: 'http://localhost:3000/booking/book',
      data: {
        professionId,
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
    <div className='single'>

      {
        data ?
    
            <div className='srv'>
            
              <div className='top'>
                <img className='card im' src="https://media.istockphoto.com/id/1331029732/photo/close-up-of-a-male-doctor-hand-hold-a-silver-pen-and-showing-pad-in-hospital-doctor-giving.jpg?b=1&s=170667a&w=0&k=20&c=86i9uwpHBolC0pjotbCFSrOJbV_EYFN8atFRAH2DMuM=" alt="none" />
    
                <div className='dsc'>
                  <h2>{data.professionname}</h2>
                  <h5>{data.postedById}</h5>
                  <br />

                  <button className='btn' onClick={()=>handleBook(data._id,data.postedById)}>Book Appointment</button>
                  <br />

                  <br />
                  <p>Heyy this is the description and am here to present my description. Heyy this is the description and am here to present my description. Heyy this is the description and am here to present my description.</p>
                </div>
              </div>
    
              <div className='bottom'>
    
              </div>
    
            </div>
        :
        <h2>Loading</h2>
      }

    </div>
  )
}

export default Single
