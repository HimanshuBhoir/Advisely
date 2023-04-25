const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types


const Book = mongoose.Schema({
    professionId:{
        type: ObjectId,
        ref: "Professions",
    },
    consumerId:{
        type: ObjectId,
        ref: "Consumer",
    },
    confirmed:{
        type:Boolean,
        default: false
    },
    request:{
        type: String,
        require: true,
    },
    appointmenttime:{
        type: Date,
        require: true,
    },
    postedById: {
        type: ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Booking",Book);