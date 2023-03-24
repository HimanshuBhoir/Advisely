import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Signin() {

  const navigate = useNavigate()

  const handle = () => {
    localStorage.setItem('jwt','Himanshu')
    navigate('/admin')
  }

  return (
    <div>
      <input type="text" className='email'  />
      <input type="text" className='pass'  />
      <button onClick={handle}></button>
    </div>
  )
}

export default Signin
