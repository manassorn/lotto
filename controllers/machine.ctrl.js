const mongoose = require('mongoose');
const Machine = require('../models/machine');
const Transaction = require('../models/transaction');

module.exports = {
	list: () => {
		return Machine.find().lean().exec();
	},
	heartbeat: (id) => {
		return Machine.findByIdAndUpdate(id, { $set: { lastHeartbeatTimestamp: new Date() }}).exec().then((machine) => {
			return { status: machine.status };
		});
	},
	updateStatus: (id, status) => {
		return Machine.update({ _id: id }, { $set: { status: status, statusUpdatedTimestamp: new Date() }}).exec();
	},
	credit: (id) => {
		const p1 = Machine.findById(id, 'balance').lean().exec();
		const p2 = Transaction.aggregate([{
			$match: { machineId: new mongoose.Types.ObjectId(id)}
		}, {
			$group: { _id: null, total: { $sum: "$amount"} }
		}]).exec();
		return Promise.all([p1, p2]).then((values) => {
			var [machine, transactions] = values;
      if (!machine) {
        throw new Error('Machine not found: ' + id);
      }
      const balance = machine.balance;
      const total = transactions.length > 0 ? transactions[0].total: 0;
			return balance - total
		});
	},
	sell: (id) => {
		return Transaction.create({machineId: id, timestamp: new Date(), amount: 80});
	}
}
