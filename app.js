const express = require('express');
const bodyParser = require('body-parser')







const PORT = process.env.PORT || 3000;
const app = express();



app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin', 'Accept, Content-Type, X-Requested-With, Authorization');
    next();
});








  





app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
