const express = require('express')
const router = express.Router()
const Booking = require('../Models/Bookings')
const ConsumerRequire = require('../Middleware/ConsumerRequire')
const ProfessionalRequire = require('../../Professional/Middleware/ProffesionalRequire')
// create routes

router.post('/book', ConsumerRequire, async (req,res) => {
    try {
        const {professionId, consumerId, postedById, appointmenttime} = req.body
        const booking = new Booking({
            professionId,
            consumerId: req.consumer._id,
            appointmenttime,
            postedById
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

router.get('/appointment', ProfessionalRequire , async (req, res) => {
    try {
        const bookings = await Booking.find({ postedById: req.professional._id, confirmed: false })
            .populate('professionId', 'professionname')
            .populate('consumerId', 'name')
            // .populate('postedById', 'name')
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/confirmed', ProfessionalRequire , async (req, res) => {
    try {
        const bookings = await Booking.find({ postedById: req.professional._id, confirmed: true})
            .populate('professionId', 'professionname')
            .populate('consumerId', 'name')
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/accept', ProfessionalRequire , async (req, res) => {
    try {
        const bookings = await Booking.findOneAndUpdate(req.body,{confirmed: true})
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;