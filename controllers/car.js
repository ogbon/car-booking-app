const { Car } = require('../models');





exports.getCars  = (req, res, next) => {

   

    Car.findAll()
    .then(cars => {
       if(!cars) {
           const error = new Error('Could not find cars');
           error.statusCode = 404;
           throw error;
       }
       
        res.status(200).json({cars: cars, message: 'Fetched cars successfully.'});               
    })
    .catch(err => {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
        
    })




};