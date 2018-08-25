const mongoose = require('mongoose');
const webServer = require('./server');

//mongoose.connect('mongodb://127.0.0.1:27017/lotto')
mongoose.connect(process.env.DB_CONNECTION_STRING);

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ');
});
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});
//1. banking
//2. web server
