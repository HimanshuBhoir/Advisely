const express = require('express')
const router = express.Router()
const Profession = require('../Models/Professions')
const ProfessionalRequire = require('../Middleware/ProffesionalRequire')

// create routes

router.post('/addprof',ProfessionalRequire, async (req,res) => {
    try {
        const {professionname, document, verified, rating, description, postedById} = req.body
        const profession = new Profession({
            professionname,
            document,
            verified,
            rating,
            description,
            postedById:req.professional._id
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
        res.json(profession)
    }catch(error){
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

router.get('/:id',async (req,res) => {
    try{
        const profession = await Profession.findById(req.params.id)
        res.json(profession)
    }catch(error){
        res.json(error)
    }
})

module.exports = router;