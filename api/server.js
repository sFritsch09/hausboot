const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());

app.use(cors());

if (process.env.NODE_ENV === 'production') {
	app.use(enforce.HTTPS({ trustProtoHeader: true }));
	app.use(express.static(path.join(__dirname, 'client/build')));

	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

// db
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

require('./routes/db/getBookings')(app, prisma);
require('./routes/db/getBooking')(app, prisma);
require('./routes/db/createBooking')(app, prisma);

//routes
require('./routes/createEvent')(app);
require('./routes/getEvents')(app);
require('./routes/sendMailConfirmation')(app);
require('./routes/sendMailBooking')(app);
require('./routes/sendMailContact')(app);

app.get('/api', (req, res) => {
	res.send('Hello from Hausboot Api!');
});
app.use((req, res) => {
	res.status(404);
	return res.json({
		success: false,
		payload: null,
		message: `API SAYS: Endpoint not found for path: ${req.path}`,
	});
});

const port = process.env.PORT || 3100;
app.listen(port, (error) => {
	if (error) throw error;
	console.log('Server running on port ' + port);
});
