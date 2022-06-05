const getAllBookings = (app, prisma) => {
	app.get('/api/history', async (req, res) => {
		const bookings = await prisma.bookings.findMany();
		res.json({
			success: true,
			payload: bookings,
		});
	});
};

module.exports = getAllBookings;
