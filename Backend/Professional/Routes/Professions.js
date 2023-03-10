const express = require('express')
const router = express.Router()
const Profession = require('../Models/Professions')

// create routes

router.post('/addprof',async (req,res) => {
    try {
        const profession = await Profession.create(req.body)
        res.json(profession)
    } catch (error) {
        res.json(error)
    }
})

router.delete('/removeprof', async (req,res) => {
    try {
        const profession = await Profession.deleteOne(req.body)
        res.json(profession)
    } catch (error) {
        res.json(error)
    }
})

router.get('/verified',async (req,res) => {
    try{
        const profession = await Profession.find({verified:true})
        res.json(profession)
    }catch(error){
        res.json(error)
    }
})

router.get('/unverified',async (req,res) => {
    try{
        const profession = await Profession.find({verified:false})
        res.json(profession)
    }catch(error){
        res.json(error)
    }
})

router.put('/verify',async (req,res) => {
    try {
        const profession = await Profession.findOneAndUpdate(req.body, {verified:true})
        res.json(profession)
    } catch (error) {
        res.json(error)
    }
})


module.exports = router;