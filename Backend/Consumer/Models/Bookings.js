const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types


const Book = mongoose.Schema({
    professionId:{
        type: ObjectId,
        ref: "service",
    },
    consumerId:{
        type: ObjectId,
        ref: "consumer",
    },
    appointmenttime:{
        type: Date,
        require: true,
    }
});

module.exports = mongoose.model("Booking",Book)