const express = require('express')
const router = express.Router()
const Booking = require('../Models/Bookings')

// create routes

router.post('/book',async (req,res) => {
    try {
        const booking = await Booking.create(req.body)
        res.json(booking)
    } catch (error) {
        res.json(error)
    }
})

router.delete('/unbook', async (req,res) => {
    try {
        const booking = await Booking.deleteOne(req.body)
        res.json(booking)
    } catch (error) {
        res.json(error)
    }
})

// Add mybookings, can be done agter jwt by header


module.exports = router;