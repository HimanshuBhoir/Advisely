const express = require('express')
const router = express.Router()
const User = require('../Models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('dotenv').config()

// create routes

router.get('/signin',async (req,res) => {
    try{
        const {email, password} = req.body
        User.findOne({email:email})
        .then(savedUser => {
            if(!savedUser)  return res.status(422).json({error:"Invalid Email"})
            bcrypt.compare(password,savedUser.password)
            .then(match => {
                const token = jwt.sign({_id:savedUser._id},process.env.JWT)
                if(match)   res.json({token})
                else    return res.status(422).json({error:"Invalid Password"})
            })
        })
    }catch(error){
        res.json(error)
    }
})


router.post('/signup',async (req,res) => {
    try {
        const {email, password} = req.body
        bcrypt.hash(password,7)
        .then(hashedpassword => {
            const user = new User({
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

module.exports = router;