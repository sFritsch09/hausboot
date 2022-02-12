const nodemailer = require('nodemailer');
const fs = require('fs');

const sendMail = (app) => {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'hausboot@xn--teichland-kapitne-4qb.de',
			pass: process.env.MAILP,
		},
	});

	app.get('/api/mail', async (req, res) => {
		fs.readFile('./mails/confirmation.html', { encoding: 'utf-8' }, async (err, data) => {
			if (err) {
				console.log(err);
			}
			let htmlFile = data;
			// data replacement
			htmlFile = htmlFile
				.replaceAll('#NAME#', 'Sebastian Fritsch')
				.replaceAll('#BOOT#', 'Floßboot L');
			const mailOptions = {
				from: '"Teichland-Kapitäne ⚓" <hausboot@xn--teichland-kapitne-4qb.de>',
				to: 'sfritsch09@gmail.com',
				subject: 'Buchungs Bestätigung',
				html: htmlFile,
			};
			await transporter.sendMail(mailOptions, (err, info) => {
				if (err) {
					console.log(err);
				} else {
					console.log('Email sent');
					res.status(200).send({ message: 'Mail sent', message_id: info.messageId });
				}
			});
		});
	});
};

module.exports = sendMail;
