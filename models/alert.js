const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  level: String,
  message: String
});

module.exports = mongoose.model('Alert', schema);