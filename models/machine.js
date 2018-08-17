const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  name: String,
  bankName: String,
  accNo: String,
  balance: Number,
  balanceUpdatedTimestamp: Date,
  credit: Number,
  status: String,
  statusUpdatedTimestamp: Date,
  lastHeartbeatTimestamp: Date
  /*
  TODO - in the future
  bankAccount: {type: Schema.ObjectId, ref: 'BankAccount'},
  credit: {
    value: Number,
    src: {
      accBalance: bankBalances,
      lastTransaction: Schema.ObjectId
    }
  }*/
});

module.exports = mongoose.model('Machine', schema);