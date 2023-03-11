const express = require('express')
const router = express.Router()
const User = require('../Models/User')

// create routes

router.get('/signin',async (req,res) => {
    try{
        const user = await User.find(req.body)
        res.json(user)
    }catch(error){
        res.json(error)
    }
})


router.post('/signup',async (req,res) => {
    try {
        const user = await User.create(req.body)
        res.json(user)
    } catch (error) {
        res.json(error)
    }
})

module.exports = router;