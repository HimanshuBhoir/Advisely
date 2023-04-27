import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'
import axios from 'axios'

function Profile() {

  const [data, setData] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://advisely-mini.onrender.com/consumer/personal',
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

    axios({
      method: 'get',
      url: 'https://advisely-mini.onrender.com/booking/mycount',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem("conjwt")}`,
      }
    })
    .then(res => {
      console.log(res.data)
      setCount(res.data)
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div style={{width:'100%'}}>
      {
        data ? (
        <>
        <div className='prof' style={{padding:'20px', borderBottom: '2px solid black'}}>
          <img className="pimg" src="https://avatars.githubusercontent.com/u/88702266?v=4" alt="" />
          <br />
          <h2>{data.name}</h2>
        </div>
        <div className='bottom' style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
        <button className='bt'> 
         <text className='cnt'>
            {data.token ? data.token : 0}
          </text>
        <h2>Tokens Available</h2>
        </button>
        <button className='bt'> 
         <text className='cnt'>
            {count ? count : 0}
          </text>
        <h2>My Bookings</h2>
        </button>
        <button className='bt'> 
         <text className='cnt'>
            {data.session ? data.session : 0}
          </text>
        <h2>Total Sessions</h2>
        </button>
        <button className='bt'> 
         <text className='cnt'>
            {data.session ? data.session*60 : 0}
          </text>
        <h2>Time Spent (Min)</h2>
        </button>
        </div>
          </>
        ) : (
        <h1>Loading</h1>
        )
      }
    </div>

  )
}

export default Profile