const express = require('express')
const router = express.Router()
const Profession = require('../Models/Professions')
const ProfessionalRequire = require('../Middleware/ProffesionalRequire')
const ConsumerRequire = require('../../Consumer/Middleware/ConsumerRequire')
const AdminRequire = require('../../Admin/Middleware/AdminRequire')

// create routes

router.post('/addprof',ProfessionalRequire, async (req,res) => {
    try {
        const {professionname, document, verified, rating, description} = req.body
        const profession = new Profession({
            professionname,
            document,
            verified,
            rating,
            description,
            postedById:req.professional
        })
        await profession.save()
        res.json(profession)
    } catch (error) {
        res.json(error)
    }
})

router.delete('/removeprof',ProfessionalRequire, async (req,res) => {
    try {
        const profession = await Profession.deleteOne(req.body)
        res.json(profession)
    } catch (error) {
        res.json(error)
    }
})

router.get('/myprofessions',ProfessionalRequire, async (req,res) => {
    try{
        const profession = await Profession.find({postedById:req.professional._id})
        .populate()
        res.json(profession)
    }catch(error){
        res.json(error)
    }
})

router.get('/verified',ConsumerRequire,async (req,res) => {
    try{
        const profession = await Profession.find({verified:true})
        .populate('postedById','_id name email')
        res.json(profession)
    }catch(error){
        res.json(error)
    }
})

router.get('/unverified', AdminRequire,async (req,res) => {
    try{
        const profession = await Profession.find({verified:false})
        .populate('postedById','_id name email')
        res.json(profession)
    }catch(error){
        res.json(error)
    }
})

router.put('/verify', AdminRequire,async (req,res) => {
    try {
        const profession = await Profession.findOneAndUpdate(req.body, {verified:true})
        res.json(profession)
    } catch (error) {
        res.json(error)
    }
})

router.get('/:id', ConsumerRequire || AdminRequire,async (req,res) => {
    try{
        const profession = await Profession.findById(req.params.id)
        res.json(profession)
    }catch(error){
        res.json(error)
    }
})

module.exports = router;