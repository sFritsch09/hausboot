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

	app.post('/api/mail/confirmation', async (req, res) => {
		fs.readFile('./mails/confirmation.html', { encoding: 'utf-8' }, async (err, data) => {
			if (err) {
				res.status(400).send({ error: "Can't read file" });
				console.log(err);
			}
			let htmlFile = await data;
			// data replacement
			htmlFile = htmlFile
				.replace(/#NAME#/g, req.body.data.name)
				.replace(
					/#BOOT#/g,
					`${
						req.body.data.color === 'Blau'
							? 'Hausboot Blau'
							: req.body.data.color === 'Rot'
							? 'Hausboot Rot'
							: 'Floßboot:'
					} ${
						req.body.data.type
							? `${req.body.data.type}${req.body.data.dayOnly ? ', Tagestrip' : ''}`
							: ''
					}`
				)
				.replace(/#EMAIL#/g, req.body.data.email)
				.replace(/#PERSON#/g, req.body.data.person)
				.replace(
					/#DATESTART#/g,
					new Date(req.body.data.arrivalDate).toLocaleDateString('de-DE', {
						year: 'numeric',
						month: '2-digit',
						day: '2-digit',
					})
				)
				.replace(
					/#DATEEND#/g,
					new Date(req.body.data.departureDate).toLocaleDateString('de-DE', {
						year: 'numeric',
						month: '2-digit',
						day: '2-digit',
					})
				)
				.replace(/#PRICE#/g, req.body.price);
			const mailOptions = {
				from: '"Teichland-Kapitäne ⚓" <hausboot@xn--teichland-kapitne-4qb.de>',
				to: req.body.data.email,
				subject: 'Buchungsbestätigung',
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
