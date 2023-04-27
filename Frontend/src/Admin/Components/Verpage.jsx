import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function Verpage() {
  
    const navigate = useNavigate()
    const {id} = useParams()
    const [data,setData] = useState([])

    useEffect(() => {
        axios({
          method: 'get',
          url: `https://advisely-mini.onrender.com/profession/ver/${id}`,
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

      const handleAccept = (_id) => {
        axios({
            method: 'put',
            url: 'https://advisely-mini.onrender.com/profession/verify',
            data: {
              _id
            },
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => {
            console.log(res.data)
            confirm("I'm perfectly aggre with him, and want to give a chance to serve the globe!")
            navigate('/admin')
          })
          .catch(error => {
            console.log(error);
          });
      }

      const handleReject = (_id) => {
        axios({
            method: 'delete',
            url: 'https://advisely-mini.onrender.com/profession/removeprof',
            data: {
              _id
            },
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => {
            console.log(res.data)
            confirm("I'm not into these and want to reject these.")
            navigate('/admin')
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
                  <img className='card simg' src={data.document} alt="none" />
      
                  <div className='dsc'>
                    <h2>{data.professionname}</h2>
                    <h6>{data.postedById}</h6>
                    <br />
                    <br />
                    <h4>{data.note}</h4>
                    <br />
                    <br />
  
                    <br />
                  </div>
                </div>

                <div style={{textAlign:'justify', padding:'25px'}}>
                    <p>{data.image}</p>
                    <br />
                    <p>{data.description}</p>
                </div>
      
                <div className='bottom'>
                    <button className='btn' onClick={() => handleAccept(data._id)}>Accept</button>
                    <button className='btn' onClick={() => handleReject(data._id)} style={{margin:'30px'}}>Reject</button>
                </div>
      
              </div>
          :
          <h2>Loading</h2>
        }
  
      </div>
  )
}

export default Verpage
