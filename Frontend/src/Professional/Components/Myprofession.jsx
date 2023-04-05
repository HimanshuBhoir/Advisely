import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import axios from 'axios'

function Myprofession() {

  const navigate = useNavigate()
  const [data, setData] = useState([])

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/profession/myprofessions',
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

      <button onClick={handleAdd} className='card ver' style={{ justifyContent:'center', alignItems:'center', height:'20%', fontSize:'20px'}}>
        <AddCircleOutlineSharpIcon style={{fontSize:'50px', padding:'10px', opacity:'0.6'}}/>
        Add Profession
      </button>

      {
        data.map(item => {
          return (
            <div className='card ver'>
        
              <div className='card simg'>
                <img className='img' src="https://media.istockphoto.com/id/1331029732/photo/close-up-of-a-male-doctor-hand-hold-a-silver-pen-and-showing-pad-in-hospital-doctor-giving.jpg?b=1&s=170667a&w=0&k=20&c=86i9uwpHBolC0pjotbCFSrOJbV_EYFN8atFRAH2DMuM=" alt="service Image" />
              </div>

              <div className='card desc'>
                <h2>{item.professionname}</h2>
                <h6>{item.postedById}</h6>
                <br />
                <h4>This is the description. This is the description This is the description This is the description.</h4>
                <br />
                <button className='btn'>Go TO</button>
              </div>

            </div>
          )
        })
      }

    </div>
  )
}

export default Myprofession
