import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/Addprof.css';

function Addprof() {
  const [professionname, setProfessionname] = useState('');
  const [document, setDocument] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios({
        method: 'post',
        url: 'http://localhost:3000/profession/addprof',
        data: {
          professionname,
          description,
        },
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${localStorage.getItem("profjwt")}`,
        }
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(error => {
            console.log(error);
        });
     };

  return (
    <div className="verified">
      <h1>Add Profession</h1>
      <br />
      <br />
      <form className='frm' onSubmit={handleSubmit}>

        <text>Enter a name for Profession/Service you are mean to Provide</text>
        <input type="text" value={professionname} onChange={(event) => setProfessionname(event.target.value)} style={{width:"90%"}} />

        <text>Provide us a single document, that can help to present your skills</text>
        <input type="file" accept="image/*" style={{width:"50%"}}/>

        <text>Write a brief description so that consumers can know more about services</text>
        <textarea value={description} onChange={(event) => setDescription(event.target.value)} style={{width:"90%"}} />

        <button type="submit">Profession Request</button>

      </form>
    </div>
  );
}

export default Addprof;
