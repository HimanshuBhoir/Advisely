const mongoose = require('mongoose')

const Professions = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    no:{
        type: Number,
        require: true,
    },
    professionname:{
        type: String,
        require: true,
    },
    document:{
        type: String,
        require: true,
    },
    verified:{
        type: Boolean,
        default: false,
    },
    rating:{
        type: Number,
    },
    description:{
        type: String,
        require: true,
    },
});

module.exports = mongoose.model("Professions",Professions)