const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  accNo: String,
  bankName: String,
  balance: Number,
});

module.exports = mongoose.model('BankAcc', schema);