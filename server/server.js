const express = require('express');
const bodyParser=require('body-parser');
var mongoose = require('./database/mongoose');
const app = express()

var cors = require('cors');

const currencyConvRoute = require('./currencyConverter/currencyConverterRoutes'); // Imports routes for the products


var port = process.env.PORT || 4242;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello World with Express'));
app.use(cors());

app.use('/api/currency-conv/', currencyConvRoute);


app.listen(port, () => console.log('Server running on port 4242!'))