const createBooking = (app, prisma) => {
	app.post('/api/history', async (req, res) => {
		const result = await prisma.bookings.create({
			data: { ...req.body },
		});
		res.json({
			success: true,
			payload: result,
		});
	});
};
module.exports = createBooking;
