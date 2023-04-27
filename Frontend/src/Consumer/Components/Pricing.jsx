import React, { useState } from 'react'

function Pricing() {

  const [token, setToken] = useState(1)
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
        <h1>Available tokens: 1</h1>
        <br />
        <button className='btn'>Use</button>
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
