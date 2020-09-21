const express = require('express');
const bookingController = require('../controllers/booking');
const isAuth = require('../middleware/is-auth');




const router = express.Router();





router.get('', isAuth, bookingController.getBookings)

router.post('', isAuth, bookingController.createBooking)




module.exports = router;