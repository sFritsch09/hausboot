const express = require('express');
require('dotenv').config();
// const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());

// app.use(cors());

if (process.env.NODE_ENV === 'production') {
	app.use(enforce.HTTPS({ trustProtoHeader: true }));
	app.use(express.static(path.join(__dirname, 'client/build')));

	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

//routes
require('./routes/createEvent')(app);
require('./routes/getEvents')(app);
// app.get('/api/event', async (req, res, next) => {
// 	try {
// 		const test = 'test';
// 		res.send(test);
// 	} catch (err) {
// 		next(err);
// 	}
// });

// app.post('/api/event', (req, res) => {
// 	console.log(req.body);
// 	res.status(200).send({ success: 'Server reached!' });
// });

const port = process.env.PORT || 3100;
app.listen(port, (error) => {
	if (error) throw error;
	console.log('Server running on port ' + port);
});

app.get('/api', (req, res) => {
	res.send('Hello from Hausboot Api!');
});
