var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var mongoose = require('mongoose');
var cors = require('cors');
var morgan = require('morgan');
var router = require('./router')

var app = express();

app.use(morgan('combined')); // Logging debugging
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
router(app);

mongoose.Promise = global.Promise ;
mongoose.connect('mongodb://patient-tracker2:patient123@ds139984.mlab.com:39984/khalid-projects');
// mongoose.connect('mongodb://127.0.0.1:27017/test',);

// Server Setup
const 
  port = process.env.PORT || 3090,
  server = http.createServer(app);

  server.listen(port);
  console.log('Magic is happening on port: ', port)

  
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ');
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});  
