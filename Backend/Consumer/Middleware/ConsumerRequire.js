const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../Models/User')

require('dotenv').config()

module.exports = (req, res, next) => {
    const {authorization} = req.headers
    if(!authorization){
        return res.status(401).json({error:"you must be logged in"})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token, process.env.JWT,(error,payload) => {
        if(error){
            return res.status(401).json({error:"you must be logged in"})
        }
        const {_id} = payload
        User.findById(_id).then(userdata => {
            req.consumer = userdata
            next()
        })
    })
}