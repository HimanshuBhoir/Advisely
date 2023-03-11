const mongoose = require('mongoose')

const Book = mongoose.Schema({
    servicename:{
        type: String,
        require: true,
    },
    serviceid:{
        type: String,
        require: true,
    },
    professionalname:{
        type: String,
        require: true,
    },
    consumerid:{
        type: String,
        require: true,
    },
    appointmenttime:{
        type: Date,
        require: true,
    }
});

module.exports = mongoose.model("Booking",Book)