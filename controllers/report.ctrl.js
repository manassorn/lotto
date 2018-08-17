const Transaction = require('../models/transaction');

module.exports = {
	list: () => {
		return Transaction.find().populate('machine', 'name').exec();
	}
}
