import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'
import '../Styles/Profile.css'
import axios from 'axios'

function Profile() {

  const {state} = useContext(UserContext)
  const [vcount, setVcount] = useState(0)
  const [ucount, setUcount] = useState(0)
  const [bcount, setBcount] = useState(0)

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://advisely-mini.onrender.com/profession/vcount'
    })
    .then(res => {
      console.log(res.data)
      setVcount(res.data)
    })
    .catch(error => {
      console.log(error);
    });

    axios({
      method: 'get',
      url: 'https://advisely-mini.onrender.com/profession/ucount'
    })
    .then(res => {
      console.log(res.data)
      setUcount(res.data)
    })
    .catch(error => {
      console.log(error);
    });

    axios({
      method: 'get',
      url: 'https://advisely-mini.onrender.com/booking/count'
    })
    .then(res => {
      console.log(res.data)
      setBcount(res.data)
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div className='profile'>
      <div className='up'>
        <text className='logo'>Advisely</text>
      </div>
      <div className='down'>

        <button className='bt'>
          <text className='cnt'>
            {vcount ? vcount : 0}
          </text>

        <h2>Verified Count</h2>
        </button>

        <button className='bt'> 
         <text className='cnt'>
            {ucount ? ucount : 0}
          </text>
        <h2>Unverified Count</h2>
        </button>

        <button className='bt'> 
          <text className='cnt'>
            {bcount ? bcount : 0}
          </text>
        <h2>Active Bookings</h2>
        </button>

      </div>
      
    </div>
  )
}

export default Profile