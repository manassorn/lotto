const ScbEasy = require('./banks/scbeasy');
const Machine = require('../models/machine')

module.exports = {
	monitor: () => {
		const accNo = 'XXXX142382';
		const scb = new ScbEasy('manassorn.v', process.env.SCB_PASSWORD);
		setInterval(() => {
			const balanceUpdatedTimestamp = new Date();
			//TODO- check response time (critical)
			scb.findAccBalance(accNo).then((balance) => {
				console.log('balance=', balance);
				//TODO- balanceUpdatedTimestamp on db < balanceUpdatedTimestamp on this function
				Machine.update({accNo}, { $set: { balance, balanceUpdatedTimestamp }}).exec();
			});
		}, 60000);
	},
	get: () => {
		const scb = new ScbEasy('manassorn.v', process.env.SCB_PASSWORD);
		return scb.findAccBalance('XXXX142382');
	}
}
