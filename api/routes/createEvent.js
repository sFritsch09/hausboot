const createEvent = (app) => {
	const { google } = require('googleapis');

	const scopes = ['https://www.googleapis.com/auth/calendar'];

	const client = new google.auth.GoogleAuth({
		keyFile: './serviceGoogle.json',
		scopes,
	});

	const calendar = google.calendar({ version: 'v3', auth: client });
	app.post('/api/event', async (req, res) => {
		let colorId = '4';
		let summary = `Gebucht von: ${req.body.data.name}`;
		let description = `Name: ${req.body.data.name}, E-Mail: ${req.body.data.email}, Mobil: ${req.body.data.phone}, Personen: ${req.body.data.person}, Hausboot ${req.body.data.color}`;
		if (req.body.data.color === 'Blau') {
			colorId = '1';
		} else if (req.body.data.color === 'Floß') {
			colorId = '5';
		}
		if (req.body.data.child !== 0) {
			description += `, Kinder: ${req.body.data.child}`;
		}
		if (req.body.data.dog !== 0) {
			description += `, Hund: ${req.body.data.dog}`;
		}
		await calendar.events.insert(
			{
				calendarId: process.env.GOOGLE_CALENDAR_ID,
				resource: {
					start: {
						date: req.body.data.arrivalDate.slice(0, 10),
						timeZone: 'Europe/Berlin',
					},
					end: {
						date: req.body.data.departureDate.slice(0, 10),
						timeZone: 'Europe/Berlin',
					},
					summary: summary,
					status: 'confirmed',
					description: description,
					location: 'Oranienburg',
					//yellow = 5, red = 4, blue = 1
					colorId: colorId,
				},
			},
			(err, event) => {
				if (err) console.log('Error', err);
				console.log(event.data);
			}
		);
		res.status(200).send({ success: 'Server reached!' });
	});
};

module.exports = createEvent;
