const express = require('express')
const mongoose = require('mongoose')
const app = express()

require('dotenv').config()

app.get('/',(req,res) => {
    res.send('Hello World')
})

// Mongoose Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Error connecting to MongoDB', err);
});

// Port

app.listen((3000), () => {
    console.log('Backend Working!')
})