const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  machine: {type: Schema.Types.ObjectId, ref: 'Machine'},
  timestamp: Date,
  amount: Number
});

module.exports = mongoose.model('Transaction', schema);