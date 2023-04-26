const express = require('express')
const router = express.Router()
const User = require('../Models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const ConsumerRequire = require('../Middleware/ConsumerRequire')

require('dotenv').config()

// create routes

router.post('/signin',async (req,res) => {
    try{
        const {email, password} = req.body
        User.findOne({email:email})
        .then(savedUser => {
            if(!savedUser)  return res.status(422).json({error:"Invalid Email"})
            bcrypt.compare(password,savedUser.password)
            .then(match => {
                const token = jwt.sign({_id:savedUser._id},process.env.JWT)
                const {_id,name,email,no} = savedUser
                if(match)   res.json({token,con:{_id,name,email,no}})
                else    return res.status(422).json({error:"Invalid Password"})
            })
        })
    }catch(error){
        res.json(error)
    }
})

router.post('/signup',async (req,res) => {
    try {
        const {name, email, password} = req.body
        bcrypt.hash(password,7)
        .then(hashedpassword => {
            const user = new User({
                name,
                email,
                password:hashedpassword
            })
            user.save()
            res.json(user)
        })
    } catch (error) {
        res.json(error)
    }
})

router.get('/personal', ConsumerRequire, async(req,res) => {
    try{
        const consumer = await User.findById(req.consumer._id)
        res.json(consumer)
    }catch(error){
        res.json(error)
    }
})


module.exports = router;