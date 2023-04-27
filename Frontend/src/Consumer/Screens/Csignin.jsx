import React, {useState} from 'react'
import {useNavigate , Link} from 'react-router-dom'
import axios from 'axios'
// import '../Styles/Psignin.css'

function Signin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: 'post',
      url: 'https://advisely-mini.onrender.com/consumer/signin',
      data: {
        email,
        password
      },
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      localStorage.setItem('conjwt', res.data.token);
      console.log(res.data);
      navigate('/consumer');
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <div className="signin-container">
      <div className="image-container">
        <img src="https://images.unsplash.com/photo-1527769929977-c341ee9f2033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZ2lufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="Logo" className="logo-image" />
      </div>
      <form onSubmit={handleSubmit} className="signin-form">
        <h1>Consumer</h1>
        <br />
        <br />
        <label>
          Email:
          <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <button type="submit">Sign In</button>
        <br />
        <Link to={'/consumersignup'}>Don't have any account?</Link>
        <Link to={'/'}>Back to Home</Link>
      </form>
      
    </div>
  );
}

export default Signin
