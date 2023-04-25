const express = require('express')
const router = express.Router()
const Profession = require('../Models/Professions')
const ProfessionalRequire = require('../Middleware/ProffesionalRequire')

// create routes

router.post('/addprof',ProfessionalRequire, async (req,res) => {
    try {
        const {professionname, document, image,verified, rating, description, note} = req.body
        const profession = new Profession({
            professionname,
            document,
            image,
            verified,
            rating,
            description,
            note,
            postedById:req.professional
        })
        await profession.save()
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

router.get('/myprofessions',ProfessionalRequire, async (req,res) => {
    try{
        const profession = await Profession.find({postedById:req.professional._id})
        res.json(profession)
    }catch(error){
        res.json(error)
    }
})

router.get('/vcount',async (req,res) => {
    try{
        const count = await Profession.countDocuments({verified:true})
        res.json(count)
    }catch(error){
        res.json(error)
    }
})

router.get('/ucount',async (req,res) => {
    try{
        const count = await Profession.countDocuments({verified:false})
        res.json(count)
    }catch(error){
        res.json(error)
    }
})

router.get('/verified',async (req,res) => {
    try{
        const profession = await Profession.find({verified:true}).populate('postedById','_id name email')
        res.json(profession)
    }catch(error){
        res.json(error)
    }
})

router.get('/unverified', async (req,res) => {
    try{
        const profession = await Profession.find({verified:false}).populate('postedById','_id name email')
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

router.get('/ver/:id',async (req,res) => {
    try{
        const profession = await Profession.findById(req.params.id)
        res.json(profession)
    }catch(error){
        res.json(error)
    }
})

module.exports = router;