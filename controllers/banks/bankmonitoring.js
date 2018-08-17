const Scb = require('./scbeasynet');
const DbClient = require('./dbclient');
const logger = require('./logger');

class BankMonitoring {
	
	static start() {
		const scbWorker = new ScbWorker(process.env.SCB_USERNAME, process.env.SCB_PASSWORD, process.env.SCB_ACCNO);
		scbWorker.start();
	}
}

class ScbWorker {
	constructor(username, password, accNo) {
		this.scb = new Scb();
		this.username = username;		
		this.password = password;
		this.accNo = accNo;
	}
	async start() {
		this.timeout = setInterval(() => {
			logger.info('collect!!');
			this.collect();
		}, 20000);
		/*console.log('collect1!!');
		await this.collect();
		setTimeout(() => {
			console.log('collect2!!');
			this.collect();
		}, 10000)*/
	}
	async collect() {
		try {
			const balance = await this.scb.getBalance(this.username, this.password, this.accNo);
			const db = await DbClient.getDb();
			db.bankBalance.save('scb', this.accNo, balance);
		} catch(err) {
			logger.error(err);
		}
	}
}

module.exports = BankMonitoring;