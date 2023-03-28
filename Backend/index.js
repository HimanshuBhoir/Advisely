const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const AdminUser = require('./Admin/Routes/Auth')
const ProfessionalUser = require('./Professional/Routes/Auth')
const Profession = require('./Professional/Routes/Professions')
const Consumer = require('./Consumer/Routes/Auth')
const Bookings = require('./Consumer/Routes/Bookings')

app.use(cors({
    origin: "*"
}))

require('dotenv').config()
app.use(bodyParser.json())

app.get('/',(req,res) => {
    res.send('Hello World')
})

// Routes and MiddleWare

app.use('/admin', AdminUser)
app.use('/professional', ProfessionalUser)
app.use('/profession', Profession)
app.use('/consumer', Consumer)
app.use('/booking', Bookings)

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