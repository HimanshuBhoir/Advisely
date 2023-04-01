const express = require('express')
const router = express.Router()
const User = require('../Models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('dotenv').config()

// create routes

router.post('/signin',async (req,res) => {
    try{
        const {adminuid, adminpass} = req.body
        User.findOne({adminuid:adminuid})
        .then(savedUser => {
            if(!savedUser)  return res.status(422).json({error:"Inval UID"})
            bcrypt.compare(adminpass,savedUser.adminpass)
            .then(match => {
                const token = jwt.sign({_id:savedUser._id},process.env.JWT)
                const { _id, adminuid } = savedUser;
                if(match)   res.json({token,admin:{ _id, adminuid }})
                else    return res.status(422).json({error:"Wrong Password"})
            })
        })
    }catch(error){
        res.json(error)
    }
})

// Admin side signup is not required in main application, just given for convinience

// router.post('/signup',async (req,res) => {
//     try {
//         const {adminuid, adminpass} = req.body
//         bcrypt.hash(adminpass,7)
//         .then(hashedpass => {
//             const user = new User({
//                 adminuid,
//                 adminpass:hashedpass
//             })
//             user.save()
//             res.json(user)
//         })
//     } catch (error) {
//         res.json(error)
//     }
// })

module.exports = router;