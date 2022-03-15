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

	app.post('api/mail/contact', async (req, res) => {
		fs.readFile('./mails/contact.html', { encoding: 'utf-8' }, async (err, data) => {
			if (err) {
				console.log(err);
			}
			let htmlFile = data;
			// data replacement
			htmlFile = htmlFile
				.replaceAll('#NAME#', req.body.data.name)
				.replaceAll('#EMAIL#', req.body.data.email)
				.replaceAll('#MESSAGE#', req.body.data.message)
				.replaceAll('#TOPIC#', req.body.data.title);
			const mailOptions = {
				from: '"Admin 👨🏼‍💻" <admin@xn--teichland-kapitne-4qb.de>',
				to: 'hausboot@xn--teichland-kapitne-4qb.de',
				subject: req.body.offer ? 'Angebot' : `Kontakt: ${req.body.data.email}`,
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
