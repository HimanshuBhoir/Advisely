const mongoose = require('mongoose')

const User = mongoose.Schema({
    adminuid:{
        type: String,
        require: true,
    },
    adminpass:{
        type: String,
        require: true,
    }
});

module.exports = mongoose.model("Admin",User)