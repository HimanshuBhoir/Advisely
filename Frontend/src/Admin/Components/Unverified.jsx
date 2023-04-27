import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Unverified() {

  const navigate = useNavigate()
  const [data,setData] = useState([])

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://advisely-mini.onrender.com/profession/unverified',
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

  const handleVerify = (_id) => {
    navigate(`/admin/ver/${_id}`)
  }



  return (
    <div className='card verified'>

      <h2>Unverified</h2>
      <br />
      
      {
        data.map((item) => {
          return(
            <div className='card ver'>
              
          
              <div className='card simg'>
                <img className='img' src={item.document} alt="service Image" />
              </div>

              <div className='card desc'>
                <h2>{item.professionname}</h2>
                <h6>{item.postedById.name}</h6>
                <br />
                <h4>{item.note}</h4>
                <br />
                <button className='btn' onClick={()=>handleVerify(item._id)}>Check on Request</button>
              </div>

            </div>
          )
        })
      }

    </div>
  )
}

export default Unverified
