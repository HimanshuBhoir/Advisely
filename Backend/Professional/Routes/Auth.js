const express = require('express')
const router = express.Router()
const User = require('../Models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const ProfessionalRequire = require('../Middleware/ProffesionalRequire')

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
                const {_id,name,no,email}= savedUser
                if(match)   res.json({token,prof:{_id,name,no,name,email}})
                else    return res.status(422).json({error:"Invalid Password"})
            })
        })
    }catch(error){
        res.json(error)
    }
})


router.post('/signup',async (req,res) => {
    try {
        const {name, email, no, password} = req.body
        bcrypt.hash(password,7)
        .then(hashedpassword => {
            const user = new User({
                name,
                email,
                no,
                password:hashedpassword
            })
            user.save()
            res.json(user)
        })
    } catch (error) {
        res.json(error)
    }
})

router.get('/personal', ProfessionalRequire, async(req,res) => {
    try{
        const professional = await User.findById(req.professional._id)
        res.json(professional)
    }catch(error){
        res.json(error)
    }
})


module.exports = router;