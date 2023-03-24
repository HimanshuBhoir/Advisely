import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function CSignin() {

  const navigate = useNavigate()

  const handle = () => {
    localStorage.setItem('jwt','Himanshu')
    navigate('/consumer')
  }

  return (
    <div>
      <input type="text" className='email'  />
      <input type="text" className='pass'  />
      <button onClick={handle}></button>
    </div>
  )
}

export default CSignin
