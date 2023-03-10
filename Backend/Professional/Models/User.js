const mongoose = require('mongoose')

const User = mongoose.Schema({
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
    password:{
        type: String,
        require: true,
    },
    totalsessions:{
        type: Number,
    },
    timespend:{
        type: Number,
    }
});

module.exports = mongoose.model("Professional",User)