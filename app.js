const express = require('express');
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth');
const carRoutes = require('./routes/car');
const bookingRoutes = require('./routes/booking');






const PORT = process.env.PORT || 3000;
const app = express();



app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin', 'Accept, Content-Type, X-Requested-With, Authorization');
    next();
});


app.use('/api/auth/', authRoutes);
app.use('/api/cars/', carRoutes);
app.use('/api/bookings/', bookingRoutes);




app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
  });
  



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
