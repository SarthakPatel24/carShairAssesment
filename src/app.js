const express = require('express');
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const rootRoute = "/api";

const userRoute = require('./api/routes/vehicle.routes');

app.use(rootRoute+"/vehicle",userRoute);

module.exports = app;