const getBooking = (app, prisma) => {
	app.get('/api/history/:id', async (req, res) => {
		const { id } = req.params;
		const booking = await prisma.bookings.findFirst({
			where: { id: Number(id) },
		});
		res.json({
			success: true,
			payload: booking,
		});
	});
};

module.exports = getBooking;
