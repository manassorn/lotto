const Alert = require('../models/alert');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

module.exports = {
	list: () => {
		return Alert.find().lean().exec();
	},
	insertDb: (level, message) => {
		Alert.create({timestamp: new Date(), level, message}).exec();
	},
	critical: (message) => {
		this.insertDb('critical', message);
		this.sendEmail('[Critical] Lotto Api', message);
	},
	sendEmail: (title, text) => {
		const msg = {
			to: 'manassorn@gmail.com',
			from: 'test@example.com',
			subject: title,
			text: text,
			//html: '<strong>and easy to do anywhere, even with Node.js</strong>',
		};
		sgMail.send(msg);
	}
}
