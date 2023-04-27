import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import axios from 'axios'
import VerifiedIcon from '@mui/icons-material/Verified';

function Myprofession() {

  const navigate = useNavigate()
  const [data, setData] = useState([])

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://advisely-mini.onrender.com/profession/myprofessions',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem("profjwt")}`,
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

  const handleAdd = () => {
    navigate('/professional/addprof')
  }

  return (
      <div className='card verified'>

      <h2>MyProfessions</h2>
      <br />

      <button onClick={handleAdd} className='card ver' style={{ justifyContent:'center', alignItems:'center', height:'15%', fontSize:'20px'}}>
        <AddCircleOutlineSharpIcon style={{fontSize:'50px', padding:'10px', opacity:'0.6'}}/>
        Add Profession
      </button>

      {
        data.map(item => {
          return (
            <div className='card ver'>
        
              <div className='card simg'>
                <img className='img' src={item.document} alt="service Image" />
              </div>

              <div className='card desc'>
                <h2>{item.professionname}</h2>
                <br />
                <h4>{item.note}</h4>
                <br />
                <button className='btn'>Go TO</button>
                <br />
                <br />
                {
                  item.verified ?
                <div style={{color:'green'}}>
                  <VerifiedIcon />  Verified
                </div>
                  :
                  <div></div>
                }
              </div>

            </div>
          )
        })
      }

    </div>
  )
}

export default Myprofession
