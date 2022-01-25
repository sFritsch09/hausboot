import axios from 'axios';

export const getEvents = async (callback) => {
	let data = [];
	try {
		const res = await axios.get('/api/event');
		if (res.status === 200) {
			data = res.data;
			return res.data;
		}
	} catch (err) {
		console.error(err);
	}
	callback(data);
};
