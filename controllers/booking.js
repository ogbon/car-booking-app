const { Booking } = require('../models');






exports.getBookings  = (req, res, next) => {

   

    Booking.findAll()
    .then(bookings => {
       if(!bookings) {
           const error = new Error('Could not find bookings.');
           error.statusCode = 404;
           throw error;
       }
       
        res.status(200).json({bookings: bookings, message: 'Fetched bookings successfully.'});               
    })
    .catch(err => {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
        
    })




};


exports.createBooking  = (req, res, next) => {
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const car = req.body.car;
    const start = new Date(req.body.start);
    const end = new Date(req.body.end);
    
   

    Booking.create({
      email: email,
      firstName: firstName,
      lastName: lastName,
      car: car,
      start: start,
      end: end
    })
    .then(booking => {
       if(!booking) {
           const error = new Error('booking not created');
           error.statusCode = 422;
           throw error;
       }
       
        res.status(201).json({booking: booking, message: "booking Created"});               
    })
    .catch(err => {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
        
    })




};