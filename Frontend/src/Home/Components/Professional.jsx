import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../styles/Professional.css'
import CurrencyRupeeSharpIcon from '@mui/icons-material/CurrencyRupeeSharp';
import GroupsIcon from '@mui/icons-material/Groups';
import SaveAsIcon from '@mui/icons-material/SaveAs';

function Professional() {

  const navigate = useNavigate()

  return (

    <div className='high'>
        <h3>Freelance opportunities?</h3>
      <div className='card professional'>

        <button className='card lgs' onClick={() => {navigate("/professional/profile")}}>
          <SaveAsIcon fontSize='large'/>
          <h3 className='title'>Want to create account?</h3>
          <text className='desc'>We help you showcase your professional skills.</text>
        </button>

        <button className='card lgs' onClick={() => {navigate("/professional/")}}>
          <GroupsIcon fontSize='large'/>
          <h3 className='title'>Get a chance to provide services, via freelancing.</h3>
          <text className='desc'>We are giving you chance to use your skills in freelancing.</text>
        </button>

        <button className='card lgs' onClick={() => {navigate("/professional/earning")}}>
          <CurrencyRupeeSharpIcon fontSize="large"/>
          <h3 className='title'>Get a chance to earn money.</h3>
          <text className='desc'>We allowing you to generate money, by shearing your knowledge.</text>
        </button>

      </div>
    </div>
    
  )
}

export default Professional