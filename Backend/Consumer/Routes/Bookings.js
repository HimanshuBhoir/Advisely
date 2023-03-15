const express = require('express')
const router = express.Router()
const Booking = require('../Models/Bookings')
const ConsumerRequire = require('../Middleware/ConsumerRequire')
const ProfessionalRequire = require('../../Professional/Middleware/ProffesionalRequire')
// create routes

router.post('/book', ConsumerRequire, async (req,res) => {
    try {
        const {professionId, consumerId, appointmenttime} = req.body
        const booking = new Booking({
            professionId,
            consumerId: req.consumer._id,
            appointmenttime
        })
        await booking.save()
        res.json(booking)
    } catch (error) {
        res.json(error)
    }
})

router.delete('/unbook', ConsumerRequire || ProfessionalRequire,  async (req,res) => {
    try {
        const booking = await Booking.deleteOne(req.body)
        res.json(booking)
    } catch (error) {
        res.json(error)
    }
})

router.get('/consumerbooking',ConsumerRequire, async (req,res) => {
    try{
        const bookings = await Booking.find({consumerId:req.consumer._id})
        .populate({
            path: 'professionId',
            select: '_id professionname postedById',
            populate: {
              path: 'postedById',
              select: '_id name email'
            },
          })
        .populate('consumerId','_id name email')
        res.json(bookings)
    }catch(error){
        res.json(error)
    }
})

// Add mybookings, can be done agter jwt by header


module.exports = router;