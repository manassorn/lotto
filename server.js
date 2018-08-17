require('dotenv').config()
var express = require('express');
const router = express.Router();
const routes = require('./routes')
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors')
const path = require('path')

var app = express();

// app.use(logger('dev'));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

routes(router);

app.use('/api', router);

// if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
// }

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
