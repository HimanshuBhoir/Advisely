import React from 'react'
import '../styles/Logs.css'
import {useNavigate} from 'react-router-dom'

function Logs() {

  const navigate = useNavigate()

  return (
    <div className='container logs'>

      <h3>Ready to login here?</h3>

      <button className='card lgs' onClick={() => {navigate("/services")}}>
        <h3 className='title'>I am a consumer seeking to benefit from online services and connect with trusted service providers</h3>
        <text className='desc'>A user who seeks to benefit from online services and connect with trusted service providers for their personal or business needs.</text>
      </button>

      <button className='card lgs' onClick={() => {navigate("/services")}}>
        <h3 className='title'>I am a professional seeking to provide my services and freelancing expertise to clients around the world through online platforms</h3>
        <text className='desc'>A freelancer or service provider who offers their skills and expertise to clients around the world through online platforms</text>
      </button>

      <button className='card lgs' onClick={() => {navigate("/services")}}>
        <h3 className='title'>I am an admin responsible for verifying global services and ensuring the highest quality standards for our users</h3>
        <text className='desc'>An administrator who is responsible for managing and overseeing the operations of an online platform, verifying services and ensuring quality standards are met.</text>
      </button>

      <div className='card srvcdesc'>
        <div>
          <img className='card im' src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFwcHklMjB1c2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className='des'>
            <h2>The Benefits of Online Consultation: Connecting Consumers with Expertise in Any Field</h2>
            <br />
            <p>In today's digital age, consumers have the opportunity to connect with experts from around the world through online consultation services. Whether seeking advice on legal matters, medical conditions, financial planning, or any other area of expertise, consumers can easily schedule a consultation with a qualified professional from the comfort of their own home. Online consultation services offer numerous benefits, including increased accessibility, convenience, and cost-effectiveness. By connecting with experts in various fields, consumers can gain valuable insights and advice to help them make informed decisions and achieve their goals.
</p>
        <br />
        <br />
        <button className='btn'>Get Started</button>

        </div>
      </div>

    </div>
  )
}

export default Logs
