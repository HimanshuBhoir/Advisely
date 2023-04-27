import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Pricing() {

  const navigate = useNavigate()
  const [token, setToken] = useState(1)
  const [data, setData] = useState([])

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
  })


  const handleToken = (e) => {
    var options = {
      key:"rzp_test_aeB8XArLYADkdJ",
      key_secret:"D4hEgnY33uSv7izKvdozyYoZ",
      amount: token * 20000,
      currency: "INR",
      name: "Advisely",
      description:"Buy a token and have a chance to access services!",
      handler: function(response){
        alert(response.razorpay_payment_id)
      },
      prefill:{
        name:"Himanshu Bhoir",
        email:"himanshubhoir13@gmail.com",
        contact:"9221309032"
      },
      notes:{
        address:"Razorpay Office"
      },
      theme:{
        color:'#3399cc'
      }
    }
    var pay = new window.Razorpay(options)
    pay.open()
  }

  return (
    <div className='verified'>
      <div>
        <h1>Available tokens: {data?data.token:1}</h1>
        <br />
        <button className='btn' onClick={ () => {navigate('/consumer')}}>Use</button>
    <br /><br /><br />
        <h3>Want to buy more?</h3>
        <br />
        <input type="number" value={token} onChange={(e) => setToken(e.target.value)}  style={{width:'10%', textAlign:'center'}} />
        <br />
        <button className='btn' onClick={handleToken}>Buy Token</button>
      </div>
    </div>
  )
}

export default Pricing
