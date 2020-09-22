const jwt = require('jsonwebtoken');
const { User } = require('../models');





exports.login  = (req, res, next) => {

   const email = req.body.email;
   let loadedUser;

    User.findOne({ where: { email: email }})
    .then(user => {
       if(!user) {
           const error = new Error('Invalid Email');
           error.statusCode = 422;
           throw error;
       }
       loadedUser = user;

       const token = jwt.sign(
                         {
                           email: loadedUser.email,
                           userId: loadedUser.id
                         },
                         `${process.env.SECRET_PASS}`,
                         {
                           expiresIn: '1h'  
                         }
                         
                        );

        res.status(200).json({token: token, userId: loadedUser.id});               
    })
    .catch(err => {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
        
    })




};