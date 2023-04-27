import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import '../Styles/Addprof.css';

function Addprof() {

  const navigate = useNavigate()
  const [professionname, setProfessionname] = useState('');
  const [document, setDocument] = useState('');
  const [description, setDescription] = useState('');
  const [note, setNote] = useState('');
  const [request, setRequest] = useState('')
  const [rate, setRate] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData()
      data.append("file",document)
      data.append("upload_preset","raise=it")
      data.append("cloud_name","di7asyam5")
      fetch("https://api.cloudinary.com/v1_1/di7asyam5/image/upload",{
        method:"post",
        body:data
      })
      .then(res => res.json())
      .then(data=>{
        setDocument(data.url)
        // console.log(document)
      })
      .catch(err=>{
        console.log(err)
      })
      

    axios({
        method: 'post',
        url: 'https://advisely-mini.onrender.com/profession/addprof',
        data: {
          professionname,
          description,
          document,
          note,
          image:request,
          rating:rate
        },
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${localStorage.getItem("profjwt")}`,
        }
        })
        .then(res => {
            // console.log(res.data)
            alert("Your Profession Request is sent succesfully!")
            navigate('/professional')
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
        <input type="file" accept="image/*" style={{width:"50%"}} onChange={(event) => setDocument(event.target.files[0])} />

        <text>Describe Your service in short?</text>
        <input type="text" value={note} onChange={(event) => setNote(event.target.value)} style={{width:"90%"}} />
        
        <text>Make a request to Admin?</text>
        <textarea value={request} onChange={(event) => setRequest(event.target.value)} style={{width:"90%"}} />

        <text>Write a brief description so that consumers can know more about services</text>
        <textarea value={description} onChange={(event) => setDescription(event.target.value)} style={{width:"90%"}} />

        <text>What is the amount you want to charge for hour?</text>
        <input type='number' value={rate} onChange={(event) => setRate(event.target.value)} style={{width:"90%"}} />

        <button type="submit">Profession Request</button>

      </form>
    </div>
  );
}

export default Addprof;
