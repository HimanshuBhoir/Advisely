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
    subscription:{
        type: Boolean,
        default: false,
    },
    session:{
        type: Number,
        require: true,
    }
});

module.exports = mongoose.model("Consumer",User)