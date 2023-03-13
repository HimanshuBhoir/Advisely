const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const Professions = mongoose.Schema({
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
    postedById:{
        type: ObjectId,
        ref: "professional"
    }
});

module.exports = mongoose.model("Professions",Professions)