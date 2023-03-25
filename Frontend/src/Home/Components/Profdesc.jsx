import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../styles/Profdesc.css'

function Profdesc() {

  const navigate = useNavigate()

  return (
    <div className='card profdesc' id='professional'>
      <div className='des'>
          <h2>Online Freelancing: A Growing Trend for Professionals Seeking Flexibility and Opportunity in the Digital Age.</h2>
          <br />
          <p>Online freelancing has emerged as a popular alternative to traditional employment, particularly in the digital age. With the growth of remote work, freelancers have the opportunity to work with clients all over the world, providing services ranging from writing and design to development and marketing. The benefits of online freelancing include flexible schedules, the ability to work from anywhere, and the potential for higher income. However, freelancers also face unique challenges, such as finding consistent work, managing their time effectively, and navigating communication barriers with clients in different time zones. Nonetheless, with the right skills and strategies, online freelancing can be a rewarding and fulfilling career path for professionals.
</p>
      <br />
      <br />
      <button className='btn' onClick={() => navigate('/professional')}>Get Started</button>

      </div>
      <div>
        <img className='card im' src="https://images.unsplash.com/photo-1543269865-f576bdee5d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      </div>
    </div>
  )
}

export default Profdesc