import React from 'react'
import '../styles/Logs.css'
import {useNavigate} from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import SchoolIcon from '@mui/icons-material/School';
function Logs() {

  const navigate = useNavigate()

  return (
    <div className='container logs' id='logs'>

      <h3>Ready to login here?</h3>

      <button className='card lgs' onClick={() => {navigate("/consumer")}}>
        <PersonIcon/>
        <h3 className='title'>Consumer</h3>
        <text className='desc'>Seeking to benefit from online services and connect with trusted service providers</text>
      </button>

      <button className='card lgs' onClick={() => {navigate("/professional")}}>
        <SchoolIcon/>
        <h3 className='title'>Professional</h3>
        <text className='desc'>Freelancer or service provider offering his skills and expertise to clients around the world</text>
      </button>

      <button className='card lgs' onClick={() => {navigate("/admin")}}>
        <AdminPanelSettingsTwoToneIcon/>
        <h3 className='title'>Admin </h3>
        <text className='desc'>Verifying global services and ensuring the highest quality standards for our users</text>
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
        <button className='btn' onClick={() => navigate('/consumer')}>Get Started</button>

        </div>
      </div>

    </div>
  )
}

export default Logs
