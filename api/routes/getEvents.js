const getEvents = (app) => {
	const { google } = require('googleapis');

	const scopes = ['https://www.googleapis.com/auth/calendar'];

	const client = new google.auth.GoogleAuth({
		keyFile: './serviceGoogle.json',
		scopes,
	});

	const calendar = google.calendar({ version: 'v3', auth: client });
	app.get('/api/event', async (req, res) => {
		const eventList = [];
		const resp = await calendar.events.list({
			calendarId: process.env.GOOGLE_CALENDAR_ID,
			timeMin: new Date().toISOString(),
			maxResults: 30,
			singleEvents: true,
			orderBy: 'startTime',
		});
		const events = resp.data.items;
		if (events.length) {
			events.map((event, i) => {
				return eventList.push({
					start: event.start.date,
					end: event.end.date,
					name: event.summary,
					location: event.location,
					description: event.description,
					color: event.colorId,
				});
			});
		} else {
			console.log('No Events');
		}
		res.status(200).send(eventList);
	});
};

module.exports = getEvents;
