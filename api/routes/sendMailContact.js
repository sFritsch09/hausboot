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

	app.post('/api/mail/contact', async (req, res) => {
		fs.readFile('./mails/contact.html', { encoding: 'utf-8' }, async (err, data) => {
			if (err) {
				res.status(400).send({ error: "Can't read file" });
				console.log(err);
			}
			let htmlFile = await data;
			// data replacement
			htmlFile = htmlFile
				.replace(/#NAME#/g, req.body.data.name)
				.replace(/#EMAIL#/g, req.body.data.email)
				.replace(/#MESSAGE#/g, req.body.data.message)
				.replace(/#TOPIC#/g, req.body.data.title);
			const mailOptions = {
				from: '"Admin 👨🏼‍💻" <admin@xn--teichland-kapitne-4qb.de>',
				to: 'hausboot@xn--teichland-kapitne-4qb.de',
				subject: req.body.offer ? 'Angebot' : `Kontakt: ${req.body.data.email}`,
				html: htmlFile,
			};
			await transporter.sendMail(mailOptions, (err, info) => {
				if (err) {
					res.status(400).send(err);
				} else {
					console.log('Email sent');
					res.status(200).send({ message: 'Mail sent', message_id: info.messageId });
				}
			});
		});
	});
};

module.exports = sendMail;
