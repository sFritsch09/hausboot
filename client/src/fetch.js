import request from 'superagent';
import { API_KEY, CALENDAR_ID } from './base';

let GOOGLE_CALENDAR_URL = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

export function getEvents(callback) {
	request.get(GOOGLE_CALENDAR_URL).end((err, resp) => {
		if (!err) {
			const events = [];
			JSON.parse(resp.text).items.map((event) => {
				return events.push({
					start: event.start.date,
					end: event.end.date,
					name: event.summary,
					location: event.location,
					description: event.description,
					color: event.color,
				});
			});
			callback(events);
		}
	});
}
